<script setup lang="ts">
import { profile } from '~/data/profile'

useReveal()

useSeoMeta({
  title: 'محمد مهدی محمدی | Frontend Engineer | Vue & Nuxt',
  description: profile.summary,
  ogTitle: 'محمد مهدی محمدی | Frontend Engineer | Vue & Nuxt',
  ogDescription: profile.summary,
  ogType: 'website',
  ogUrl: 'https://your-domain.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'محمد مهدی محمدی | Frontend Engineer | Vue & Nuxt',
  twitterDescription: profile.summary,
})

useHead({
  link: [{ rel: 'canonical', href: 'https://your-domain.com' }],
})
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsExpertiseSection />
    <SectionsProjectsSection />
    <SectionsExperienceSection />
    <SectionsSkillsSection />
    <SectionsContactSection />
  </div>
</template>
