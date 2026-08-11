<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section
    id="about"
    class="section-pad border-t border-border"
    aria-labelledby="about-heading"
  >
    <div class="container-page">
      <div class="max-w-3xl" data-reveal>
        <UiSectionHeading
          id="about-heading"
          eyebrow="About"
          title="Quick profile"
        />
        <div class="space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
          <p>{{ profile.summary }}</p>
          <p>{{ profile.leadershipNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
