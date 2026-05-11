import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JavaScript Mastery | Professional Web Development",
  description: "Master the world's most popular programming language with our structured, interactive curriculum.",
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
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <a
        href="http://localhost:3000"
        className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
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
            background: "rgba(234, 179, 8, 0.1)",
            border: "1px solid rgba(234, 179, 8, 0.2)",
            fontSize: "10px",
            fontWeight: 800,
            color: "#854d0e",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#eab308" }} />
          JS MFE · :3003
        </span>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50" style={{ paddingTop: "44px" }}>
        <MFETopBar />
        {children}
      </body>
    </html>
  );
}
