import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Dumitru — Signal Card",
  description:
    "Leonard Dumitru: AI systems, RAG, cyber, UAV/RF, ISR, telecom data and defence workflows.",
  openGraph: {
    title: "Leonard Dumitru — Signal Card",
    description:
      "AI systems, RAG, cyber, UAV/RF, ISR, telecom data and defence workflows.",
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
