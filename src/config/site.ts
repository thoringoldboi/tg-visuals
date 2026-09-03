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
  email: 'thoringoldswain@gmail.com',
  /** Digits only, international format, no “+”. Used for the WhatsApp link. */
  whatsapp: '',
  /**
   * Contact-form POST endpoint. Uses FormSubmit (no account) to email
   * submissions straight to `email`. On the FIRST submission FormSubmit sends a
   * one-time activation link to that inbox — click it once and every enquiry
   * after that arrives automatically. Swap for a Formspree URL if you prefer.
   */
  formEndpoint: 'https://formsubmit.co/ajax/thoringoldswain@gmail.com',
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

/** Primary navigation. Work → home section; Bio & Contact are their own pages. */
export const nav: { label: string; href: string }[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Bio', href: '/bio' },
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
