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

          <h1 class="display-medium text-dark mb-4">Privacy Policy</h1>
          <p class="text-dark-muted">Last updated: {{ lastUpdated }}</p>
        </div>

        <div class="prose prose-lg max-w-none">
          <!-- Introduction -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">1. Introduction and Overview</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              Metea ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal health data. This Privacy Policy explains how we handle information when you use the Metea mobile application (the "App").
            </p>
            <div class="card p-6 bg-primary/5 border-primary/20">
              <p class="text-dark font-semibold mb-2">Key Privacy Principle:</p>
              <p class="text-dark-muted">
                <strong>Your health data stays with you.</strong> All personal health information is stored on your iPhone and in your personal iCloud account (end-to-end encrypted by Apple). We do not collect, process, store, or have access to your personal health data on our servers. Only you can access your data.
              </p>
            </div>
          </section>

          <!-- Data Controller -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">2. Data Controller</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              The data controller responsible for this App is the developer of Metea. For any inquiries, please contact us through the App Store.
            </p>
            <div class="card p-6">
              <p class="text-dark">
                <strong>Contact:</strong> Via the App Store "App Support" link on the Metea app page
              </p>
            </div>
          </section>

          <!-- Data Storage -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">3. Data Storage and Processing Location</h2>

            <h3 class="text-xl font-semibold text-dark mb-3">3.1 Local Storage on Your Device</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              All health data accessed from Apple HealthKit is stored <strong>exclusively on your iPhone</strong> in a secure, encrypted local database (Realm) within an App Group container. This includes but is not limited to:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li>Heart rate and heart rate variability (HRV) data</li>
              <li>Sleep analysis data</li>
              <li>Activity and workout data</li>
              <li>Stress indicators derived from HRV</li>
              <li>Your Personal Health Twin profile (AI-generated insights about your health patterns)</li>
              <li>Any other HealthKit data types you authorize</li>
            </ul>
            <p class="text-dark-muted leading-relaxed mb-4">
              This data is processed locally on your device using Apple's Core ML framework for on-device machine learning. <strong>We have no technical ability to access this data.</strong> The database is protected by iOS's built-in encryption and can only be accessed when your device is unlocked.
            </p>

            <h3 class="text-xl font-semibold text-dark mb-3">3.2 iCloud Storage</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              Your data is stored in your personal iCloud account, which provides secure cloud backup and synchronization. This storage:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li>Uses Apple's end-to-end encrypted iCloud infrastructure</li>
              <li>Is governed by Apple's Privacy Policy and your agreement with Apple</li>
              <li>Remains under your control through your Apple ID settings</li>
              <li>Does not grant us any access to your data—only you can access it</li>
              <li>Enables seamless syncing across your Apple devices</li>
              <li>Provides automatic backup to prevent data loss</li>
            </ul>

            <h3 class="text-xl font-semibold text-dark mb-3">3.3 No Server-Side Processing of Personal Health Data</h3>
            <p class="text-dark-muted leading-relaxed">
              <strong>We do not operate servers that store or process your personal health data.</strong> All AI analysis and insights are generated on your device using Apple's Core ML framework or are processed anonymously as described in Section 4. Your Personal Health Twin—the AI model that learns your individual health patterns—exists only on your device and is never transmitted to our servers.
            </p>
          </section>

          <!-- AI Analysis -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">4. AI Analysis and Anonymization</h2>

            <h3 class="text-xl font-semibold text-dark mb-3">4.1 On-Device AI Processing</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              The primary AI analysis in Metea occurs entirely on your device using Apple's Core ML framework. Our machine learning models are embedded within the App and process your health data locally without any data transmission to external servers. This includes:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li><strong>Personal Health Twin:</strong> An AI model that learns your individual health patterns. This model is created and stored exclusively on your device and is never transmitted anywhere.</li>
              <li><strong>Stress & HRV Analysis:</strong> Real-time analysis of heart rate variability to detect stress patterns</li>
              <li><strong>Sleep Quality Assessment:</strong> Analysis of sleep data to provide insights</li>
              <li><strong>Trend Detection:</strong> Pattern recognition across your health metrics over time</li>
            </ul>

            <h3 class="text-xl font-semibold text-dark mb-3">4.2 Privacy-Safe AI Prompts</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              When generating personalized insights, our AI system uses privacy-safe prompts that contain only aggregated metrics and derived patterns. <strong>Raw HealthKit samples are never transmitted.</strong> For example, instead of sending your individual heart rate readings, the system might use aggregated information like "average resting heart rate: 65 BPM, typical range: 58-72 BPM."
            </p>

            <h3 class="text-xl font-semibold text-dark mb-3">4.3 Anonymous Data Aggregation (Optional)</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              If you opt in to anonymous data sharing in the App settings, aggregated and fully anonymized data may be used to improve our algorithms. Our anonymization process includes:
            </p>
            <div class="card p-6 bg-primary/5 border-primary/20 mb-4">
              <ul class="list-disc pl-6 text-dark-muted space-y-2">
                <li><strong>User ID Hashing:</strong> Your identifier is cryptographically hashed and cannot be reversed</li>
                <li><strong>Location Generalization:</strong> GPS coordinates are rounded to a 5km grid, making precise location identification impossible</li>
                <li><strong>Timestamp Removal:</strong> Specific times are removed; only general patterns (e.g., "morning," "evening") may be retained</li>
                <li><strong>PII Stripping:</strong> All personally identifiable information is removed before any data leaves your device</li>
                <li><strong>No Re-identification:</strong> The anonymized data cannot be linked back to you or your device</li>
                <li><strong>Immediate Processing:</strong> Anonymized data is processed in real-time and not stored persistently</li>
              </ul>
            </div>

            <h3 class="text-xl font-semibold text-dark mb-3">4.4 Granular Sharing Controls</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              You have full control over what data, if any, is shared anonymously:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li><strong>Master Toggle:</strong> Disable all anonymous data sharing with a single setting</li>
              <li><strong>Per-Metric Controls:</strong> Choose individually whether to share stress data, sleep data, activity data, etc.</li>
              <li><strong>Location Sharing:</strong> Separate control for whether generalized location data is included</li>
            </ul>
            <p class="text-dark-muted leading-relaxed">
              Under GDPR Article 4(1), anonymized data that cannot identify an individual is not considered personal data. Our anonymization process is designed to meet this standard, ensuring that shared data qualifies as truly anonymous.
            </p>
          </section>

          <!-- Apple HealthKit -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">5. Apple HealthKit Integration</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              Metea integrates with Apple HealthKit to access your health and fitness data. In accordance with Apple's HealthKit guidelines:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li>We request only the specific data types necessary for the App's functionality</li>
              <li>You have granular control over which data types to share with the App</li>
              <li>You can revoke access at any time through iOS Settings → Privacy → Health → Metea</li>
              <li>HealthKit data is never used for advertising or marketing purposes</li>
              <li>HealthKit data is never sold to third parties</li>
              <li>HealthKit data is never shared with third parties for their own purposes</li>
            </ul>
          </section>

          <!-- Data We Do Collect -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">6. Information We May Collect</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              While we do not collect your health data, we may collect limited information for App functionality:
            </p>

            <h3 class="text-xl font-semibold text-dark mb-3">6.1 Account Information (If Applicable)</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              If the App offers account creation: email address, display name (optional), and authentication credentials. This is stored securely and used solely for account management.
            </p>

            <h3 class="text-xl font-semibold text-dark mb-3">6.2 Technical Data</h3>
            <p class="text-dark-muted leading-relaxed mb-4">
              We may collect anonymized technical data for App improvement:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li>Device type and iOS version (anonymized)</li>
              <li>App version</li>
              <li>Crash reports (anonymized, via Apple's crash reporting)</li>
              <li>General usage statistics (anonymized)</li>
            </ul>

            <h3 class="text-xl font-semibold text-dark mb-3">6.3 Support Communications</h3>
            <p class="text-dark-muted leading-relaxed">
              If you contact our support team, we may retain your communication to provide assistance and improve our services.
            </p>
          </section>

          <!-- Legal Basis GDPR -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">7. Legal Basis for Processing (GDPR)</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              Under the General Data Protection Regulation (GDPR), we process data based on the following legal grounds:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> For accessing HealthKit data and optional features</li>
              <li><strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> To provide the App's core functionality</li>
              <li><strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> For App security, fraud prevention, and service improvement</li>
            </ul>
            <p class="text-dark-muted leading-relaxed">
              For health data specifically, we rely on your <strong>explicit consent</strong> as required by Art. 9(2)(a) GDPR. This consent is obtained through iOS's HealthKit permission dialogs and can be withdrawn at any time.
            </p>
          </section>

          <!-- Your Rights -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">8. Your Rights Under GDPR</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              As a data subject under GDPR, you have the following rights:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li><strong>Right of Access (Art. 15):</strong> Request information about data we process</li>
              <li><strong>Right to Rectification (Art. 16):</strong> Correct inaccurate data</li>
              <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your data ("Right to be Forgotten")</li>
              <li><strong>Right to Restrict Processing (Art. 18):</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a portable format</li>
              <li><strong>Right to Object (Art. 21):</strong> Object to certain types of processing</li>
              <li><strong>Right to Withdraw Consent (Art. 7(3)):</strong> Withdraw consent at any time</li>
            </ul>
            <p class="text-dark-muted leading-relaxed mb-4">
              Since your health data is stored on your device and in your personal iCloud account, you have complete control over it. You can delete all App data by uninstalling the App or clearing App data in iOS Settings. iCloud data can be managed through your Apple ID settings.
            </p>
            <p class="text-dark-muted leading-relaxed">
              To exercise any of these rights regarding data we may hold, please contact us through the App Store using the "App Support" link on the Metea app page.
            </p>
          </section>

          <!-- Data Security -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">9. Data Security</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to ensure data security:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li>All local data is protected by iOS's built-in encryption</li>
              <li>Data at rest is encrypted using Apple's Data Protection</li>
              <li>Any network communications use TLS 1.3 encryption</li>
              <li>We follow Apple's security best practices for iOS development</li>
              <li>Regular security audits and code reviews</li>
            </ul>
          </section>

          <!-- Data Retention -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">10. Data Retention</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              <strong>Health Data:</strong> Stored on your device and in your iCloud account until you delete it or uninstall the App. We have no control over this data and cannot delete it remotely. You can manage your iCloud storage through your Apple ID settings.
            </p>
            <p class="text-dark-muted leading-relaxed mb-4">
              <strong>Account Data:</strong> Retained until you delete your account or request deletion.
            </p>
            <p class="text-dark-muted leading-relaxed">
              <strong>Technical/Analytics Data:</strong> Anonymized data is retained for up to 24 months for service improvement purposes.
            </p>
          </section>

          <!-- International Transfers -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">11. International Data Transfers</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              Your health data is stored locally on your device and in your iCloud account. We do not transfer your data internationally. Apple may transfer iCloud data according to their privacy policy and data processing agreements.
            </p>
            <p class="text-dark-muted leading-relaxed">
              For any limited data we process (account data, support communications), if transferred outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission.
            </p>
          </section>

          <!-- Children -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">12. Children's Privacy</h2>
            <p class="text-dark-muted leading-relaxed">
              The App is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <!-- Third Parties -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">13. Third-Party Services</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              The App may use the following third-party services:
            </p>
            <ul class="list-disc pl-6 text-dark-muted mb-6 space-y-2">
              <li><strong>Apple HealthKit:</strong> For health data access (governed by Apple's Privacy Policy)</li>
              <li><strong>Apple iCloud:</strong> For secure data storage and synchronization (governed by Apple's Privacy Policy)</li>
              <li><strong>Apple App Store:</strong> For app distribution and in-app purchases</li>
            </ul>
            <p class="text-dark-muted leading-relaxed">
              We do not share your health data with any third parties for advertising, marketing, or any other purposes.
            </p>
          </section>

          <!-- Changes -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">14. Changes to This Privacy Policy</h2>
            <p class="text-dark-muted leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of any material changes through the App or via email (if provided). The "Last updated" date at the top indicates when the policy was last revised. Continued use of the App after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <!-- Supervisory Authority -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">15. Supervisory Authority</h2>
            <p class="text-dark-muted leading-relaxed">
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with a supervisory authority. You can find your local data protection authority through the European Data Protection Board at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">edpb.europa.eu</a>.
            </p>
          </section>

          <!-- Contact -->
          <section class="mb-12">
            <h2 class="display-small text-dark mb-4">16. Contact Us</h2>
            <p class="text-dark-muted leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us through the App Store:
            </p>
            <div class="card p-6">
              <p class="text-dark">
                <strong>App Support:</strong> Use the "App Support" link on the Metea App Store page<br />
                <strong>Report a Problem:</strong> Use the "Report a Problem" feature in the App Store
              </p>
            </div>
          </section>

          <!-- Summary Box -->
          <section class="mb-12">
            <div class="card p-8 bg-primary/5 border-primary/20">
              <h2 class="display-small text-dark mb-4">Privacy Summary</h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-dark mb-2 flex items-center">
                    <svg class="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    What We DO
                  </h4>
                  <ul class="text-dark-muted text-sm space-y-1">
                    <li>Store health data on your iPhone & iCloud</li>
                    <li>Use Apple's end-to-end encryption</li>
                    <li>Process AI insights on-device via Core ML</li>
                    <li>Keep your Personal Health Twin local-only</li>
                    <li>Give you granular control over data sharing</li>
                    <li>Anonymize any optionally shared data</li>
                    <li>Comply with GDPR and Apple guidelines</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-dark mb-2 flex items-center">
                    <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    What We DON'T Do
                  </h4>
                  <ul class="text-dark-muted text-sm space-y-1">
                    <li>Store your health data on our servers</li>
                    <li>Transmit raw HealthKit samples</li>
                    <li>Sell or share identifiable data</li>
                    <li>Use data for advertising or marketing</li>
                    <li>Track you across apps or websites</li>
                    <li>Access your data without your permission</li>
                    <li>Share your Personal Health Twin externally</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const lastUpdated = 'January 28, 2026'

useHead({
  title: 'Privacy Policy - Metea',
  meta: [
    { name: 'description', content: 'Metea Privacy Policy - Learn how we protect your health data with on-device storage, iCloud encryption, and anonymous AI analysis.' }
  ]
})
</script>

<style scoped>
.prose h2 {
  margin-top: 0;
}
.prose h3 {
  margin-top: 1.5rem;
}
.prose ul {
  margin-bottom: 1rem;
}
</style>
