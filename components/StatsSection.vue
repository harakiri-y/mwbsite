<template>
  <section ref="sectionRef" class="relative py-28 lg:py-36 bg-dark text-white overflow-hidden">
    <!-- Mesh Gradient Background -->
    <div class="absolute inset-0 mesh-gradient-dark pointer-events-none" />

    <!-- Dot Pattern -->
    <div class="absolute inset-0 dot-pattern text-white/[0.03] pointer-events-none" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header text-center mb-16 lg:mb-20">
        <span class="section-anim label text-primary mb-4 block">Numbers & Facts</span>
        <h2 class="section-anim display-large text-white mb-6">
          Trusted by <span class="gradient-text">Thousands</span>
        </h2>
        <p class="section-anim body-large text-white/50 max-w-2xl mx-auto">
          Every day we help people better understand their health.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 lg:mb-20">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="stat-card card-dark text-center p-8 group cursor-pointer"
        >
          <div class="mb-3">
            <span class="text-4xl lg:text-5xl font-bold tracking-tight" style="font-family: var(--font-display);">
              {{ animatedValues[index] }}
            </span>
            <span class="text-xl lg:text-2xl text-primary font-bold" style="font-family: var(--font-display);">{{ stat.suffix }}</span>
          </div>
          <p class="text-white/40 text-sm group-hover:text-white/60 transition-colors duration-300">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="max-w-3xl mx-auto testimonial-card">
        <div class="card-dark rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden">
          <!-- Shimmer effect -->
          <div class="absolute inset-0 shimmer pointer-events-none" />

          <!-- Stars -->
          <div class="flex justify-center gap-1 mb-6">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <p class="text-lg lg:text-xl text-white/80 italic mb-8 leading-relaxed relative z-10">
            "Metea helped me understand my stress better. The AI recommendations are incredibly helpful."
          </p>

          <div class="flex items-center justify-center gap-4 relative z-10">
            <div class="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm" style="font-family: var(--font-display);">
              M
            </div>
            <div class="text-left">
              <p class="font-semibold text-white text-sm" style="font-family: var(--font-display);">Maria K.</p>
              <p class="text-xs text-white/40">User since 2024</p>
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

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function animateCounters() {
  stats.forEach((stat, index) => {
    const duration = 2200
    const startTime = performance.now()

    function update() {
      const elapsed = performance.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const current = stat.value * easedProgress

      if (stat.value === 4.9) {
        animatedValues.value[index] = current.toFixed(1)
      } else {
        animatedValues.value[index] = Math.floor(current).toLocaleString('en-US')
      }

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  })
}
</script>
