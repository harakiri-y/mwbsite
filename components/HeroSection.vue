<template>
  <section class="hero-section relative min-h-screen flex items-center overflow-hidden bg-light">
    <!-- Gradient Mesh Background -->
    <div class="absolute inset-0 mesh-gradient pointer-events-none" />

    <!-- Animated Orbs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="hero-bg-orb absolute -top-20 right-[10%] w-[500px] h-[500px]">
        <div class="orb w-full h-full" />
      </div>
      <div class="hero-bg-orb absolute bottom-[10%] -left-[5%] w-[350px] h-[350px]">
        <div class="orb w-full h-full" style="animation-delay: -2s;" />
      </div>
    </div>

    <!-- Dot Pattern -->
    <div class="absolute inset-0 dot-pattern text-dark/[0.03] pointer-events-none" />

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div>
          <!-- Label -->
          <div class="hero-label opacity-0">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary label">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now on the App Store
            </span>
          </div>

          <!-- Main Headline -->
          <h1 class="hero-title display-huge text-dark mt-8 mb-6 opacity-0">
            Metea
          </h1>

          <!-- Subtitle -->
          <div class="hero-subtitle display-medium text-dark-muted mb-8 opacity-0">
            Your Health.<br />
            <span class="gradient-text">Intelligently Analyzed.</span>
          </div>

          <!-- Description -->
          <p class="hero-description body-large max-w-lg mb-10 opacity-0">
            Connect Apple Health with AI power. Get personalized insights for stress, sleep, and well-being.
          </p>

          <!-- CTA Buttons -->
          <div class="hero-cta flex flex-col sm:flex-row gap-4 opacity-0">
            <a href="#download" class="btn-primary">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download App</span>
            </a>
            <a href="#features" class="btn-secondary">
              <span>Learn More</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Phone Mockup with 3D Tilt -->
        <div class="hero-phone opacity-0 flex justify-center lg:justify-end" ref="phoneContainer">
          <div class="hero-phone-float relative">
            <div ref="phoneRef" class="phone-mockup w-[260px] sm:w-[300px] glow-green" style="will-change: transform;">
              <div class="phone-screen aspect-[9/19.5] overflow-hidden">
                <img
                  src="/screenshot-1.jpg"
                  alt="Metea App Dashboard"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -left-8 sm:-left-12 top-1/4 glass rounded-2xl p-3 sm:p-4 shadow-lg gsap-parallax" data-speed="0.15">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p class="text-xs text-dark-muted">Heart Rate</p>
                  <p class="text-sm font-bold text-dark" style="font-family: var(--font-display);">72 BPM</p>
                </div>
              </div>
            </div>

            <!-- Floating Badge 2 -->
            <div class="absolute -right-6 sm:-right-10 bottom-1/3 glass rounded-2xl p-3 sm:p-4 shadow-lg gsap-parallax" data-speed="0.1">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp class="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p class="text-xs text-dark-muted">Stress Level</p>
                  <p class="text-sm font-bold text-primary" style="font-family: var(--font-display);">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hero-scroll opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2">
      <a href="#features" class="flex flex-col items-center gap-3 text-dark-muted/50 hover:text-dark-muted transition-colors">
        <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div class="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
          <div class="w-1 h-1.5 bg-current rounded-full scroll-indicator" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Heart, TrendingUp } from 'lucide-vue-next'

const phoneRef = ref<HTMLElement | null>(null)

// 3D tilt effect on desktop
useTilt(phoneRef, 6)
</script>
