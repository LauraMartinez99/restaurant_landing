import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Menu | Delicious Meals",
  description: "Explore our delicious menu featuring a variety of international dishes. From appetizers to desserts, find your perfect meal.",
  keywords: "restaurant, menu, food, meals, dining, international cuisine",
  authors: [{ name: "Your Restaurant Name" }],
  openGraph: {
    title: "Restaurant Menu | Delicious Meals",
    description: "Explore our delicious menu featuring a variety of international dishes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
