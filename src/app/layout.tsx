import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Y.S.S. Shiva Prakash Portfolio",
  description: "Portfolio of DOP, Editor & Colorist Y.S.S. Shiva Prakash",
  authors: [{ name: "Y.S.S. Shiva Prakash" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
