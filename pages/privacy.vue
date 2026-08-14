<template>
  <LegalPageShell
    title="Privacy Policy"
    :subtitle="`Last updated: ${lastUpdated}`"
  >
    <article class="legal-doc">
          <!-- Introduction -->
          <section>
            <h2>1. Introduction and Overview</h2>
            <p>
              Metea ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal health data. This Privacy Policy explains how we handle information when you use the Metea mobile application (the "App").
            </p>
            <div class="legal-callout legal-callout--accent">
              <p><strong>Key Privacy Principle:</strong></p>
              <p>
                <strong>Your raw health data stays on your device.</strong> All personal health information is stored on your iPhone and in your personal iCloud account (end-to-end encrypted by Apple). We operate no servers that store your HealthKit data, and we cannot read your iCloud record.
              </p>
              <p>
                <strong>One exception, stated plainly:</strong> to write your daily briefing and answer your questions in the coach, a reduced summary of recent metrics is sent to OpenAI, our processor for text generation. It contains aggregated values such as "average resting heart rate 65 bpm, typical range 58 to 72", never raw HealthKit samples, and it carries no name, email, or Apple ID. Section 4 describes this in full.
              </p>
            </div>
          </section>

          <!-- Data Controller -->
          <section>
            <h2>2. Data Controller</h2>
            <p>
              The data controller responsible for this App is the developer of Metea. For any inquiries, please contact us through the App Store.
            </p>
            <div class="legal-callout">
              <p>
                <strong>Contact:</strong> Via the App Store "App Support" link on the Metea app page
              </p>
            </div>
          </section>

          <!-- Data Storage -->
          <section>
            <h2>3. Data Storage and Processing Location</h2>

            <h3>3.1 Local Storage on Your Device</h3>
            <p>
              All health data accessed from Apple HealthKit is stored <strong>exclusively on your iPhone</strong> in a secure, encrypted local database (Realm) within an App Group container. This includes but is not limited to:
            </p>
            <ul>
              <li>Heart rate and heart rate variability (HRV) data</li>
              <li>Sleep analysis data</li>
              <li>Activity and workout data</li>
              <li>Stress indicators derived from HRV</li>
              <li>Your Personal Health Twin profile (AI-generated insights about your health patterns)</li>
              <li>Any other HealthKit data types you authorize</li>
            </ul>
            <p>
              This data is processed locally on your device using Apple's Core ML framework for on-device machine learning. <strong>We have no technical ability to access this data.</strong> The database is protected by iOS's built-in encryption and can only be accessed when your device is unlocked.
            </p>

            <h3>3.2 iCloud Storage</h3>
            <p>
              Your data is stored in your personal iCloud account, which provides secure cloud backup and synchronization. This storage:
            </p>
            <ul>
              <li>Uses Apple's end-to-end encrypted iCloud infrastructure</li>
              <li>Is governed by Apple's Privacy Policy and your agreement with Apple</li>
              <li>Remains under your control through your Apple ID settings</li>
              <li>Does not grant us any access to your data—only you can access it</li>
              <li>Enables seamless syncing across your Apple devices</li>
              <li>Provides automatic backup to prevent data loss</li>
            </ul>

            <h3>3.3 No Metea Servers Hold Your Health Data</h3>
            <p>
              <strong>We operate no servers that store your personal health data.</strong> Your raw HealthKit records, your local database, and your Personal Health Twin (the model of your individual patterns) exist on your device and in your own iCloud account only. They are never transmitted to us.
            </p>
            <p>
              Text generation is the one part that leaves the device, and it goes to OpenAI rather than to a Metea server. What is sent, and what is not, is set out in Section 4.2.
            </p>
          </section>

          <!-- AI Analysis -->
          <section>
            <h2>4. AI Analysis and Anonymization</h2>

            <h3>4.1 On-Device Processing</h3>
            <p>
              The measurement and pattern analysis in Metea runs entirely on your device using Apple's Core ML framework. These models are embedded in the App and read your health data locally, with no transmission to any server. This includes:
            </p>
            <ul>
              <li><strong>Personal Health Twin:</strong> An AI model that learns your individual health patterns. This model is created and stored exclusively on your device and is never transmitted anywhere.</li>
              <li><strong>Stress & HRV Analysis:</strong> Real-time analysis of heart rate variability to detect stress patterns</li>
              <li><strong>Sleep Quality Assessment:</strong> Analysis of sleep data to provide insights</li>
              <li><strong>Trend Detection:</strong> Pattern recognition across your health metrics over time</li>
            </ul>

            <h3>4.2 Text Generation by OpenAI</h3>
            <p>
              The written briefing and the coach replies are produced by a large language model operated by <strong>OpenAI, L.L.C.</strong> (United States), acting as our processor under Art. 28 GDPR. This is the only processing step that leaves your device.
            </p>
            <p>
              <strong>What is sent:</strong> a compact set of aggregated values and derived patterns, for example "average resting heart rate 65 bpm, typical range 58 to 72", "sleep efficiency 91 percent", "HRV 14 percent below your 30-day baseline". <strong>Raw HealthKit samples are never transmitted.</strong> The request carries no name, no email address, and no Apple ID.
            </p>
            <p>
              <strong>Retention and training:</strong> under our agreement with OpenAI, this data is not used to train their models. OpenAI retains API requests for a limited period for abuse monitoring and then deletes them.
            </p>
            <p>
              <strong>Transfer to a third country:</strong> processing takes place in the United States. The transfer is covered by the EU Standard Contractual Clauses and OpenAI's certification under the EU-U.S. Data Privacy Framework.
            </p>
            <p>
              <strong>Legal basis:</strong> because these values are derived from health data, we rely on your explicit consent under Art. 9(2)(a) GDPR, given when you enable the briefing. Withdrawing it in the App settings stops all transmission; the on-device analysis in Section 4.1 continues to work without it.
            </p>

            <h3>4.3 Anonymous Data Aggregation (Optional)</h3>
            <p>
              If you opt in to anonymous data sharing in the App settings, aggregated and fully anonymized data may be used to improve our algorithms. Our anonymization process includes:
            </p>
            <div class="legal-callout legal-callout--accent">
              <ul>
                <li><strong>User ID Hashing:</strong> Your identifier is cryptographically hashed and cannot be reversed</li>
                <li><strong>Location Generalization:</strong> GPS coordinates are rounded to a 5km grid, making precise location identification impossible</li>
                <li><strong>Timestamp Removal:</strong> Specific times are removed; only general patterns (e.g., "morning," "evening") may be retained</li>
                <li><strong>PII Stripping:</strong> All personally identifiable information is removed before any data leaves your device</li>
                <li><strong>No Re-identification:</strong> The anonymized data cannot be linked back to you or your device</li>
                <li><strong>Immediate Processing:</strong> Anonymized data is processed in real-time and not stored persistently</li>
              </ul>
            </div>

            <h3>4.4 Granular Sharing Controls</h3>
            <p>
              You have full control over what data, if any, is shared anonymously:
            </p>
            <ul>
              <li><strong>Master Toggle:</strong> Disable all anonymous data sharing with a single setting</li>
              <li><strong>Per-Metric Controls:</strong> Choose individually whether to share stress data, sleep data, activity data, etc.</li>
              <li><strong>Location Sharing:</strong> Separate control for whether generalized location data is included</li>
            </ul>
            <p>
              Under GDPR Article 4(1), anonymized data that cannot identify an individual is not considered personal data. Our anonymization process is designed to meet this standard, ensuring that shared data qualifies as truly anonymous.
            </p>
          </section>

          <!-- Apple HealthKit -->
          <section>
            <h2>5. Apple HealthKit Integration</h2>
            <p>
              Metea integrates with Apple HealthKit to access your health and fitness data. In accordance with Apple's HealthKit guidelines:
            </p>
            <ul>
              <li>We request only the specific data types necessary for the App's functionality</li>
              <li>You have granular control over which data types to share with the App</li>
              <li>You can revoke access at any time through iOS Settings → Privacy → Health → Metea</li>
              <li>HealthKit data is never used for advertising or marketing purposes</li>
              <li>HealthKit data is never sold to third parties</li>
              <li>HealthKit data is never shared with third parties for their own purposes</li>
            </ul>
          </section>

          <!-- Data We Do Collect -->
          <section>
            <h2>6. Information We May Collect</h2>
            <p>
              While we do not collect your health data, we may collect limited information for App functionality:
            </p>

            <h3>6.1 Account Information (If Applicable)</h3>
            <p>
              If the App offers account creation: email address, display name (optional), and authentication credentials. This is stored securely and used solely for account management.
            </p>

            <h3>6.2 Technical Data</h3>
            <p>
              We may collect anonymized technical data for App improvement:
            </p>
            <ul>
              <li>Device type and iOS version (anonymized)</li>
              <li>App version</li>
              <li>Crash reports (anonymized, via Apple's crash reporting)</li>
              <li>General usage statistics (anonymized)</li>
            </ul>

            <h3>6.3 Support Communications</h3>
            <p>
              If you contact our support team, we may retain your communication to provide assistance and improve our services.
            </p>
          </section>

          <!-- Legal Basis GDPR -->
          <section>
            <h2>7. Legal Basis for Processing (GDPR)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), we process data based on the following legal grounds:
            </p>
            <ul>
              <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> For accessing HealthKit data and optional features</li>
              <li><strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> To provide the App's core functionality</li>
              <li><strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> For App security, fraud prevention, and service improvement</li>
            </ul>
            <p>
              For health data specifically, we rely on your <strong>explicit consent</strong> as required by Art. 9(2)(a) GDPR. This consent is obtained through iOS's HealthKit permission dialogs and can be withdrawn at any time.
            </p>
          </section>

          <!-- Your Rights -->
          <section>
            <h2>8. Your Rights Under GDPR</h2>
            <p>
              As a data subject under GDPR, you have the following rights:
            </p>
            <ul>
              <li><strong>Right of Access (Art. 15):</strong> Request information about data we process</li>
              <li><strong>Right to Rectification (Art. 16):</strong> Correct inaccurate data</li>
              <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your data ("Right to be Forgotten")</li>
              <li><strong>Right to Restrict Processing (Art. 18):</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a portable format</li>
              <li><strong>Right to Object (Art. 21):</strong> Object to certain types of processing</li>
              <li><strong>Right to Withdraw Consent (Art. 7(3)):</strong> Withdraw consent at any time</li>
            </ul>
            <p>
              Since your health data is stored on your device and in your personal iCloud account, you have complete control over it. You can delete all App data by uninstalling the App or clearing App data in iOS Settings. iCloud data can be managed through your Apple ID settings.
            </p>
            <p>
              To exercise any of these rights regarding data we may hold, please contact us through the App Store using the "App Support" link on the Metea app page.
            </p>
          </section>

          <!-- Data Security -->
          <section>
            <h2>9. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure data security:
            </p>
            <ul>
              <li>All local data is protected by iOS's built-in encryption</li>
              <li>Data at rest is encrypted using Apple's Data Protection</li>
              <li>Any network communications use TLS 1.3 encryption</li>
              <li>We follow Apple's security best practices for iOS development</li>
              <li>Regular security audits and code reviews</li>
            </ul>
          </section>

          <!-- Data Retention -->
          <section>
            <h2>10. Data Retention</h2>
            <p>
              <strong>Health Data:</strong> Stored on your device and in your iCloud account until you delete it or uninstall the App. We have no control over this data and cannot delete it remotely. You can manage your iCloud storage through your Apple ID settings.
            </p>
            <p>
              <strong>Account Data:</strong> Retained until you delete your account or request deletion.
            </p>
            <p>
              <strong>Technical/Analytics Data:</strong> Anonymized data is retained for up to 24 months for service improvement purposes.
            </p>
          </section>

          <!-- International Transfers -->
          <section>
            <h2>11. International Data Transfers</h2>
            <p>
              Your health data is stored locally on your device and in your iCloud account. We do not transfer your data internationally. Apple may transfer iCloud data according to their privacy policy and data processing agreements.
            </p>
            <p>
              For any limited data we process (account data, support communications), if transferred outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission.
            </p>
          </section>

          <!-- Children -->
          <section>
            <h2>12. Children's Privacy</h2>
            <p>
              The App is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <!-- Third Parties -->
          <section>
            <h2>13. Third-Party Services</h2>
            <p>
              The App may use the following third-party services:
            </p>
            <ul>
              <li><strong>Apple HealthKit:</strong> For health data access (governed by Apple's Privacy Policy)</li>
              <li><strong>Apple iCloud:</strong> For secure data storage and synchronization (governed by Apple's Privacy Policy)</li>
              <li><strong>Apple App Store:</strong> For app distribution and in-app purchases</li>
              <li><strong>OpenAI, L.L.C. (United States):</strong> Generates the text of your daily briefing and the coach replies. Receives aggregated metrics only, never raw HealthKit samples and no identifying details. See Section 4.2 for the full description, including retention, transfer safeguards, and how to withdraw consent.</li>
            </ul>
            <p>
              We do not sell your health data, and we do not share it with anyone for advertising or marketing. OpenAI acts strictly as our processor on our instructions.
            </p>
          </section>

          <!-- Changes -->
          <section>
            <h2>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes through the App or via email (if provided). The "Last updated" date at the top indicates when the policy was last revised. Continued use of the App after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <!-- Supervisory Authority -->
          <section>
            <h2>15. Supervisory Authority</h2>
            <p>
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with a supervisory authority. You can find your local data protection authority through the European Data Protection Board at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>.
            </p>
          </section>

          <!-- Contact -->
          <section>
            <h2>16. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us through the App Store:
            </p>
            <div class="legal-callout">
              <p>
                <strong>App Support:</strong> Use the "App Support" link on the Metea App Store page<br />
                <strong>Report a Problem:</strong> Use the "Report a Problem" feature in the App Store
              </p>
            </div>
          </section>

          <!-- Summary Box -->
          <section>
            <div class="legal-callout legal-callout--accent">
              <h2>Privacy Summary</h2>
              <div class="legal-summary-grid">
                <div>
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    What We DO
                  </h4>
                  <ul class="legal-summary-list">
                    <li>Store health data on your iPhone &amp; iCloud</li>
                    <li>Use Apple's end-to-end encryption</li>
                    <li>Analyse your measurements on-device via Core ML</li>
                    <li>Send aggregated values to OpenAI to write your briefing (Section 4.2)</li>
                    <li>Keep your Personal Health Twin local-only</li>
                    <li>Give you granular control over data sharing</li>
                    <li>Anonymize any optionally shared data</li>
                    <li>Comply with GDPR and Apple guidelines</li>
                  </ul>
                </div>
                <div>
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    What We DON'T Do
                  </h4>
                  <ul class="legal-summary-list">
                    <li>Store your health data on our servers</li>
                    <li>Transmit raw HealthKit samples</li>
                    <li>Send your name, email, or Apple ID with a briefing request</li>
                    <li>Let anyone train models on your data</li>
                    <li>Sell or share identifiable data</li>
                    <li>Use data for advertising or marketing</li>
                    <li>Track you across apps or websites</li>
                    <li>Share your Personal Health Twin externally</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    </article>
  </LegalPageShell>
</template>

<script setup lang="ts">
const lastUpdated = 'August 14, 2026'

useHead({
  title: 'Privacy Policy - Metea',
  meta: [
    { name: 'description', content: 'How Metea handles your health data: raw HealthKit records stay on your device, aggregated values go to OpenAI to write your briefing, nothing is sold or used for advertising.' }
  ]
})
</script>
