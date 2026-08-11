<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <section
    id="experience"
    class="section-pad border-t border-border bg-surface/40"
    aria-labelledby="experience-heading"
  >
    <div class="container-page">
      <UiSectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Where I've worked"
      />

      <ol class="relative max-w-3xl space-y-6 border-s border-border ps-6 sm:ps-8">
        <li
          v-for="item in experience"
          :key="`${item.company}-${item.period}`"
          class="relative"
          data-reveal
        >
          <span
            class="absolute top-1.5 -start-[1.91rem] size-3 rounded-full border-2 border-accent bg-bg sm:-start-[2.41rem]"
            aria-hidden="true"
          />

          <article class="rounded-xl border border-border bg-bg p-5 sm:p-6">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 class="text-xl font-bold text-text">
                  {{ item.role }}
                </h3>
                <p class="mt-1 text-sm font-medium text-accent">
                  {{ item.company }}
                </p>
                <p
                  v-if="item.project"
                  class="mt-2 text-sm text-text-muted"
                >
                  Selected project:
                  <span class="font-medium text-text">{{ item.project }}</span>
                </p>
              </div>
              <p class="font-mono text-xs tracking-wide text-text-subtle uppercase">
                {{ item.period }}
              </p>
            </div>

            <p class="mt-4 text-sm leading-relaxed text-text-muted sm:text-[15px]">
              {{ item.summary }}
            </p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
