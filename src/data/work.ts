// ---------------------------------------------------------------------------
// Portfolio data. This drives the /work page and the home "Selected work" grid.
//
// HOW IT'S ORGANISED (see the layout plan):
//   VIDEO        → filmProjects (landscape Film & Commercial) + social (vertical)
//   PHOTOGRAPHY  → photoProjects (named featured shoots) + photoGalleries (by category)
//
// Everything here is a clearly-marked PLACEHOLDER. Rename to your real projects,
// drop real files into /src/assets/work (any name), and reference them by name.
// No real clients or stats are invented.
// ---------------------------------------------------------------------------
import type { ImageMetadata } from 'astro';

// Eagerly load every work image so we can reference them by filename.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/work/*.{jpg,jpeg,png}',
  { eager: true }
);
const images: Record<string, ImageMetadata> = {};
for (const path in files) {
  const name = path.split('/').pop()!.replace(/\.(jpe?g|png)$/, '');
  images[name] = files[path].default;
}
/** Look up a work image by its filename (without extension). */
export const img = (name: string): ImageMetadata => {
  const found = images[name];
  if (!found) throw new Error(`Missing work image: ${name}`);
  return found;
};

export const heroPoster = img('hero-poster');

// ---------------------------------------------------------------------------
// VIDEO — Film & Commercial (landscape 16:9 projects). Your aspirational lane.
// Add a `videoUrl` (YouTube/Vimeo) per project when you have it.
// ---------------------------------------------------------------------------
export interface VideoProject {
  title: string;
  category: string; // e.g. 'Commercial', 'Short Film', 'Brand Film'
  year?: number;
  cover: string;
  /** YouTube/Vimeo URL. Empty = cover-only for now. */
  videoUrl?: string;
  featured?: boolean; // surface on the home "Selected work" grid
}

export const filmProjects: VideoProject[] = [
  { title: 'Brand Commercial', category: 'Commercial', year: 2025, cover: 'film-01', videoUrl: '', featured: true },
  { title: 'Automotive Film', category: 'Automotive', year: 2025, cover: 'film-02', videoUrl: '', featured: true },
  { title: 'Fashion Film', category: 'Fashion', year: 2024, cover: 'film-03', videoUrl: '' },
  { title: 'Short Film', category: 'Short Film', year: 2024, cover: 'film-04', videoUrl: '' },
];

// ---------------------------------------------------------------------------
// VIDEO — Social / short-form (vertical 9:16). Your current strength (2M+ views).
// Add the IG/TikTok `url` to make each clip clickable.
// ---------------------------------------------------------------------------
export interface SocialClip {
  title: string;
  platform: 'Instagram' | 'TikTok';
  format: string;
  cover: string;
  url: string;
}

export const social: SocialClip[] = [
  { title: 'Reel', platform: 'Instagram', format: 'Reel', cover: 'social-01', url: '' },
  { title: 'Short', platform: 'TikTok', format: 'Short', cover: 'social-02', url: '' },
  { title: 'Reel', platform: 'Instagram', format: 'Reel', cover: 'social-03', url: '' },
  { title: 'Short', platform: 'TikTok', format: 'Short', cover: 'social-04', url: '' },
  { title: 'Reel', platform: 'Instagram', format: 'Reel', cover: 'social-05', url: '' },
  { title: 'Short', platform: 'TikTok', format: 'Short', cover: 'social-06', url: '' },
  { title: 'Reel', platform: 'Instagram', format: 'Reel', cover: 'social-07', url: '' },
  { title: 'Short', platform: 'TikTok', format: 'Short', cover: 'social-08', url: '' },
];

// ---------------------------------------------------------------------------
// PHOTOGRAPHY — Albums (DROP-AND-GO).
//
// Each folder in  /src/assets/work/photography/<album>/  becomes an album
// automatically. Just drop images into the folder — no code changes needed:
//   • Add a NEW album  → create a new folder (e.g. .../photography/fashion/)
//   • Add photos       → drop .jpg/.png/.webp files into the album's folder
//   • Set the cover    → name one file "cover.jpg" (otherwise the first is used)
//   • Reorder / rename → see `albumOrder` below; titles come from the folder name
// ---------------------------------------------------------------------------
export interface PhotoAlbum {
  slug: string;
  title: string;
  cover: ImageMetadata; // the (B&W) tile image
  hero: ImageMetadata;  // the wide banner on the album page
  heroFocus: string;    // CSS object-position for the banner crop
  images: ImageMetadata[];
}

