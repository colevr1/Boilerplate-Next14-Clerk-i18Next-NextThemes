import { Inter } from "next/font/google";

import "../globals.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import siteMetadata from "../i18n/metadata";

import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Params = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export async function generateMetadata({ params: { lng } }: Params) {
  // Use the language-specific metadata, with a fallback to English if the language key is not found
  const metadata = siteMetadata[lng] || siteMetadata.en;

  return {
    google: "notranslate", //Take control of your language and avoid bad paginations
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(", "),
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: metadata.openGraph.url,
      type: metadata.openGraph.type,
      images: metadata.openGraph.images.map((image) => ({
        url: image.url,
        secureUrl: image.secureUrl,
        type: "image/jpg",
        width: image.width,
        height: image.height,
        alt: image.alt,
      })),
    },
    twitter: {
      card: metadata.twitter.card,
      site: metadata.twitter.site,
      title: metadata.twitter.title,
      description: metadata.twitter.description,
      creator: metadata.twitter.creator,
      image: metadata.twitter.images.url,
      imageAlt: metadata.twitter.images.alt,
    },
  };
}

export default function RootLayout({ children, params: { lng } }: Params) {
  let localizationConfig;

  // Check the language and conditionally assign the localization config
  if (lng === "fr") {
    localizationConfig = frFR;
  } else {
    localizationConfig = {}; // Default or no specific localization, depending on your needs
  }

  return (
    <>
      <ClerkProvider localization={localizationConfig}>
        <html translate="no" lang={lng} dir={dir(lng)}>
          <body className={inter.className}>
            <ThemeProvider attribute="class">
              <Theme>{children}</Theme>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
