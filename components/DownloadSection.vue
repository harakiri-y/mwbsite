<template>
  <section id="download" class="relative py-32 lg:py-40 bg-light overflow-hidden">
    <!-- Background with Orb -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-20">
        <div class="orb w-full h-full"></div>
      </div>
    </div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- App Icon -->
      <div class="mb-10">
        <img src="/logo.png?v=2" alt="Metea" class="w-24 h-24 mx-auto rounded-3xl shadow-lg" />
      </div>

      <h2 class="display-large text-dark mb-6 reveal">
        Ready for a<br />
        <span class="gradient-text">healthier life?</span>
      </h2>

      <p class="body-large mb-12 max-w-xl mx-auto reveal">
        Download Metea for free and start understanding your health better today.
      </p>

      <!-- Download Button -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 reveal">
        <a
          href="#"
          class="inline-flex items-center justify-center px-8 py-4 bg-dark text-white rounded-2xl hover:bg-dark-secondary transition-all duration-500 hover:scale-105"
        >
          <svg class="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs opacity-70">Download on the</div>
            <div class="text-lg font-semibold" style="font-family: var(--font-display);">App Store</div>
          </div>
        </a>
      </div>

      <!-- Trust Badges -->
      <div class="flex flex-wrap items-center justify-center gap-8 text-dark-muted text-sm reveal">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>100% Privacy</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Free to Start</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>Made in Germany</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
