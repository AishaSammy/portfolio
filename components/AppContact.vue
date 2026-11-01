<script setup lang="ts">
import { profile } from "~/data/content";

const status = ref<"idle" | "sending" | "ok" | "error">("idle");

async function onSubmit(e: Event) {
  const form = e.target as HTMLFormElement;
  status.value = "sending";
  try {
    await $fetch("/api/contact", { method: "POST", body: Object.fromEntries(new FormData(form)) });
    form.reset();
    status.value = "ok";
  } catch {
    status.value = "error";
  }
}
</script>

<template>
  <section id="contact">
    <h2><span class="accent">05.</span> Contact</h2>
    <div class="grid-2">
      <div>
        <p>Have a project or role in mind? Send a message and I'll get back to you.</p>
        <ul class="plain">
          <li><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><a :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a></li>
          <li><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
        </ul>
      </div>
      <form class="card form" @submit.prevent="onSubmit">
        <input name="website" tabindex="-1" autocomplete="off" class="hp" aria-hidden="true" />
        <label>Name<input name="name" required maxlength="100" /></label>
        <label>Email<input name="email" type="email" required maxlength="200" /></label>
        <label>Message<textarea name="message" rows="5" required maxlength="5000" /></label>
        <button class="btn primary" :disabled="status === 'sending'">
          {{ status === "sending" ? "Sending…" : "Send message" }}
        </button>
        <p v-if="status === 'ok'" class="ok">Thanks! Your message was sent.</p>
        <p v-if="status === 'error'" class="err">Something went wrong. Please email me directly.</p>
      </form>
    </div>
  </section>
</template>
