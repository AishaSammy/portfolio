const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) ?? {};

  if (body.website) return { ok: true }; // honeypot

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid fields" });
  }

  const config = useRuntimeConfig(event);
  if (!config.resendApiKey) {
    throw createError({ statusCode: 500, statusMessage: "Email service not configured" });
  }

  try {
    await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.resendApiKey}` },
      body: {
        from: config.contactFromEmail,
        to: [config.contactToEmail],
        reply_to: email,
        subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
        html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      },
    });
  } catch {
    throw createError({ statusCode: 502, statusMessage: "Send failed" });
  }
  return { ok: true };
});
