// ---------------------------------------------------------------------------
// Portfolio data. Swap the placeholder frames in /src/assets/work for real
// media and update the copy/embed URLs here — the pages read from this file.
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
// Film / video projects (horizontal, cinematic & commercial)
// ---------------------------------------------------------------------------
export interface Film {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: number;
  location?: string;
  roles: string[];
  summary: string;
  /** Vimeo/YouTube embed URL — leave '' to show a poster-only placeholder. */
  videoUrl: string;
  cover: string;
  gallery: string[];
  body: string[];
  featured?: boolean;
}

export const films: Film[] = [
  {
    slug: 'nocturne',
    title: 'Nocturne',
    client: 'Sample project',
    category: 'Brand Film',
    year: 2025,
    location: 'London, UK',
    roles: ['Director', 'DP', 'Editor', 'Colour'],
    summary:
      'A nocturnal brand film for a fragrance house — shot handheld on anamorphic glass to keep the light alive.',
    videoUrl: '',
    cover: 'film-01',
    gallery: ['photo-commercial-01', 'photo-studio-02', 'photo-creative-01'],
    body: [
      'Nocturne opens in near-darkness and lets a single practical light do the work. The brief was to make a fragrance feel like a place rather than a product.',
      'We shot over two nights, entirely handheld, favouring long lenses and reflections. The grade leans into deep blacks with a controlled crimson bloom.',
    ],
    featured: true,
  },
  {
    slug: 'ember-and-steel',
    title: 'Ember & Steel',
    client: 'Sample project',
    category: 'Commercial',
    year: 2025,
    location: 'Manchester, UK',
    roles: ['DP', 'Editor'],
    summary:
      'High-contrast performance spot for a strength brand — sweat, steam and hard key light.',
    videoUrl: '',
    cover: 'film-02',
    gallery: ['photo-commercial-02', 'photo-lifestyle-01', 'photo-studio-01'],
    body: [
      'A 60-second broadcast cut and a suite of social edits built from a single day in a blacked-out gym.',
      'Motion was choreographed to a click track so the edit could cut precisely on impact.',
    ],
    featured: true,
  },
  {
    slug: 'the-long-road',
    title: 'The Long Road',
    client: 'Sample project',
    category: 'Cinematic Film',
    year: 2024,
    location: 'Scottish Highlands',
    roles: ['Director', 'DP', 'Editor', 'Colour'],
    summary:
      'A short travel film across the Highlands — landscape as character, weather as script.',
    videoUrl: '',
    cover: 'film-03',
    gallery: ['photo-lifestyle-02', 'photo-creative-02', 'photo-commercial-03'],
    body: [
      'Three days chasing light across the Highlands. We planned routes around the forecast and let the storms write the pacing.',
      'Aerials and ground work were graded to a single filmic palette so the cut never breaks its spell.',
    ],
    featured: true,
  },
  {
    slug: 'first-press',
    title: 'First Press',
    client: 'Sample project',
    category: 'Brand Film',
    year: 2024,
    location: 'Bristol, UK',
    roles: ['DP', 'Editor', 'Colour'],
    summary:
      'A tactile origin film following a single batch from green bean to first pour.',
    videoUrl: '',
    cover: 'film-04',
    gallery: ['photo-product-01', 'photo-product-02', 'photo-studio-03'],
    body: [
      'Macro detail meets a calm, observational edit. Every insert was lit to feel like morning.',
      'Delivered as a hero film plus a library of 9:16 cutdowns for the roastery’s launch.',
    ],
    featured: true,
  },
  {
    slug: 'signal',
    title: 'Signal',
    client: 'Sample project',
    category: 'Music Video',
    year: 2024,
    location: 'Studio',
    roles: ['Director', 'DP', 'Editor'],
    summary: 'A one-location performance video built on light, haze and a single moving source.',
    videoUrl: '',
    cover: 'film-05',
    gallery: ['photo-creative-03', 'photo-studio-04', 'photo-creative-04'],
    body: [
      'A performance-led promo shot in a single blackout studio with a motorised light as the co-star.',
      'The edit rides the track’s dynamics — restraint in the verses, release in the drops.',
    ],
  },
  {
    slug: 'groundwork',
    title: 'Groundwork',
    client: 'Sample project',
    category: 'Promotional',
    year: 2023,
    location: 'Leeds, UK',
    roles: ['DP', 'Editor'],
    summary: 'A measured studio-practice film — craft, materials and the people behind the work.',
    videoUrl: '',
    cover: 'film-06',
    gallery: ['photo-commercial-04', 'photo-lifestyle-03', 'photo-product-03'],
    body: [
      'An architecture practice wanted something quieter than the usual corporate reel. We built the film around hands, materials and models.',
      'Interviews were lit softly and framed wide to keep the studio in the story.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Social / short-form (vertical)
// ---------------------------------------------------------------------------
export interface SocialClip {
  title: string;
  platform: 'Instagram' | 'TikTok';
  format: string;
  cover: string;
  url: string;
}

export const social: SocialClip[] = [
  { title: 'Launch Teaser', platform: 'Instagram', format: 'Reel', cover: 'social-01', url: '' },
  { title: 'Behind the Build', platform: 'TikTok', format: 'Short', cover: 'social-02', url: '' },
  { title: 'Product Drop', platform: 'Instagram', format: 'Reel', cover: 'social-03', url: '' },
  { title: 'City Nights', platform: 'TikTok', format: 'Short', cover: 'social-04', url: '' },
  { title: 'Studio Day', platform: 'Instagram', format: 'Reel', cover: 'social-05', url: '' },
  { title: 'Sound On', platform: 'TikTok', format: 'Short', cover: 'social-06', url: '' },
  { title: 'Golden Hour', platform: 'Instagram', format: 'Reel', cover: 'social-07', url: '' },
  { title: 'Quick Cut', platform: 'TikTok', format: 'Short', cover: 'social-08', url: '' },
];

// ---------------------------------------------------------------------------
// Photography (categories)
// ---------------------------------------------------------------------------
export interface PhotoCategory {
  slug: string;
  title: string;
  blurb: string;
  images: string[];
}

export const photography: PhotoCategory[] = [
  {
    slug: 'product',
    title: 'Product',
    blurb: 'Controlled studio light and clean composition for e-commerce and campaign stills.',
    images: ['photo-product-01', 'photo-product-02', 'photo-product-03', 'photo-product-04'],
  },
  {
    slug: 'studio',
    title: 'Studio',
    blurb: 'Portraiture and set work — shaped light, considered backdrops.',
    images: ['photo-studio-01', 'photo-studio-02', 'photo-studio-03', 'photo-studio-04'],
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    blurb: 'Brand-led imagery built to sit across web, print and paid media.',
    images: ['photo-commercial-01', 'photo-commercial-02', 'photo-commercial-03', 'photo-commercial-04'],
  },
  {
    slug: 'lifestyle',
    title: 'Lifestyle',
    blurb: 'Natural, in-the-moment photography with a cinematic grade.',
    images: ['photo-lifestyle-01', 'photo-lifestyle-02', 'photo-lifestyle-03', 'photo-lifestyle-04'],
  },
  {
    slug: 'creative',
    title: 'Creative Shoots',
    blurb: 'Concept-driven, experimental work — colour, light and ideas first.',
    images: ['photo-creative-01', 'photo-creative-02', 'photo-creative-03', 'photo-creative-04'],
  },
];

export interface Service {
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    title: 'Video Production',
    desc: 'High-end commercial, brand, campaign and social video — directed, shot and cut end to end.',
  },
  {
    title: 'Social Media Content',
    desc: 'Short-form vertical content built for Instagram and TikTok — hooks, pacing and retention baked in.',
  },
  {
    title: 'Photography',
    desc: 'Premium brand, product, lifestyle and campaign photography with a cinematic grade.',
  },
  {
    title: 'Creative Direction',
    desc: 'Concept development, visual planning, shot design and creative execution.',
  },
  {
    title: 'Content Strategy',
    desc: 'Working out what visual content actually earns attention — and what your brand should be making.',
  },
];

// ---------------------------------------------------------------------------
// Testimonials — real client quotes only. Add entries and the homepage
// testimonial section appears automatically; leave empty to hide it.
// ---------------------------------------------------------------------------
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  // {
  //   quote: 'The content didn't just look incredible — it actually moved the numbers.',
  //   name: 'Client name',
  //   role: 'Founder, Company',
  // },
];
