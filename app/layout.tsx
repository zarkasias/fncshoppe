import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FNC Shoppe",
  description: "Handmade art and crafts, designed with intention.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
