import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Dumitru — Product & AI Systems Architect",
  description:
    "AI systems, Claude Code, MCP, custom SalesOS, commercial automation, ISR/RF/payload R&D product logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
