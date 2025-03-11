import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoPunk",
  description: "The project that inspired the modern cryptoArt movement",
  icons: {
    icon: "/images/punkicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} px-4  bg-black`}>{children}</body>
    </html>
  );
}
