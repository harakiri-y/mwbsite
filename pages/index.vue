<template>
  <div>
    <!-- Cursor -->
    <div class="cursor" id="cursor"></div>
    <div class="cursor-dot" id="cursorDot"></div>

    <!-- Preloader -->
    <div id="preloader">
      <span class="brand" id="pre-brand">
        <span class="letter">M</span><span class="letter">e</span><span class="letter">t</span><span class="letter">e</span><span class="letter">a</span>
      </span>
      <div class="bar" id="pre-bar"></div>
      <div class="count"><span id="pre-count">000</span> · loading</div>
    </div>

    <!-- Nav -->
    <nav class="nav" id="nav">
      <a href="#" class="logo">
        <span class="logo-mark"><img src="/logo.png" alt="Metea" /></span>
        <span>Metea</span>
      </a>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#preview">App</a>
        <a href="#stats">Evidence</a>
      </div>
      <a
        href="https://apps.apple.com/app/metea/id6756438562"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-cta magnet"
      ><span class="dot"></span> Download Free</a>
    </nav>

    <!-- HERO -->
    <header class="hero" id="hero">
      <div class="hero-bg">
        <div class="blob a" data-parallax="-40"></div>
        <div class="blob b" data-parallax="30"></div>
        <div class="blob c" data-parallax="-20"></div>
        <div class="hero-grain"></div>
      </div>

      <div class="wrap hero-grid">
        <div>
          <div class="hero-pill" data-hero="pill"><span class="live"></span> v2.4 · Personal health agents — live</div>

          <h1 class="hero-title">
            <span class="row"><span class="word" data-hero="t1">Listen</span></span>
            <span class="row"><span class="word" data-hero="t2"><em>to your</em></span></span>
            <span class="row"><span class="word" data-hero="t3">Body<span class="green">.</span></span></span>
          </h1>

          <p class="hero-sub">
            <span class="reveal-line"><span class="reveal-inner" data-hero="s1">Your body's signals — decoded.</span></span>
            <span class="reveal-line"><span class="reveal-inner" data-hero="s2">AI health agents analyze your data and coach you</span></span>
            <span class="reveal-line"><span class="reveal-inner" data-hero="s3">on stress, sleep, nutrition, and recovery.</span></span>
          </p>

          <div class="hero-cta" data-hero="cta">
            <a
              href="https://apps.apple.com/app/metea/id6756438562"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ink magnet"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span>Get Metea</span>
              <span class="arrow">→</span>
            </a>
            <a href="#features" class="btn btn-out magnet"><span>Explore the system</span></a>
          </div>

          <div class="hero-stats" data-hero="stats">
            <div class="hero-stat"><span class="num" data-count="10000" data-suffix="+">0</span><span class="lbl">Active users</span></div>
            <div class="hero-stat"><span class="num" data-count="4.9" data-suffix="/5">0</span><span class="lbl">App store</span></div>
            <div class="hero-stat"><span class="num" data-count="62" data-suffix="%">0</span><span class="lbl">Better sleep</span></div>
          </div>
        </div>

        <div class="hero-phone" data-hero="phone">
          <div class="phone-shell" id="heroPhone">
            <span class="btn-side btn-action"></span>
            <span class="btn-side btn-vol-up"></span>
            <span class="btn-side btn-vol-dn"></span>
            <span class="btn-side btn-power"></span>
            <div class="phone-screen">
              <img src="/screenshots/image2.jpg" alt="Metea dashboard" />
              <div class="phone-notch"></div>
            </div>
          </div>
          <div class="float-card float-a" data-float="1"><span class="icn" style="background:#E8F5EE;color:#1A7F5A">●</span><div><div class="tag">HRV · Good</div><div class="val">67 <span style="font-size:11px;color:var(--muted)">BPM</span></div></div></div>
          <div class="float-card float-b" data-float="2"><span class="icn" style="background:#FFF3DC;color:#B88200">☾</span><div><div class="tag">Sleep score</div><div class="val">83<span style="font-size:11px;color:var(--muted)">/100</span></div></div></div>
          <div class="float-card float-c" data-float="3"><span class="icn" style="background:#EEEBFF;color:#6A56D6">⚡</span><div><div class="tag">Recovery</div><div class="val">74%</div></div></div>
        </div>
      </div>

      <div class="ticker">
        <div class="ticker-track" id="heroTicker">
          <span>Listen <em>to your</em> body —</span>
          <span>Recover <em>deeply</em> —</span>
          <span>Sleep <em>better</em> —</span>
          <span>Train <em>smarter</em> —</span>
          <span>Listen <em>to your</em> body —</span>
          <span>Recover <em>deeply</em> —</span>
          <span>Sleep <em>better</em> —</span>
          <span>Train <em>smarter</em> —</span>
        </div>
      </div>
    </header>

    <!-- MARQUEE STRIP -->
    <div class="marquee-strip">
      <div class="marquee-track" id="marq">
        <span>Apple Health</span><span class="dot"></span>
        <span><em>HRV</em> tracking</span><span class="dot"></span>
        <span>Sleep phases</span><span class="dot"></span>
        <span>Stress &amp; recovery</span><span class="dot"></span>
        <span><em>AI</em> coaching</span><span class="dot"></span>
        <span>Nutrition</span><span class="dot"></span>
        <span>Biological age</span><span class="dot"></span>
        <span>Apple Watch</span><span class="dot"></span>
        <span>Live activities</span><span class="dot"></span>
        <span>Apple Health</span><span class="dot"></span>
        <span><em>HRV</em> tracking</span><span class="dot"></span>
        <span>Sleep phases</span><span class="dot"></span>
        <span>Stress &amp; recovery</span><span class="dot"></span>
        <span><em>AI</em> coaching</span><span class="dot"></span>
        <span>Nutrition</span><span class="dot"></span>
        <span>Biological age</span><span class="dot"></span>
      </div>
    </div>

    <!-- MANIFESTO -->
    <section class="manifesto" id="manifesto">
      <div class="wrap">
        <div class="manifesto-label">
          <span class="idx">§ 01</span>
          <span class="line"></span>
          <span class="ttl">Principle</span>
        </div>

        <h2 class="big-type" id="bigType">
          <span class="word"><span>Your</span></span>
          <span class="word"><span><em>body</em></span></span>
          <span class="word"><span>already</span></span>
          <span class="word"><span>knows.</span></span><br/>
          <span class="word"><span class="fade">We&nbsp;just&nbsp;help</span></span>
          <span class="word"><span class="fade">it</span></span>
          <span class="word"><span>speak —</span></span>
          <span class="word"><span>clearly,</span></span>
          <span class="word"><span><em>honestly,</em></span></span>
          <span class="word"><span>every&nbsp;day.</span></span>
        </h2>

        <div class="manifesto-meta">
          <div class="meta-item"><div class="k">Approach</div><div class="v">Signals over noise</div></div>
          <div class="meta-item"><div class="k">Method</div><div class="v">Agentic AI</div></div>
          <div class="meta-item"><div class="k">Source</div><div class="v">Your own data</div></div>
          <div class="meta-item"><div class="k">Privacy</div><div class="v">On-device</div></div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features" id="features">
      <div class="wrap">
        <div class="manifesto-label">
          <span class="idx">§ 02</span>
          <span class="line"></span>
          <span class="ttl">System</span>
        </div>
        <div class="head" style="margin-top:24px">
          <h2 class="display reveal-head">Everything<br/>for your <em class="serif-italic green">health.</em></h2>
          <p>Nine coordinated agents, one calm interface. They listen, correlate, and nudge — not notify.</p>
        </div>

        <div class="bento">
          <div class="card c-1 magnet">
            <span class="idx">01</span>
            <div class="c-eye">Primary agent</div>
            <h3 style="color:var(--cream);font-size:40px">AI Health<br/>Agents.</h3>
            <p>Intelligent agents analyze your data around the clock and translate signals into a single daily plan.</p>
            <svg class="pulse-svg" viewBox="0 0 800 200" preserveAspectRatio="none">
              <path d="M0,100 L80,100 L100,60 L130,140 L160,100 L220,100 L240,40 L270,160 L300,100 L380,100 L400,70 L430,130 L460,100 L540,100 L560,50 L590,150 L620,100 L800,100"/>
            </svg>
          </div>

          <div class="card c-2 magnet">
            <span class="idx">02</span>
            <div class="c-eye">Integration</div>
            <h3>HealthKit sync.</h3>
            <p>Seamless link with Apple Health. HR, HRV, sleep — in, automatically.</p>
          </div>

          <div class="card c-3 magnet">
            <span class="idx">03</span>
            <div class="c-eye">Signal</div>
            <h3>Stress &amp; recovery.</h3>
            <p>Know when to push, when to rest.</p>
            <div class="rings">
              <span class="ring r1"></span>
              <span class="ring r2"></span>
              <span class="ring r3"></span>
            </div>
          </div>

          <div class="card c-4 magnet">
            <span class="idx">04</span>
            <div class="c-eye" style="color:rgba(255,255,255,.6)">Featured</div>
            <h3 style="color:var(--cream);font-size:34px">HRV,<br/>in orbit.</h3>
            <p>Variability watched in real-time. A small rise after good sleep. A quiet dip during a hard week. Metea keeps the pattern in view.</p>
            <div class="orbit">
              <span class="node" id="orbNode"></span>
            </div>
          </div>

          <div class="card c-5 magnet">
            <span class="idx">05</span>
            <div class="c-eye">Night</div>
            <h3>Sleep.</h3>
            <p>Phase by phase analysis.</p>
            <div class="moon"></div>
          </div>

          <div class="card c-6 magnet">
            <span class="idx">06</span>
            <div class="c-eye">Fuel</div>
            <h3>Nutrition.</h3>
            <p>Calories, vitamins, minerals, water.</p>
            <div class="bars">
              <span class="bar" style="height:30%"></span>
              <span class="bar" style="height:55%"></span>
              <span class="bar" style="height:70%"></span>
              <span class="bar" style="height:45%"></span>
              <span class="bar" style="height:85%"></span>
              <span class="bar" style="height:65%"></span>
              <span class="bar" style="height:92%"></span>
              <span class="bar" style="height:40%"></span>
            </div>
          </div>

          <div class="card c-7 magnet">
            <span class="idx">07</span>
            <div class="c-eye">On your wrist</div>
            <h3>Watch.</h3>
            <p>Live complications. Night vitals. Quick glances.</p>
            <div class="watch">67<span style="font-size:11px;margin-left:2px">bpm</span></div>
          </div>

          <div class="card c-8 magnet">
            <span class="idx">08</span>
            <div class="c-eye">Together</div>
            <h3>Community.</h3>
            <p>Challenges. Streaks. Friends who nudge, don't nag.</p>
            <div class="dots-grid">
              <span class="d on">M</span><span class="d">J</span><span class="d on">A</span><span class="d">S</span><span class="d on">L</span><span class="d">T</span>
              <span class="d">R</span><span class="d on">K</span><span class="d">E</span><span class="d on">D</span><span class="d">P</span><span class="d on">H</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="how" id="how">
      <div class="wrap">
        <div class="manifesto-label">
          <span class="idx">§ 03</span>
          <span class="line"></span>
          <span class="ttl">Process</span>
        </div>
        <div class="head" style="margin:100px 0">
          <h2 class="display">Three steps<br/>to a <em class="serif-italic green">clearer</em> day.</h2>
        </div>

        <div class="steps">
          <div class="step">
            <div class="num"><em>0</em>1</div>
            <div>
              <div class="kicker">Connect</div>
              <h3>Link Apple Health in<br/>under thirty seconds.</h3>
              <p class="desc">Grant Metea access once. Your data stays secure on your device — we read it, never keep it.</p>
            </div>
            <div><span class="step-marker"><span class="d"></span> On-device · Zero retention</span></div>
          </div>
          <div class="step">
            <div class="num"><em>0</em>2</div>
            <div>
              <div class="kicker">Analyze</div>
              <h3>Agents find the patterns<br/>you can't see alone.</h3>
              <p class="desc">Correlations across sleep, stress, nutrition, and training — surfaced as a daily briefing, not a dashboard of numbers.</p>
            </div>
            <div><span class="step-marker"><span class="d"></span> 140+ signals correlated</span></div>
          </div>
          <div class="step">
            <div class="num"><em>0</em>3</div>
            <div>
              <div class="kicker">Act</div>
              <h3>Receive one calm plan,<br/>written for today.</h3>
              <p class="desc">Two or three things that actually matter. Ranked. Reasoned. Adjustable. You decide; Metea listens.</p>
            </div>
            <div><span class="step-marker"><span class="d"></span> Updated every morning</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- APP PREVIEW -->
    <section class="preview" id="preview">
      <div class="wrap">
        <div class="manifesto-label" style="border-color:rgba(243,242,235,.1)">
          <span class="idx" style="color:rgba(243,242,235,.5)">§ 04</span>
          <span class="line" style="background:rgba(243,242,235,.1)"></span>
          <span class="ttl" style="color:rgba(243,242,235,.5)">Inside the app</span>
        </div>
        <div class="head" style="margin-top:40px">
          <h2 class="display">A dashboard<br/>that <em>breathes.</em></h2>
          <p>Six interconnected views, each tuned to a facet of how you feel. Watch one, and the rest adjust.</p>
        </div>

        <div class="preview-grid">
          <div class="tabs-col" id="tabsCol">
            <div class="tab-item active" data-tab="0">
              <span class="tidx">01</span>
              <div>
                <h4>AI Dashboard</h4>
                <p>Stress, recovery, and heart — decoded in one glance.</p>
              </div>
              <div class="progress"></div>
            </div>
            <div class="tab-item" data-tab="1">
              <span class="tidx">02</span>
              <div>
                <h4>Training readiness</h4>
                <p>Know when to push — or rest — before you start.</p>
              </div>
              <div class="progress"></div>
            </div>
            <div class="tab-item" data-tab="2">
              <span class="tidx">03</span>
              <div>
                <h4>Sleep</h4>
                <p>Phase-by-phase architecture with actionable tips.</p>
              </div>
              <div class="progress"></div>
            </div>
          </div>

          <div class="preview-phone">
            <div class="phone-shell">
              <span class="btn-side btn-action"></span>
              <span class="btn-side btn-vol-up"></span>
              <span class="btn-side btn-vol-dn"></span>
              <span class="btn-side btn-power"></span>
              <div class="phone-screen">
                <div class="phone-notch"></div>
                <div class="preview-slides" id="previewSlides">
                  <div class="preview-slide active"><img src="/screenshots/image2.jpg" alt=""/></div>
                  <div class="preview-slide"><img src="/screenshots/image4.jpg" alt=""/></div>
                  <div class="preview-slide"><img src="/screenshots/image6.jpg" alt=""/></div>
                  <div class="preview-slide"><img src="/screenshots/image8.jpg" alt=""/></div>
                  <div class="preview-slide"><img src="/screenshots/image5.jpg" alt=""/></div>
                  <div class="preview-slide"><img src="/screenshots/image9.jpg" alt=""/></div>
                </div>
              </div>
            </div>
          </div>

          <div class="tabs-col">
            <div class="tab-item" data-tab="3">
              <span class="tidx">04</span>
              <div>
                <h4>Nutrition</h4>
                <p>Vitamins, minerals, hydration — the full picture.</p>
              </div>
              <div class="progress"></div>
            </div>
            <div class="tab-item" data-tab="4">
              <span class="tidx">05</span>
              <div>
                <h4>Healthspan</h4>
                <p>Your biological age, calculated from your data.</p>
              </div>
              <div class="progress"></div>
            </div>
            <div class="tab-item" data-tab="5">
              <span class="tidx">06</span>
              <div>
                <h4>Apple Watch</h4>
                <p>Live complications &amp; night vitals on your wrist.</p>
              </div>
              <div class="progress"></div>
            </div>
          </div>
        </div>

        <div class="facts" style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:80px">
          <div class="fact"><div class="k">Live signals</div><div class="v">140<em>+</em></div><div class="s">Correlated across sources every hour.</div></div>
          <div class="fact"><div class="k">Daily briefing</div><div class="v">08<em>:</em>00</div><div class="s">A single plan, delivered as you wake.</div></div>
          <div class="fact"><div class="k">Privacy</div><div class="v">On-device</div><div class="s">Your body's data never leaves your phone.</div></div>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="gallery">
      <div class="wrap">
        <div class="manifesto-label">
          <span class="idx">§ 05</span>
          <span class="line"></span>
          <span class="ttl">Gallery</span>
        </div>
        <div class="head" style="margin-top:32px">
          <h2 class="display">Designed for<br/>every <em class="serif-italic green">detail.</em></h2>
        </div>
      </div>
      <div class="row" id="galleryRow1">
        <div class="shot"><img src="/screenshots/image2.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image3.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image6.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image9.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image5.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image2.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image3.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image6.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image9.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image5.jpg" alt=""/></div>
      </div>
      <div class="row" id="galleryRow2">
        <div class="shot"><img src="/screenshots/image4.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image7.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image8.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image1.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image5.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image4.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image7.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image8.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image1.jpg" alt=""/></div>
        <div class="shot"><img src="/screenshots/image5.jpg" alt=""/></div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats" id="stats">
      <div class="wrap">
        <div class="manifesto-label">
          <span class="idx">§ 06</span>
          <span class="line"></span>
          <span class="ttl">Evidence</span>
        </div>
        <div class="stats-head" style="margin-top:48px">
          <h2 class="display">Trusted by<br/><em class="serif-italic green">thousands</em>,<br/>measured in <em class="serif-italic">nights</em>.</h2>
        </div>
        <div class="stats-grid">
          <div class="sbox"><div class="k">Active users</div><div class="v"><span class="cnt" data-cnt="10000">0</span><span class="unit">+</span></div></div>
          <div class="sbox"><div class="k">Satisfaction</div><div class="v"><span class="cnt" data-cnt="98">0</span><span class="unit">%</span></div></div>
          <div class="sbox"><div class="k">App Store</div><div class="v"><span class="cnt" data-cnt="4.9" data-decimals="1">0.0</span></div></div>
          <div class="sbox"><div class="k">Less stress</div><div class="v"><span class="cnt" data-cnt="50">0</span><span class="unit">%</span></div></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="test" id="test">
      <div class="wrap">
        <div class="test-eye">§ 06 · Real voices</div>
        <div class="test-stage" id="testStage">

          <div class="test-slide active" data-slide="0">
            <p class="quote">
              &ldquo;I stopped <em>guessing</em> how I felt. Metea showed me the pattern behind my energy crashes — <em>caffeine at 4 PM</em>, not stress — and my afternoons are mine again.&rdquo;
            </p>
            <div class="author">
              <div class="avatar" style="background:linear-gradient(135deg,#5a8f7b,#7aaa96)">M</div>
              <div class="author-meta">
                <div class="n">Maria K. · Product Designer</div>
                <div class="r">Berlin · 6 months with Metea</div>
              </div>
            </div>
          </div>

          <div class="test-slide" data-slide="1">
            <p class="quote">
              &ldquo;Three sleep trackers told me I slept <em>badly</em>. Metea told me <em>why</em>, and what to change tonight. I haven&rsquo;t hit snooze in nine weeks.&rdquo;
            </p>
            <div class="author">
              <div class="avatar" style="background:linear-gradient(135deg,#2d4e45,#5a8f7b)">J</div>
              <div class="author-meta">
                <div class="n">Jonas R. · Founder</div>
                <div class="r">Munich · 4 months with Metea</div>
              </div>
            </div>
          </div>

          <div class="test-slide" data-slide="2">
            <p class="quote">
              &ldquo;I came for the step count. I stayed because Metea <em>actually listens</em> — it doesn&rsquo;t push goals at me, it notices what&rsquo;s working and <em>quietly builds on it</em>.&rdquo;
            </p>
            <div class="author">
              <div class="avatar" style="background:linear-gradient(135deg,#7aaa96,#a8cab9)">A</div>
              <div class="author-meta">
                <div class="n">Aisha O. · Pediatrician</div>
                <div class="r">Hamburg · 11 months with Metea</div>
              </div>
            </div>
          </div>

          <div class="test-slide" data-slide="3">
            <p class="quote">
              &ldquo;My coach wanted data. My body wanted rest. Metea was the first app that <em>respected both</em> — peak training weeks <em>and</em> the recovery days I used to skip.&rdquo;
            </p>
            <div class="author">
              <div class="avatar" style="background:linear-gradient(135deg,#1f2a2b,#2d4e45)">L</div>
              <div class="author-meta">
                <div class="n">Luca B. · Marathon runner</div>
                <div class="r">Zürich · 8 months with Metea</div>
              </div>
            </div>
          </div>

          <div class="test-slide" data-slide="4">
            <p class="quote">
              &ldquo;I&rsquo;ve tried every wellness app on the market. Metea is the first one that feels <em>less like a tracker</em> and <em>more like a friend who&rsquo;s paying attention</em>.&rdquo;
            </p>
            <div class="author">
              <div class="avatar" style="background:linear-gradient(135deg,#5a8f7b,#2d4e45)">S</div>
              <div class="author-meta">
                <div class="n">Sophie M. · Journalist</div>
                <div class="r">Vienna · 1 year with Metea</div>
              </div>
            </div>
          </div>

        </div>

        <div class="test-dots" id="testDots"></div>
        <div class="test-nav">
          <button class="test-arrow" id="testPrev" aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2 4 7l5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="test-arrow" id="testNext" aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m5 2 5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta" id="cta">
      <div class="wrap">
        <div class="cta-eye">§ 07 · Download</div>
        <h2 id="ctaHeading">
          <span class="line1">Ready for a</span><br/>
          <span class="line2"><em>healthier</em> <span class="fade">life?</span></span>
        </h2>
        <p>Download Metea for free. Connect Apple Health. Wake up tomorrow with a plan that fits the body you actually have.</p>
        <div class="cta-row">
          <a
            href="https://apps.apple.com/app/metea/id6756438562"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ink magnet"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span>Download on App Store</span>
          </a>
          <a href="#features" class="btn btn-out magnet"><span>See features</span> <span class="arrow">→</span></a>
        </div>
        <div class="cta-badges">
          <span>100% Privacy</span>
          <span>Free to start</span>
          <span>Made with care</span>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="wrap">
        <div class="foot-grid">
          <div>
            <div class="foot-brand" style="display:flex;align-items:center;gap:10px"><img src="/logo.png" alt="Metea" style="width:32px;height:32px;border-radius:9px;object-fit:cover"/> <span>Metea</span></div>
            <p class="foot-brand-desc">Your health, intelligently analyzed. Connect Apple Health with AI agents for personalized insights.</p>
          </div>
          <div class="foot-col">
            <h5>Product</h5>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#preview">Preview</a>
            <a href="https://apps.apple.com/app/metea/id6756438562" target="_blank" rel="noopener noreferrer">Download</a>
          </div>
          <div class="foot-col">
            <h5>Legal</h5>
            <NuxtLink to="/privacy">Privacy</NuxtLink>
            <NuxtLink to="/imprint">Imprint</NuxtLink>
            <NuxtLink to="/terms">Terms</NuxtLink>
            <NuxtLink to="/support">Support</NuxtLink>
          </div>
          <div class="foot-col">
            <h5>Follow</h5>
            <a href="#">Twitter / X</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© 2026 Metea. All rights reserved.</span>
          <span>v2.4 · Built to listen</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

