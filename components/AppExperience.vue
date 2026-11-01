<script setup lang="ts">
import { experience } from "~/data/content";
</script>

<template>
  <section id="experience">
    <h2><span class="accent">04.</span> Experience</h2>
    <ol class="timeline">
      <li v-for="e in experience" :key="e.org">
        <h3>{{ e.role }} <span class="accent">@ {{ e.org }}</span></h3>
        <p class="muted">{{ e.period }}</p>
        <ul>
          <li v-for="p in e.points" :key="p">{{ p }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>
