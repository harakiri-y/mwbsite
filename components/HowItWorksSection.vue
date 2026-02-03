<template>
  <section id="how-it-works" class="relative py-32 lg:py-40 bg-light overflow-hidden">
    <!-- Background with Orb Glow -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/3 left-1/4 w-[200px] h-[200px] opacity-15">
        <div class="orb w-full h-full"></div>
      </div>
      <div class="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] opacity-10">
        <div class="orb w-full h-full"></div>
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-24">
        <span class="label text-primary mb-4 block reveal">How It Works</span>
        <h2 class="display-large text-dark mb-6 reveal">
          Three Simple <span class="gradient-text">Steps</span>
        </h2>
        <p class="body-large reveal">
          Get personalized health insights in just three easy steps.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connection Line -->
        <div class="hidden lg:block absolute top-20 left-[15%] right-[15%] h-px bg-gray" />

        <div class="grid md:grid-cols-3 gap-16 stagger-children-slow">
          <!-- Step 1 -->
          <div class="text-center reveal">
            <div class="relative inline-flex mb-10">
              <div class="w-20 h-20 rounded-full bg-dark flex items-center justify-center">
                <span class="text-3xl font-bold text-white" style="font-family: var(--font-display);">1</span>
              </div>
              <div class="dot absolute -bottom-1 -right-1" />
            </div>

            <h3 class="display-small text-dark mb-4">Connect Apple Health</h3>
            <p class="text-dark-muted leading-relaxed">
              Grant Metea access to your Health data. Your data stays secure on your device.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center reveal">
            <div class="relative inline-flex mb-10">
              <div class="w-20 h-20 rounded-full bg-dark flex items-center justify-center">
                <span class="text-3xl font-bold text-white" style="font-family: var(--font-display);">2</span>
              </div>
              <div class="dot absolute -bottom-1 -right-1" />
            </div>

            <h3 class="display-small text-dark mb-4">AI Analyzes</h3>
            <p class="text-dark-muted leading-relaxed">
              Our advanced AI recognizes patterns and correlations in your health data.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center reveal">
            <div class="relative inline-flex mb-10">
              <div class="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                <span class="text-3xl font-bold text-white" style="font-family: var(--font-display);">3</span>
              </div>
              <div class="dot absolute -bottom-1 -right-1" />
            </div>

            <h3 class="display-small text-dark mb-4">Get Insights</h3>
            <p class="text-dark-muted leading-relaxed">
              Receive daily personalized recommendations for better sleep and less stress.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-20 reveal">
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
</script>
