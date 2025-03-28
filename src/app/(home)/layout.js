import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { HeroUIProvider } from "@heroui/react";
import SearchComponent from "@/components/SearchComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { SearchProvider } from "@/services/searchContent"; // ✅ Import the SearchProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-white`}
      >
        {/* ✅ Wrap everything inside SearchProvider */}
        <SearchProvider>
          <section className="flex justify-between gap-x-14">
            <SidebarComponent />
            <article className="space-y-10 grow pr-14">
              <SearchComponent /> {/* ✅ Now it has access to useSearch() */}
              <HeroUIProvider>{children}</HeroUIProvider>
            </article>
          </section>
        </SearchProvider>
      </body>
    </html>
  );
}
