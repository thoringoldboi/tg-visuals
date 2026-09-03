# TG Visuals — project notes

A minimal **single-page** production-studio site built with
[Astro](https://astro.build). **Pure black & white** — no colour accent.
Full-screen showreel hero with the logo centred (à la joshuafarrer.com /
luahell.com), a portfolio grid, a short bio, and a contact footer.

### Structure (three pages)
- **Home** (`src/pages/index.astro`): **Hero** (full-screen showreel + centred
  logo lockup) → **Work** (`#work`, portfolio grid) → contact footer.
- **Bio** (`src/pages/bio.astro`): portrait + intro.
- **Contact** (`src/pages/contact.astro`): "Want to chat about a project?" form
  (Name, Email, Description → sends to you; see below).

The header is a minimal bar (TG VISUALS + Work/Bio/Contact). It's **transparent
over the home hero and turns solid white on scroll**; on every other page it's
solid white from the start. That's controlled by `overlayHeader` — home passes
`<BaseLayout overlayHeader>`, other pages don't. Nav: Work → `/#work`,
Bio → `/bio`, Contact → `/contact`.

### Make the contact form deliver to your inbox
The form is static-host friendly. Until an endpoint is set it just opens the
visitor's email app; to have submissions **emailed to you automatically** (works
on Vercel/Netlify):
1. Create a free form at **formspree.io** (or web3forms.com) with your email.
2. Paste the endpoint URL into `src/config/site.ts` → `contact.formEndpoint`
   (e.g. `https://formspree.io/f/xxxxxx`).
That one line is all it takes — the form then POSTs there and you get the emails.

### Colour / imagery
- Black & white only. Tokens in `src/styles/global.css`; the old `--red*` tokens
  now map to black.
- Placeholder imagery (hero poster, portfolio tiles, bio portrait) is
  **desaturated with `filter: grayscale(1)`** so everything reads B&W now.
  Remove that filter (in `index.astro`) to show real work in full colour.

## Add your showreel (the hero video)
Drop your reel into **`public/showreel.mp4`** (optionally also `public/showreel.webm`
for smaller/better-quality delivery). The hero `<video>` autoplays it muted +
looped, full-screen, with the desaturated poster as the fallback until the file
exists. Keep it short and compressed (a 1080p, ~10–20 MB loop is plenty).

## Replace before launch (clearly-marked placeholders)

No real clients, testimonials or stats have been invented. The only confirmed
figure used is **2M+ views** (`src/config/site.ts` → `site.views`).

- **Showreel** — `public/showreel.mp4` (see above).
- **Contact email** — `src/config/site.ts` → `contact.email`.
- **Socials** — Instagram is the real `@t.g_visuals`. TikTok/YouTube are blank on
  purpose; add real URLs in `site.ts` and they appear in nav/footer automatically.
- **Portfolio** — captions/covers come from `src/data/work.ts` (`films[]`) plus a
  few stills, wired up in `index.astro`'s `portfolio` array. Drop real files into
  `src/assets/work/` (same filenames) to replace the placeholder frames.
- **Bio portrait** — `src/assets/portrait/thor-portrait.jpg`.

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
