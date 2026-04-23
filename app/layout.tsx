import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Interiors | Premium Interior Design Studio",
  description:
    "Atelier Interiors creates exceptional spaces through residential, commercial, and hospitality interior design with timeless elegance and functionality.",
  openGraph: {
    title: "Atelier Interiors | Premium Interior Design Studio",
    description:
      "Exceptional living and working environments blending timeless elegance with modern functionality.",
    url: "https://atelierinteriors.com",
    siteName: "Atelier Interiors",
    type: "website",
    images: [
      {
        url: "/images/photo-1600210492486-724fe5c67fb0.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier Interiors - Beautifully designed living room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Interiors | Premium Interior Design Studio",
    description:
      "Exceptional living and working environments blending timeless elegance with modern functionality.",
    images: [
      "/images/photo-1600210492486-724fe5c67fb0.jpg",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-[100dvh] flex flex-col">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.int-reveal').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.int-reveal:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        `,
          }}
        />
      </body>
    </html>
  );
}