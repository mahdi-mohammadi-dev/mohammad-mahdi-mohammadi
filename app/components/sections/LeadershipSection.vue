<script setup lang="ts">
import { leadership } from '~/data/leadership'
</script>

<template>
  <section
    id="leadership"
    class="section-pad border-t border-border"
    aria-labelledby="leadership-heading"
  >
    <div class="container-page">
      <div
        class="overflow-hidden rounded-2xl border border-border bg-surface"
        data-reveal
      >
        <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div class="border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
            <p class="font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase">
              Leadership
            </p>
            <h2
              id="leadership-heading"
              class="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl"
            >
              {{ leadership.title }}
            </h2>
            <p class="mt-4 text-base leading-relaxed text-text-muted">
              {{ leadership.intro }}
            </p>
            <p class="mt-6 text-sm leading-relaxed text-text-muted">
              The emphasis is technical leadership: architecture decisions, delivery quality,
              and cross-team execution — while continuing to write production frontend code.
            </p>
          </div>

          <div class="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            <div
              v-for="item in leadership.responsibilities"
              :key="item"
              class="rounded-lg border border-border bg-bg px-4 py-4 text-sm leading-relaxed text-text"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
