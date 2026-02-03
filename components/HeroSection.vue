<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-light">
    <!-- Background with Orb Glow -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Large decorative orb glow -->
      <div class="absolute top-1/4 right-1/4 w-[400px] h-[400px] opacity-30">
        <div class="orb w-full h-full"></div>
      </div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Content -->
        <div>
          <!-- Label -->
          <div class="animate-in animate-in-delay-1">
            <span class="label text-primary">Now on the App Store</span>
          </div>

          <!-- Main Headline - Noomo Style -->
          <h1 class="display-huge text-dark mt-6 mb-4 animate-in animate-in-delay-2">
            Metea
          </h1>

          <!-- Subtitle -->
          <div class="display-medium text-dark-muted mb-8 animate-in animate-in-delay-3">
            Your Health.<br />
            <span class="gradient-text">Intelligently Analyzed.</span>
          </div>

          <!-- Description -->
          <p class="body-large max-w-lg mb-12 animate-in animate-in-delay-4">
            Connect Apple Health with AI power. Get personalized insights for stress, sleep, and well-being.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-in animate-in-delay-5">
            <a href="#download" class="btn-primary">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download App</span>
            </a>
            <a href="#features" class="btn-secondary">
              <span class="hover-underline">Learn More</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Phone Mockup -->
        <div class="relative flex justify-center lg:justify-end animate-in animate-in-delay-3">
          <div class="relative float">
            <!-- Phone Frame -->
            <div class="phone-mockup w-[280px] sm:w-[320px]">
              <div class="phone-screen aspect-[9/19.5] overflow-hidden">
                <img
                  src="/screenshot-1.png"
                  alt="Metea App Screenshot"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator">
        <div class="w-6 h-10 rounded-full border-2 border-dark/20 flex justify-center pt-2">
          <div class="w-1 h-2 bg-dark/30 rounded-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
