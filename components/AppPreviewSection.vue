<template>
  <section id="preview" class="relative py-28 lg:py-36 bg-light overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 mesh-gradient pointer-events-none opacity-40" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div class="order-2 lg:order-1">
          <div class="section-header">
            <span class="section-anim label text-primary mb-4 block">App Preview</span>
            <h2 class="section-anim display-large text-dark mb-6">
              Discover<br />
              <span class="gradient-text">Metea</span>
            </h2>
            <p class="section-anim body-large mb-10">
              A clear dashboard shows you all your important health data at a glance.
            </p>
          </div>

          <!-- Feature Highlights -->
          <div class="space-y-3">
            <div
              v-for="(highlight, index) in highlights"
              :key="index"
              class="feature-card group flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 cursor-pointer"
              :class="activeHighlight === index
                ? 'bg-white border border-primary/20 shadow-sm shadow-primary/5'
                : 'hover:bg-white/60 border border-transparent'"
              @click="activeHighlight = index"
            >
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                :class="activeHighlight === index ? 'bg-primary glow-green' : 'bg-gray-light'"
              >
                <component
                  :is="highlight.icon"
                  class="w-5 h-5 transition-colors duration-500"
                  :class="activeHighlight === index ? 'text-white' : 'text-dark-muted'"
                  :stroke-width="1.5"
                />
              </div>
              <div>
                <h4 class="font-semibold text-dark mb-0.5 text-[0.95rem]" style="font-family: var(--font-display);">
                  {{ highlight.title }}
                </h4>
                <p class="text-sm text-dark-muted leading-relaxed">
                  {{ highlight.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone Preview with 3D Effect -->
        <div class="order-1 lg:order-2 flex justify-center preview-phone" ref="previewContainer">
          <div class="relative">
            <div ref="previewPhoneRef" class="phone-mockup w-[260px] sm:w-[300px] glow-green-strong" style="will-change: transform;">
              <div class="phone-screen aspect-[9/19.5] overflow-hidden relative">
                <!-- Screenshots with transition -->
                <Transition
                  enter-active-class="transition-all duration-500 ease-out"
                  enter-from-class="opacity-0 scale-105"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition-all duration-300 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                  mode="out-in"
                >
                  <img
                    :key="activeHighlight"
                    :src="screenshots[activeHighlight].image"
                    :alt="screenshots[activeHighlight].title"
                    class="w-full h-full object-cover object-top"
                  />
                </Transition>
              </div>
            </div>

            <!-- Screenshot indicator dots -->
            <div class="flex justify-center gap-2 mt-6">
              <button
                v-for="(_, index) in screenshots"
                :key="index"
                @click="activeHighlight = index"
                class="w-2 h-2 rounded-full transition-all duration-500"
                :class="activeHighlight === index ? 'bg-primary w-6' : 'bg-gray hover:bg-dark-muted'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BarChart3, Sparkles, Bell, Shield } from 'lucide-vue-next'

const previewPhoneRef = ref<HTMLElement | null>(null)
const activeHighlight = ref(0)

useTilt(previewPhoneRef, 5)

// Auto-cycle through highlights
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    activeHighlight.value = (activeHighlight.value + 1) % highlights.length
  }, 4000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

// Reset interval on manual click
watch(activeHighlight, () => {
  if (interval) clearInterval(interval)
  interval = setInterval(() => {
    activeHighlight.value = (activeHighlight.value + 1) % highlights.length
  }, 4000)
})

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
  { title: 'Dashboard', image: '/screenshot-2.jpg' },
  { title: 'AI Insights', image: '/screenshot-3.jpg' },
  { title: 'Notifications', image: '/screenshot-2.jpg' },
  { title: 'Privacy', image: '/screenshot-1.jpg' }
]
</script>
