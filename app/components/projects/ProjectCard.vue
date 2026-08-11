<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <ProjectsProjectPreview
    :title="project.title"
    :url="project.url"
    :description="project.description"
    :contribution="project.contribution"
    :technologies="project.technologies"
    :category="project.category"
  />
</template>
