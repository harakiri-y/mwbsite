<template>
  <section id="how-it-works" class="relative py-28 lg:py-36 bg-light overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/3 left-[10%] w-[300px] h-[300px]">
        <div class="orb w-full h-full opacity-40" />
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header text-center max-w-3xl mx-auto mb-20 lg:mb-24">
        <span class="section-anim label text-primary mb-4 block">How It Works</span>
        <h2 class="section-anim display-large text-dark mb-6">
          Three Simple <span class="gradient-text">Steps</span>
        </h2>
        <p class="section-anim body-large max-w-xl mx-auto">
          Get personalized health insights in just three easy steps.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connection Line -->
        <div class="step-line hidden lg:block absolute top-[60px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-gray via-primary/30 to-primary origin-left" />

        <div class="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div v-for="(step, index) in steps" :key="index" class="step-item text-center">
            <div class="relative inline-flex mb-8">
              <div class="w-[120px] h-[120px] rounded-full bg-light border-2 flex items-center justify-center transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
                :class="index === 2 ? 'border-primary/30 hover:border-primary' : 'border-gray hover:border-primary'">
                <div class="w-16 h-16 rounded-full flex items-center justify-center"
                  :class="index === 2 ? 'bg-primary glow-green' : 'bg-dark'">
                  <span class="text-2xl font-bold text-white" style="font-family: var(--font-display);">{{ index + 1 }}</span>
                </div>
              </div>
              <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <component :is="step.icon" class="w-3 h-3 text-white" :stroke-width="2.5" />
              </div>
            </div>

            <h3 class="display-small text-dark mb-3">{{ step.title }}</h3>
            <p class="text-dark-muted leading-relaxed max-w-xs mx-auto">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16 lg:mt-20 gsap-reveal">
        <a href="#download" class="btn-primary">
          <span>Get Started</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, Brain, Sparkles } from 'lucide-vue-next'

const steps = [
  {
    icon: Check,
    title: 'Connect Apple Health',
    description: 'Grant Metea access to your Health data. Your data stays secure on your device.'
  },
  {
    icon: Brain,
    title: 'AI Analyzes',
    description: 'Our advanced AI agents recognize patterns and correlations in your health data.'
  },
  {
    icon: Sparkles,
    title: 'Get Insights',
    description: 'Receive daily personalized recommendations for better sleep, nutrition, and less stress.'
  }
]
</script>
