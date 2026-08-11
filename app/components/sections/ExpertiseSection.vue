<script setup lang="ts">
import {
  Boxes,
  Component as ComponentIcon,
  Gauge,
  GitBranch,
  RefreshCw,
  Users,
} from '@lucide/vue'
import { capabilities } from '~/data/capabilities'

const icons = {
  architecture: Boxes,
  performance: Gauge,
  refactoring: RefreshCw,
  workflows: GitBranch,
  components: ComponentIcon,
  leadership: Users,
} as const
</script>

<template>
  <section
    id="expertise"
    class="section-pad border-t border-border bg-surface/40"
    aria-labelledby="expertise-heading"
  >
    <div class="container-page">
      <UiSectionHeading
        id="expertise-heading"
        eyebrow="Expertise"
        title="What I focus on"
      />

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in capabilities"
          :key="item.id"
          class="group rounded-xl border border-border bg-bg p-5 transition-colors duration-200 hover:border-accent/40"
          data-reveal
        >
          <div
            class="mb-4 inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface text-accent transition-colors group-hover:border-accent/40"
          >
            <component
              :is="icons[item.id as keyof typeof icons]"
              class="size-4"
              aria-hidden="true"
            />
          </div>
          <h3 class="text-base font-bold text-text">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-text-muted">
            {{ item.description }}
          </p>
          <ul
            v-if="item.concepts.length"
            class="mt-3 flex flex-wrap gap-1.5"
          >
            <li
              v-for="concept in item.concepts"
              :key="concept"
              class="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-text-subtle"
            >
              {{ concept }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
