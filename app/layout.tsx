import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { site, socials } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Naresh Ramamurthy",
    "Orchids The International School",
    "Chief Academic Officer",
    "EdTech",
    "K12 education",
    "product builder",
    "Bangalore",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nareshram121",
    title: site.name,
    description: site.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Chief Academic Officer",
  worksFor: { "@type": "Organization", name: "Orchids The International School" },
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white text-center py-8 mt-20">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Naresh Ramamurthy. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </body>
    </html>
  );
}
