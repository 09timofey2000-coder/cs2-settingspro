import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CS2 Settings — настройки про-игроков",
  description: "Конфиги, прицелы, девайсы и параметры запуска про-игроков и стримеров CS2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <Sidebar />
        <div className="pl-[72px] min-h-screen">
          <Topbar />
          <main className="px-6 md:px-8 py-8 max-w-[1500px] mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}