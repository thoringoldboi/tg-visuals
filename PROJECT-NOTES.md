# TG Visuals — project notes

A premium production-studio site built with [Astro](https://astro.build).
**Light editorial theme: white paper · black typography · one red accent.**
Cinematic, minimal, fully responsive, SEO/perf-optimised. No gradients anywhere —
colour comes from the photography/video and from the bold red **About** chapter.

### Colour system (art direction)
- ~80–90% white / black / neutral, ~10–20% red.
- Red is reserved for the **About section** (solid-red, full-bleed editorial
  chapter with Thorin's portrait — homepage teaser + `/about`) and small accents:
  eyebrow ticks, index numbers, list dashes, hover states, the play button and a
  couple of CTAs. Don't spread red across headlines — that's what keeps the
  About chapter special.
- Tokens live in `src/styles/global.css`: `--paper` (bg), `--ink` (text/black),
  `--red` (accent), `--on-dark`/`--on-dark-dim` for the black footer & red About.
  Dark/inverted surfaces (footer = black final CTA, About = red) set their own
  light text colours locally.

**Positioning:** high-end production *plus* an understanding of what makes
content perform online. The homepage leads with that (“Visuals that look
premium. Content that performs.”) and features the **2M+ views** proof point.

## Replace before launch (clearly-marked placeholders)

Everything below is a placeholder built to be swapped — no real clients,
testimonials or stats have been invented. The only confirmed figure used is
**2M+ views** (edit it in `src/config/site.ts` → `site.views`).

- **Contact email** — `src/config/site.ts` → `contact.email` (currently
  `hello@tgvisuals.com`).
- **Socials** — Instagram is set to the real `@t.g_visuals`. TikTok/YouTube are
  blank on purpose (no guessed links); add real URLs in `site.ts` and they’ll
  appear in the nav/footer/contact automatically.
- **Selected Work** — `src/data/work.ts` → `films[]`. Titles/descriptions are
  sample projects; `client` is set to “Sample project”. Swap in real work +
  add a `videoUrl` (YouTube/Vimeo) per project.
- **Showreel** — the hero uses a poster + “Preview coming soon”. Give me a
  reel URL to wire in, or edit the `<VideoEmbed>` in `src/pages/index.astro`.
- **Testimonials** — add real quotes to `testimonials[]` in `work.ts`; the
  homepage testimonial section appears automatically once there’s at least one.
- **Images** — drop real files into `src/assets/work/` (same filenames) and the
  portrait at `src/assets/portrait/thor-portrait.jpg`.
- **Contact form** — set `contact.formEndpoint` to a Formspree URL to collect
  submissions; otherwise it opens the visitor’s email app.

## Run it locally

Node lives at `~/.local/node` (installed for this project). In a terminal:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
cd ~/Claude/tg-visuals
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Where to put your real content

Everything is driven from a few files — swap placeholders for real work and the
whole site updates.

| What | Where |
|------|-------|
| **Showreel** | `src/data/work.ts` — not needed as a file; paste a YouTube/Vimeo URL into the hero. See "Showreel" below. |
| **Film / video projects** | `src/data/work.ts` → `films[]`. Each has a `videoUrl` (YouTube/Vimeo), cover image, gallery, copy. |
| **Photography** | `src/data/work.ts` → `photography[]` (categories → image lists). |
| **Social clips** | `src/data/work.ts` → `social[]` (add the IG/TikTok `url`). |
| **Images** | Drop real files into `src/assets/work/` using the same names (e.g. `film-01.jpg`, `photo-studio-02.jpg`) — they’re auto-optimised to responsive WebP. |
| **Portrait** | `src/assets/portrait/thor-portrait.jpg` |
| **Logo** | `src/assets/brand/tg-mark-white.png` (+ dark variant). Favicons in `public/`. |
| **Contact details / socials / nav** | `src/config/site.ts` |

### Showreel & project videos
In `src/data/work.ts`, set `videoUrl` to a YouTube or Vimeo link. The player
loads only on click (fast, privacy-friendly). For the homepage hero showreel,
set the `films`… actually the hero uses the `hero-poster` image + is wired in
`src/pages/index.astro` — give me the link and I’ll connect it, or replace the
`<VideoEmbed cover="hero-poster" ... />` with a `url="..."` prop.

### Contact form
Currently the form opens the visitor’s email app (no backend needed). To collect
submissions on a page instead, set `contact.formEndpoint` in `src/config/site.ts`
to a [Formspree](https://formspree.io) URL (or Netlify form handler). That’s the
only change required.

## Placeholder media
The cinematic frames in `src/assets/work/` are generated placeholders — replace
them with real files (same filenames) and everything flows through automatically.

## Deploy
Static output — deploys anywhere. Recommended: Netlify or Vercel (connect the
repo, build command `npm run build`, publish dir `dist`). Before launch, set the
real domain in `astro.config.mjs` (`site:`) and `src/config/site.ts` (`url:`).
