<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section
    id="projects"
    class="section-pad border-t border-border"
    aria-labelledby="projects-heading"
  >
    <div class="container-page">
      <UiSectionHeading
        id="projects-heading"
        eyebrow="Projects"
        title="Selected work"
      />

      <div class="grid gap-6 lg:grid-cols-2">
        <ProjectsProjectPreview
          v-for="project in projects"
          :key="project.slug"
          :title="project.title"
          :url="project.url"
          :description="project.description"
          :contribution="project.contribution"
          :technologies="project.technologies"
          :category="project.category"
          data-reveal
        />
      </div>
    </div>
  </section>
</template>
