<template>
  <div class="legal-page">
    <a href="#legal-main" class="skip-link">Skip to content</a>

    <nav class="nav" :class="{ scrolled: navScrolled }" aria-label="Primary">
      <div class="nav-inner">
        <NuxtLink to="/" class="brand">
          <img src="/logo.png" alt="" width="30" height="30" />
          <span>Metea</span>
        </NuxtLink>

        <div class="nav-links">
          <a href="/#how">How it reads</a>
          <a href="/#agents">Agents</a>
          <a href="/#app">Inside</a>
          <a href="/#privacy">Privacy</a>
        </div>

        <a
          href="https://apps.apple.com/app/metea/id6756438562"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary nav-cta"
        >Get Metea</a>
      </div>
    </nav>

    <header class="legal-hero">
      <div class="wrap legal-hero-inner">
        <NuxtLink to="/" class="legal-back">
          <span aria-hidden="true">←</span> Back to home
        </NuxtLink>
        <h1 class="legal-title">{{ title }}</h1>
        <p v-if="subtitle" class="legal-lead">{{ subtitle }}</p>
      </div>
    </header>

    <main id="legal-main" class="legal-main">
      <div class="wrap">
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
  }>(),
  { subtitle: '' }
)

const navScrolled = ref(false)

function onScroll() {
  navScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: var(--z-sticky);
  transition: background var(--t-move) var(--ease), border-color var(--t-move) var(--ease);
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: oklch(0.156 0.004 165 / 0.78);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  border-bottom-color: var(--line-soft);
}

.nav-inner {
  max-width: var(--container);
  margin-inline: auto;
  padding: 16px var(--gutter);
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.0625rem;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.brand img {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  object-fit: cover;
}

.nav-links {
  display: flex;
  gap: 28px;
  margin-inline: auto;
}

.nav-links a {
  font-size: 0.9375rem;
  color: var(--muted);
  transition: color var(--t-state) var(--ease);
}

.nav-links a:hover {
  color: var(--ink);
}

.nav-cta {
  padding: 11px 20px;
  font-size: 0.875rem;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }

  .nav-cta {
    margin-inline-start: auto;
  }
}
</style>
