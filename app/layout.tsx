import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Interiors | Premium Interior Design",
  description: "Atelier Interiors creates exceptional spaces through residential, commercial, and hospitality interior design with a focus on timeless elegance and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
