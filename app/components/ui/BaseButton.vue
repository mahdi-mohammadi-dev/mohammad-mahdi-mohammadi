<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    to?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    external?: boolean
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
)

const variantClass = {
  primary:
    'bg-accent text-bg hover:bg-accent-hover shadow-soft border border-transparent',
  secondary:
    'bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent',
  ghost:
    'bg-transparent text-text-muted hover:text-text border border-transparent',
}

const sizeClass = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200"
    :class="[variantClass[variant], sizeClass[size]]"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <NuxtLink
    v-else-if="to"
    :to="to"
    class="inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200"
    :class="[variantClass[variant], sizeClass[size]]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200"
    :class="[variantClass[variant], sizeClass[size]]"
  >
    <slot />
  </button>
</template>
