<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex rounded-md border border-border bg-bg px-2.5 py-1.5 text-sm text-text-muted transition-colors duration-200 hover:border-border-strong hover:bg-surface-2 hover:text-text"
  >
    {{ label }}
  </span>
</template>
