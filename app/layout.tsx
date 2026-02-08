import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { TidioChat } from "@/components/TidioChat";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ryan's Vehicle Imports & Service Centre | Premium Vehicles in Trinidad",
  description: "Ryan's Vehicle Imports & Service Centre - Your premier choice for Roll-on/Roll-off vehicles in Trinidad. Driving the difference with quality imports and exceptional service.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
        <Footer />
        <TidioChat />
      </body>
    </html>
  );
}
