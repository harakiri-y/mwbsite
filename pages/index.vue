<template>
  <div class="page">
    <a href="#main" class="skip-link">Skip to content</a>

    <!-- ══════════════ NAV ══════════════ -->
    <nav ref="navEl" class="nav" :class="{ scrolled: navScrolled }">
      <div class="nav-inner">
        <a href="#top" class="brand" aria-label="Metea, back to top">
          <img src="/logo.png" alt="" width="30" height="30" />
          <span>Metea</span>
        </a>

        <div class="nav-links">
          <a href="#how">How it reads</a>
          <a href="#agents">Agents</a>
          <a href="#app">Inside</a>
          <a href="#privacy">Privacy</a>
        </div>

        <a
          :href="APP_STORE"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary nav-cta"
        >Get Metea</a>
      </div>
    </nav>

    <main id="main">
      <!-- ══════════════ HERO ══════════════ -->
      <header id="top" class="hero">
        <div class="hero-glow" aria-hidden="true"></div>

        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="hero-kicker" data-reveal>
              <span class="pulse" aria-hidden="true"></span>
              For people who already wear an Apple Watch
            </p>

            <h1 class="d-xl hero-title" data-reveal>
              Four years of data.<br />
              One sentence<br />
              <span class="accent">that matters.</span>
            </h1>

            <p class="lead hero-lead" data-reveal>
              Your iPhone and Watch have recorded your sleep, heart, and recovery
              for years. Metea reads all of it and writes you a short briefing
              every morning. No new device. Nothing to log by hand.
            </p>

            <div class="hero-cta" data-reveal>
              <a
                :href="APP_STORE"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download on the App&nbsp;Store
              </a>
              <a href="#how" class="btn btn-ghost">
                See how it reads your data <span class="arrow" aria-hidden="true">→</span>
              </a>
            </div>

            <ul class="hero-facts" data-reveal>
              <li><strong>iOS 18+</strong><span>iPhone and Apple Watch</span></li>
              <li><strong>Apple Health</strong><span>Reads what you already have</span></li>
              <li><strong>Free to start</strong><span>No account before you look</span></li>
            </ul>
          </div>

          <!-- Native Nachbau der App-Oberfläche: scharf auf jeder
               Auflösung, animierbar, kein Bild im Bild. -->
          <div class="hero-device" data-reveal>
            <div class="device">
              <div class="device-screen">
                <div class="app-statusbar" aria-hidden="true">
                  <span>{{ clock }}</span>
                  <span class="app-statusbar-right">
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5 9.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm0-3.3c1.2 0 2.3.5 3.1 1.2l-1 1.1a3.1 3.1 0 0 0-4.2 0l-1-1.1a4.6 4.6 0 0 1 3.1-1.2Zm0-3.3c2 0 3.9.8 5.3 2.1l-1 1.1a6.1 6.1 0 0 0-8.6 0l-1-1.1A7.6 7.6 0 0 1 7.5 2.6Z"/></svg>
                    <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="3" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="15" height="7" rx="1.6" fill="currentColor"/><path d="M20 4v3a2 2 0 0 0 0-3Z" fill="currentColor" opacity="0.5"/></svg>
                  </span>
                </div>

                <div class="app-topbar" aria-hidden="true">
                  <span class="app-chip app-chip--icon">+</span>
                  <span class="app-chip app-chip--today">Today</span>
                  <span class="app-chip app-chip--icon">•••</span>
                </div>

                <div class="briefing">
                  <p class="briefing-label">Metea briefing</p>
                  <p class="briefing-body prose-serif">
                    You slept 6 h 12 m. HRV is 14&nbsp;% under your baseline,
                    third night running, and it tracks with the late espresso
                    rather than your training load. Push the hard session to
                    Thursday.
                  </p>
                  <div class="briefing-foot">
                    <span class="briefing-action">Move the session <span aria-hidden="true">→</span></span>
                    <span class="briefing-meta">08:00</span>
                  </div>
                </div>

                <div class="app-metrics" aria-hidden="true">
                  <div class="app-metric">
                    <span class="app-metric-k">Sleep</span>
                    <span class="app-metric-v">6:12</span>
                    <span class="app-metric-bar"><i style="width:58%"></i></span>
                  </div>
                  <div class="app-metric">
                    <span class="app-metric-k">HRV</span>
                    <span class="app-metric-v">{{ hrv }}<em>ms</em></span>
                    <span class="app-metric-bar"><i style="width:42%;background:var(--amber)"></i></span>
                  </div>
                  <div class="app-metric">
                    <span class="app-metric-k">Recovery</span>
                    <span class="app-metric-v">61<em>%</em></span>
                    <span class="app-metric-bar"><i style="width:61%"></i></span>
                  </div>
                </div>

                <div class="app-wave" aria-hidden="true">
                  <svg viewBox="0 0 320 60" preserveAspectRatio="none" role="presentation">
                    <path :d="wavePath" vector-effect="non-scaling-stroke" />
                  </svg>
                  <span class="app-wave-label">Resting heart rate, last 24 h</span>
                </div>

                <div class="app-tabbar" aria-hidden="true">
                  <span class="app-tab is-on">Home</span>
                  <span class="app-tab">Guidance</span>
                  <span class="app-tab">Activity</span>
                  <span class="app-tab">Reflections</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Signalstreifen: strukturelles Element, kein Diagramm -->
        <div class="signal-strip hero-signal" aria-hidden="true">
          <svg viewBox="0 0 2000 120" preserveAspectRatio="none">
            <path :d="STRIP_PATH" />
          </svg>
        </div>
      </header>

      <!-- ══════════════ PROBLEM ══════════════ -->
      <section class="problem">
        <div class="wrap problem-grid">
          <h2 class="d-l problem-title" data-reveal>
            Apple Health holds<br />
            <span class="tabular">140+</span> numbers<br />
            about you.
          </h2>
          <div class="problem-body" data-reveal>
            <p class="prose-serif">
              It has never once told you why Tuesday was hard.
            </p>
            <p class="lead">
              The data is not the problem. Reading it is. A resting heart rate of
              62 means nothing on its own; it means something next to last
              night's sleep, last week's training, and what you ate at 9 p.m. on
              Sunday. That comparison is the work, and no chart does it for you.
            </p>
            <p class="lead">
              Metea does that comparison every hour and reports back once a day.
            </p>
          </div>
        </div>

        <!-- Das Rauschen, aus dem der Satz kommt -->
        <div class="noise-field wrap" aria-hidden="true">
          <span v-for="(n, i) in noiseCells" :key="i" class="noise-cell" :style="{ '--d': `${(i % 17) * 0.11}s` }">{{ n }}</span>
        </div>
      </section>

      <!-- ══════════════ HOW IT WORKS ══════════════ -->
      <section id="how" class="how">
        <div class="wrap">
          <h2 class="d-l how-title" data-reveal>Three steps, then it runs on its own.</h2>

          <ol class="steps">
            <li v-for="(s, i) in steps" :key="s.title" class="step" data-reveal>
              <span class="step-num" aria-hidden="true">{{ i + 1 }}</span>
              <div class="step-text">
                <h3 class="d-m">{{ s.title }}</h3>
                <p class="lead">{{ s.body }}</p>
                <p class="step-note">{{ s.note }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <!-- ══════════════ SIGNALS ══════════════ -->
      <section class="signals">
        <div class="wrap">
          <div class="signals-head">
            <h2 class="d-l" data-reveal>What it actually reads.</h2>
            <p class="lead" data-reveal>
              Everything below comes out of Apple Health, written there by your
              iPhone, your Watch, or any app you already trust. Metea adds no
              sensors of its own.
            </p>
          </div>

          <div class="signal-groups">
            <div v-for="g in signalGroups" :key="g.name" class="signal-group" data-reveal>
              <h3 class="signal-group-name">
                <span class="signal-dot" :style="{ background: g.color }" aria-hidden="true"></span>
                {{ g.name }}
              </h3>
              <ul class="signal-list">
                <li v-for="item in g.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════ AGENTS ══════════════ -->
      <section id="agents" class="agents">
        <div class="wrap">
          <div class="agents-head">
            <h2 class="d-l" data-reveal>Nine agents. One briefing.</h2>
            <p class="lead" data-reveal>
              Each one watches a single part of you and knows what normal looks
              like for that part. They compare notes before anything reaches you,
              so you get a conclusion instead of nine notifications.
            </p>
          </div>

          <ul class="agent-list">
            <li v-for="a in agents" :key="a.name" class="agent" data-reveal>
              <span class="agent-rail" :style="{ background: a.color }" aria-hidden="true"></span>
              <h3 class="agent-name">{{ a.name }}</h3>
              <p class="agent-desc">{{ a.desc }}</p>
              <span class="agent-domain">{{ a.domain }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ══════════════ INSIDE THE APP ══════════════ -->
      <!-- Echte, unretuschierte Aufnahmen aus der App. Nichts nachgebaut. -->
      <section id="app" class="inside">
        <div class="wrap">
          <div class="inside-head">
            <h2 class="d-l" data-reveal>Inside the app.</h2>
            <p class="lead" data-reveal>
              Two screens, straight out of the build. The times and numbers are
              the ones that were on the phone when the picture was taken.
            </p>
          </div>

          <div class="shot-grid">
            <figure class="shot-device" data-reveal>
              <div class="device device--shot">
                <div class="device-screen device-screen--shot">
                  <img
                    src="/shots/screen-nutrition.jpg"
                    alt="Nutrition screen: 2,125 kcal left for the day, with protein, carbs and fat against their targets"
                    width="947"
                    height="1909"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <figcaption>
                <strong>Nutrition, 12:18.</strong> One coffee in, 2,125 kcal
                left. Macros run against the targets Metea set from your body
                and your training week.
              </figcaption>
            </figure>

            <div class="shot-side">
              <figure class="shot-panel" data-reveal>
                <img
                  src="/shots/panel-plan.jpg"
                  alt="Daily plan screen: focus for 16 March 2026, two of five actions done, with a timeline of morning reflection, water and movement"
                  width="900"
                  height="1401"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <strong>The daily plan.</strong> Two of five done by lunch.
                  Each item carries the reason it was scheduled and a thumb to
                  tell Metea it got it wrong.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════ APP STORE GALLERY ══════════════ -->
      <!-- Vitrine: die Karten sind Store-Material, kein Website-Chrome.
           Deshalb klein, gerahmt und ausdruecklich als Zitat benannt. -->
      <section id="store" class="store">
        <div class="wrap">
          <div class="store-head">
            <h2 class="d-l" data-reveal>What the App Store shows you.</h2>
            <p class="lead" data-reveal>
              The same preview cards, in the same order, so there is no gap
              between this page and the page you land on next.
            </p>
          </div>
        </div>

        <div class="store-plate">
          <ul class="store-rail" aria-label="App Store preview cards">
            <li v-for="c in storeCards" :key="c.n">
              <img
                :src="`/shots/card-${c.n}.jpg`"
                :srcset="`/shots/card-${c.n}.jpg 277w, /shots/card-${c.n}@2x.jpg 554w`"
                sizes="277px"
                :alt="c.alt"
                width="277"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </li>
          </ul>
        </div>

        <div class="wrap">
          <p class="store-note">Unretouched App Store preview cards.</p>
        </div>
      </section>

      <!-- ══════════════ PRIVACY ══════════════ -->
      <section id="privacy" class="privacy">
        <div class="wrap privacy-grid">
          <div class="privacy-copy">
            <h2 class="d-l" data-reveal>What we do with your data, precisely.</h2>
            <p class="lead" data-reveal>
              Health data deserves a specific answer, not a badge that says
              100&nbsp;%. Here is the exact shape of it.
            </p>
            <div class="privacy-links" data-reveal>
              <NuxtLink to="/privacy" class="btn btn-ghost">Read the privacy policy</NuxtLink>
            </div>
          </div>

          <ul class="privacy-list">
            <li v-for="p in privacyPoints" :key="p.title" data-reveal>
              <h3>{{ p.title }}</h3>
              <p>{{ p.body }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- ══════════════ FAQ ══════════════ -->
      <section class="faq">
        <div class="wrap">
          <h2 class="d-l faq-title" data-reveal>Before you download.</h2>
          <div class="faq-grid">
            <details v-for="(q, i) in faqs" :key="q.q" class="faq-q" :open="i === 0" data-reveal>
              <summary>
                <span>{{ q.q }}</span>
                <span class="faq-mark" aria-hidden="true"></span>
              </summary>
              <div class="faq-a"><p>{{ q.a }}</p></div>
            </details>
          </div>
        </div>
      </section>

      <!-- ══════════════ CTA ══════════════ -->
      <section class="cta">
        <div class="signal-strip cta-signal" aria-hidden="true">
          <svg viewBox="0 0 2000 120" preserveAspectRatio="none">
            <path :d="STRIP_PATH" />
          </svg>
        </div>
        <div class="wrap-narrow cta-inner">
          <h2 class="d-l" data-reveal>Tomorrow morning, you get a sentence.</h2>
          <p class="lead cta-lead" data-reveal>
            Connect Apple Health tonight. Metea reads the history that is already
            there, so the first briefing does not wait for new data.
          </p>
          <div class="cta-row" data-reveal>
            <a
              :href="APP_STORE"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on the App&nbsp;Store
            </a>
          </div>
          <p class="cta-note" data-reveal>Free to start. Requires iOS 18 or later.</p>
        </div>
      </section>
    </main>

    <!-- ══════════════ FOOTER ══════════════ -->
    <footer class="foot">
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <span class="brand">
              <img src="/logo.png" alt="" width="30" height="30" />
              <span>Metea</span>
            </span>
            <p>
              Reads your Apple Health data and writes you one short briefing a
              day. Built for iPhone and Apple Watch.
            </p>
          </div>

          <nav class="foot-col" aria-label="Product">
            <h3>Product</h3>
            <a href="#how">How it reads</a>
            <a href="#agents">Agents</a>
            <a href="#app">Inside the app</a>
            <a :href="APP_STORE" target="_blank" rel="noopener noreferrer">App Store</a>
          </nav>

          <nav class="foot-col" aria-label="Legal">
            <h3>Legal</h3>
            <NuxtLink to="/privacy">Privacy</NuxtLink>
            <NuxtLink to="/terms">Terms</NuxtLink>
            <NuxtLink to="/imprint">Imprint</NuxtLink>
            <NuxtLink to="/support">Support</NuxtLink>
          </nav>
        </div>

        <div class="foot-base">
          <span>© {{ year }} Metea</span>
          <span>Apple Health, Apple Watch, and App Store are trademarks of Apple Inc.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const APP_STORE = 'https://apps.apple.com/app/metea/id6756438562'
const year = new Date().getFullYear()

/* ── Inhalte ─────────────────────────────────────────────── */

const steps = [
  {
    title: 'Connect Apple Health',
    body: 'One permission screen, granted once. Metea reads the history that is already on your phone, so it has something to say on day one instead of week three.',
    note: 'Around 30 seconds. Revocable at any time in iOS Settings.'
  },
  {
    title: 'Nine agents read it',
    body: 'Sleep, stress, heart, training, nutrition, and recovery each get their own reader. They learn what normal looks like for you, not for an average 34-year-old.',
    note: 'Runs hourly in the background. Nothing to open.'
  },
  {
    title: 'One briefing each morning',
    body: 'Two or three things worth acting on, with the reasoning attached. If nothing changed, it says so and stops talking.',
    note: 'Delivered at 08:00, or whenever you wake.'
  }
]

const signalGroups = [
  {
    name: 'Heart',
    color: 'var(--teal)',
    items: ['Heart rate variability', 'Resting heart rate', 'Walking heart rate', 'Cardio fitness (VO₂ max)', 'Heart rate recovery']
  },
  {
    name: 'Sleep',
    color: 'var(--violet)',
    items: ['Sleep stages, phase by phase', 'Time in bed against time asleep', 'Respiratory rate overnight', 'Blood oxygen', 'Wrist temperature (Series 8 and later)']
  },
  {
    name: 'Load',
    color: 'var(--blue)',
    items: ['Workouts and intensity', 'Active and resting energy', 'Steps and distance', 'Stand hours', 'Aerobic decoupling']
  },
  {
    name: 'Fuel',
    color: 'var(--amber)',
    items: ['Calories and macronutrients', 'Vitamins and minerals', 'Water intake', 'Caffeine timing', 'Meal timing against sleep']
  }
]

const agents = [
  { name: 'Briefing', domain: 'Daily', color: 'var(--mint)', desc: 'Writes the morning summary. Decides what is worth saying and what is noise.' },
  { name: 'Sleep', domain: 'Night', color: 'var(--violet)', desc: 'Scores the night on efficiency, phase length, and continuity, not just hours.' },
  { name: 'Stress', domain: 'Day', color: 'var(--ember)', desc: 'Reads HRV and heart rate against your own baseline to find load you did not notice.' },
  { name: 'Recovery', domain: 'Day', color: 'var(--teal)', desc: 'Answers one question: is today a day to push, or a day to back off.' },
  { name: 'Training', domain: 'Load', color: 'var(--blue)', desc: 'Tracks capacity across weeks and flags the drift before it becomes an injury.' },
  { name: 'Nutrition', domain: 'Fuel', color: 'var(--amber)', desc: 'Watches micronutrients and timing, including the caffeine that costs you Tuesday.' },
  { name: 'Circadian', domain: 'Rhythm', color: 'var(--violet)', desc: 'Learns your real chronotype and where your schedule fights it.' },
  { name: 'Healthspan', domain: 'Long term', color: 'var(--mint)', desc: 'Turns the slow-moving signals into a biological age you can move.' },
  { name: 'Coach', domain: 'On demand', color: 'var(--teal)', desc: 'Answers questions about your own numbers, in plain language, with the data attached.' }
]

/* Die Store-Vorschaukarten, in der Reihenfolge des App Store.
   image1 (reine Illustration ohne Produkt) und image7 (sechs von sieben
   Werten auf 0.0) sind bewusst nicht dabei. */
const storeCards = [
  { n: 2, alt: 'App Store preview: home screen with the daily briefing, sleep at 73 percent, stress 5, recovery 74 percent' },
  { n: 3, alt: 'App Store preview: daily plan for 16 March with a timeline of scheduled actions, two of five done' },
  { n: 4, alt: 'App Store preview: coach screen with training readiness charted across four weeks' },
  { n: 5, alt: 'App Store preview: healthspan screen showing a biological age of 35.6 against calendar age' },
  { n: 6, alt: 'App Store preview: sleep goals with sleep analysis, 8 hours 27 minutes asleep and phase breakdown' },
  { n: 9, alt: 'App Store preview: Apple Watch faces showing strain, recovery, sleep and night vitals' }
]

const privacyPoints = [
  {
    title: 'Health data is read on your device',
    body: 'Metea queries Apple Health locally and keeps the working copy on your phone. Apple never hands the raw HealthKit store to us, and we do not upload it.'
  },
  {
    title: 'Briefings are written by a language model',
    body: 'To write the morning text, a reduced summary of your recent metrics is sent to OpenAI. It carries no name, no email, and no Apple ID. It is not used to train models.'
  },
  {
    title: 'Community numbers are aggregated first',
    body: 'If you turn on regional insights, your values are pooled at city level before they leave the device. No GPS coordinates are stored, and a city needs enough participants before it reports anything at all.'
  },
  {
    title: 'Nothing is sold, nothing is advertised against',
    body: 'There are no ad SDKs and no data brokers in this app. Revenue comes from the subscription, which is the whole reason there is one.'
  }
]

const faqs = [
  {
    q: 'Do I need an Apple Watch?',
    a: 'No, but it changes what Metea can say. An iPhone alone gives steps, workouts, and whatever you log. A Watch adds HRV, sleep stages, resting heart rate, and overnight breathing, which is where most of the interesting patterns live.'
  },
  {
    q: 'What does this do that Apple Health does not?',
    a: 'Apple Health stores and charts. It does not compare Tuesday against your last six Tuesdays, or connect a 9 p.m. meal to a 4 a.m. wake-up. Metea does that comparison across sources and writes the result as a sentence.'
  },
  {
    q: 'Does it work with Oura, Whoop, or Garmin?',
    a: 'If the device writes to Apple Health, Metea reads it. Oura, Garmin, Withings, and most sleep trackers do. Whoop keeps most metrics in its own app, so coverage there is partial.'
  },
  {
    q: 'How long before it says anything useful?',
    a: 'The first briefing arrives the next morning, built from the history already in Apple Health. Personal baselines need roughly seven days of continuous wear before Metea will call something unusual for you specifically.'
  },
  {
    q: 'Is my health data sent to a server?',
    a: 'The raw data stays on the device. A reduced, unnamed summary of recent metrics goes to the language model that writes your briefing. The privacy policy lists exactly which fields those are.'
  },
  {
    q: 'What does it cost?',
    a: 'The app is free to download and use. Pro unlocks the full agent set and long-range analysis as a monthly or yearly subscription; current pricing is shown on the App Store page for your region.'
  }
]

/* ── Signalstreifen: einmal deterministisch erzeugt ───────── */

function buildStrip () {
  const w = 2000
  const seg = 100
  let d = 'M0 60'
  for (let x = 0; x < w; x += seg) {
    const phase = (x / seg) % 4
    if (phase === 1) {
      // QRS-artiger Ausschlag
      d += ` L${x + 30} 60 L${x + 38} 24 L${x + 48} 92 L${x + 56} 60`
    } else if (phase === 3) {
      d += ` L${x + 34} 60 L${x + 50} 46 L${x + 66} 60`
    }
    d += ` L${x + seg} 60`
  }
  return d
}
const STRIP_PATH = buildStrip()

/* Rauschfeld: feste Werte, damit Server und Client übereinstimmen.
   Es ist das Rauschen, aus dem der eine Satz kommt. */
const noiseCells = [
  '62', '48', '7:41', '11.2', '96%', '58', '34.9', '128', '6:12', '72', '41', '1.9',
  '14', '89', '5.2', '33.8', '41', '63', '2.1', '104', '7:03', '55', '86', '4.4',
  '18', '92', '4.8', '35.1', '47', '68', '1.9', '117', '6:48', '51', '38', '2.7',
  '21', '85', '5.6', '34.2', '39', '74', '2.4', '122', '7:22', '59', '93', '5.1',
  '66', '44', '6:57', '12.8', '94%', '61', '35.4', '131', '5:58', '77', '29', '3.3',
  '19', '81', '4.1', '33.2', '52', '70', '2.8', '109', '7:15', '48', '88', '4.9',
  '24', '95', '5.9', '34.7', '43', '65', '2.2', '126', '6:31', '56', '35', '3.8',
  '17', '78', '4.6', '35.8', '49', '71', '2.6', '113', '7:09', '62', '91', '5.4'
]

/* ── Live-Anmutung: HRV atmet, Kurve verschiebt sich ──────── */

const hrv = ref(38)
const clock = ref('08:00')
const waveSeed = ref(0)

const wavePath = computed(() => {
  const pts = []
  for (let i = 0; i <= 32; i++) {
    const x = (i / 32) * 320
    const y =
      30 +
      Math.sin((i + waveSeed.value) * 0.55) * 9 +
      Math.sin((i + waveSeed.value) * 0.19) * 5
    pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`)
  }
  return pts.join(' ')
})

let timer = null

/* ── Reveal + Nav ────────────────────────────────────────── */

const navScrolled = ref(false)
let io = null
let lenis = null
let rafId = null

function onScroll () {
  navScrolled.value = window.scrollY > 24
}

onMounted(async () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Reveal erst aktivieren, wenn JS läuft. Ohne JS bleibt alles sichtbar.
  document.documentElement.classList.add('js-reveal')
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

  if (reduced) return

  // Uhr im Gerät auf die echte Zeit setzen
  const d = new Date()
  clock.value = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`

  timer = setInterval(() => {
    waveSeed.value += 1
    hrv.value = 36 + Math.round(Math.sin(waveSeed.value * 0.4) * 3)
  }, 1400)

  try {
    const Lenis = (await import('lenis')).default
    lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    // Nur im Dev-Server: erlaubt Werkzeugen, exakt zu positionieren.
    if (import.meta.dev) window.__lenis = lenis
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href')
        if (!id || id === '#') return
        const target = document.querySelector(id)
        if (!target) return
        e.preventDefault()
        lenis.scrollTo(target, { offset: -80 })
      })
    })
  } catch {
    // Smooth Scroll ist Zierde. Ohne Lenis scrollt die Seite nativ.
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  io?.disconnect()
  if (timer) clearInterval(timer)
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy()
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Metea',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS 18',
        url: 'https://metea-app.com/',
        description:
          'Metea reads your Apple Health data and writes one short briefing each morning covering sleep, stress, heart rate variability, training load and nutrition.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      })
    }
  ]
})
</script>

