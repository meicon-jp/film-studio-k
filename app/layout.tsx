import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Film Studio K | 石川県金沢市の写真・動画・ドローン撮影スタジオ",
  description: "Film Studio Kは石川県金沢市を拠点に、写真撮影、動画撮影、ドローン撮影を行うスタジオです。人の内面を引き出し、大切な瞬間を残します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
