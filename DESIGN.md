# Design

## Theme

**Dunkel, kompromisslos.** Das ist keine Stilentscheidung, sondern Identitätstreue: die iOS-App ist near-black mit Teal. Eine helle Marketingseite vor einer dunklen App erzeugt genau an der Konversionsstelle einen Bruch.

**Die physische Szene:** Es ist 6:40 Uhr, der Raum ist noch dunkel, das Telefon ist das einzige Licht. Jemand liest vier Sätze über die Nacht, die hinter ihm liegt. Das ist der Moment, den die Seite abbildet.

**Aesthetic Lane: Nachtinstrument.** Die Ästhetik eines medizinischen Messgeräts bei Nacht — schwarzer Grund, präzise leuchtende Signalfarben, dichte Datentypografie am Rand, und ein einziger ruhiger Satz in Serif, der das Messergebnis in Sprache übersetzt. Referenz ist ein Polysomnographie-Protokoll, ausdrücklich **nicht** ein Magazin-Layout und **nicht** ein Fitness-Dashboard.

Der zentrale Move, der die Lane von „dunkle Health-App-Seite mit Grün" trennt: **Die Datengrafik ist bewusst zurückgenommen.** Sie läuft als feine Signallinie unter dem Inhalt. Der Held jeder Sektion ist der Satz, nicht die Kurve. Das ist die These des Produkts, in Layout übersetzt.

## Color

**Strategie: Drenched.** Der Grund ist die Marke. Teal trägt, ohne mit Neutralen abgefedert zu werden.

Alle Werte OKLCH, abgeleitet aus den tatsächlichen Farben der iOS-App (`MindfulDesignSystem.swift`).

### Grund und Flächen

| Token | OKLCH | Hex-Herkunft | Rolle |
|---|---|---|---|
| `--bg` | `oklch(0.156 0.004 165)` | `#0B0D0C` | Body. Der Grund. |
| `--bg-raised` | `oklch(0.186 0.008 182)` | `#0F1413` | Sektionen, die sich abheben |
| `--surface` | `oklch(0.225 0.015 181)` | `#141E1C` | Karten, Panels |
| `--surface-2` | `oklch(0.258 0.016 183)` | `#1B2624` | Hover, verschachtelte Flächen |
| `--line` | `oklch(0.303 0.020 186)` | `#233230` | Trennlinien, Rahmen |

### Signal

| Token | OKLCH | Hex-Herkunft | Rolle |
|---|---|---|---|
| `--teal` | `oklch(0.716 0.090 182)` | `#5BB6A8` | Primär. Der Markenton. |
| `--teal-bright` | `oklch(0.750 0.091 186)` | `#63C1B6` | Hover, aktive Zustände |
| `--mint` | `oklch(0.828 0.061 167)` | `#A1D4BE` | Logo, Höhepunkte |
| `--signal` | `oklch(0.780 0.154 162)` | `#3DD598` | Live-Indikator, positive Werte |

### Bereichsfarben (aus der App übernommen)

| Token | OKLCH | Bereich |
|---|---|---|
| `--blue` | `oklch(0.683 0.140 249)` | Training |
| `--violet` | `oklch(0.556 0.203 278)` | Guidance |
| `--amber` | `oklch(0.813 0.168 82)` | Warnung, Schlaf |
| `--ember` | `oklch(0.644 0.206 35)` | Belastung |

**Regel:** Bereichsfarben nie als alleiniger Bedeutungsträger. Immer zusätzlich benannt.

### Typografie-Farben

| Token | OKLCH | Kontrast auf `--bg` | Rolle |
|---|---|---|---|
| `--ink` | `oklch(0.961 0.003 106)` | 17.4:1 | Überschriften |
| `--ink-2` | `oklch(0.920 0.012 85)` | 15.4:1 | Fließtext, warmes Off-White |
| `--muted` | `oklch(0.688 0.013 175)` | 7.3:1 | Sekundärtext |
| `--faint` | `oklch(0.600 0.014 175)` | 5.4:1 | Labels, Metadaten. Untergrenze. |

Nichts unterhalb von 4.5:1 trägt Text. Das ist die häufigste Fehlerquelle auf dunklem Grund.

## Typography

**Zwei Familien, gegensätzliche Achse.**

- **Geist** (Sans) — die Schrift der App selbst. Trägt Display, UI, Zahlen, Labels. Gewichte 400/500/600/700/900.
- **Spectral** (Serif) — trägt ausschließlich die AI-Prosa. In der App ist das Apple New York; Spectral ist das nächste Web-Äquivalent mit derselben ruhigen Bildschirm-Lesequalität.

