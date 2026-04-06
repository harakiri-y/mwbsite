<template>
  <section id="preview" class="relative py-28 lg:py-36 bg-cream overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span class="section-anim label text-primary mb-4 block">App Preview</span>
        <h2 class="section-anim display-large text-dark mb-6">
          Discover <span class="gradient-text">Metea</span>
        </h2>
        <p class="section-anim body-large max-w-xl mx-auto">
          Explore the features that make Metea your most powerful health companion.
        </p>
      </div>

      <!-- Tab Navigation -->
      <div class="gsap-reveal flex flex-wrap justify-center gap-2 mb-12 lg:mb-16">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500"
          :class="activeTab === index
            ? 'bg-dark text-white shadow-lg shadow-dark/20'
            : 'bg-white text-dark-muted hover:text-dark border border-gray hover:border-dark/20'"
        >
          <component :is="tab.icon" class="w-4 h-4" :stroke-width="1.5" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Screenshot Display -->
      <div class="preview-phone flex justify-center">
        <div class="relative max-w-[900px] w-full">
          <Transition
            enter-active-class="transition-all duration-600 ease-out"
            enter-from-class="opacity-0 translate-y-8 scale-[0.97]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-300 ease-in absolute inset-0"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-[0.97]"
            mode="out-in"
          >
            <div :key="activeTab" class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Screenshot -->
              <div class="flex justify-center">
                <img
                  :src="tabs[activeTab].image"
                  :alt="tabs[activeTab].label"
                  class="w-full max-w-[340px] rounded-3xl shadow-2xl shadow-dark/15"
                />
              </div>

              <!-- Description -->
              <div class="text-center md:text-left">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
                  <component :is="tabs[activeTab].icon" class="w-3.5 h-3.5" :stroke-width="2" />
                  {{ tabs[activeTab].label }}
                </div>
                <h3 class="display-small text-dark mb-4">
                  {{ tabs[activeTab].title }}
                </h3>
                <p class="text-dark-muted leading-relaxed mb-6">
                  {{ tabs[activeTab].description }}
                </p>
                <div class="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span
                    v-for="tag in tabs[activeTab].tags"
                    :key="tag"
                    class="px-3 py-1 rounded-full bg-white border border-gray text-xs font-medium text-dark-muted"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Dot Indicators -->
      <div class="flex justify-center gap-2 mt-10">
        <button
          v-for="(_, index) in tabs"
          :key="index"
          @click="activeTab = index"
          class="w-2 h-2 rounded-full transition-all duration-500"
          :class="activeTab === index ? 'bg-primary w-8' : 'bg-dark/15 hover:bg-dark/30'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Activity, Brain, Moon, Apple as AppleIcon, Watch, TrendingUp } from 'lucide-vue-next'

const activeTab = ref(0)

const tabs = [
  {
    icon: Brain,
    label: 'AI Dashboard',
    title: 'Your Body\'s Signals — Decoded',
    description: 'The AI dashboard gives you a complete overview of your health status. See stress levels, recovery score, heart rate, and personalized coaching tips — all in real-time.',
    image: '/screenshots/image2.jpg',
    tags: ['Stress Tracking', 'Recovery Score', 'AI Coaching']
  },
  {
    icon: Activity,
    label: 'Training Readiness',
    title: 'Know When To Push — Or Rest',
    description: 'Metea Agents analyze your recovery and training readiness. Get data-driven recommendations on whether to train hard or take it easy today.',
    image: '/screenshots/image4.jpg',
    tags: ['Recovery Analysis', 'Training Load', 'Readiness Score']
  },
  {
    icon: Moon,
    label: 'Sleep',
    title: 'How Well Did You Sleep?',
    description: 'Detailed sleep architecture analysis with phase tracking. Discover what affects your recovery and get personalized tips to improve sleep quality.',
    image: '/screenshots/image6.jpg',
    tags: ['Sleep Phases', 'Sleep Score', 'Recovery Tips']
  },
  {
    icon: AppleIcon,
    label: 'Nutrition',
    title: 'Track Essential Nutrients',
    description: 'Know what your body is missing. Track calories, macros, vitamins, minerals, and hydration with a beautiful and intuitive interface.',
    image: '/screenshots/image8.jpg',
    tags: ['Calories', 'Vitamins', 'Hydration']
  },
  {
    icon: TrendingUp,
    label: 'Healthspan',
    title: 'How Fast Are You Aging?',
    description: 'Your real health age — calculated from your data. Track your biological age and see how lifestyle changes impact your healthspan over time.',
    image: '/screenshots/image5.jpg',
    tags: ['Biological Age', 'Health Score', 'Longevity']
  },
  {
    icon: Watch,
    label: 'Apple Watch',
    title: 'Health Insights Anywhere',
    description: 'Your companion on Apple Watch. See stress, recovery, and sleep data directly on your wrist with beautiful complications and real-time tracking.',
    image: '/screenshots/image9.jpg',
    tags: ['Complications', 'Live Data', 'Night Vitals']
  }
]

// Auto-cycle
let interval: ReturnType<typeof setInterval> | null = null

const startCycle = () => {
  interval = setInterval(() => {
    activeTab.value = (activeTab.value + 1) % tabs.length
  }, 5000)
}

const resetCycle = () => {
  if (interval) clearInterval(interval)
  startCycle()
}

watch(activeTab, resetCycle)

onMounted(startCycle)
onUnmounted(() => { if (interval) clearInterval(interval) })
</script>
