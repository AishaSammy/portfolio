<script setup lang="ts">
import { profile } from "~/data/content";

const links = [
  { id: "top", label: "home" },
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];
const active = ref("top");
const theme = ref("dark");
let observer: IntersectionObserver | undefined;

onMounted(() => {
  theme.value = document.documentElement.dataset.theme || "dark";
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id;
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  for (const l of links) {
    const el = document.getElementById(l.id);
    if (el) observer.observe(el);
  }
});
onBeforeUnmount(() => observer?.disconnect());

function toggle() {
  const next = theme.value === "dark" ? "light" : "dark";
  theme.value = next;
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <a href="#top" class="logo"><span class="accent">~/</span>{{ profile.name.split(" ")[0].toLowerCase() }}</a>
      <nav>
        <a v-for="l in links" :key="l.id" :href="`#${l.id}`" :class="{ active: active === l.id }">
          <span class="br">{</span> {{ l.label }} <span class="br">}</span>
        </a>
      </nav>
      <div class="nav-right">
        <a class="btn primary sm" :href="profile.resume" download="ayshesammiyeva-resume.pdf">Download CV</a>
        <button class="icon-btn" aria-label="Toggle theme" @click="toggle">
          {{ theme === "dark" ? "☀" : "☾" }}
        </button>
      </div>
    </div>
  </header>
</template>
