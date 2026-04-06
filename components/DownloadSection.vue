<template>
  <section id="download" class="download-section relative py-28 lg:py-36 bg-cream overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <div class="orb w-full h-full opacity-30" />
      </div>
    </div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <div class="download-anim mb-6">
            <div class="inline-block relative">
              <img src="/logo.png?v=2" alt="Metea" class="w-20 h-20 rounded-[22px] shadow-xl" />
              <div class="absolute inset-0 rounded-[22px] glow-green-strong opacity-50" />
            </div>
          </div>

          <h2 class="download-anim display-large text-dark mb-6">
            Ready for a<br />
            <span class="gradient-text">healthier life?</span>
          </h2>

          <p class="download-anim body-large mb-8 max-w-lg">
            Download Metea for free and start understanding your health better today.
          </p>

          <div class="download-anim flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <a
              href="https://apps.apple.com/app/metea/id6756438562"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center px-8 py-4 bg-dark text-white rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <svg class="w-7 h-7 mr-3 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div class="text-left">
                <div class="text-[10px] font-medium opacity-60 uppercase tracking-wider">Download on the</div>
                <div class="text-lg font-semibold -mt-0.5" style="font-family: var(--font-display);">App Store</div>
              </div>
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="download-anim flex flex-wrap gap-6 justify-center lg:justify-start">
            <div v-for="badge in badges" :key="badge.label" class="flex items-center gap-2 text-dark-muted">
              <div class="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                <component :is="badge.icon" class="w-4 h-4 text-primary" :stroke-width="1.5" />
              </div>
              <span class="text-sm font-medium">{{ badge.label }}</span>
            </div>
          </div>
        </div>

        <!-- Screenshot -->
        <div class="download-anim flex justify-center lg:justify-end">
          <img
            src="/screenshots/image1.jpg"
            alt="Metea - Your Personal Health Agents"
            class="w-full max-w-[340px] rounded-3xl shadow-2xl shadow-dark/15"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Gift, Heart } from 'lucide-vue-next'

const badges = [
  { icon: Shield, label: '100% Privacy' },
  { icon: Gift, label: 'Free to Start' },
  { icon: Heart, label: 'Made in Germany' }
]
</script>
