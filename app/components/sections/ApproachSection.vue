<script setup lang="ts">
import { approachItems } from '~/data/approach'
</script>

<template>
  <section
    id="approach"
    class="section-pad border-t border-border bg-surface/40"
    aria-labelledby="approach-heading"
  >
    <div class="container-page">
      <UiSectionHeading
        id="approach-heading"
        eyebrow="Engineering Approach"
        title="How the work gets decided and delivered"
        description="Principles used across marketplace, BNPL, and real-time trading frontends — grounded in production constraints."
      />

      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="(item, index) in approachItems"
          :key="item.title"
          class="rounded-xl border border-border bg-bg p-5"
          data-reveal
        >
          <div class="mb-3 flex items-center gap-3">
            <span class="font-mono text-xs text-accent">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="text-base font-bold text-text">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-sm leading-relaxed text-text-muted">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
