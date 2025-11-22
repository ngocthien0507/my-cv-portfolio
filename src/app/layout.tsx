import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thien Nguyen Ngoc - Senior Software Engineer | Portfolio",
  description: "Senior Software Engineer specializing in React Native and modern mobile development. 5+ years experience building scalable applications for international clients, including apps with 31M+ users. Based in Ho Chi Minh City, Vietnam.",
  keywords: [
    "Senior Software Engineer",
    "React Native Developer",
    "Mobile Development",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Software Engineer",
    "Vietnam",
    "Ho Chi Minh City",
    "Mobile Applications",
    "Cross-platform Development",
    "UI/UX",
    "Full Stack Development"
  ],
  authors: [{ name: "Thien Nguyen Ngoc" }],
  creator: "Thien Nguyen Ngoc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thiennguyen.dev",
    title: "Thien Nguyen Ngoc - Senior Software Engineer | Portfolio",
    description: "Senior Software Engineer specializing in React Native and modern mobile development. 5+ years experience building scalable applications for international clients.",
    siteName: "Thien Nguyen Ngoc Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thien Nguyen Ngoc - Senior Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Thien Nguyen Ngoc - Senior Software Engineer",
    description: "Senior Software Engineer specializing in React Native and modern mobile development. 5+ years experience building scalable applications.",
    images: ["/og-image.jpg"],
    creator: "@thiennguyen"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thien Nguyen Ngoc",
    "jobTitle": "Senior Software Engineer",
    "description": "Senior Software Engineer specializing in React Native and modern mobile development with 5+ years of experience building scalable applications for international clients.",
    "url": "https://thiennguyen.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Go Vap District",
      "addressRegion": "Ho Chi Minh City",
      "addressCountry": "Vietnam"
    },
    "sameAs": [
      "https://linkedin.com/in/thiennguyen-ngoc",
      "https://github.com/thiennguyen"
    ],
    "knowsAbout": [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Mobile Development",
      "Next.js",
      "UI/UX Design",
      "GraphQL",
      "Software Architecture"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Infina",
      "description": "Innovative online investment platform reshaping the investment landscape in Vietnam"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
