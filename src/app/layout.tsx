import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manit Suthar | Full-Stack Developer & Software Engineer",
  description:
    "Building practical software products through full-stack engineering, backend systems, and applied AI. L.D. College of Engineering IT undergraduate.",
  keywords: [
    "Manit Suthar",
    "Full-Stack Developer",
    "Software Engineer",
    "Applied AI",
    "Backend Systems",
    "FastAPI",
    "Next.js",
    "PyTorch",
  ],
  authors: [{ name: "Manit Suthar" }],
  openGraph: {
    title: "Manit Suthar | Full-Stack Developer & Software Engineer",
    description:
      "Building practical software products through full-stack engineering, backend systems, and applied AI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#08090D] text-[#F5F5F5] font-sans antialiased selection:bg-[#22C55E]/25 selection:text-[#22C55E] min-h-screen">
        {children}
      </body>
    </html>
  );
}
