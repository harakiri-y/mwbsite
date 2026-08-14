<template>
  <LegalPageShell
    title="Support"
    subtitle="We are here to help you get the most out of Metea"
  >
    <div class="legal-doc">
      <section class="support-hero-card">
        <div class="support-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </div>
        <div>
          <h2 class="support-card-title">Contact us via App Store</h2>
          <p class="support-card-lead">
            The best way to reach us is through the App Store. You can contact our support team, report issues, or provide feedback directly.
          </p>
          <a
            href="https://apps.apple.com/app/metea/id6756438562"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>View on App Store</span>
          </a>
        </div>
      </section>

      <section class="support-faq-block">
        <h2 class="support-faq-heading">Frequently asked questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>How does Metea access my health data?</h3>
            <p>
              Through Apple's HealthKit framework. You choose which data types to share on the permission screen, and you can change or revoke that choice at any time under Settings, Privacy &amp; Security, Health. Metea reads; it does not write to your health record.
            </p>
          </div>
          <div class="faq-item">
            <h3>Where does my health data go?</h3>
            <p>
              The raw HealthKit data stays on your device, with your personal history synced through your own iCloud account. To write your daily briefing, a reduced summary of recent metrics is sent to the language model that generates the text. It carries no name, no email, and no Apple ID, and it is not used to train models. The privacy policy lists exactly which fields are included.
            </p>
          </div>
          <div class="faq-item">
            <h3>Do I need an Apple Watch?</h3>
            <p>
              No, but it changes what Metea can tell you. An iPhone alone covers steps, workouts, and anything you log by hand. A Watch adds heart rate variability, sleep stages, resting heart rate, and overnight respiratory rate, which is where most of the useful patterns are.
            </p>
          </div>
          <div class="faq-item">
            <h3>How do I delete my data?</h3>
            <p>
              Delete your account in the app under Settings. That removes your Metea records from iCloud and clears the local store. Deleting the app alone removes the local copy but leaves the iCloud record in place, so use the in-app option if you want everything gone.
            </p>
          </div>
          <div class="faq-item">
            <h3>What devices are supported?</h3>
            <p>
              iPhone running iOS 18 or later. An Apple Watch running watchOS 10 or later is optional and adds the overnight and variability metrics. Wrist temperature needs Series 8 or newer.
            </p>
          </div>
        </div>
      </section>

      <section class="support-band">
        <h2 class="support-band-title">Still need help?</h2>
        <p class="support-band-lead">
          If you could not find an answer to your question, please reach out to us through the App Store. We typically respond within 24–48 hours.
        </p>
        <div class="support-actions">
          <a
            href="https://apps.apple.com/app/metea/id6756438562"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost"
          >
            <span>App Support</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://apps.apple.com/app/metea/id6756438562"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost"
          >
            <span>Report a Problem</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  </LegalPageShell>
</template>

<script setup lang="ts">
useHead({
  title: 'Support - Metea',
  meta: [
    { name: 'description', content: 'Get help with Metea. Contact our support team through the App Store or find answers to frequently asked questions.' }
  ]
})
</script>
