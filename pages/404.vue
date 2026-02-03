<template>
  <div class="min-h-screen bg-light flex items-center justify-center px-4">
    <div class="text-center max-w-lg">
      <!-- 404 Number -->
      <h1 class="display-huge gradient-text mb-4">404</h1>

      <!-- Message -->
      <h2 class="display-small text-dark mb-4">Page not found</h2>
      <p class="text-dark-muted mb-8 leading-relaxed">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Back to Home</span>
        </NuxtLink>
        <a href="mailto:support@metea-app.com" class="btn-secondary">
          <span>Contact Support</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '404 - Page Not Found | Metea',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>
