<template>
  <LegalPageShell
    title="Imprint"
    subtitle="Legal notice"
  >
    <article class="legal-doc">
      <section>
        <h2>About Metea</h2>
        <p>
          Metea is a health and wellness app that analyzes your Apple Health data using AI to provide personalized insights for stress management, sleep optimization, and overall well-being.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For questions, support, or inquiries, please contact us through the App Store:
        </p>
        <div class="legal-callout">
          <p>
            <strong>App Support:</strong> Use the "App Support" link on the Metea App Store page<br />
            <strong>Report a Problem:</strong> Use the "Report a Problem" feature in the App Store
          </p>
        </div>
      </section>

      <section>
        <h2>EU Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (ODR):
        </p>
        <p>
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
      </section>

      <section>
        <h2>Liability for Content</h2>
        <p>
          We make every effort to ensure the accuracy and completeness of information on this website. However, we cannot guarantee that all information is complete, accurate, or up-to-date at all times. We reserve the right to modify or remove content without prior notice.
        </p>
      </section>

      <section>
        <h2>Liability for Links</h2>
        <p>
          This website may contain links to external websites. We have no influence over the content of these external sites and therefore cannot assume any liability for them. The respective provider or operator is always responsible for the content of linked pages. Linked pages were checked for possible legal violations at the time of linking. If we become aware of any legal violations, we will remove such links immediately.
        </p>
      </section>

      <section>
        <h2>Copyright</h2>
        <p>
          The content and works on this website are protected by copyright. Any reproduction, processing, distribution, or commercialization beyond the scope of copyright law requires prior written consent. Downloads and copies of this site are only permitted for private, non-commercial use. If you become aware of a copyright infringement, please inform us so we can take appropriate action.
        </p>
      </section>
    </article>
  </LegalPageShell>
</template>

<script setup lang="ts">
useHead({
  title: 'Imprint - Metea',
  meta: [
    { name: 'description', content: 'Metea Imprint - Legal notice and contact information.' }
  ]
})
</script>
