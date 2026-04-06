<template>
  <section id="features" class="relative py-28 lg:py-36 bg-light overflow-hidden">
    <!-- Subtle Background -->
    <div class="absolute inset-0 mesh-gradient pointer-events-none opacity-50" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header max-w-3xl mb-16 lg:mb-20">
        <span class="section-anim label text-primary mb-4 block">Features</span>
        <h2 class="section-anim display-large text-dark mb-6">
          Everything for your<br />
          <span class="gradient-text">Health</span>
        </h2>
        <p class="section-anim body-large max-w-xl">
          Metea combines cutting-edge AI technology with Apple Health for personalized insights.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card group card cursor-pointer"
        >
          <!-- Icon -->
          <div class="mb-5">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 bg-primary/8 group-hover:bg-primary group-hover:glow-green">
              <component
                :is="feature.icon"
                class="w-6 h-6 transition-colors duration-500 text-primary group-hover:text-white"
                :stroke-width="1.5"
              />
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-lg font-semibold text-dark mb-2" style="font-family: var(--font-display);">
            {{ feature.title }}
          </h3>
          <p class="text-dark-muted text-sm leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Hover Arrow -->
          <div class="mt-4 flex items-center gap-1.5 text-primary opacity-0 translate-x-[-8px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            <span class="text-sm font-medium">Learn more</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Heart,
  Brain,
  Users,
  Watch,
  LayoutGrid,
  Activity,
  Moon,
  Zap,
  TrendingUp
} from 'lucide-vue-next'

const features = [
  {
    icon: Heart,
    title: 'HealthKit Integration',
    description: 'Seamless connection with Apple Health. Automatically import heart rate, HRV, sleep, and more.'
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our intelligent AI recognizes patterns and connections in your health data that you might miss.'
  },
  {
    icon: Activity,
    title: 'Stress Tracking',
    description: 'Understand your stress levels through HRV analysis and receive personalized relaxation tips.'
  },
  {
    icon: Moon,
    title: 'Sleep Analysis',
    description: 'Detailed insights into your sleep quality with personalized improvement suggestions.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join challenges, compare with friends, and motivate each other on your health journey.'
  },
  {
    icon: Watch,
    title: 'Apple Watch App',
    description: 'Companion app for your Apple Watch with live complications and quick access to insights.'
  },
  {
    icon: LayoutGrid,
    title: 'Home Screen Widgets',
    description: 'See your most important health data directly on your home screen at a glance.'
  },
  {
    icon: Zap,
    title: 'Live Activities',
    description: 'Real-time updates on your lock screen during workouts and meditation sessions.'
  },
  {
    icon: TrendingUp,
    title: 'Trend Analysis',
    description: 'Track your long-term progress with clear charts and comprehensive reports.'
  }
]
</script>
