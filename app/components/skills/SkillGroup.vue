<script setup lang="ts">
import type { Component } from 'vue'
import type { SkillGroup } from '~/types'

defineProps<{
  group: SkillGroup
  icon?: Component
}>()
</script>

<template>
  <article class="rounded-xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-border-strong sm:p-6">
    <div class="mb-4 flex items-center gap-3">
      <span
        v-if="icon"
        class="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-bg text-accent"
        aria-hidden="true"
      >
        <component :is="icon" class="size-4" />
      </span>
      <h3 class="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        {{ group.title }}
      </h3>
      <div class="h-px flex-1 bg-border" aria-hidden="true" />
    </div>

    <ul class="flex flex-wrap gap-2" :aria-label="`${group.title} skills`">
      <li
        v-for="skill in group.skills"
        :key="skill"
      >
        <SkillsSkillPill :label="skill" />
      </li>
    </ul>
  </article>
</template>
