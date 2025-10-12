import { Geist, Geist_Mono, Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // include regular 400 weight for standard body text
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Megan Elisabeth Finch",
  description: "Personal portfolio of Megan Elisabeth Finch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <head>
        {/* Explicit page title and sharing meta to ensure browsers pick up the new name */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {/* KaTeX for inline LaTeX rendering in server-provided article HTML */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
      </head>
      <body>
        <div className="fixed-header site-header-spacer">
          <Header />
        </div>
        <div className="site-header-spacer" aria-hidden></div>
        {children}
      </body>
    </html>
  );
}
