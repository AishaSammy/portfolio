<script setup lang="ts">
import { projects } from "~/data/content";
</script>

<template>
  <section id="projects">
    <h2><span class="accent">02.</span> Projects</h2>
    <div class="grid-3">
      <article v-for="p in projects" :key="p.name" class="card project">
        <a v-if="p.image" :href="p.image" target="_blank" rel="noreferrer" class="project-img">
          <img :src="p.image" :alt="p.imageAlt" loading="lazy" width="2000" height="1125" />
        </a>
        <h3>{{ p.name }}</h3>
        <p>{{ p.description }}</p>
        <ul class="tags">
          <li v-for="t in p.tech" :key="t">{{ t }}</li>
        </ul>
        <p v-if="p.live || p.repo" class="links">
          <a v-if="p.live" :href="p.live" target="_blank" rel="noreferrer">Live ↗</a>
          <a v-if="p.repo" :href="p.repo" target="_blank" rel="noreferrer">Code ↗</a>
        </p>
      </article>
    </div>
  </section>
</template>
