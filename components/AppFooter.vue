<script setup lang="ts">
import { profile } from "~/data/content";
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>© {{ year }} {{ profile.name }}</p>
    <p class="muted">Built with Nuxt 3 · Vue · TypeScript · deployed on Vercel</p>
  </footer>
</template>
