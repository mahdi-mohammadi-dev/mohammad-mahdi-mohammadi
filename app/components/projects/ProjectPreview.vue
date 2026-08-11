<script setup lang="ts">
import { ArrowUpRight, ExternalLink, Globe } from '@lucide/vue'

const props = defineProps<{
  title: string
  url: string
  description: string
  contribution: string
  technologies: string[]
  category?: string
}>()

const rootEl = ref<HTMLElement | null>(null)
const viewportEl = ref<HTMLElement | null>(null)
const iframeEl = ref<HTMLIFrameElement | null>(null)

const shouldLoad = ref(false)
const isLoading = ref(false)
const hasFailed = ref(false)
const scale = ref(1)

const DESKTOP_WIDTH = 1280
const DESKTOP_HEIGHT = 800
const LOAD_TIMEOUT_MS = 12000

const displayHost = computed(() => {
  try {
    return new URL(props.url).hostname.replace(/^www\./, '')
  }
  catch {
    return props.url
  }
})

let loadTimer: ReturnType<typeof setTimeout> | undefined
let resizeObserver: ResizeObserver | undefined
let intersectionObserver: IntersectionObserver | undefined

const clearLoadTimer = () => {
  if (loadTimer) {
    clearTimeout(loadTimer)
    loadTimer = undefined
  }
}

const updateScale = () => {
  if (!viewportEl.value) return
  const width = viewportEl.value.clientWidth
  if (width > 0) {
    scale.value = width / DESKTOP_WIDTH
  }
}

const startLoading = () => {
  if (shouldLoad.value) return
  shouldLoad.value = true
  isLoading.value = true
  hasFailed.value = false

  clearLoadTimer()
  loadTimer = setTimeout(() => {
    if (isLoading.value) {
      hasFailed.value = true
      isLoading.value = false
    }
  }, LOAD_TIMEOUT_MS)
}

const onIframeLoad = () => {
  clearLoadTimer()

  // Same-origin / error-page heuristic only. Never read cross-origin DOM content.
  try {
    const href = iframeEl.value?.contentWindow?.location.href ?? ''
    if (
      href.startsWith('chrome-error://')
      || href.startsWith('edge-error://')
      || href === 'about:blank'
    ) {
      hasFailed.value = true
      isLoading.value = false
      return
    }
  }
  catch {
    // SecurityError usually means a cross-origin document loaded in the frame.
  }

  hasFailed.value = false
  isLoading.value = false
}

const onIframeError = () => {
  clearLoadTimer()
  hasFailed.value = true
  isLoading.value = false
}

onMounted(() => {
  if (!import.meta.client || !rootEl.value) return

  updateScale()
  resizeObserver = new ResizeObserver(() => updateScale())
  if (viewportEl.value) {
    resizeObserver.observe(viewportEl.value)
  }

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        startLoading()
        intersectionObserver?.disconnect()
      }
    },
    { rootMargin: '240px 0px', threshold: 0.05 },
  )
  intersectionObserver.observe(rootEl.value)
})

onBeforeUnmount(() => {
  clearLoadTimer()
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
})
</script>

<template>
  <article
    ref="rootEl"
    class="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-accent/40"
  >
    <!-- Browser chrome + iframe preview -->
    <div class="border-b border-border bg-bg">
      <div
        class="flex items-center gap-3 border-b border-border px-3 py-2.5 sm:px-4"
        aria-hidden="true"
      >
        <div class="flex items-center gap-1.5">
          <span class="size-2.5 rounded-full bg-border-strong" />
          <span class="size-2.5 rounded-full bg-border-strong" />
          <span class="size-2.5 rounded-full bg-border-strong" />
        </div>
        <div
          class="flex min-w-0 flex-1 items-center justify-center rounded-md border border-border bg-surface px-3 py-1"
        >
          <p class="truncate font-mono text-[11px] text-text-subtle">
            {{ displayHost }}
          </p>
        </div>
      </div>

      <div
        ref="viewportEl"
        class="relative aspect-[16/10] overflow-hidden bg-surface-2"
      >
        <!-- Loading skeleton -->
        <div
          v-if="isLoading || !shouldLoad"
          class="absolute inset-0 z-10 flex flex-col bg-bg"
          aria-hidden="true"
        >
          <div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">
            <div class="h-3 w-1/3 animate-pulse rounded bg-border" />
            <div class="h-3 w-2/3 animate-pulse rounded bg-border/80" />
            <div class="mt-2 grid flex-1 grid-cols-3 gap-3">
              <div class="animate-pulse rounded-md bg-border/60" />
              <div class="animate-pulse rounded-md bg-border/50" />
              <div class="animate-pulse rounded-md bg-border/70" />
            </div>
          </div>
          <p class="pb-4 text-center font-mono text-[11px] text-text-subtle">
            Loading preview…
          </p>
        </div>

        <!-- Embed blocked / failed fallback -->
        <div
          v-if="hasFailed"
          class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-bg px-6 text-center"
        >
          <span
            class="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-accent"
            aria-hidden="true"
          >
            <Globe class="size-5" />
          </span>
          <div>
            <p class="text-sm font-semibold text-text">
              Preview unavailable
            </p>
            <p class="mt-1 text-xs text-text-muted">
              This site cannot be embedded here.
            </p>
          </div>
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-md border border-border-strong px-3 py-2 text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            Open Website
            <ExternalLink class="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <!-- Scaled desktop iframe (pointer-events none: preview only) -->
        <div
          v-if="shouldLoad && !hasFailed"
          class="absolute top-0 left-0 origin-top-left"
          :style="{
            width: `${DESKTOP_WIDTH}px`,
            height: `${DESKTOP_HEIGHT}px`,
            transform: `scale(${scale})`,
          }"
        >
          <iframe
            ref="iframeEl"
            :src="url"
            :title="`${title} website preview`"
            class="pointer-events-none size-full border-0 bg-bg"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            tabindex="-1"
            @load="onIframeLoad"
            @error="onIframeError"
          />
        </div>
      </div>
    </div>

    <!-- Project details -->
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="min-w-0">
          <p
            v-if="category"
            class="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
          >
            {{ category }}
          </p>
          <h3 class="mt-2 text-xl font-bold text-text">
            {{ title }}
          </h3>
        </div>
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Visit Project
          <ArrowUpRight class="size-3.5" aria-hidden="true" />
        </a>
      </div>

      <p class="mt-3 text-sm leading-relaxed text-text-muted">
        {{ description }}
      </p>

      <p class="mt-3 text-sm leading-relaxed text-text-muted">
        <span class="font-medium text-text">Contribution:</span>
        {{ contribution }}
      </p>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="tech in technologies"
          :key="tech"
          class="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-text-subtle"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </article>
</template>
