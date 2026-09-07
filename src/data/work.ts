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
// PHOTOGRAPHY — Albums. /work/photography shows these as folders; each opens
// its own gallery at /work/photography/<slug>. Add/reorder freely.
// ---------------------------------------------------------------------------
export interface PhotoAlbum {
  slug: string;
  title: string;
  cover: string;
  images: string[];
}

export const photoAlbums: PhotoAlbum[] = [
  { slug: 'studio', title: 'Studio', cover: 'photo-studio-01', images: ['photo-studio-01', 'photo-studio-02', 'photo-studio-03', 'photo-studio-04'] },
  { slug: 'automotive', title: 'Automotive', cover: 'photo-creative-01', images: ['photo-creative-01', 'photo-creative-02', 'photo-creative-03', 'photo-creative-04'] },
  { slug: 'event', title: 'Event', cover: 'photo-lifestyle-01', images: ['photo-lifestyle-01', 'photo-lifestyle-02', 'photo-lifestyle-03', 'photo-lifestyle-04'] },
  { slug: 'product', title: 'Product', cover: 'photo-product-01', images: ['photo-product-01', 'photo-product-02', 'photo-product-03', 'photo-product-04'] },
];

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
