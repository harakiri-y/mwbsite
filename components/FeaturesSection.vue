<template>
  <section id="features" class="relative py-32 lg:py-40 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mb-20">
        <span class="label text-primary mb-4 block reveal">Features</span>
        <h2 class="display-large text-dark mb-6 reveal">
          Everything for your<br />
          <span class="gradient-text">Health</span>
        </h2>
        <p class="body-large reveal">
          Metea combines cutting-edge AI technology with Apple Health for personalized insights.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group card hover-lift cursor-pointer reveal"
        >
          <!-- Icon -->
          <div class="mb-6">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-light group-hover:bg-primary">
              <component
                :is="feature.icon"
                class="w-7 h-7 transition-colors duration-500 text-primary group-hover:text-white"
              />
            </div>
          </div>

          <!-- Content -->
          <h3 class="display-small text-dark mb-3" style="font-size: 1.25rem; line-height: 1.3;">
            {{ feature.title }}
          </h3>
          <p class="text-dark-muted leading-relaxed">
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
