<template>
  <section id="features" class="relative py-28 lg:py-36 bg-cream overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header max-w-3xl mb-16 lg:mb-20">
        <span class="section-anim label text-primary mb-4 block">Features</span>
        <h2 class="section-anim display-large text-dark mb-6">
          Everything for your<br />
          <span class="gradient-text">Health</span>
        </h2>
        <p class="section-anim body-large max-w-xl">
          AI-powered health agents that work for your wellbeing — 24/7.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card group card cursor-pointer"
        >
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 bg-primary/8 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 mb-5">
            <component
              :is="feature.icon"
              class="w-6 h-6 transition-colors duration-500 text-primary group-hover:text-white"
              :stroke-width="1.5"
            />
          </div>

          <h3 class="text-lg font-semibold text-dark mb-2" style="font-family: var(--font-display);">
            {{ feature.title }}
          </h3>
          <p class="text-dark-muted text-sm leading-relaxed">
            {{ feature.description }}
          </p>
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
    icon: Brain,
    title: 'AI Health Agents',
    description: 'Intelligent agents analyze your data around the clock and give you personalized coaching tips.'
  },
  {
    icon: Heart,
    title: 'HealthKit Integration',
    description: 'Seamless connection with Apple Health. Automatically import heart rate, HRV, sleep, and more.'
  },
  {
    icon: Activity,
    title: 'Stress & Recovery',
    description: 'Understand your stress levels and recovery score to know when to push and when to rest.'
  },
  {
    icon: Moon,
    title: 'Sleep Analysis',
    description: 'Detailed sleep phase tracking with personalized tips to improve your sleep quality.'
  },
  {
    icon: Zap,
    title: 'Nutrition Tracking',
    description: 'Track calories, vitamins, minerals, and hydration. Know what your body needs every day.'
  },
  {
    icon: TrendingUp,
    title: 'Biological Age',
    description: 'Discover your real health age and track how your lifestyle impacts your healthspan.'
  },
  {
    icon: Watch,
    title: 'Apple Watch App',
    description: 'Health insights on your wrist with live complications, night vitals, and quick glances.'
  },
  {
    icon: LayoutGrid,
    title: 'Widgets & Live Activities',
    description: 'Your health data on your home screen and lock screen — always at a glance.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join challenges, compare with friends, and motivate each other on your health journey.'
  }
]
</script>
