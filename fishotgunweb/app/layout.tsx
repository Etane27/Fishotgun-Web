// app/layout.tsx
import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

const radioCanada = Radio_Canada({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-radio-canada",
});

export const metadata: Metadata = {
  title: "Fishotgun – Official Website",
  description:
    "Official website for the Fishotgun game by Rabbit Hole (EPITA).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${radioCanada.variable} antialiased bg-zinc-100 text-zinc-900`}
        style={{ color: "#0f0f0f" }} //anti texte blanc
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
