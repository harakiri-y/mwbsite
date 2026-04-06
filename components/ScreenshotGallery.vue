<template>
  <section class="relative py-20 lg:py-28 bg-dark overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 mesh-gradient-dark pointer-events-none" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div class="section-header text-center">
        <span class="section-anim label text-primary mb-4 block">Gallery</span>
        <h2 class="section-anim display-medium text-white">
          Designed for <span class="gradient-text">every detail</span>
        </h2>
      </div>
    </div>

    <!-- Scrolling Gallery -->
    <div class="relative gsap-reveal">
      <!-- Row 1 - scrolls left -->
      <div class="flex gap-5 mb-5 gallery-row-1" style="width: max-content;">
        <div
          v-for="(img, index) in row1Images"
          :key="'r1-' + index"
          class="flex-shrink-0 w-[200px] sm:w-[240px] rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <!-- Row 2 - scrolls right -->
      <div class="flex gap-5 gallery-row-2" style="width: max-content;">
        <div
          v-for="(img, index) in row2Images"
          :key="'r2-' + index"
          class="flex-shrink-0 w-[200px] sm:w-[240px] rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const row1Base = [
  { src: '/screenshots/image2.jpg', alt: 'AI Dashboard' },
  { src: '/screenshots/image3.jpg', alt: 'Daily Health Plan' },
  { src: '/screenshots/image6.jpg', alt: 'Sleep Analysis' },
  { src: '/screenshots/image9.jpg', alt: 'Apple Watch' },
  { src: '/screenshots/image5.jpg', alt: 'Healthspan' },
]

const row2Base = [
  { src: '/screenshots/image4.jpg', alt: 'Training Readiness' },
  { src: '/screenshots/image7.jpg', alt: 'Nutrition' },
  { src: '/screenshots/image1.jpg', alt: 'Health Agents' },
  { src: '/screenshots/image8.jpg', alt: 'Nutrients' },
  { src: '/screenshots/image2.jpg', alt: 'Dashboard' },
]

// Duplicate for seamless loop
const row1Images = [...row1Base, ...row1Base]
const row2Images = [...row2Base, ...row2Base]

onMounted(async () => {
  if (typeof window === 'undefined') return
  const { gsap } = await import('gsap')

  // Row 1 - scroll left
  const r1 = document.querySelector('.gallery-row-1') as HTMLElement
  if (r1) {
    const halfWidth = r1.scrollWidth / 2
    gsap.to(r1, {
      x: -halfWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })
  }

  // Row 2 - scroll right
  const r2 = document.querySelector('.gallery-row-2') as HTMLElement
  if (r2) {
    const halfWidth = r2.scrollWidth / 2
    gsap.set(r2, { x: -halfWidth })
    gsap.to(r2, {
      x: 0,
      duration: 45,
      ease: 'none',
      repeat: -1,
    })
  }
})
</script>
