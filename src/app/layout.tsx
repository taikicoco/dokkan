import "../styles/globals.css";
import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";

const inter = Fira_Mono({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dokkan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