<style scoped>
/* ════════════════════════════════════════════════════════
   NAV
   ════════════════════════════════════════════════════════ */

.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: var(--z-sticky);
  transition: background var(--t-move) var(--ease), border-color var(--t-move) var(--ease);
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: oklch(0.156 0.004 165 / 0.78);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  border-bottom-color: var(--line-soft);
}

.nav-inner {
  max-width: var(--container);
  margin-inline: auto;
  padding: 16px var(--gutter);
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.0625rem;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.brand img {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  object-fit: cover;
}

.nav-links {
  display: flex;
  gap: 28px;
  margin-inline: auto;
}

.nav-links a {
  font-size: 0.9375rem;
  color: var(--muted);
  transition: color var(--t-state) var(--ease);
}

.nav-links a:hover {
  color: var(--ink);
}

.nav-cta {
  padding: 11px 20px;
  font-size: 0.875rem;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }

  .nav-cta {
    margin-inline-start: auto;
  }
}

/* ════════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════════ */

.hero {
  position: relative;
  padding-top: clamp(104px, 12vh, 136px);
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  inset: -20% -10% auto -10%;
  height: 90%;
  background:
    radial-gradient(ellipse 50% 60% at 72% 22%, oklch(0.716 0.09 182 / 0.17), transparent 65%),
    radial-gradient(ellipse 45% 50% at 12% 8%, oklch(0.556 0.203 278 / 0.09), transparent 65%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: var(--z-base);
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 22px;
  font-size: 0.8125rem;
  color: var(--muted);
  border: 1px solid var(--line-soft);
  border-radius: var(--r-pill);
  padding: 7px 15px 7px 12px;
}

.pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 0 oklch(0.78 0.154 162 / 0.6);
  animation: pulse-ring 2.4s var(--ease) infinite;
}

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 oklch(0.78 0.154 162 / 0.55); }
  70% { box-shadow: 0 0 0 7px oklch(0.78 0.154 162 / 0); }
  100% { box-shadow: 0 0 0 0 oklch(0.78 0.154 162 / 0); }
}

