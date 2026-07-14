import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bassem Ramadan — Data Scientist & ML Engineer",
  description:
    "Portfolio of Bassem Ramadan — a Computer Science student specialising in Intelligent Systems, Machine Learning, Deep Learning, and Computer Vision based in Alexandria, Egypt.",
  keywords: [
    "Bassem Ramadan",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Developer",
    "Deep Learning",
    "Computer Vision",
    "Python",
    "PyTorch",
    "Streamlit",
    "Alexandria",
    "Egypt",
  ],
  authors: [{ name: "Bassem Ramadan", url: "https://github.com/BassemRamdan/Me" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bassemramadan.dev",
    title: "Bassem Ramadan — Data Scientist & ML Engineer",
    description:
      "Portfolio of Bassem Ramadan — transforming raw data into intelligent solutions.",
    siteName: "Bassem Ramadan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bassem Ramadan — Data Scientist & ML Engineer",
    description: "Transforming raw data into intelligent solutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
