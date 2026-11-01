<script setup lang="ts">
import { profile } from "~/data/content";

const text = ref("");
let roleIndex = 0;
let deleting = false;
let timer: ReturnType<typeof setTimeout>;

function tick() {
  const word = profile.roles[roleIndex % profile.roles.length];
  let delay = deleting ? 35 : 70;
  if (!deleting && text.value === word) {
    deleting = true;
    delay = 1400;
  } else if (deleting && text.value === "") {
    deleting = false;
    roleIndex++;
  } else {
    text.value = word.slice(0, text.value.length + (deleting ? -1 : 1));
  }
  timer = setTimeout(tick, delay);
}

onMounted(tick);
onBeforeUnmount(() => clearTimeout(timer));

const years = String(
  Math.floor((Date.now() - new Date(profile.careerStart).getTime()) / (365.25 * 24 * 3600 * 1000))
).padStart(2, "0");
</script>

<template>
  <section id="top" class="hero">
    <div class="h-intro">
      <p class="greet"><span class="accent">$</span> whoami</p>
      <h1>{{ profile.name }}</h1>
      <p class="availability"><span class="dot" />{{ profile.availability }}</p>
      <p class="loc">📍 {{ profile.location }}</p>
    </div>

    <p class="h-tagline">{{ profile.tagline }}</p>

    <svg class="h-arrow" viewBox="0 0 290 120" fill="none" aria-hidden="true">
      <path d="M30 14 C30 80 60 105 110 88 S205 22 285 34"stroke="currentColor" stroke-width="2" stroke-dasharray="7 9" stroke-linecap="round" />
      <path d="M21 27 L30 12 L39 27" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <div class="h-stat">
      <strong>{{ years }}+</strong>
      <span>YEARS<br />EXPERIENCE</span>
    </div>

    <div class="h-photo">
      <div class="disc">
        <img src="/profile-cutout.webp" width="956" height="1046" :alt="`Portrait of ${profile.name}`" />
      </div>
      <img class="head" src="/profile-cutout.webp" width="956" height="1046" alt="" aria-hidden="true" />
    </div>

    <div class="h-card card">
      <div v-for="h in profile.highlights" :key="h.label">
        <strong>{{ h.value }}</strong>
        <span>{{ h.label }}</span>
      </div>
    </div>

    <p class="h-role"><span class="accent">&gt;</span> {{ text }}<span class="cursor">▋</span></p>

    <div class="h-social">
      <a :href="profile.github" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
      </a>
      <a :href="profile.linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3V9.75zM9.75 9.75h3.83v1.54h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75z" /></svg>
      </a>
      <a :href="`mailto:${profile.email}`" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      </a>
    </div>
  </section>
</template>
