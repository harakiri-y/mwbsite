<template>
  <div class="relative overflow-hidden">
    <NavBar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <AppPreviewSection />
    <ScreenshotGallery />
    <StatsSection />
    <DownloadSection />
    <FooterSection />
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
useGsapAnimations()

useHead({
  title: 'Metea - Your Health. Intelligently Analyzed.',
  meta: [
    { name: 'description', content: 'Metea analyzes your Apple Health data with AI and provides personalized recommendations for stress, sleep, HRV, and more.' }
  ]
})
</script>
