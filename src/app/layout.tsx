import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce at Scale",
  description:
    "Accredian Enterprise delivers world-class learning programs to help organizations upskill their teams with IIT & top-university backed certifications.",
  keywords:
    "enterprise learning, corporate training, upskilling, IIT certifications, workforce development",
  openGraph: {
    title: "Accredian Enterprise | Upskill Your Workforce at Scale",
    description:
      "World-class learning programs for organizations to upskill at scale.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
