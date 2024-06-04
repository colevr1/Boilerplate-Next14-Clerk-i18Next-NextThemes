interface Image {
  url: string;
  secureUrl: string;
  width: number;
  height: number;
  alt: string;
  type?: string;
}

interface OpenGraph {
  title: string;
  description: string;
  url: string;
  siteName: string;
  type: string;
  images: Image[];
}

interface Twitter {
  card: string;
  site: string;
  title: string;
  description: string;
  creator: string;
  images: {
    url: string;
    alt: string;
  };
}

interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: OpenGraph;
  twitter: Twitter;
}

const siteMetadata: Record<string, Metadata> = {
  en: {
    title: "Next.js Boilerplate",
    description: "A boilerplate template for setting up Next.js 14 projects with Clerk, i18n, and theming.",
    keywords: ["Next.js", "boilerplate", "Clerk", "i18n", "theming", "TypeScript", "Radix UI", "Tailwind CSS"],
    openGraph: {
      title: "Next.js Boilerplate",
      description: "Quickly set up your Next.js 14 projects with integrated Clerk authentication, i18n, and theming.",
      url: 'https://example.com/en',
      siteName: "Next.js Boilerplate",
      type: 'website',
      images: [
        {
          url: 'https://example.com/static/og-image-en.jpg',
          secureUrl: 'https://example.com/static/og-image-en.jpg',
          width: 1200,
          height: 630,
          alt: 'Next.js Boilerplate Overview',
          type: "image/jpg"
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@nextjs_boilerplate',
      title: "Next.js Boilerplate",
      description: "Set up Next.js 14 projects with Clerk, i18n, and theming effortlessly.",
      creator: '@nextjs_boilerplate',
      images: {
        url: 'https://example.com/static/og-image-en.jpg',
        alt: 'Next.js Boilerplate Overview',
      }
    },
  },
  fr: {
    title: "Boilerplate Next.js",
    description: "Un modèle de boilerplate pour configurer rapidement des projets Next.js 14 avec Clerk, i18n et thématisation.",
    keywords: ["Next.js", "boilerplate", "Clerk", "i18n", "thématisation", "TypeScript", "Radix UI", "Tailwind CSS"],
    openGraph: {
      title: "Boilerplate Next.js",
      description: "Configurez rapidement vos projets Next.js 14 avec authentification Clerk intégrée, i18n et thématisation.",
      url: 'https://example.com/fr',
      siteName: "Boilerplate Next.js",
      type: 'website',
      images: [
        {
          url: 'https://example.com/static/og-image-fr.jpg',
          secureUrl: 'https://example.com/static/og-image-fr.jpg',
          width: 1200,
          height: 630,
          alt: 'Aperçu du Boilerplate Next.js',
          type: "image/jpg"
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@nextjs_boilerplate_fr',
      title: "Boilerplate Next.js",
      description: "Configurez des projets Next.js 14 avec Clerk, i18n et thématisation sans effort.",
      creator: '@nextjs_boilerplate_fr',
      images: {
        url: 'https://example.com/static/og-image-fr.jpg',
        alt: 'Aperçu du Boilerplate Next.js',
      }
    },
  }
};

export default siteMetadata;