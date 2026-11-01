<script setup lang="ts">
import { stack } from "~/data/content";
</script>

<template>
  <section id="stack">
    <h2><span class="accent">03.</span> Tech stack</h2>
    <div class="grid-2">
      <div v-for="g in stack" :key="g.group" class="card">
        <h3>{{ g.group }}</h3>
        <ul class="tags">
          <li v-for="i in g.items" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