useHead({
  title: 'Metea — Listen to your Body',
  meta: [
    { name: 'description', content: 'AI health agents analyze your data and coach you on stress, sleep, nutrition, and recovery.' }
  ]
})

let cleanup: (() => void) | null = null

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  const Lenis = (await import('lenis')).default

  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time: number) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  // ---------- PRELOADER ----------
  const count = document.getElementById('pre-count')!
  const bar = document.getElementById('pre-bar')!
  const preloader = document.getElementById('preloader')!
  const letters = document.querySelectorAll('#pre-brand .letter')

  gsap.to(letters, { y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, delay: 0.1 })

  const startHero = () => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl.from('[data-hero="pill"]', { y: 30, opacity: 0, duration: 0.8 })

    const titles = ['[data-hero="t1"]', '[data-hero="t2"]', '[data-hero="t3"]']
    titles.forEach((sel, i) => {
      gsap.set(sel, { yPercent: 110 })
      tl.to(sel, { yPercent: 0, duration: 1.2 }, `-=${i === 0 ? 0.4 : 0.9}`)
    })

    gsap.set('.hero-sub .reveal-inner', { yPercent: 110 })
    tl.to('.hero-sub .reveal-inner', { yPercent: 0, duration: 1.0, stagger: 0.08 }, '-=0.8')

    tl.from('[data-hero="cta"] > *', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.6')
    tl.from('[data-hero="stats"] .hero-stat', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.5')
    tl.from('[data-hero="phone"] .phone-shell', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=1.3')
    tl.from('[data-float="1"],[data-float="2"],[data-float="3"]', { y: 20, opacity: 0, scale: 0.85, duration: 0.7, stagger: 0.1, ease: 'back.out(1.6)' }, '-=0.8')

    document.querySelectorAll<HTMLElement>('.hero-stat .num').forEach(el => {
      const target = parseFloat(el.dataset.count || '0')
      const suffix = el.dataset.suffix || ''
      const decimals = target % 1 !== 0 ? 1 : 0
      const obj = { v: 0 }
      gsap.to(obj, {
        v: target, duration: 2.4, delay: 0.8, ease: 'power2.out',
        onUpdate: () => {
          el.textContent = decimals ? obj.v.toFixed(1) : Math.floor(obj.v).toLocaleString()
        },
        onComplete: () => { el.textContent = (decimals ? target.toFixed(1) : target.toLocaleString()) + suffix }
      })
    })

    gsap.to('[data-float="1"]', { y: -12, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    gsap.to('[data-float="2"]', { y: 10, duration: 3.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.4 })
    gsap.to('[data-float="3"]', { y: -8, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.8 })

    const phone = document.getElementById('heroPhone')!
    const heroEl = document.getElementById('hero')!
    const onMove = (e: MouseEvent) => {
      const r = heroEl.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      gsap.to(phone, { rotationY: x * 10, rotationX: -y * 6, duration: 0.8, ease: 'power3.out', transformPerspective: 900 })
    }
    const onLeave = () => gsap.to(phone, { rotationY: 0, rotationX: 0, duration: 1, ease: 'power3.out' })
    heroEl.addEventListener('mousemove', onMove)
    heroEl.addEventListener('mouseleave', onLeave)

    const track = document.getElementById('heroTicker')!
    gsap.to(track, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
  }

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(letters, { y: -140, duration: 0.8, ease: 'expo.inOut', stagger: 0.03 })
      gsap.to(preloader, {
        yPercent: -100, duration: 1.0, ease: 'expo.inOut', delay: 0.25,
        onComplete: () => {
          preloader.style.display = 'none'
          document.body.classList.add('loaded')
          startHero()
        }
      })
    }
  })
  const n = { v: 0 }
  tl.to(n, {
    v: 100, duration: 1.8, ease: 'power2.inOut',
    onUpdate: () => {
      count.textContent = String(Math.floor(n.v)).padStart(3, '0')
      bar.style.width = n.v + '%'
    }
  })

  // ---------- NAV scroll state ----------
  const nav = document.getElementById('nav')!
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50)
  window.addEventListener('scroll', onScroll, { passive: true })

  // ---------- PARALLAX BLOBS ----------
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
    const amt = parseFloat(el.dataset.parallax || '0')
    gsap.to(el, { y: amt * 10, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
  })

  // ---------- MARQUEES ----------
  gsap.to('#marq', { xPercent: -50, duration: 55, ease: 'none', repeat: -1 })
  gsap.to('#galleryRow1', { xPercent: -50, duration: 80, ease: 'none', repeat: -1 })
  gsap.fromTo('#galleryRow2', { xPercent: -50 }, { xPercent: 0, duration: 90, ease: 'none', repeat: -1 })

  // ---------- MANIFESTO fade ----------
  const bt = document.getElementById('bigType')
  if (bt) {
    gsap.set(bt, { opacity: 0, y: 40 })
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) gsap.to(bt, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' })
      })
    }, { threshold: 0.15 }).observe(bt)
  }

  // ---------- Reveal heads ----------
  gsap.utils.toArray<HTMLElement>('.reveal-head, .head h2, .stats-head h2').forEach(h => {
    gsap.from(h, { y: 80, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 85%' } })
  })

  // ---------- Bento cards ----------
  gsap.utils.toArray<HTMLElement>('.bento .card').forEach((c, i) => {
    gsap.from(c, { y: 60, opacity: 0, duration: 0.9, delay: (i % 3) * 0.05, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 88%' } })
  })

  gsap.to('.pulse-svg path', { strokeDashoffset: 0, duration: 2.6, ease: 'power2.out', scrollTrigger: { trigger: '.c-1', start: 'top 75%' } })

  const orbNode = document.getElementById('orbNode')
  if (orbNode) {
    const center = 160, radius = 160
    gsap.to({ a: 0 }, {
      a: Math.PI * 2, duration: 12, ease: 'none', repeat: -1,
      onUpdate: function () {
        const a = (this.targets()[0] as { a: number }).a
        orbNode.style.left = (center + Math.cos(a) * radius - 7) + 'px'
        orbNode.style.top = (center + Math.sin(a) * radius - 7) + 'px'
      }
    })
  }

  gsap.utils.toArray<HTMLElement>('.bars .bar').forEach((b, i) => {
    gsap.to(b, { scaleY: 1, duration: 0.9, delay: i * 0.05, ease: 'power3.out', scrollTrigger: { trigger: '.c-6', start: 'top 80%' } })
  })

  // ---------- HOW IT WORKS ----------
  gsap.utils.toArray<HTMLElement>('.step').forEach(s => {
    gsap.from(s, { y: 80, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 85%' } })
  })

  // ---------- APP PREVIEW tabs ----------
  let previewInterval: number | null = null
  {
    const tabs = document.querySelectorAll<HTMLElement>('.tab-item')
    const slides = document.querySelectorAll<HTMLElement>('.preview-slide')
    let active = 0

    const show = (i: number) => {
      tabs.forEach((t, j) => t.classList.toggle('active', j === i))
      slides.forEach((s, j) => {
        if (j === i) {
          gsap.fromTo(s, { opacity: 0, scale: 1.02, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'expo.out', onStart: () => s.classList.add('active') })
        } else {
          s.classList.remove('active')
          gsap.to(s, { opacity: 0, duration: 0.4 })
        }
      })
      active = i
    }
    const cycle = () => {
      previewInterval = window.setInterval(() => show((active + 1) % tabs.length), 5000)
    }
    tabs.forEach((t, i) => t.addEventListener('click', () => {
      if (previewInterval) clearInterval(previewInterval)
      show(i)
      cycle()
    }))
    show(0)
    cycle()
  }

  // ---------- Counters ----------
  gsap.utils.toArray<HTMLElement>('.cnt').forEach(el => {
    const target = parseFloat(el.dataset.cnt || '0')
    const decimals = parseInt(el.dataset.decimals || '0')
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true, onEnter: () => {
        const o = { v: 0 }
        gsap.to(o, {
          v: target, duration: 2.4, ease: 'power2.out',
          onUpdate: () => {
            el.textContent = decimals ? o.v.toFixed(decimals) : Math.floor(o.v).toLocaleString()
          },
          onComplete: () => {
            el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString()
          }
        })
      }
    })
  })

  // ---------- Testimonial carousel ----------
  let testTimer: number | null = null
  {
    const stage = document.getElementById('testStage')!
    const slides = stage.querySelectorAll<HTMLElement>('.test-slide')
    const dotsHost = document.getElementById('testDots')!
    const total = slides.length
    let idx = 0

    slides.forEach((_, i) => {
      const b = document.createElement('button')
      b.className = 'test-dot' + (i === 0 ? ' active' : '')
      b.setAttribute('aria-label', `Quote ${i + 1}`)
      b.addEventListener('click', () => go(i, true))
      dotsHost.appendChild(b)
    })
    const dots = dotsHost.querySelectorAll<HTMLElement>('.test-dot')

    const go = (n: number, manual = false) => {
      idx = (n + total) % total
      slides.forEach((s, i) => s.classList.toggle('active', i === idx))
      dots.forEach((d, i) => {
        d.classList.remove('active')
        void d.offsetWidth
        if (i === idx) d.classList.add('active')
      })
      if (manual) reset()
    }
    const next = () => go(idx + 1)
    const prev = () => go(idx - 1)
    const start = () => { testTimer = window.setInterval(next, 7000) }
    const reset = () => { if (testTimer) clearInterval(testTimer); start() }

    document.getElementById('testNext')!.addEventListener('click', () => { next(); reset() })
    document.getElementById('testPrev')!.addEventListener('click', () => { prev(); reset() })

    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) start()
        else if (testTimer) clearInterval(testTimer)
      })
    }, { threshold: 0.3 }).observe(stage)
  }

  // ---------- CTA fade ----------
  const cta = document.getElementById('ctaHeading')
  if (cta) {
    gsap.set(cta, { opacity: 0, y: 40 })
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) gsap.to(cta, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out' })
      })
    }, { threshold: 0.15 }).observe(cta)
  }

  // ---------- Cursor + magnetic ----------
  const cursor = document.getElementById('cursor')!
  const dot = document.getElementById('cursorDot')!
  let mx = 0, my = 0, cx = 0, cy = 0, dx = 0, dy = 0
  const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
  window.addEventListener('mousemove', onMouse)
  gsap.ticker.add(() => {
    cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15
    dx += (mx - dx) * 0.5; dy += (my - dy) * 0.5
    cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
    dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`
  })

  document.querySelectorAll('a, button, .magnet, .tab-item, .shot, .card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hot'))
    el.addEventListener('mouseleave', () => cursor.classList.remove('hot'))
  })

  document.querySelectorAll<HTMLElement>('.magnet').forEach(el => {
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.5, ease: 'power3.out' })
    })
    el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' }))
  })

  // ---------- Smooth anchor scroll ----------
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href') || ''
      if (id.length < 2) return
      const t = document.querySelector(id)
      if (t) { e.preventDefault(); lenis.scrollTo(t as HTMLElement, { offset: -60, duration: 1.4 }) }
    })
  })

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.01)
  }

  cleanup = () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('mousemove', onMouse)
    if (previewInterval) clearInterval(previewInterval)
    if (testTimer) clearInterval(testTimer)
    ScrollTrigger.getAll().forEach(st => st.kill())
    lenis.destroy()
  }
})

onBeforeUnmount(() => { if (cleanup) cleanup() })
</script>

<style>
/* =========================================================
   METEA — ELEVATED DESIGN SYSTEM
   ========================================================= */
:root{
  --ink:#0A1510;
  --ink-2:#1a2a22;
  --muted:#5b6b63;
  --cream:#F3F2EB;
  --cream-2:#E9E7DB;
  --paper:#FAFAF6;
  --green:#1A7F5A;
  --green-2:#2D9B6E;
  --green-3:#3CB783;
  --green-mint:#C7E8D8;
  --violet:#9B8CF7;
  --amber:#E8B84D;
  --line:rgba(10,21,16,.08);
  --line-strong:rgba(10,21,16,.14);
  --f-display:'Syne',ui-serif,system-ui,sans-serif;
  --f-body:'Inter',ui-sans-serif,system-ui,sans-serif;
  --f-mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}
html,body{background:var(--cream);color:var(--ink);font-family:var(--f-body)}
html{scroll-behavior:auto}
body{overflow-x:hidden;font-size:16px;line-height:1.5}
::selection{background:var(--ink);color:var(--cream)}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}

.display{font-family:var(--f-display);font-weight:700;letter-spacing:-0.03em;line-height:.94}
.serif-italic{font-style:italic;font-weight:500}
.eyebrow{font-family:var(--f-mono);text-transform:uppercase;font-size:11px;letter-spacing:.16em;font-weight:500;color:var(--muted)}
.label{font-family:var(--f-mono);text-transform:uppercase;font-size:11px;letter-spacing:.14em;font-weight:500}
h1,h2,h3,h4{font-family:var(--f-display);font-weight:700;letter-spacing:-0.03em;line-height:1}
p{color:var(--muted)}
.ink{color:var(--ink)}
.green{color:var(--green)}

.wrap{max-width:1280px;margin:0 auto;padding:0 28px}
section{position:relative}

/* CURSOR */
.cursor{
  position:fixed;top:0;left:0;width:28px;height:28px;border-radius:50%;
  border:1px solid var(--ink);
  pointer-events:none;z-index:9999;mix-blend-mode:difference;
  transform:translate(-50%,-50%);
  transition:width .35s cubic-bezier(.16,1,.3,1),height .35s cubic-bezier(.16,1,.3,1),background .3s,border-color .3s;
  will-change:transform
}
.cursor.hot{width:64px;height:64px;background:var(--cream);border-color:var(--cream)}
.cursor-dot{position:fixed;top:0;left:0;width:5px;height:5px;border-radius:50%;background:var(--ink);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);mix-blend-mode:difference}
@media (max-width:900px){.cursor,.cursor-dot{display:none}}

/* PRELOADER */
#preloader{
  position:fixed;inset:0;background:var(--ink);z-index:1000;
  display:flex;align-items:center;justify-content:center;color:var(--cream);
  font-family:var(--f-display);font-weight:700;font-size:clamp(4rem,12vw,10rem);
  letter-spacing:-.04em;overflow:hidden
}
#preloader .count{
  position:absolute;bottom:28px;right:28px;
  font-family:var(--f-mono);font-weight:500;font-size:13px;letter-spacing:.05em;color:var(--cream);opacity:.6
}
#preloader .brand{position:relative;display:inline-block}
#preloader .brand .letter{display:inline-block;transform:translateY(100%);will-change:transform}
#preloader .bar{position:absolute;left:0;bottom:0;height:2px;background:var(--green-3);width:0%}

/* NAV */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  padding:18px 28px;display:flex;align-items:center;justify-content:space-between;
  transition:background .4s, padding .4s, box-shadow .4s;
}
.nav.scrolled{padding:12px 28px;background:rgba(243,242,235,.82);backdrop-filter:blur(16px) saturate(160%);border-bottom:1px solid var(--line)}
.nav .logo{display:flex;align-items:center;gap:10px;font-family:var(--f-display);font-weight:700;font-size:18px;letter-spacing:-.02em}
.nav .logo-mark{width:34px;height:34px;border-radius:10px;overflow:hidden;display:block}
.nav .logo-mark img{width:100%;height:100%;object-fit:cover;display:block}
.nav-links{display:flex;align-items:center;gap:32px}
.nav-links a{font-size:13.5px;color:var(--ink);opacity:.6;transition:opacity .3s;position:relative}
.nav-links a:hover{opacity:1}
.nav-links a::after{content:"";position:absolute;left:0;bottom:-6px;width:100%;height:1px;background:currentColor;transform:scaleX(0);transform-origin:right;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.nav-links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav-cta{
  display:inline-flex;align-items:center;gap:10px;
  background:var(--ink);color:var(--cream);padding:10px 18px;border-radius:999px;font-size:13px;font-weight:500;
  transition:transform .4s cubic-bezier(.16,1,.3,1),background .3s;
  position:relative;overflow:hidden
}
.nav-cta:hover{background:var(--green)}
.nav-cta .dot{width:6px;height:6px;border-radius:50%;background:var(--green-3);box-shadow:0 0 10px var(--green-3);animation:pulse 1.8s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.7)}}
@media (max-width:780px){.nav-links{display:none}}

/* HERO */
.hero{
  min-height:100vh;padding:130px 0 60px;display:flex;align-items:center;
  position:relative;overflow:hidden;background:var(--cream)
}
.hero-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.hero-grain{
  position:absolute;inset:0;opacity:.06;pointer-events:none;mix-blend-mode:multiply;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")
}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55;will-change:transform}
.blob.a{width:520px;height:520px;background:radial-gradient(circle,#3CB783,#1A7F5A 60%,transparent 72%);top:-120px;right:-80px}
.blob.b{width:360px;height:360px;background:radial-gradient(circle,#C7E8D8,transparent 70%);bottom:-80px;left:-60px}
.blob.c{width:280px;height:280px;background:radial-gradient(circle,#9B8CF7,transparent 70%);top:40%;left:35%;opacity:.28}

.hero-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;width:100%}
@media (max-width:980px){.hero-grid{grid-template-columns:1fr;gap:40px}}

.hero-pill{
  display:inline-flex;align-items:center;gap:10px;padding:8px 14px;
  background:var(--paper);border:1px solid var(--line);border-radius:999px;font-size:12px;
  font-family:var(--f-mono);letter-spacing:.06em;color:var(--ink);margin-bottom:28px
}
.hero-pill .live{width:6px;height:6px;border-radius:50%;background:var(--green-3);box-shadow:0 0 10px var(--green-3);animation:pulse 1.8s ease-in-out infinite}

.hero-title{
  font-family:var(--f-display);font-weight:700;letter-spacing:-0.045em;line-height:.9;
  font-size:clamp(3.2rem,10vw,9rem);
}
.hero-title .row{overflow:hidden;display:block}
.hero-title .word{display:inline-block}
.hero-title em{font-style:italic;font-weight:500;color:var(--green)}
.hero-title .stroke{color:transparent;-webkit-text-stroke:1.2px var(--ink)}

.hero-sub{
  margin-top:28px;max-width:520px;font-size:18px;line-height:1.55;color:var(--muted)
}
.hero-sub .reveal-line{overflow:hidden;display:block}
.hero-sub .reveal-inner{display:block;transform:translateY(110%)}

.hero-cta{display:flex;gap:12px;margin-top:36px;flex-wrap:wrap}
.btn{
  display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:999px;
  font-size:14px;font-weight:500;transition:transform .5s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden
}
.btn-ink{background:var(--ink);color:var(--cream)}
.btn-ink::before{content:"";position:absolute;inset:0;background:var(--green);transform:translateY(101%);transition:transform .6s cubic-bezier(.77,0,.175,1);z-index:0}
.btn-ink:hover::before{transform:translateY(0)}
.btn-ink > *{position:relative;z-index:1}
.btn-out{background:transparent;color:var(--ink);border:1px solid var(--line-strong)}
.btn-out:hover{background:var(--ink);color:var(--cream);border-color:var(--ink)}
.btn .arrow{display:inline-block;transition:transform .45s cubic-bezier(.16,1,.3,1)}
.btn:hover .arrow{transform:translateX(4px)}

.hero-stats{display:flex;gap:40px;margin-top:56px;flex-wrap:wrap}
.hero-stat{display:flex;flex-direction:column;gap:4px}
.hero-stat .num{font-family:var(--f-display);font-weight:700;font-size:28px;letter-spacing:-.02em}
.hero-stat .lbl{font-size:12px;color:var(--muted);font-family:var(--f-mono);text-transform:uppercase;letter-spacing:.08em}

/* Phone */
.hero-phone{position:relative;display:flex;justify-content:center;align-items:center;min-height:560px}
.phone-shell{
  position:relative;width:340px;aspect-ratio:9/19.5;border-radius:54px;
  background:linear-gradient(135deg,#3a3a3c 0%,#1c1c1e 40%,#0a0a0a 60%,#2a2a2c 100%);
  padding:4px;
  box-shadow:
    0 50px 90px -25px rgba(10,21,16,.45),
    0 0 0 1px rgba(255,255,255,.04) inset,
    0 2px 6px rgba(255,255,255,.06) inset;
  transform-style:preserve-3d
}
.phone-shell::before{
  content:"";position:absolute;inset:2px;border-radius:52px;
  background:linear-gradient(135deg,#4a4a4c 0%,#2a2a2c 30%,#0a0a0a 70%,#3a3a3c 100%);
  z-index:0
}
.phone-shell::after{
  content:"";position:absolute;inset:6px;border-radius:48px;
  background:#0a0a0a;z-index:1;
  box-shadow:0 0 0 .5px rgba(255,255,255,.08) inset
}
.phone-screen{
  position:relative;z-index:2;
  width:calc(100% - 12px);height:calc(100% - 12px);
  margin:6px;border-radius:46px;overflow:hidden;background:#0a0a0a;
  box-shadow:0 0 0 1.5px #000 inset, 0 0 0 2.5px rgba(30,30,32,.6) inset
}
.phone-screen img{width:100%;height:100%;object-fit:cover}
.phone-notch{
  position:absolute;top:12px;left:50%;transform:translateX(-50%);
  width:118px;height:34px;background:#000;border-radius:22px;z-index:5;
  box-shadow:0 0 0 1px rgba(255,255,255,.04), 0 2px 6px rgba(0,0,0,.8) inset
}
.phone-notch::after{
  content:"";position:absolute;top:50%;right:14px;transform:translateY(-50%);
  width:8px;height:8px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%,#2a3a4a,#000 70%);
  box-shadow:0 0 0 1px rgba(80,110,140,.3) inset
}
.phone-shell .btn-side{position:absolute;background:linear-gradient(90deg,#1a1a1c,#3a3a3c 50%,#1a1a1c);z-index:0;border-radius:1.5px}
.phone-shell .btn-power{right:-2px;top:28%;width:3px;height:90px}
.phone-shell .btn-vol-up{left:-2px;top:22%;width:3px;height:56px}
.phone-shell .btn-vol-dn{left:-2px;top:34%;width:3px;height:56px}
.phone-shell .btn-action{left:-2px;top:16%;width:3px;height:32px}
.phone-screen::before{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:6;
  background:linear-gradient(115deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,0) 28%,rgba(255,255,255,0) 72%,rgba(255,255,255,.04) 100%);
}

.float-card{
  position:absolute;background:var(--paper);border:1px solid var(--line);border-radius:18px;
  padding:12px 14px;box-shadow:0 20px 40px -15px rgba(10,21,16,.18);
  font-size:12px;display:flex;align-items:center;gap:10px;white-space:nowrap
}
.float-card .icn{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px}
.float-card .val{font-family:var(--f-display);font-weight:700;font-size:16px}
.float-card .tag{font-family:var(--f-mono);font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
.float-a{top:8%;left:-40px}
.float-b{top:46%;right:-60px}
.float-c{bottom:14%;left:-20px}

.ticker{
  position:absolute;bottom:24px;left:0;right:0;
  overflow:hidden;white-space:nowrap;font-family:var(--f-display);font-weight:700;
  font-size:clamp(2.4rem,7vw,5rem);letter-spacing:-.03em;line-height:1;color:var(--ink);opacity:.07;pointer-events:none
}
.ticker-track{display:inline-block;will-change:transform}
.ticker-track span{margin-right:60px}
.ticker-track span em{font-style:italic;font-weight:500;color:var(--green);opacity:.7}

/* MARQUEE */
.marquee-strip{
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
  background:var(--cream);padding:22px 0;overflow:hidden;white-space:nowrap
}
.marquee-track{display:inline-flex;gap:44px;align-items:center;will-change:transform}
.marquee-track span{font-family:var(--f-display);font-size:22px;font-weight:600;letter-spacing:-.01em;color:var(--ink)}
.marquee-track .dot{width:6px;height:6px;border-radius:50%;background:var(--green)}
.marquee-track em{font-style:italic;font-weight:500;color:var(--green)}

/* MANIFESTO */
.manifesto{padding:180px 0 160px;background:var(--cream);position:relative;overflow:hidden}
.manifesto .wrap{position:relative}
.manifesto-label{display:flex;gap:16px;align-items:center;margin-bottom:40px}
.manifesto-label .idx{font-family:var(--f-mono);font-size:12px;color:var(--muted);letter-spacing:.12em}
.manifesto-label .line{flex:1;height:1px;background:var(--line-strong)}
.manifesto-label .ttl{font-family:var(--f-mono);font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:var(--ink)}

.big-type{
  font-family:var(--f-display);font-weight:700;letter-spacing:-.035em;line-height:.98;
  font-size:clamp(2.6rem,7.2vw,7.2rem);max-width:1100px
}
.big-type .word{display:inline-block;vertical-align:top}
.big-type .word > span{display:inline-block}
.big-type em{font-style:italic;font-weight:500;color:var(--green)}
.big-type .fade{color:rgba(10,21,16,.55)}
.big-type .outline{color:transparent;-webkit-text-stroke:1.2px var(--ink)}

.manifesto-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;padding-top:32px;border-top:1px solid var(--line)}
@media (max-width:780px){.manifesto-meta{grid-template-columns:repeat(2,1fr)}}
.meta-item .k{font-family:var(--f-mono);font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}
.meta-item .v{font-family:var(--f-display);font-weight:600;font-size:20px;letter-spacing:-.01em}

/* FEATURES */
.features{padding:120px 0;background:var(--paper);position:relative;overflow:hidden}
.features .head{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-bottom:64px;align-items:end}
@media (max-width:780px){.features .head{grid-template-columns:1fr}}
.features .head h2{font-size:clamp(2.4rem,6vw,5rem)}
.features .head p{max-width:420px;font-size:16px}

.bento{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:220px;gap:14px}
.card{
  position:relative;background:var(--cream);border:1px solid var(--line);border-radius:24px;
  padding:24px;overflow:hidden;transition:transform .6s cubic-bezier(.16,1,.3,1),border-color .4s
}
.card:hover{border-color:var(--line-strong);transform:translateY(-4px)}
.card .c-eye{font-family:var(--f-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:16px}
.card h3{font-family:var(--f-display);font-size:26px;font-weight:700;letter-spacing:-.02em;line-height:1.05;margin-bottom:10px}
.card p{font-size:14px;color:var(--muted);line-height:1.55;max-width:320px}
.card .idx{position:absolute;top:18px;right:22px;font-family:var(--f-mono);font-size:10px;color:var(--muted);letter-spacing:.08em}

.c-1{grid-column:span 7;grid-row:span 2;background:var(--ink);color:var(--cream)}
.c-1 p{color:rgba(243,242,235,.6)}
.c-1 .c-eye{color:rgba(243,242,235,.5)}
.c-2{grid-column:span 5;grid-row:span 1}
.c-3{grid-column:span 5;grid-row:span 1}
.c-4{grid-column:span 4;grid-row:span 2;background:var(--green);color:var(--cream)}
.c-4 p{color:rgba(243,242,235,.7)}
.c-4 .c-eye{color:rgba(243,242,235,.6)}
.c-5{grid-column:span 4;grid-row:span 1}
.c-6{grid-column:span 4;grid-row:span 1}
.c-7{grid-column:span 6;grid-row:span 1;background:var(--cream-2)}
.c-8{grid-column:span 6;grid-row:span 1}
@media (max-width:900px){
  .bento{grid-auto-rows:auto}
  .bento>.card{grid-column:span 12 !important;grid-row:auto !important;min-height:240px}
}

.pulse-svg{position:absolute;bottom:0;left:0;right:0;height:60%;pointer-events:none;opacity:.9}
.pulse-svg path{stroke:var(--green-3);stroke-width:1.5;fill:none;stroke-dasharray:3000;stroke-dashoffset:3000}

.orbit{position:absolute;top:50%;right:-50px;transform:translateY(-50%);width:320px;height:320px;border-radius:50%;border:1px dashed rgba(255,255,255,.25)}
.orbit::before{content:"";position:absolute;inset:30px;border:1px dashed rgba(255,255,255,.18);border-radius:50%}
.orbit::after{content:"";position:absolute;inset:60px;border:1px dashed rgba(255,255,255,.12);border-radius:50%}
.orbit .node{position:absolute;width:14px;height:14px;border-radius:50%;background:var(--cream);box-shadow:0 0 20px var(--cream)}

.rings{position:absolute;right:-40px;bottom:-40px;width:220px;height:220px}
.ring{position:absolute;inset:0;border-radius:50%;border:12px solid;animation:spin 18s linear infinite}
.ring.r1{border-color:var(--green) transparent transparent transparent;inset:0}
.ring.r2{border-color:transparent var(--amber) transparent transparent;inset:20px;animation-duration:14s;animation-direction:reverse}
.ring.r3{border-color:transparent transparent var(--violet) transparent;inset:40px;animation-duration:20s}
@keyframes spin{to{transform:rotate(360deg)}}

.moon{
  position:absolute;right:-20px;bottom:-30px;width:180px;height:180px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%,#8B7BF0,#5A4BC0 70%);
  box-shadow:0 10px 40px rgba(155,140,247,.4);
  overflow:hidden
}
.moon::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 70% 70%,rgba(255,255,255,.25),transparent 50%)}

.bars{position:absolute;right:20px;bottom:20px;display:flex;gap:6px;align-items:flex-end;height:80px}
.bar{width:10px;background:var(--green);border-radius:4px 4px 0 0;transform-origin:bottom;transform:scaleY(0)}

.watch{
  position:absolute;right:24px;top:50%;transform:translateY(-50%);
  width:110px;height:130px;background:#0a0a0a;border-radius:20px;
  box-shadow:0 20px 40px -10px rgba(0,0,0,.3);overflow:hidden;
  display:flex;align-items:center;justify-content:center;color:var(--green-3);font-family:var(--f-mono);font-weight:700;font-size:18px
}
.watch::before{content:"";position:absolute;top:-14px;left:50%;transform:translateX(-50%);width:50px;height:14px;background:#0a0a0a;border-radius:4px 4px 0 0}
.watch::after{content:"";position:absolute;bottom:-14px;left:50%;transform:translateX(-50%);width:50px;height:14px;background:#0a0a0a;border-radius:0 0 4px 4px}

.dots-grid{position:absolute;right:16px;bottom:16px;display:grid;grid-template-columns:repeat(6,1fr);gap:6px;width:180px}
.dots-grid .d{width:22px;height:22px;border-radius:50%;background:var(--green-mint);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--green)}
.dots-grid .d.on{background:var(--green);color:var(--cream)}

/* HOW */
.how{padding:160px 0;background:var(--cream);position:relative;overflow:hidden}
.how .head{text-align:center;max-width:820px;margin:0 auto 100px}
.how .head h2{font-size:clamp(2.4rem,6vw,5.4rem);margin-bottom:20px}
.how .head p{font-size:17px;max-width:520px;margin:0 auto}

.steps{display:grid;grid-template-columns:1fr;gap:0}
.step{
  display:grid;grid-template-columns:140px 1fr 1fr;gap:40px;
  padding:56px 0;border-top:1px solid var(--line-strong);
  position:relative;align-items:start
}
.step:last-child{border-bottom:1px solid var(--line-strong)}
@media (max-width:900px){.step{grid-template-columns:1fr;gap:16px}}
.step .num{font-family:var(--f-display);font-weight:700;font-size:clamp(3rem,5vw,5rem);letter-spacing:-.05em;line-height:.9;color:var(--ink)}
.step .num em{font-style:italic;font-weight:500;color:var(--green)}
.step h3{font-family:var(--f-display);font-weight:600;font-size:clamp(1.8rem,3.2vw,2.6rem);letter-spacing:-.02em;line-height:1.05}
.step .desc{font-size:15px;max-width:380px;margin-top:14px}
.step .kicker{font-family:var(--f-mono);font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.14em;margin-bottom:14px}
.step-marker{
  display:inline-flex;align-items:center;gap:10px;padding:6px 12px;background:var(--paper);border:1px solid var(--line);border-radius:999px;font-family:var(--f-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase
}
.step-marker .d{width:6px;height:6px;border-radius:50%;background:var(--green-3)}

/* APP PREVIEW */
.preview{padding:140px 0 160px;background:var(--ink);color:var(--cream);position:relative;overflow:hidden}
.preview .head{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end;margin-bottom:60px}
@media (max-width:780px){.preview .head{grid-template-columns:1fr}}
.preview .head h2{font-size:clamp(2.4rem,6vw,5rem);color:var(--cream)}
.preview .head h2 em{color:var(--green-3);font-style:italic;font-weight:500}
.preview .head p{color:rgba(243,242,235,.55);max-width:420px;font-size:16px}
.preview .head .label{color:var(--green-3)}

.preview-grid{display:grid;grid-template-columns:1fr 380px 1fr;gap:60px;align-items:center}
@media (max-width:980px){.preview-grid{grid-template-columns:1fr;gap:40px}}

.preview-phone{position:relative;justify-self:center;width:340px;aspect-ratio:9/19.5}
.preview-phone .phone-shell{width:100%;height:100%}
.preview-slides{position:relative;width:100%;height:100%}
.preview-slide{position:absolute;inset:0;opacity:0}
.preview-slide img{width:100%;height:100%;object-fit:cover}
.preview-slide.active{opacity:1}

.tabs-col{display:flex;flex-direction:column;gap:4px}
.tab-item{
  padding:20px 4px;border-top:1px solid rgba(243,242,235,.08);
  display:flex;gap:14px;cursor:pointer;transition:opacity .35s;opacity:.38;
  position:relative
}
.tab-item:last-child{border-bottom:1px solid rgba(243,242,235,.08)}
.tab-item:hover{opacity:.7}
.tab-item.active{opacity:1}
.tab-item .tidx{font-family:var(--f-mono);font-size:12px;color:var(--green-3);min-width:28px;padding-top:2px}
.tab-item h4{font-family:var(--f-display);font-weight:600;font-size:22px;letter-spacing:-.01em;color:var(--cream);margin-bottom:4px}
.tab-item p{color:rgba(243,242,235,.45);font-size:13px;line-height:1.5;max-width:260px}
.tab-item .progress{position:absolute;left:0;top:-1px;height:1px;background:var(--green-3);width:0%}
.tab-item.active .progress{animation:fillBar 5s linear forwards}
@keyframes fillBar{to{width:100%}}

.facts{display:flex;flex-direction:column;gap:20px;align-self:end}
.fact{padding:22px;background:rgba(243,242,235,.04);border:1px solid rgba(243,242,235,.08);border-radius:18px}
.fact .k{font-family:var(--f-mono);font-size:10px;color:var(--green-3);text-transform:uppercase;letter-spacing:.14em;margin-bottom:10px}
.fact .v{font-family:var(--f-display);font-weight:700;font-size:28px;letter-spacing:-.02em;color:var(--cream);line-height:1.05}
.fact .v em{font-style:italic;font-weight:500;color:var(--green-3)}
.fact .s{color:rgba(243,242,235,.4);font-size:13px;margin-top:8px}

/* GALLERY */
.gallery{padding:100px 0;background:var(--cream);overflow:hidden}
.gallery .head{text-align:center;margin-bottom:64px}
.gallery h2{font-size:clamp(2.2rem,5.4vw,4.6rem)}
.gallery .row{display:flex;gap:18px;margin-bottom:18px;width:max-content}
.gallery .shot{width:260px;flex-shrink:0;border-radius:22px;overflow:hidden;background:#111;transition:transform .5s}
.gallery .shot img{width:100%;aspect-ratio:9/19.5;object-fit:cover}
.gallery .shot:hover{transform:scale(1.03)}

/* STATS */
.stats{padding:140px 0;background:var(--cream);position:relative;overflow:hidden;border-top:1px solid var(--line)}
.stats-head{max-width:720px;margin-bottom:80px}
.stats-head h2{font-size:clamp(2.2rem,5.4vw,4.6rem);margin-bottom:16px}

.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid var(--line-strong);border-bottom:1px solid var(--line-strong)}
@media (max-width:780px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
.sbox{padding:48px 28px;border-right:1px solid var(--line);position:relative}
.sbox:last-child{border-right:0}
@media (max-width:780px){.sbox:nth-child(even){border-right:0}.sbox:nth-child(-n+2){border-bottom:1px solid var(--line)}}
.sbox .k{font-family:var(--f-mono);font-size:11px;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px}
.sbox .v{font-family:var(--f-display);font-weight:700;font-size:clamp(2.6rem,5.5vw,4.6rem);letter-spacing:-.03em;line-height:.9}
.sbox .v .unit{color:var(--green);font-weight:500;font-style:italic}

/* TESTIMONIAL */
.test{padding:140px 0;background:var(--paper);position:relative;overflow:hidden;text-align:center}
.test-eye{font-family:var(--f-mono);font-size:12px;color:var(--green);text-transform:uppercase;letter-spacing:.14em;margin-bottom:48px;display:flex;align-items:center;gap:10px;justify-content:center}
.test-eye::before,.test-eye::after{content:"";width:40px;height:1px;background:var(--green);opacity:.4}
.test-stage{position:relative;min-height:340px;max-width:1000px;margin:0 auto}
.test-slide{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .6s ease}
.test-slide.active{opacity:1;pointer-events:auto}
.quote{
  font-family:var(--f-display);font-weight:500;font-size:clamp(1.7rem,3.6vw,3rem);
  letter-spacing:-.02em;line-height:1.18;max-width:1000px;margin:0 auto;
  font-style:italic;color:var(--ink)
}
.quote em{color:var(--green);font-style:italic;font-weight:600}
.author{margin-top:44px;display:flex;gap:14px;align-items:center;justify-content:center}
.avatar{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--green),var(--green-2));color:var(--cream);display:flex;align-items:center;justify-content:center;font-family:var(--f-display);font-weight:700;font-size:16px}
.author-meta{text-align:left}
.author-meta .n{font-family:var(--f-display);font-weight:600;font-size:14px}
.author-meta .r{font-family:var(--f-mono);font-size:11px;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-top:3px}
.test-dots{display:flex;gap:10px;justify-content:center;margin-top:56px}
.test-dot{width:28px;height:3px;background:rgba(31,42,43,.15);border:none;cursor:pointer;padding:0;border-radius:2px;transition:background .3s;position:relative;overflow:hidden}
.test-dot.active{background:rgba(31,42,43,.15)}
.test-dot.active::after{content:"";position:absolute;inset:0;background:var(--green);animation:dotFill 7s linear forwards;transform-origin:left}
@keyframes dotFill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.test-nav{display:flex;gap:8px;justify-content:center;margin-top:24px}
.test-arrow{width:40px;height:40px;border-radius:50%;border:1px solid rgba(31,42,43,.15);background:transparent;color:var(--ink);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .3s}
.test-arrow:hover{background:var(--ink);color:var(--cream);border-color:var(--ink)}

/* CTA */
.cta{padding:120px 0 110px;background:var(--ink);color:var(--cream);position:relative;overflow:hidden}
.cta::before{content:"";position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,var(--green) 0%,transparent 65%);opacity:.3;filter:blur(40px)}
.cta .wrap{position:relative;z-index:2;text-align:center}
.cta-eye{font-family:var(--f-mono);font-size:12px;color:var(--green-3);text-transform:uppercase;letter-spacing:.14em;margin-bottom:20px}
.cta h2{font-family:var(--f-display);font-weight:700;font-size:clamp(2.8rem,8vw,7rem);letter-spacing:-.045em;line-height:.95;margin-bottom:28px}
.cta h2 em{font-style:italic;font-weight:500;color:var(--green-3)}
.cta h2 .fade{color:rgba(243,242,235,.85)}
.cta p{color:rgba(243,242,235,.85);font-size:17px;max-width:520px;margin:0 auto 32px}
.cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.cta .btn-ink{background:var(--green);color:var(--cream)}
.cta .btn-ink::before{background:var(--cream);}
.cta .btn-ink:hover{color:var(--ink)}
.cta .btn-out{border-color:rgba(243,242,235,.2);color:var(--cream)}
.cta .btn-out:hover{background:var(--cream);color:var(--ink)}

.cta-badges{display:flex;gap:32px;justify-content:center;margin-top:36px;flex-wrap:wrap;color:rgba(243,242,235,.8);font-size:13px}
.cta-badges span{display:flex;gap:8px;align-items:center}
.cta-badges span::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--green-3)}

/* Footer */
footer{padding:80px 0 30px;background:var(--ink);color:var(--cream);position:relative;border-top:1px solid rgba(243,242,235,.06)}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:60px}
@media (max-width:780px){.foot-grid{grid-template-columns:1fr 1fr;gap:40px}}
.foot-brand{font-family:var(--f-display);font-weight:700;font-size:22px;letter-spacing:-.02em;margin-bottom:14px}
.foot-brand-desc{color:rgba(243,242,235,.45);font-size:14px;max-width:320px;line-height:1.55}
.foot-col h5{font-family:var(--f-display);font-weight:600;font-size:14px;margin-bottom:18px}
.foot-col a{display:block;color:rgba(243,242,235,.45);font-size:13px;padding:6px 0;transition:color .3s}
.foot-col a:hover{color:var(--cream)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:28px;border-top:1px solid rgba(243,242,235,.08);font-size:12px;color:rgba(243,242,235,.4);font-family:var(--f-mono)}

/* Reveal utilities */
.reveal{overflow:hidden}
.reveal > *{transform:translateY(110%);display:block;will-change:transform}
.word-wrap{overflow:hidden;display:inline-block;vertical-align:top;line-height:inherit}
.word-wrap > .w{display:inline-block;transform:translateY(102%)}

.magnet{will-change:transform}

@media (max-width:780px){
  .wrap{padding:0 20px}
  .hero{padding:110px 0 40px;min-height:auto}
  .float-a,.float-b,.float-c{display:none}
  .preview-phone{width:280px}
}
</style>
