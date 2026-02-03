<template>
  <section ref="sectionRef" class="relative py-32 lg:py-40 bg-dark text-white overflow-hidden">
    <!-- Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <span class="label text-primary mb-4 block reveal">Numbers & Facts</span>
        <h2 class="display-large text-white mb-6 reveal">
          Trusted by <span class="gradient-text">Thousands</span>
        </h2>
        <p class="body-large text-white/60 max-w-2xl mx-auto reveal">
          Every day we help people better understand their health.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 stagger-children">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-500 cursor-pointer reveal"
        >
          <div class="mb-2">
            <span class="text-5xl lg:text-6xl font-bold" style="font-family: var(--font-display);">
              {{ animatedValues[index] }}
            </span>
            <span class="text-2xl text-primary font-bold" style="font-family: var(--font-display);">{{ stat.suffix }}</span>
          </div>
          <p class="text-white/60">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="max-w-3xl mx-auto reveal">
        <div class="glass rounded-3xl p-10 text-center bg-white/5">
          <!-- Stars -->
          <div class="flex justify-center gap-1 mb-6">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <p class="text-xl text-white/80 italic mb-8 leading-relaxed">
            "Metea helped me understand my stress better. The AI recommendations are incredibly helpful."
          </p>

          <div class="flex items-center justify-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold" style="font-family: var(--font-display);">
              M
            </div>
            <div class="text-left">
              <p class="font-semibold text-white" style="font-family: var(--font-display);">Maria K.</p>
              <p class="text-sm text-white/50">User since 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

const stats = [
  { value: 10000, suffix: '+', label: 'Active Users' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 4.9, suffix: '', label: 'App Store Rating' },
  { value: 50, suffix: '%', label: 'Stress Reduced' }
]

const animatedValues = ref(['0', '0', '0.0', '0'])
const hasAnimated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animateCounters()
      }
    })
  }, { threshold: 0.3 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

function animateCounters() {
  stats.forEach((stat, index) => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let current = 0
    const increment = stat.value / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        current = stat.value
        clearInterval(timer)
      }

      if (stat.value === 4.9) {
        animatedValues.value[index] = current.toFixed(1)
      } else {
        animatedValues.value[index] = Math.floor(current).toLocaleString('en-US')
      }
    }, stepDuration)
  })
}
</script>
