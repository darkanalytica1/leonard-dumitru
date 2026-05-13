import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Dumitru — Signal Card",
  description:
    "Leonard Dumitru: Technical Product Manager across AI, UAV/RF, ISR, Cyber/OSINT and Mission Systems.",
  openGraph: {
    title: "Leonard Dumitru — Signal Card",
    description:
      "Technical Product Manager across AI, UAV/RF, ISR, Cyber/OSINT and Mission Systems.",
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
