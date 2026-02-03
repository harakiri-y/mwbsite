<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="scrolled ? 'glass py-4' : 'py-6'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="/logo.png" alt="Metea Logo" class="w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110" />
          <span class="text-xl font-bold text-dark" style="font-family: var(--font-display);">Metea</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <a href="/#features" class="hover-underline text-dark-muted hover:text-dark transition-colors duration-300">Features</a>
          <a href="/#how-it-works" class="hover-underline text-dark-muted hover:text-dark transition-colors duration-300">How It Works</a>
          <a href="/#preview" class="hover-underline text-dark-muted hover:text-dark transition-colors duration-300">App Preview</a>
          <a href="/#download" class="btn-primary text-sm py-2.5 px-6">
            Download
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-dark/5 transition-colors duration-300">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden glass rounded-2xl mt-4 p-6">
          <div class="flex flex-col space-y-4">
            <a href="/#features" @click="mobileMenuOpen = false" class="text-dark-muted hover:text-dark transition-colors duration-300 py-2">Features</a>
            <a href="/#how-it-works" @click="mobileMenuOpen = false" class="text-dark-muted hover:text-dark transition-colors duration-300 py-2">How It Works</a>
            <a href="/#preview" @click="mobileMenuOpen = false" class="text-dark-muted hover:text-dark transition-colors duration-300 py-2">App Preview</a>
            <div class="pt-4">
              <a href="/#download" @click="mobileMenuOpen = false" class="btn-primary w-full justify-center">
                Download
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 50
}
</script>
