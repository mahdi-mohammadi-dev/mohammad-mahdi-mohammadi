<script setup lang="ts">
import { Menu, X } from '@lucide/vue'
import { navItems } from '~/data/navigation'
import { contact, profile } from '~/data/profile'

const { activeId } = useActiveSection(
  navItems.map((item) => item.href.replace('#', '')),
)

const open = ref(false)
const scrolled = ref(false)

const closeMenu = () => {
  open.value = false
}

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

watch(open, (value) => {
  if (!import.meta.client) return
  document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200"
    :class="
      scrolled || open
        ? 'border-b border-border bg-bg/85 backdrop-blur-md'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="container-page flex h-16 items-center justify-between gap-4">
      <a
        href="#home"
        class="group flex min-w-0 flex-col leading-tight"
        @click="closeMenu"
      >
        <span class="truncate text-sm font-bold tracking-tight text-text sm:text-base">
          {{ profile.name }}
        </span>
        <span class="font-mono text-[11px] text-text-subtle">
          {{ profile.title }}
        </span>
      </a>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            activeId === item.href.slice(1)
              ? 'text-accent'
              : 'text-text-muted hover:text-text'
          "
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="contact.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden size-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text sm:inline-flex"
          aria-label="GitHub profile"
        >
          <UiGithubIcon class="size-4" />
        </a>
        <UiThemeToggle />
        <div class="hidden sm:block">
          <UiBaseButton href="#contact" size="sm">
            Let's Talk
          </UiBaseButton>
        </div>
        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-md border border-border text-text lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <X v-if="open" class="size-4" aria-hidden="true" />
          <Menu v-else class="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      id="mobile-menu"
      class="border-t border-border bg-bg lg:hidden"
      :class="open ? 'block' : 'hidden'"
    >
      <nav class="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-3 py-3 text-base font-medium transition-colors"
          :class="
            activeId === item.href.slice(1)
              ? 'bg-accent-muted text-accent'
              : 'text-text-muted hover:bg-surface-2 hover:text-text'
          "
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <div class="mt-3 flex flex-col gap-2 border-t border-border pt-4">
          <UiBaseButton
            :href="contact.github"
            variant="secondary"
            external
            @click="closeMenu"
          >
            <UiGithubIcon class="size-4" />
            GitHub
          </UiBaseButton>
        </div>
      </nav>
    </div>
  </header>
</template>
