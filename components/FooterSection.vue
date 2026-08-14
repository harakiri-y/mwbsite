<template>
  <footer class="foot">
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <NuxtLink to="/" class="foot-logo">
            <img src="/logo.png" alt="" width="30" height="30" />
            <span>Metea</span>
          </NuxtLink>
          <p>
            Reads your Apple Health data and writes you one short briefing a
            day. Built for iPhone and Apple Watch.
          </p>
        </div>

        <nav class="foot-col" aria-label="Product">
          <h3>Product</h3>
          <a href="/#how">How it reads</a>
          <a href="/#agents">Agents</a>
          <a href="/#app">Inside the app</a>
          <a :href="APP_STORE" target="_blank" rel="noopener noreferrer">App Store</a>
        </nav>

        <nav class="foot-col" aria-label="Legal">
          <h3>Legal</h3>
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <NuxtLink to="/terms">Terms</NuxtLink>
          <NuxtLink to="/imprint">Imprint</NuxtLink>
          <NuxtLink to="/support">Support</NuxtLink>
        </nav>
      </div>

      <div class="foot-base">
        <span>&copy; {{ year }} Metea</span>
        <span>Apple Health, Apple Watch, and App Store are trademarks of Apple Inc.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const APP_STORE = 'https://apps.apple.com/app/metea/id6756438562'
const year = new Date().getFullYear()
</script>

<style scoped>
.foot {
  border-top: 1px solid var(--line-soft);
  padding: clamp(56px, 8vh, 88px) 0 40px;
  background: var(--bg);
}

.foot-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 5vw, 64px);
}

.foot-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.0625rem;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.foot-logo img {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  object-fit: cover;
}

.foot-brand p {
  margin: 16px 0 0;
  font-size: 0.9375rem;
  color: var(--muted);
  max-width: 40ch;
}

.foot-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
}

.foot-col h3 {
  margin: 0 0 4px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--faint);
}

.foot-col a {
  font-size: 0.9375rem;
  color: var(--muted);
  transition: color var(--t-state) var(--ease);
}

.foot-col a:hover {
  color: var(--ink);
}

.foot-base {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  justify-content: space-between;
  margin-top: clamp(48px, 7vh, 72px);
  padding-top: 24px;
  border-top: 1px solid var(--line-soft);
  font-size: 0.8125rem;
  color: var(--faint);
}

@media (max-width: 760px) {
  .foot-grid {
    grid-template-columns: 1fr 1fr;
  }

  .foot-brand {
    grid-column: 1 / -1;
  }
}
</style>
