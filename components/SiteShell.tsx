"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsTopOfPage(window.scrollY < 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return <div className="min-h-screen border bg-gray-50">
    <Navbar isTopOfPage={isTopOfPage} />
    <main className="min-h-screen bg-gray-50 pt-24">{children}</main>
    <Footer />
  </div>;
}
