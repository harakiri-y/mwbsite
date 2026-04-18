<template>
  <LegalPageShell
    title="Terms of Service"
    :subtitle="`Last updated: ${lastUpdated}`"
    eyebrow-section="§ 11"
    eyebrow-label="Terms"
  >
    <article class="metea-legal-doc">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the Metea mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Metea is a health and wellness application that:
        </p>
        <ul>
          <li>Integrates with Apple HealthKit to access your health data</li>
          <li>Provides AI-powered analysis and insights based on your health metrics</li>
          <li>Offers personalized recommendations for stress management, sleep, and well-being</li>
          <li>Stores all health data locally on your device or in your iCloud account</li>
        </ul>
      </section>

      <section>
        <h2>3. Medical Disclaimer</h2>
        <div class="metea-legal-callout metea-legal-callout--warn">
          <p>
            <strong>IMPORTANT:</strong> Metea is NOT a medical device and is NOT intended to diagnose, treat, cure, or prevent any disease or health condition. The App provides general wellness information and insights only. Always consult a qualified healthcare professional before making any health-related decisions. Do not disregard professional medical advice or delay seeking treatment because of information provided by this App.
          </p>
        </div>
      </section>

      <section>
        <h2>4. Eligibility</h2>
        <p>
          You must be at least 16 years old to use this App. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
        </p>
      </section>

      <section>
        <h2>5. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate information when required</li>
          <li>Use the App only for its intended purpose</li>
          <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
          <li>Not use the App for any unlawful purpose</li>
          <li>Maintain the security of your device and any account credentials</li>
          <li>Not share your account with others</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Metea UG (haftungsbeschränkt) or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section>
        <h2>7. Subscription and Payments</h2>
        <p>
          If the App offers premium features through subscription:
        </p>
        <ul>
          <li>Subscriptions are billed through Apple's App Store</li>
          <li>Payment will be charged to your Apple ID account upon purchase confirmation</li>
          <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
          <li>You can manage and cancel subscriptions in your App Store account settings</li>
          <li>Refunds are subject to Apple's refund policies</li>
        </ul>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, METEA UG (HAFTUNGSBESCHRÄNKT) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE APP.
        </p>
      </section>

      <section>
        <h2>9. Disclaimer of Warranties</h2>
        <p>
          THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
      </section>

      <section>
        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Metea UG (haftungsbeschränkt), its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the App or your violation of these Terms.
        </p>
      </section>

      <section>
        <h2>11. Termination</h2>
        <p>
          We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will cease immediately. You may terminate your use by simply uninstalling the App.
        </p>
      </section>

      <section>
        <h2>12. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify you of any material changes through the App or other appropriate means. Your continued use of the App after such modifications constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Germany, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Germany.
        </p>
      </section>

      <section>
        <h2>14. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
        </p>
      </section>

      <section>
        <h2>15. Contact Information</h2>
        <div class="metea-legal-callout">
          <p>
            For questions about these Terms, please contact us through the App Store:<br /><br />
            <strong>App Support:</strong> Use the "App Support" link on the Metea App Store page<br />
            <strong>Report a Problem:</strong> Use the "Report a Problem" feature in the App Store
          </p>
        </div>
      </section>
    </article>
  </LegalPageShell>
</template>

<script setup lang="ts">
const lastUpdated = 'January 28, 2026'

useHead({
  title: 'Terms of Service - Metea',
  meta: [
    { name: 'description', content: 'Metea Terms of Service - Terms and conditions for using the Metea health app.' }
  ]
})
</script>
