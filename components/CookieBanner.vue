<template>
  <Transition name="consent">
    <div v-if="visible" class="consent" role="dialog" aria-modal="false" aria-labelledby="consent-title">
      <div class="consent-card">
        <div class="consent-text">
          <h2 id="consent-title">Optional analytics</h2>
          <p>
            The site needs no cookies to work, and none are set before you
            choose. Allowing analytics stores one identifier so we can see which
            pages people read.
            <NuxtLink to="/privacy">What we store</NuxtLink>
          </p>
        </div>
        <div class="consent-actions">
          <button class="btn btn-ghost" @click="decide('declined')">Decline</button>
          <button class="btn btn-primary" @click="decide('accepted')">Allow analytics</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
/**
 * Erscheint nur, wenn es tatsächlich etwas zuzustimmen gibt.
 * Solange die Seite kein Analytics lädt, bleibt ANALYTICS_ENABLED false
 * und der Banner wird nie gezeigt. Ein Banner ohne Wirkung wäre eine
 * Falschaussage, keine Rechtssicherheit.
 */
const ANALYTICS_ENABLED = false
const STORAGE_KEY = 'metea:analytics-consent'

const visible = ref(false)

onMounted(() => {
  if (!ANALYTICS_ENABLED) return
  let stored: string | null = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch {
    // Privater Modus ohne Storage: dann eben ohne Erinnerung fragen.
  }
  if (stored) return
  setTimeout(() => {
    visible.value = true
  }, 1200)
})

function decide(choice: 'accepted' | 'declined') {
  try {
    localStorage.setItem(STORAGE_KEY, choice)
  } catch {
    // Ohne Storage gilt die Entscheidung für diese Sitzung.
  }
  visible.value = false
}
</script>

<style scoped>
.consent {
  position: fixed;
  inset: auto 0 0;
  z-index: var(--z-overlay);
  padding: 16px var(--gutter) calc(16px + env(safe-area-inset-bottom, 0px));
  pointer-events: none;
}

.consent-card {
  pointer-events: auto;
  max-width: 780px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding: 20px 22px;
  border-radius: var(--r-lg);
  background: oklch(0.186 0.008 182 / 0.94);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid var(--line);
  box-shadow: 0 24px 60px -24px oklch(0.05 0 0 / 0.8);
}

.consent-text {
  flex: 1 1 320px;
}

.consent-text h2 {
  margin: 0 0 6px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.consent-text p {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--muted);
}

.consent-text a {
  color: var(--teal-bright);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.consent-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.consent-actions .btn {
  padding: 11px 18px;
  font-size: 0.875rem;
}

.consent-enter-active,
.consent-leave-active {
  transition: opacity var(--t-move) var(--ease), transform var(--t-move) var(--ease);
}

.consent-enter-from,
.consent-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

@media (prefers-reduced-motion: reduce) {
  .consent-enter-from,
  .consent-leave-to {
    transform: none;
  }
}
</style>
