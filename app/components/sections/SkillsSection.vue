<script setup lang="ts">
import {
  Code2,
  GitBranch,
  Network,
  Palette,
  ShieldCheck,
  Terminal,
  Workflow,
} from '@lucide/vue'
import { skillGroups } from '~/data/skills'

const icons = {
  frontend: Code2,
  styling: Palette,
  'state-api': Network,
  engineering: Workflow,
  security: ShieldCheck,
  workflow: GitBranch,
  additional: Terminal,
} as const
</script>

<template>
  <section
    id="skills"
    class="section-pad border-t border-border"
    aria-labelledby="skills-heading"
  >
    <div class="container-page">
      <UiSectionHeading
        id="skills-heading"
        eyebrow="Skills"
        title="Tech stack"
        description="Tools and practices I use to build scalable, maintainable frontend systems."
      />

      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <SkillsSkillGroup
          v-for="group in skillGroups"
          :key="group.id"
          :group="group"
          :icon="icons[group.id as keyof typeof icons]"
          data-reveal
        />
      </div>
    </div>
  </section>
</template>
