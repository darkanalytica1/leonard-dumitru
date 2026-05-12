import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Dumitru — Technical Product Operator",
  description:
    "Technical signal card for Leonard Dumitru: AI, RAG, cyber, UAV/RF, ISR, telecom data and defence-adjacent workflows.",
  openGraph: {
    title: "Leonard Dumitru — Technical Product Operator",
    description:
      "AI, RAG, cyber, UAV/RF, ISR, telecom data and defence-adjacent workflows.",
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