/** Per-album banner crop focal point (object-position). Default centres it. */
const heroFocus: Record<string, string> = {
  portraits: '50% 62%', // centre the subject's face in the banner crop
};

const albumFiles = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/work/photography/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

/** Preferred display order. Folders not listed appear after, alphabetically. */
const albumOrder = ['studio', 'portraits', 'automotive'];

const titleize = (slug: string) =>
  slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

/** Interleave images by shoot/session (the filename prefix before the sequence
 *  number) so photos from the same shoot are spread evenly across the gallery
 *  rather than clustered next to each other. Deterministic (stable per build). */
function interleaveBySession(items: { name: string; img: ImageMetadata }[]): ImageMetadata[] {
  const sessionOf = (n: string) => n.replace(/\.[^.]+$/, '').replace(/[-_]?\d+$/, '') || n;
  const groups = new Map<string, ImageMetadata[]>();
  for (const it of items) {
    const key = sessionOf(it.name);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(it.img);
  }
  const lists = [...groups.values()];
  const out: ImageMetadata[] = [];
  for (let i = 0; out.length < items.length; i++) {
    for (const list of lists) if (i < list.length) out.push(list[i]);
  }
  return out;
}

const grouped: Record<string, { name: string; img: ImageMetadata }[]> = {};
for (const path in albumFiles) {
  const parts = path.split('/');
  const slug = parts[parts.length - 2];
  const name = parts[parts.length - 1];
  (grouped[slug] ??= []).push({ name, img: albumFiles[path].default });
}

export const photoAlbums: PhotoAlbum[] = Object.keys(grouped)
  .sort((a, b) => {
    const ia = albumOrder.indexOf(a);
    const ib = albumOrder.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  })
  .map((slug) => {
    const items = grouped[slug].sort((a, b) => a.name.localeCompare(b.name));
    const images = items.map((i) => i.img);
    const cover = items.find((i) => /(^|\/)cover\./i.test(i.name))?.img ?? images[0];
    // Banner: an explicit hero.* if present, else the album cover. Predictable
    // (doesn't change when photos are added). Drop a wide `hero.jpg` for a
    // dedicated banner; adjust the crop per album via `heroFocus` below.
    const heroExplicit = items.find((i) => /(^|\/)hero\./i.test(i.name))?.img;
    const hero = heroExplicit ?? cover;
    // Manual mode: if any file has a leading number (e.g. "01-foo.jpg"), the
    // gallery uses your exact numeric order. Otherwise auto-spread by shoot.
    const manual = items.some((it) => /^\d+[-_. ]/.test(it.name));
    const galleryImages = manual
      ? items.slice().sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })).map((i) => i.img)
      : interleaveBySession(items);
    return { slug, title: titleize(slug), cover, hero, heroFocus: heroFocus[slug] ?? '50% 50%', images: galleryImages };
  });

// ---------------------------------------------------------------------------
// Services (used elsewhere / future).
// ---------------------------------------------------------------------------
export interface Service {
  title: string;
  desc: string;
}

export const services: Service[] = [
  { title: 'Video Production', desc: 'High-end commercial, brand, campaign and social video — directed, shot and cut end to end.' },
  { title: 'Social Media Content', desc: 'Short-form vertical content built for Instagram and TikTok — hooks, pacing and retention baked in.' },
  { title: 'Photography', desc: 'Premium automotive, product, studio and fashion photography with a cinematic grade.' },
  { title: 'Creative Direction', desc: 'Concept development, visual planning, shot design and creative execution.' },
];

// ---------------------------------------------------------------------------
// Testimonials — real client quotes only. Leave empty to hide the section.
// ---------------------------------------------------------------------------
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [];
