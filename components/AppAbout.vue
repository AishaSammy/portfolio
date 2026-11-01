<script setup lang="ts">
import { profile, languages, education, volunteering } from "~/data/content";
</script>

<template>
  <section id="about">
    <h2><span class="accent">01.</span> About</h2>
    <div class="term">
      <div class="term-bar">
        <span class="dots"><i /><i /><i /></span>
        <span class="term-title">~/about — zsh</span>
      </div>
      <div class="term-body">
        <p class="cmd"><span class="ps">$</span> whoami</p>
        <p class="out">{{ profile.title }} · {{ profile.location }}</p>

        <p class="cmd"><span class="ps">$</span> cat bio.md</p>
        <p class="out">{{ profile.summary }}</p>
        <p class="out">
          I enjoy the parts of a product that have to be right: concurrency, payments, caching and data
          modelling, and I like shipping the full path from database to interface.
        </p>

        <p class="cmd"><span class="ps">$</span> ls education/</p>
        <ul class="out list">
          <li v-for="e in education" :key="e.title">
            <span class="accent">▸</span> <strong>{{ e.title }}</strong>
            <span class="muted"> — {{ e.org }} · {{ e.period }}</span>
          </li>
        </ul>

        <p class="cmd"><span class="ps">$</span> ls volunteering/</p>
        <ul class="out list">
          <li v-for="v in volunteering" :key="v">
            <span class="accent">▸</span> <strong>{{ v.split(" — ")[0] }}</strong>
            <span class="muted"> — {{ v.split(" — ")[1] }}</span>
          </li>
        </ul>

        <p class="cmd"><span class="ps">$</span> echo $LANGUAGES</p>
        <ul class="out tags">
          <li v-for="l in languages" :key="l">{{ l }}</li>
        </ul>

        <p class="cmd"><span class="ps">$</span> <span class="cursor">▋</span></p>
      </div>
    </div>
  </section>
</template>
