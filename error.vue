<template>
  <div class="min-h-screen bg-light flex items-center justify-center px-4">
    <div class="text-center max-w-lg">
      <!-- Error Code -->
      <h1 class="display-huge gradient-text mb-4">{{ error?.statusCode || '500' }}</h1>

      <!-- Message -->
      <h2 class="display-small text-dark mb-4">
        {{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </h2>
      <p class="text-dark-muted mb-8 leading-relaxed">
        {{ error?.statusCode === 404
          ? "Sorry, we couldn't find the page you're looking for."
          : "An unexpected error occurred. Please try again later."
        }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="handleError" class="btn-primary">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Back to Home</span>
        </button>
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

useHead({
  title: `${props.error?.statusCode || 'Error'} | Metea`,
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap');

:root {
  --color-primary: #1A7F5A;
  --color-dark: #0a0a0a;
  --color-dark-muted: #4a4a4a;
  --color-light: #fafafa;
  --color-gray: #e5e5e5;
  --font-display: 'Syne', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

body {
  font-family: var(--font-body);
  background: var(--color-light);
}

.display-huge {
  font-family: var(--font-display);
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 800;
  line-height: 0.9;
}

.display-small {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, #2D9B6E 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-dark { color: var(--color-dark); }
.text-dark-muted { color: var(--color-dark-muted); }
.bg-light { background: var(--color-light); }

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--color-dark);
  color: white;
  font-weight: 500;
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary:hover {
  background: var(--color-primary);
}
</style>
