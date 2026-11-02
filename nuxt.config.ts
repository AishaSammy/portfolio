export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en", "data-theme": "dark" },
      title: "Ayshe Sammiyeva Gurbandurdyyeva — Full-Stack Developer",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Full-stack web developer building APIs and responsive web applications with Laravel, Django, Vue.js and Nuxt.js.",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
      script: [
        {
          innerHTML: "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}",
          tagPosition: "head",
        },
      ],
    },
  },
  runtimeConfig: {
    resendApiKey: "",
    contactToEmail: "asammiyeva@gmail.com",
    contactFromEmail: "Portfolio <onboarding@resend.dev>",
    public: {
      gtmId: process.env.GTM_ID || "",
    },
  },
});
