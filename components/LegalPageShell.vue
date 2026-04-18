<template>
  <div class="metea-legal-page">
    <nav
      id="meteaLegalNav"
      class="metea-landing-nav"
      :class="{ scrolled: navScrolled }"
      aria-label="Primary"
    >
      <NuxtLink to="/" class="logo">
        <span class="logo-mark"><img src="/logo.png" alt="Metea" /></span>
        <span>Metea</span>
      </NuxtLink>
      <div class="nav-links">
        <a href="/#features">Features</a>
        <a href="/#how">How it works</a>
        <a href="/#preview">App</a>
        <a href="/#stats">Evidence</a>
      </div>
      <a href="/#cta" class="nav-cta"><span class="dot" aria-hidden="true" />Download Free</a>
    </nav>

    <header class="metea-legal-hero">
      <div class="metea-legal-hero-bg" aria-hidden="true">
        <div class="blob a" />
        <div class="blob b" />
        <div class="blob c" />
        <div class="metea-legal-grain" />
      </div>
      <div class="metea-wrap metea-legal-hero-inner">
        <NuxtLink to="/" class="metea-legal-back">
          <span class="metea-legal-back-ic" aria-hidden="true">←</span>
          Back to Home
        </NuxtLink>
        <div v-if="eyebrowSection || eyebrowLabel" class="metea-manifesto-label">
          <span v-if="eyebrowSection" class="idx">{{ eyebrowSection }}</span>
          <span class="line" />
          <span v-if="eyebrowLabel" class="ttl">{{ eyebrowLabel }}</span>
        </div>
        <h1 class="metea-legal-title">{{ title }}</h1>
        <p v-if="subtitle" class="metea-legal-lead">{{ subtitle }}</p>
      </div>
    </header>

    <main class="metea-legal-main">
      <div class="metea-wrap">
        <slot />
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrowSection?: string
    eyebrowLabel?: string
  }>(),
  {
    subtitle: '',
    eyebrowSection: '',
    eyebrowLabel: ''
  }
)

const navScrolled = ref(false)

function onScroll() {
  navScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
