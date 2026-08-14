<template>
  <div class="nf">
    <div class="nf-inner">
      <p class="nf-code">404</p>
      <h1 class="d-l nf-title">This page is not here.</h1>
      <p class="lead nf-lead">
        The link may be old, or the address slightly off. The home page and the
        support page below both still work.
      </p>
      <div class="nf-actions">
        <NuxtLink to="/" class="btn btn-primary">Go to the home page</NuxtLink>
        <NuxtLink to="/support" class="btn btn-ghost">Open support</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Page not found | Metea',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<style scoped>
.nf {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 80px var(--gutter);
  background:
    radial-gradient(ellipse 60% 60% at 50% 0%, oklch(0.716 0.09 182 / 0.12), transparent 70%),
    var(--bg);
}

.nf-inner {
  max-width: 46ch;
  text-align: center;
}

.nf-code {
  margin: 0 0 20px;
  font-size: 0.8125rem;
  letter-spacing: 0.14em;
  color: var(--teal);
  font-variant-numeric: tabular-nums;
}

.nf-title {
  margin: 0;
}

.nf-lead {
  margin: 20px auto 32px;
}

.nf-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
</style>
