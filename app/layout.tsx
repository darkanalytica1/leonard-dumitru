import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Dumitru — Technical Product Operator",
  description:
    "QR landing card for Leonard Dumitru: AI systems, UAV/RF, telecom data, OSINT, ISR and defence-adjacent workflows.",
  openGraph: {
    title: "Leonard Dumitru — Technical Product Operator",
    description:
      "AI systems, UAV/RF, telecom data, OSINT, ISR and defence-adjacent workflows.",
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
