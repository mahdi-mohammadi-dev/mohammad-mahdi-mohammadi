<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from '@lucide/vue'
import { contact, profile } from '~/data/profile'
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    aria-labelledby="hero-heading"
  >
    <div
      class="pointer-events-none absolute inset-0 grid-noise opacity-40"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      aria-hidden="true"
    />

    <div class="container-page relative flex min-h-[58vh] items-center lg:min-h-[calc(100dvh-8rem)]">
      <div
        class="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:gap-14 xl:gap-16"
        data-reveal
      >
        <div class="max-w-3xl">
          <p class="mb-4 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
            {{ profile.title }}
          </p>

          <p class="mb-3 text-lg font-semibold text-text sm:text-xl">
            {{ profile.name }}
          </p>

          <!-- Mobile / tablet profile image -->
          <div class="mb-6 flex justify-start lg:hidden">
            <div class="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
              <img
                src="/images/profile.png"
                alt="Mohammad Mahdi Mohammadi"
                width="160"
                height="160"
                class="size-28 object-cover object-top sm:size-32"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              >
            </div>
          </div>

          <h1
            id="hero-heading"
            class="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            {{ profile.tagline }}
          </h1>

          <p class="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            3+ years of experience building production applications across e-commerce,
            fintech, and real-time precious metals platforms.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <UiBaseButton href="#projects" size="lg">
              View Projects
              <ArrowDownRight class="size-4" aria-hidden="true" />
            </UiBaseButton>
            <UiBaseButton href="#contact" variant="secondary" size="lg">
              Contact Me
            </UiBaseButton>
            <a
              :href="contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              <UiGithubIcon class="size-4" />
              GitHub
              <ArrowUpRight class="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Desktop profile image -->
        <div class="hidden shrink-0 justify-self-center lg:block">
          <div class="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
            <img
              src="/images/profile.png"
              alt="Mohammad Mahdi Mohammadi"
              width="280"
              height="336"
              class="h-72 w-60 object-cover object-top xl:h-80 xl:w-64"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