.hero-title .accent {
  color: var(--mint);
}

.hero-lead {
  margin: 22px 0 30px;
  max-width: 50ch;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 36px;
  list-style: none;
  margin: 34px 0 0;
  padding: 22px 0 0;
  border-top: 1px solid var(--line-soft);
}

.hero-facts li {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero-facts strong {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ink);
}

.hero-facts span {
  font-size: 0.8125rem;
  color: var(--faint);
}

.hero-signal {
  margin-top: clamp(44px, 7vh, 80px);
}

/* ── Gerät ─────────────────────────────────────────────── */

.hero-device {
  display: flex;
  justify-content: center;
}

.device {
  width: 100%;
  max-width: 296px;
  aspect-ratio: 402 / 874;
  background: linear-gradient(160deg, oklch(0.32 0.008 180), oklch(0.18 0.006 180));
  border-radius: 46px;
  padding: 9px;
  box-shadow:
    0 40px 90px -30px oklch(0.05 0 0 / 0.9),
    0 0 0 1px oklch(0.42 0.01 180 / 0.55),
    inset 0 1px 0 oklch(0.6 0.01 180 / 0.35);
}

.device-screen {
  position: relative;
  height: 100%;
  background: oklch(0.13 0.004 175);
  border-radius: 38px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 12px 13px 0;
  font-size: 11px;
}

