<template>
  <div class="err">
    <div class="err-inner">
      <p class="err-code">{{ error?.statusCode || 500 }}</p>
      <h1 class="d-l err-title">{{ heading }}</h1>
      <p class="lead err-lead">{{ body }}</p>
      <div class="err-actions">
        <button class="btn btn-primary" @click="handleError">Go to the home page</button>
        <a href="mailto:support@metea-app.com" class="btn btn-ghost">Email support</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const isNotFound = computed(() => props.error?.statusCode === 404)

const heading = computed(() =>
  isNotFound.value ? 'This page is not here.' : 'Something broke on our end.'
)

const body = computed(() =>
  isNotFound.value
    ? 'The link may be old, or the address slightly off. The home page still works.'
    : 'The page failed to load. Reloading usually fixes it. If it keeps happening, send us the address you were trying to open.'
)

useHead({
  title: `${props.error?.statusCode || 'Error'} | Metea`,
  meta: [{ name: 'robots', content: 'noindex' }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap'
    }
  ]
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style>
/* error.vue rendert außerhalb des App-Layouts: Tokens hier eigenständig. */
:root {
  color-scheme: dark;
}

body {
  margin: 0;
  background: #0b0d0c;
  color: oklch(0.92 0.012 85);
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.err {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 80px clamp(20px, 4vw, 32px);
  background:
    radial-gradient(ellipse 60% 60% at 50% 0%, oklch(0.716 0.09 182 / 0.12), transparent 70%),
    #0b0d0c;
}

.err-inner {
  max-width: 46ch;
  text-align: center;
}

.err-code {
  margin: 0 0 20px;
  font-size: 0.8125rem;
  letter-spacing: 0.14em;
  color: oklch(0.716 0.09 182);
  font-variant-numeric: tabular-nums;
}

.err-title {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: oklch(0.961 0.003 106);
  text-wrap: balance;
}

.err-lead {
  margin: 20px auto 32px;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: oklch(0.688 0.013 175);
}

.err-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.err .btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 26px;
  border-radius: 999px;
  font: inherit;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  transition: background 200ms cubic-bezier(0.16, 1, 0.3, 1), color 200ms;
}

.err .btn-primary {
  background: oklch(0.828 0.061 167);
  color: #0b0d0c;
  font-weight: 600;
}

.err .btn-primary:hover {
  background: oklch(0.88 0.07 167);
}

.err .btn-ghost {
  border-color: oklch(0.303 0.02 186);
  color: oklch(0.92 0.012 85);
}

.err .btn-ghost:hover {
  background: oklch(0.225 0.015 181);
}

@media (prefers-reduced-motion: reduce) {
  .err * {
    transition-duration: 0.01ms !important;
  }
}
</style>
