// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Circle Check",
  description:
    "Circle Check – share live locations with your trusted circles and get radius alerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          style={{
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
          }}
        >
          <nav
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
            }}
          >
            <Link
              href="/"
              style={{
                fontWeight: 700,
                fontSize: 18,
                textDecoration: "none",
                color: "#111827",
              }}
            >
              Circle Check
            </Link>
            <div style={{ display: "flex", gap: 16, fontSize: 14 }}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#4b5563" }}
              >
                Home
              </Link>
              <Link
                href="/help"
                style={{ textDecoration: "none", color: "#4b5563" }}
              >
                Help
              </Link>
              <Link
                href="/privacy-policy"
                style={{ textDecoration: "none", color: "#4b5563" }}
              >
                Privacy Policy
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}