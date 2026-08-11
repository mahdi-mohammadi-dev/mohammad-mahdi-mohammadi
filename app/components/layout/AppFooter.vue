<script setup lang="ts">
import { Mail } from '@lucide/vue'
import { contact, profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-surface">
    <div class="container-page flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-base font-bold text-text">
          {{ profile.name }}
        </p>
        <p class="mt-1 text-sm text-text-muted">
          {{ profile.title }} · {{ profile.specialty }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4 text-sm">
        <a
          :href="contact.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-accent"
        >
          <UiGithubIcon class="size-4" />
          GitHub
        </a>
        <a
          :href="`mailto:${contact.email}`"
          class="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-accent"
        >
          <Mail class="size-4" aria-hidden="true" />
          Email
        </a>
      </div>
    </div>

    <div class="border-t border-border">
      <div class="container-page py-4">
        <p class="text-xs text-text-subtle">
          © {{ year }} {{ profile.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
