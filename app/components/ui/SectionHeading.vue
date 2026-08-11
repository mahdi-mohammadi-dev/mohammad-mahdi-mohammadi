<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
  }>(),
  {
    align: 'left',
  },
)
</script>

<template>
  <div
    class="mb-10 max-w-3xl sm:mb-12"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
  >
    <p
      v-if="eyebrow"
      class="mb-3 font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase"
    >
      {{ eyebrow }}
    </p>
    <h2
      :id="id"
      class="text-3xl font-bold tracking-tight text-text sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base leading-relaxed text-text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
