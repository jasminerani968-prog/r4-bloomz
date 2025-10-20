import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R4 Bloomz",
  description: "Authentic. Ethical. Elegant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
