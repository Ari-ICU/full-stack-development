import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Mastery | Modern Web Design Course",
  description: "Master the art of CSS with our premium interactive course. Learn Flexbox, Grid, and modern design patterns.",
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
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #e2e8f0",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <a
        href="http://localhost:3000"
        className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M5 12l7-7M5 12l7 7" />
        </svg>
        Return to Portal
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 12px",
            borderRadius: "6px",
            background: "#eff6ff",
            border: "1px solid #dbeafe",
            fontSize: "10px",
            fontWeight: 800,
            color: "#2563eb",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb" }} />
          CSS Course · Port 3002
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
