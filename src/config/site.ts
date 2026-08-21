// ---------------------------------------------------------------------------
// TG Visuals — central site configuration.
// Edit brand details, navigation and contact links here; the whole site reads
// from this file so nothing gets out of sync.
// ---------------------------------------------------------------------------

export const site = {
  name: 'TG Visuals',
  /** Short tagline used in the browser tab / meta. */
  tagline: 'Premium Video, Photography & Social Content',
  /** SEO meta description. */
  description:
    'Premium video production, photography and social media content by TG Visuals. High-end visuals designed to capture attention, build brands and drive results.',
  /** Production URL — update when hosting is chosen. */
  url: 'https://tgvisuals.com',
  locale: 'en_ZA',
  /** Headline credibility figure. */
  views: '2M+',
} as const;

export const contact = {
  // TODO(Thorin): replace with your real business email.
  email: 'hello@tgvisuals.com',
  /** Digits only, international format, no “+”. Used for the WhatsApp link. */
  whatsapp: '',
  /**
   * Contact-form POST endpoint (e.g. a Formspree URL like
   * https://formspree.io/f/xxxx, or a Netlify function). Leave '' to fall back
   * to opening the visitor's email client with the message pre-filled.
   */
  formEndpoint: '',
  instagram: {
    label: '@t.g_visuals',
    url: 'https://www.instagram.com/t.g_visuals/',
  },
  // TODO(Thorin): add real handles/URLs to surface these in nav & footer.
  tiktok: {
    label: '',
    url: '',
  },
  youtube: {
    label: '',
    url: '',
  },
} as const;

/** Primary navigation. */
export const nav: { label: string; href: string }[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Header / hero call-to-action label. */
export const ctaLabel = "Let's work together";

export const socialLinks = [
  { label: 'Instagram', url: contact.instagram.url },
  { label: 'TikTok', url: contact.tiktok.url },
  { label: 'YouTube', url: contact.youtube.url },
  { label: 'Email', url: `mailto:${contact.email}` },
].filter((l) => l.url);
