<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="inline-flex size-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggleTheme"
  >
    <Sun v-if="isDark" class="size-4" aria-hidden="true" />
    <Moon v-else class="size-4" aria-hidden="true" />
  </button>
</template>