.device-screen::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 22px;
  background: oklch(0.08 0 0);
  border-radius: var(--r-pill);
  z-index: var(--z-raised);
}


.app-statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px 14px;
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
}

.app-statusbar-right {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  color: var(--ink);
}

.app-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
}

.app-chip {
  border: 1px solid oklch(0.35 0.01 180 / 0.6);
  border-radius: var(--r-pill);
  color: var(--muted);
  display: grid;
  place-items: center;
}

.app-chip--icon {
  width: 30px;
  height: 30px;
  font-size: 13px;
}

.app-chip--today {
  padding: 7px 16px;
  color: var(--ink);
  font-weight: 600;
  font-size: 12px;
}

.briefing {
  border-radius: 20px;
  padding: 15px 15px 13px;
  background:
    linear-gradient(155deg, oklch(0.716 0.09 182 / 0.22), oklch(0.225 0.015 181 / 0.6) 62%),
    var(--surface);
  border: 1px solid oklch(0.716 0.09 182 / 0.2);
}

.briefing-label {
  margin: 0 0 9px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: oklch(0.828 0.061 167 / 0.85);
}

.briefing-body {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.5;
  letter-spacing: 0;
  color: var(--ink);
}

.briefing-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
}

.briefing-action {
  background: var(--mint);
  color: oklch(0.156 0.004 165);
  font-weight: 600;
  font-size: 10.5px;
  padding: 7px 12px;
  border-radius: var(--r-pill);
}

