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
  /** Production URL. Update if you add a custom domain later. */
  url: 'https://thoringoldswain.com',
  locale: 'en_ZA',
  /** Headline credibility figure. */
  views: '2M+',
  /** One-line positioning used on the home page. */
  positioning: 'Film, social content and the strategy behind it.',
  location: 'Cape Town, South Africa',
} as const;

/** Headline results (real figures from SHOOT. Studios + social). */
export const results: { value: string; label: string }[] = [
  { value: '2M+', label: 'Views across social platforms' },
  { value: '500 → 5K', label: 'Instagram followers grown for SHOOT. Studios' },
  { value: '0 → 2K', label: 'TikTok followers grown organically' },
];

export const contact = {
  email: 'thoringoldswain@gmail.com',
  /** Display format and tel: link. */
  phone: '+27 66 058 6919',
  phoneHref: 'tel:+27660586919',
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
    label: '@thoringoldswain',
    url: 'https://www.youtube.com/@thoringoldswain',
  },
  linkedin: {
    label: 'thorin-goldswain',
    url: 'https://www.linkedin.com/in/thorin-goldswain',
  },
} as const;

/** Primary navigation. */
export const nav: { label: string; href: string }[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Bio', href: '/bio' },
  { label: 'Contact', href: '/contact' },
];

/** Header / hero call-to-action label. */
export const ctaLabel = "Let's work together";

export const socialLinks = [
  { label: 'Instagram', url: contact.instagram.url },
  { label: 'TikTok', url: contact.tiktok.url },
  { label: 'YouTube', url: contact.youtube.url },
  { label: 'LinkedIn', url: contact.linkedin.url },
  { label: 'Email', url: `mailto:${contact.email}` },
].filter((l) => l.url);