**Die Serif ist kein Display-Element.** Sie erscheint nur dort, wo Metea spricht: im Briefing, im Manifest, in Zitaten. Das ist der Unterschied zwischen Instrument-Ästhetik und Editorial-Kostüm. Überschriften laufen in Geist, groß und schwer.

Keine dritte Familie. Kein Mono — die App nutzt keins, und Mono auf einer Gesundheitsseite ist Kostüm.

### Skala

Modular, Verhältnis ≥ 1.3, fluid via `clamp()`.

| Rolle | Größe | Familie | Tracking |
|---|---|---|---|
| Display XL | `clamp(3.2rem, 9vw, 6rem)` | Geist 700 | `-0.035em` |
| Display L | `clamp(2.4rem, 5.5vw, 4rem)` | Geist 700 | `-0.03em` |
| Display M | `clamp(1.8rem, 3.4vw, 2.6rem)` | Geist 600 | `-0.025em` |
| Prosa (Serif) | `clamp(1.25rem, 2.2vw, 1.75rem)` | Spectral 400 | `-0.01em` |
| Body | `1.0625rem` (17px) | Geist 400 | `0` |
| Label | `0.75rem` | Geist 500 | `0.06em` |

Display-Ceiling 6rem. Letter-Spacing-Untergrenze `-0.035em`.

Zeilenlänge max. 68ch. Auf dunklem Grund `line-height` +0.05 gegenüber hell: Body 1.65, Prosa 1.55.

`text-wrap: balance` auf h1–h3, `pretty` auf Fließtext.

## Layout

- Container 1240px, Padding `clamp(20px, 4vw, 32px)`.
- **Asymmetrie als Grundhaltung.** Der Inhalt sitzt nicht mittig; er folgt einer 12-Spalten-Struktur mit bewusst ungleichen Feldern.
- Rhythmus über variable Sektionsabstände: `clamp(96px, 14vh, 180px)`, verdichtet dort, wo Inhalte zusammengehören.
- Grids ohne Breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- Radien: 16px (klein), 24px (Karten), 32px (Panels), 999px (Pills). Aus der App übernommen.

**Karten sparsam.** Die alte Seite hatte ein 8-Karten-Bento. Das neue Layout trägt Inhalte überwiegend flächig und typografisch; Karten nur, wo etwas wirklich einzeln adressierbar ist.

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo). Kein Bounce.
- Dauern: 200ms (Zustand), 450ms (Übergang), 900ms (Reveal).
- **Lenis** für Smooth Scroll, **GSAP** für Choreografie — beide bereits im Projekt.
- Die Signallinie im Hintergrund atmet dauerhaft und langsam (8s-Zyklus). Sie ist das einzige permanent bewegte Element.
- Reveals verstärken einen bereits sichtbaren Standard. Inhalt ist nie hinter `opacity: 0` gesperrt, das ohne JS bestehen bleibt.
- `prefers-reduced-motion: reduce` ersetzt jede Bewegung durch einen Crossfade und friert die Signallinie ein.

## Components

- **Pill-Button** (primär): Mint-Fläche, dunkle Schrift, 999px. Verb + Objekt als Label.
- **Ghost-Button**: 1px `--line`, Text `--ink-2`, Hover füllt zu `--surface`.
- **Signalstreifen**: SVG-Pfad, 1px, `--teal` bei 0.35 Opazität. Strukturelles Element, kein Diagramm.
- **Briefing-Block**: Der Kern. `--surface` mit Teal-Verlauf, Serif-Prosa, ein Label darüber, eine Aktion darunter. Direkt aus der App.
- **Gerätrahmen**: schmaler Rahmen um native HTML-Rekonstruktionen der App-UI, nicht um Bilder. Scharf auf jeder Auflösung, animierbar.

## Bans für dieses Projekt

Über die globalen Verbote hinaus:

- Kein Cream, kein Beige, kein warmes Off-White als Fläche. Nur als Textfarbe.
- Keine `§ 01`-Nummerierung und keine Uppercase-Eyebrows über jeder Sektion. Genau das war der alte Fehler.
- Kein Gradient-Text.
- Kein Glas als Dekoration. Backdrop-Filter nur in der Navigation.
- Keine Zahl ohne Herkunft. Keine Sterne, keine Nutzerzahlen, keine Wirkungsprozente ohne Beleg.
- Keine erfundenen Personen.