.briefing-meta {
  font-size: 10px;
  color: var(--faint);
}

.app-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
  margin-top: 12px;
}

.app-metric {
  background: var(--surface);
  border-radius: 14px;
  padding: 10px 9px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.app-metric-k {
  font-size: 8.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--faint);
}

.app-metric-v {
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.app-metric-v em {
  font-style: normal;
  font-size: 9px;
  color: var(--faint);
  margin-left: 1px;
}

.app-metric-bar {
  display: block;
  height: 3px;
  border-radius: 2px;
  background: oklch(0.35 0.01 180 / 0.5);
  overflow: hidden;
}

.app-metric-bar i {
  display: block;
  height: 100%;
  background: var(--teal);
  border-radius: inherit;
}

.app-wave {
  margin-top: 12px;
  background: var(--surface);
  border-radius: 16px;
  padding: 11px 12px 9px;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.app-wave svg {
  width: 100%;
  flex: 1;
  min-height: 0;
}

.app-wave path {
  fill: none;
  stroke: var(--teal);
  stroke-width: 1.4;
  stroke-linecap: round;
}

.app-wave-label {
  display: block;
  font-size: 8.5px;
  color: var(--faint);
}

.app-tabbar {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin: 10px -3px 0;
  padding: 9px 10px calc(9px + env(safe-area-inset-bottom, 0px));
  background: oklch(0.2 0.008 180 / 0.9);
  border-radius: 22px 22px 0 0;
}

.app-tab {
  font-size: 8.5px;
  color: var(--faint);
}

.app-tab.is-on {
  color: var(--mint);
  font-weight: 600;
}

/* Unter 940px steht die Botschaft zuerst; das Gerät folgt als Beleg.
   Auf einer Seite für eine iOS-App kommt der Großteil der Besucher
   von einem Telefon, und ein Mockup als erste Bildschirmfüllung
   verschenkt genau dort die Überschrift. */
@media (max-width: 940px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .hero-copy {
    display: contents;
  }

  .hero-kicker { order: 1; margin-bottom: 20px; }
  .hero-title { order: 2; }
  .hero-lead { order: 3; margin: 20px 0 26px; }
  .hero-cta { order: 4; }
  .hero-device { order: 5; margin: 40px 0 8px; }
  .hero-facts { order: 6; margin-top: 32px; }

  .device {
    max-width: 260px;
  }
}

@media (max-width: 520px) {
  .hero-cta .btn {
    width: 100%;
  }

  .device {
    max-width: 232px;
  }
}

/* ════════════════════════════════════════════════════════
   PROBLEM
   ════════════════════════════════════════════════════════ */

.problem {
  padding-block: var(--section);
}

.problem-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: start;
}

.tabular {
  font-variant-numeric: tabular-nums;
  color: var(--muted);
}

.problem-body > * + * {
  margin-top: 22px;
}

.problem-body .prose-serif {
  color: var(--mint);
  margin: 0;
}

@media (max-width: 860px) {
  .problem-grid {
    grid-template-columns: 1fr;
  }
}

/* Rauschfeld: die 140 Zahlen, aus denen der eine Satz wird. */
.noise-field {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(58px, 1fr));
  gap: 12px 8px;
  margin-top: clamp(40px, 6vh, 72px);
  user-select: none;
  mask-image: linear-gradient(180deg, #000 0%, #000 42%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 42%, transparent 100%);
}

.noise-cell {
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  color: var(--muted);
  opacity: 0.4;
  animation: flicker 7s var(--ease) infinite;
  animation-delay: var(--d);
}

@keyframes flicker {
  0%, 100% { opacity: 0.18; }
  50% { opacity: 0.62; }
}

/* ════════════════════════════════════════════════════════
   HOW
   ════════════════════════════════════════════════════════ */

.how {
  padding-block: var(--section);
  border-top: 1px solid var(--line-soft);
  background: var(--bg-raised);
}

.how-title {
  max-width: 16ch;
  margin-bottom: clamp(48px, 7vh, 84px);
}

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0;
}

