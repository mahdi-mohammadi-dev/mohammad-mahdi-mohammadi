<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
    >
      Skip to content
    </a>
    <LayoutAppNavbar />
    <main id="main-content">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
