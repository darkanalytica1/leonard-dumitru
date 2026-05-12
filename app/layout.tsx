import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Dumitru — Product & AI Systems Architect",
  description:
    "Product & AI Systems Architect building AI agents, MCP knowledge systems, SalesOS workflows, and R&D-oriented product systems across GTM, AdTech, Telecom, UAV/ISR and RF-spectrum domains.",
  openGraph: {
    title: "Leonard Dumitru — Product & AI Systems Architect",
    description:
      "AI systems, Claude Code, MCP, SalesOS, commercial automation, knowledge infrastructure, ISR/RF/payload R&D product logic.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