.step {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: clamp(16px, 4vw, 48px);
  padding-block: clamp(32px, 5vh, 52px);
  border-top: 1px solid var(--line-soft);
}

.step:last-child {
  border-bottom: 1px solid var(--line-soft);
}

.step-num {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--teal);
  opacity: 0.55;
  font-variant-numeric: tabular-nums;
}

.step-text h3 {
  margin: 0 0 12px;
}

.step-text .lead {
  margin: 0;
  max-width: 58ch;
}

.step-note {
  margin: 14px 0 0;
  font-size: 0.875rem;
  color: var(--faint);
}

@media (max-width: 640px) {
  .step {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

/* ════════════════════════════════════════════════════════
   SIGNALS
   ════════════════════════════════════════════════════════ */

.signals {
  padding-block: var(--section);
}

.signals-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: end;
  margin-bottom: clamp(40px, 6vh, 72px);
}

.signal-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
  border-radius: var(--r-lg);
  overflow: hidden;
}

.signal-group {
  background: var(--bg);
  padding: 26px 24px 30px;
}

.signal-group-name {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 18px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ink);
}

.signal-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.signal-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 9px;
}

.signal-list li {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.5;
}

@media (max-width: 860px) {
  .signals-head {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

/* ════════════════════════════════════════════════════════
   AGENTS
   ════════════════════════════════════════════════════════ */

.agents {
  padding-block: var(--section);
  border-top: 1px solid var(--line-soft);
  background: var(--bg-raised);
}

.agents-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: end;
  margin-bottom: clamp(40px, 6vh, 72px);
}

/* 340px ergibt bei 1240er Container genau drei Spalten: 3x3 für neun Agenten. */
.agent-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1px;
  background: var(--line-soft);
  border-block: 1px solid var(--line-soft);
}

