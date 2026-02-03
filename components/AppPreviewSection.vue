<template>
  <section id="preview" class="relative py-32 lg:py-40 bg-cream overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Content -->
        <div class="order-2 lg:order-1">
          <span class="label text-primary mb-4 block reveal">App Preview</span>

          <h2 class="display-large text-dark mb-6 reveal">
            Discover<br />
            <span class="gradient-text">Metea</span>
          </h2>

          <p class="body-large mb-12 reveal">
            A clear dashboard shows you all your important health data at a glance.
          </p>

          <!-- Feature Highlights -->
          <div class="space-y-4 stagger-children">
            <div
              v-for="(highlight, index) in highlights"
              :key="index"
              class="flex items-start gap-5 p-5 rounded-2xl transition-all duration-500 cursor-pointer reveal"
              :class="activeHighlight === index ? 'card' : 'hover:bg-white/50'"
              @click="activeHighlight = index"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                :class="activeHighlight === index ? 'bg-dark' : 'bg-gray'"
              >
                <component
                  :is="highlight.icon"
                  class="w-6 h-6"
                  :class="activeHighlight === index ? 'text-white' : 'text-dark-muted'"
                />
              </div>
              <div>
                <h4 class="font-semibold text-dark mb-1" style="font-family: var(--font-display);">{{ highlight.title }}</h4>
                <p class="text-sm text-dark-muted leading-relaxed">{{ highlight.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone Preview -->
        <div class="order-1 lg:order-2 flex justify-center reveal">
          <div class="float">
            <div class="phone-mockup w-[280px] sm:w-[320px]">
              <div class="phone-screen aspect-[9/19.5]">
                <div class="phone-notch" />

                <!-- App Preview Content -->
                <div class="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-cream to-light">
                  <!-- Dynamic content based on active highlight -->
                  <div v-if="activeHighlight === 0" class="flex-1 flex flex-col">
                    <!-- Dashboard View -->
                    <div class="text-center mb-3">
                      <span class="text-[10px] tracking-wider text-dark-muted">DASHBOARD</span>
                    </div>
                    <div class="card p-3 mb-2 relative overflow-hidden">
                      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div class="orb-mini opacity-60"></div>
                      </div>
                      <div class="pt-6 text-center">
                        <span class="text-[9px] tracking-wider text-dark-muted">WELLNESS SCORE</span>
                        <p class="text-2xl font-bold text-dark" style="font-family: var(--font-display);">87</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="card p-2 text-center">
                        <span class="text-[8px] text-dark-muted">HRV</span>
                        <p class="text-sm font-bold text-primary">48ms</p>
                      </div>
                      <div class="card p-2 text-center">
                        <span class="text-[8px] text-dark-muted">SLEEP</span>
                        <p class="text-sm font-bold text-primary">7.5h</p>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="activeHighlight === 1" class="flex-1 flex flex-col">
                    <!-- AI Insights View -->
                    <div class="card p-3 mb-2 relative overflow-hidden">
                      <div class="absolute -top-4 -right-4">
                        <div class="orb-mini opacity-40"></div>
                      </div>
                      <span class="text-[9px] tracking-wider text-dark-muted">AI INSIGHT</span>
                      <p class="text-xs text-dark mt-2 leading-relaxed">Your stress levels are 23% lower than last week. Keep up the good work!</p>
                    </div>
                    <div class="card p-3">
                      <span class="text-[9px] tracking-wider text-dark-muted">RECOMMENDATION</span>
                      <p class="text-xs text-dark mt-2">Try a 10-minute meditation before bed tonight.</p>
                    </div>
                  </div>

                  <div v-else-if="activeHighlight === 2" class="flex-1 flex flex-col">
                    <!-- Notifications View -->
                    <div class="space-y-2">
                      <div class="card p-3 border-l-2 border-l-primary">
                        <span class="text-[9px] text-primary font-medium">Now</span>
                        <p class="text-xs text-dark">Time for your evening check-in</p>
                      </div>
                      <div class="card p-3 border-l-2 border-l-amber-400">
                        <span class="text-[9px] text-amber-600 font-medium">2h ago</span>
                        <p class="text-xs text-dark">Elevated stress detected</p>
                      </div>
                      <div class="card p-3">
                        <span class="text-[9px] text-dark-muted font-medium">Yesterday</span>
                        <p class="text-xs text-dark">Weekly report ready</p>
                      </div>
                    </div>
                  </div>

                  <div v-else class="flex-1 flex flex-col items-center justify-center">
                    <!-- Privacy View -->
                    <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p class="text-xs text-dark font-medium text-center">Your data stays<br />on your device</p>
                    <span class="text-[9px] text-primary mt-2">100% Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BarChart3, Sparkles, Bell, Shield } from 'lucide-vue-next'

const activeHighlight = ref(0)

const highlights = [
  {
    icon: BarChart3,
    title: 'Clear Dashboard',
    description: 'All your health data at a glance - clearly structured and easy to understand.'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Recommendations',
    description: 'Personalized tips based on your individual data and goals.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Receive the right reminders at the right time for your health.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data stays on your device. No cloud, no compromises.'
  }
]

const screenshots = [
  { title: 'Dashboard' },
  { title: 'AI Insights' },
  { title: 'Notifications' },
  { title: 'Settings' }
]

</script>
