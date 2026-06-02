import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIFI STORE UNIT",
  description: "ALWAYS_ON // ALWAYS_TRANSMITTING",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
