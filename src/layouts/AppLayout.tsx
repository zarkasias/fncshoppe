import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function AppLayout() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsTopOfPage(window.scrollY === 0);
  }, [pathname]);

  return (
    <div className="bg-gray-50 min-h-screen border">
      <Navbar isTopOfPage={isTopOfPage} />
      <main className="min-h-screen bg-gray-50 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
