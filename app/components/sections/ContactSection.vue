<script setup lang="ts">
import { ArrowUpRight, Mail, Phone } from '@lucide/vue'
import { contact } from '~/data/profile'
</script>

<template>
  <section
    id="contact"
    class="section-pad border-t border-border bg-surface/40"
    aria-labelledby="contact-heading"
  >
    <div class="container-page">
      <div
        class="mx-auto max-w-2xl rounded-2xl border border-border bg-bg px-6 py-10 text-center sm:px-10"
        data-reveal
      >
        <p class="font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase">
          Contact
        </p>
        <h2
          id="contact-heading"
          class="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Let's build something meaningful.
        </h2>
        <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
          Open to interesting frontend engineering opportunities and challenging products.
        </p>

        <div class="mt-8 flex flex-col items-center gap-3 text-sm sm:gap-4">
          <a
            :href="`mailto:${contact.email}`"
            class="inline-flex items-center gap-2 text-text transition-colors hover:text-accent"
          >
            <Mail class="size-4" aria-hidden="true" />
            {{ contact.email }}
          </a>
          <a
            :href="contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-text transition-colors hover:text-accent"
          >
            <UiGithubIcon class="size-4" />
            GitHub
            <ArrowUpRight class="size-3.5" aria-hidden="true" />
          </a>
          <a
            :href="`tel:${contact.phone}`"
            class="inline-flex items-center gap-2 text-text transition-colors hover:text-accent"
          >
            <Phone class="size-4" aria-hidden="true" />
            {{ contact.phoneDisplay }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
