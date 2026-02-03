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
              <div class="phone-screen aspect-[9/19.5] overflow-hidden relative">
                <!-- Screenshots with transition -->
                <Transition
                  enter-active-class="transition-opacity duration-500"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition-opacity duration-500"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
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
  { title: 'Dashboard', image: '/screenshot-2.jpg' },
  { title: 'AI Insights', image: '/screenshot-3.jpg' },
  { title: 'Notifications', image: '/screenshot-2.jpg' },
  { title: 'Privacy', image: '/screenshot-1.jpg' }
]

</script>
