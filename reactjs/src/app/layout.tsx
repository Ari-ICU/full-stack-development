import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReactJS Professional Course | 2026",
  description: "Build production-grade UIs with modern React. Learn from the best with our professional ReactJS course.",
};

function MFETopBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "rgba(8,8,16,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <a
        href="http://localhost:3000"
        className="text-[rgba(255,255,255,0.55)] hover:text-[rgba(255,255,255,0.9)] transition-colors duration-200"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M5 12l7-7M5 12l7 7" />
        </svg>
        Portal
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "3px 10px",
            borderRadius: "9999px",
            background: "rgba(97,218,251,0.10)",
            border: "1px solid rgba(97,218,251,0.25)",
            fontSize: "10px",
            fontWeight: 700,
            color: "#38bdf8",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 6px #38bdf8" }} />
          React MFE · :3004
        </span>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col" style={{ paddingTop: "44px" }}>
        <MFETopBar />
        {children}
      </body>
    </html>
  );
}
