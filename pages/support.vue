<template>
  <div class="min-h-screen bg-light">
    <NavBar />

    <main class="pt-32 pb-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <NuxtLink to="/" class="inline-flex items-center text-dark-muted hover:text-primary transition-colors mb-8">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </NuxtLink>

          <h1 class="display-medium text-dark mb-4">Support</h1>
          <p class="text-dark-muted">We're here to help you get the most out of Metea</p>
        </div>

        <div class="space-y-8">
          <!-- App Store Support Card -->
          <section class="card p-8">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 rounded-2xl bg-dark flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="display-small text-dark mb-2">Contact Us via App Store</h2>
                <p class="text-dark-muted leading-relaxed mb-6">
                  The best way to reach us is through the App Store. You can contact our support team, report issues, or provide feedback directly.
                </p>
                <!-- Placeholder App Store Link -->
                <a
                  href="https://apps.apple.com/app/metea/id000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary inline-flex"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>View on App Store</span>
                </a>
                <p class="text-sm text-dark-muted mt-3">
                  <em>Note: The app will be available on the App Store soon.</em>
                </p>
              </div>
            </div>
          </section>

          <!-- FAQ Section -->
          <section>
            <h2 class="display-small text-dark mb-6">Frequently Asked Questions</h2>

            <div class="space-y-4">
              <div class="card p-6">
                <h3 class="font-semibold text-dark mb-2" style="font-family: var(--font-display);">How does Metea access my health data?</h3>
                <p class="text-dark-muted leading-relaxed">
                  Metea uses Apple's HealthKit framework to securely access your health data. You have full control over which data types you want to share with the app. All data stays on your device and in your iCloud account.
                </p>
              </div>

              <div class="card p-6">
                <h3 class="font-semibold text-dark mb-2" style="font-family: var(--font-display);">Is my health data secure?</h3>
                <p class="text-dark-muted leading-relaxed">
                  Yes, absolutely. Your health data is stored locally on your iPhone and synced via iCloud with end-to-end encryption. We never have access to your personal health information. When AI analysis is performed, only anonymous, aggregated data is used.
                </p>
              </div>

              <div class="card p-6">
                <h3 class="font-semibold text-dark mb-2" style="font-family: var(--font-display);">Do I need an Apple Watch?</h3>
                <p class="text-dark-muted leading-relaxed">
                  While Metea works great with just your iPhone, having an Apple Watch enhances your experience significantly. The Watch provides more detailed health metrics like HRV, continuous heart rate monitoring, and sleep tracking.
                </p>
              </div>

              <div class="card p-6">
                <h3 class="font-semibold text-dark mb-2" style="font-family: var(--font-display);">How do I delete my data?</h3>
                <p class="text-dark-muted leading-relaxed">
                  You can delete all Metea data directly within the app settings. Since your data is stored locally and in your personal iCloud account, deleting the app will remove all associated data. We don't store any of your health data on our servers.
                </p>
              </div>

              <div class="card p-6">
                <h3 class="font-semibold text-dark mb-2" style="font-family: var(--font-display);">What devices are supported?</h3>
                <p class="text-dark-muted leading-relaxed">
                  Metea is available for iPhone running iOS 17 or later. For the best experience, we recommend using an Apple Watch Series 6 or newer, though it's not required.
                </p>
              </div>
            </div>
          </section>

          <!-- Additional Help -->
          <section class="card p-8 bg-cream">
            <h2 class="display-small text-dark mb-4">Still Need Help?</h2>
            <p class="text-dark-muted leading-relaxed mb-6">
              If you couldn't find an answer to your question, please reach out to us through the App Store. We typically respond within 24-48 hours.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/app/metea/id000000000"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary inline-flex justify-center"
              >
                <span class="hover-underline">App Support</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://apps.apple.com/app/metea/id000000000"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary inline-flex justify-center"
              >
                <span class="hover-underline">Report a Problem</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Support - Metea',
  meta: [
    { name: 'description', content: 'Get help with Metea. Contact our support team through the App Store or find answers to frequently asked questions.' }
  ]
})
</script>