.agent {
  position: relative;
  background: var(--bg-raised);
  padding: 26px 24px 24px;
  transition: background var(--t-state) var(--ease);
}

.agent:hover {
  background: var(--surface);
}

.agent-rail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  opacity: 0.7;
}

.agent-name {
  margin: 0 0 8px;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.agent-desc {
  margin: 0 0 16px;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--muted);
}

.agent-domain {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--faint);
}

@media (max-width: 860px) {
  .agents-head {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

/* Neun Einträge einspaltig werden schnell zu einer langen Rutschbahn.
   Auf schmalen Viewports fällt jeder Eintrag auf eine kompaktere Form. */
@media (max-width: 640px) {
  .agent {
    padding: 18px 20px 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
    align-items: baseline;
  }

  .agent-name {
    font-size: 1rem;
    margin: 0;
  }

  .agent-desc {
    grid-column: 1 / -1;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
  }

  .agent-domain {
    font-size: 0.6875rem;
  }
}

/* ════════════════════════════════════════════════════════
   INSIDE — echte Aufnahmen

   Die App-Oberfläche ist hell. Auf dunklem Grund wird jede
   Aufnahme dadurch zum leuchtenden Objekt, nicht zur Fläche:
   klein halten, hart rahmen, nie randlos ausbreiten.
   ════════════════════════════════════════════════════════ */

.inside {
  padding-block: var(--section);
}

.inside-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: end;
  margin-bottom: clamp(40px, 6vh, 72px);
}

/* Beide Spalten nach Inhalt, nicht nach Restplatz: sonst wächst
   die helle Fläche mit dem Viewport und übernimmt die Sektion. */
.shot-grid {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.shot-device,
.shot-panel {
  margin: 0;
}

.device--shot {
  aspect-ratio: auto;
  height: auto;
}

/* Der Screenshot bringt seine eigene Statusleiste und Dynamic Island
   mit. Die nachgebaute Aussparung des Rahmens muss hier schweigen. */
.device-screen--shot {
  padding: 0;
  display: block;
}

.device-screen--shot::before {
  content: none;
}

.device-screen--shot img {
  width: 100%;
  height: auto;
  display: block;
}

.shot-device figcaption,
.shot-panel figcaption {
  margin-top: 18px;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--muted);
  max-width: 42ch;
}

.shot-device figcaption strong,
.shot-panel figcaption strong {
  color: var(--ink);
  font-weight: 600;
}

.shot-side {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 420px;
  max-width: 100%;
}

/* Flacher UI-Ausschnitt: kein Gerät, weil unten und oben
   Kanten fehlen. Als Inhaltskarte ist das ehrlicher. */
.shot-panel img {
  width: 100%;
  height: auto;
  border-radius: var(--r-md);
  border: 1px solid var(--line-soft);
  mask-image: linear-gradient(180deg, #000 84%, transparent);
  -webkit-mask-image: linear-gradient(180deg, #000 84%, transparent);
}

@media (max-width: 940px) {
  .inside-head {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .shot-grid {
    grid-template-columns: 1fr;
    gap: 48px;
    justify-items: center;
  }

  .device--shot {
    max-width: 260px;
  }

  .shot-side {
    width: 100%;
    max-width: 460px;
  }
}

/* ════════════════════════════════════════════════════════
   STORE — Vitrine

   Zweistufiger Helligkeitssprung statt einem:
   Grund → Platte → Karte. Die Karten bleiben klein.
   ════════════════════════════════════════════════════════ */

.store {
  padding-block: var(--section);
  border-top: 1px solid var(--line-soft);
  background: var(--bg-raised);
}

.store-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: end;
  margin-bottom: clamp(36px, 5vh, 56px);
}

.store-plate {
  position: relative;
  border-block: 1px solid var(--line-soft);
  background: var(--bg);
  padding-block: clamp(32px, 5vh, 48px);
}

/* Zeigt an, dass die Reihe weiterläuft, ohne einen Pfeil zu brauchen. */
.store-plate::after {
  content: '';
  position: absolute;
  inset: 0 0 0 auto;
  width: clamp(40px, 8vw, 120px);
  background: linear-gradient(90deg, transparent, var(--bg));
  pointer-events: none;
}

.store-rail {
  --rail-inset: max(var(--gutter), calc((100vw - var(--container)) / 2 + var(--gutter)));
  list-style: none;
  margin: 0;
  padding-inline: var(--rail-inset);
  /* Ohne scroll-padding springt mandatory-Snap beim Laden auf das
     erste Element und scrollt das linke Padding weg. */
  scroll-padding-inline-start: var(--rail-inset);
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
}

.store-rail li {
  flex: 0 0 auto;
  scroll-snap-align: start;
}

.store-rail img {
  width: 277px;
  height: auto;
  border-radius: var(--r-sm);
  border: 1px solid color-mix(in oklch, var(--teal) 20%, transparent);
  /* Ein Schleier, kein Farbstich: nimmt der hellen Fläche die Härte,
     ohne die Karte umzufärben. */
  filter: brightness(0.9) saturate(0.94);
  transition: filter var(--t-state) var(--ease);
}

.store-rail img:hover {
  filter: none;
}

.store-rail::-webkit-scrollbar {
  height: 6px;
}

.store-rail::-webkit-scrollbar-thumb {
  background: var(--line);
  border-radius: 3px;
}

.store-note {
  margin: 20px 0 0;
  font-size: 0.8125rem;
  color: var(--faint);
}

@media (max-width: 860px) {
  .store-head {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .store-rail img {
    width: 232px;
  }
}

/* ════════════════════════════════════════════════════════
   PRIVACY
   ════════════════════════════════════════════════════════ */

.privacy {
  padding-block: var(--section);
  border-top: 1px solid var(--line-soft);
  background: var(--bg-raised);
}

.privacy-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.privacy-copy .lead {
  margin: 22px 0 28px;
}

.privacy-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
  border-radius: var(--r-lg);
  overflow: hidden;
}

.privacy-list li {
  background: var(--bg-raised);
  padding: 24px 26px;
}

.privacy-list h3 {
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.privacy-list p {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 900px) {
  .privacy-grid {
    grid-template-columns: 1fr;
  }
}

/* ════════════════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════════════════ */

.faq {
  padding-block: var(--section);
}

.faq-title {
  margin-bottom: clamp(36px, 5vh, 60px);
}

.faq-grid {
  display: grid;
  gap: 1px;
  background: var(--line-soft);
  border-block: 1px solid var(--line-soft);
  max-width: 900px;
}

.faq-q {
  background: var(--bg);
}

.faq-q summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 4px;
  cursor: pointer;
  font-size: 1.0625rem;
  font-weight: 500;
  color: var(--ink);
  list-style: none;
  transition: color var(--t-state) var(--ease);
}

.faq-q summary::-webkit-details-marker {
  display: none;
}

.faq-q summary:hover {
  color: var(--mint);
}

.faq-mark {
  position: relative;
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.faq-mark::before,
.faq-mark::after {
  content: '';
  position: absolute;
  background: var(--teal);
  transition: transform var(--t-move) var(--ease);
}

.faq-mark::before {
  inset: 6px 0 auto;
  height: 1.5px;
}

.faq-mark::after {
  inset: 0 6px auto;
  width: 1.5px;
  height: 13px;
}

.faq-q[open] .faq-mark::after {
  transform: scaleY(0);
}

.faq-a {
  padding: 0 4px 24px;
  max-width: 68ch;
}

.faq-a p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

/* ════════════════════════════════════════════════════════
   CTA
   ════════════════════════════════════════════════════════ */

.cta {
  position: relative;
  padding-block: clamp(80px, 12vh, 140px);
  border-top: 1px solid var(--line-soft);
  overflow: hidden;
  background:
    radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.716 0.09 182 / 0.15), transparent 68%),
    var(--bg);
  text-align: center;
}

.cta-signal {
  position: absolute;
  inset: 0 0 auto;
  opacity: 0.5;
}

.cta-inner {
  position: relative;
  z-index: var(--z-base);
}

.cta-lead {
  margin: 22px auto 34px;
  max-width: 52ch;
}

.cta-row {
  display: flex;
  justify-content: center;
}

.cta-note {
  margin: 20px 0 0;
  font-size: 0.875rem;
  color: var(--faint);
}

/* ════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════ */

.foot {
  border-top: 1px solid var(--line-soft);
  padding: clamp(56px, 8vh, 88px) 0 40px;
}

.foot-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 5vw, 64px);
}

.foot-brand p {
  margin: 16px 0 0;
  font-size: 0.9375rem;
  color: var(--muted);
  max-width: 40ch;
}

.foot-col h3 {
  margin: 0 0 14px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--faint);
}

.foot-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
}

.foot-col a {
  font-size: 0.9375rem;
  color: var(--muted);
  transition: color var(--t-state) var(--ease);
}

.foot-col a:hover {
  color: var(--ink);
}

.foot-base {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  justify-content: space-between;
  margin-top: clamp(48px, 7vh, 72px);
  padding-top: 24px;
  border-top: 1px solid var(--line-soft);
  font-size: 0.8125rem;
  color: var(--faint);
}

@media (max-width: 760px) {
  .foot-grid {
    grid-template-columns: 1fr 1fr;
  }

  .foot-brand {
    grid-column: 1 / -1;
  }
}
</style>
