import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/global/Navbar";

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
    <div className="min-h-screen border">
      <Navbar isTopOfPage={isTopOfPage} />
      <main className="bg-gray-50 pt-24">
        <Outlet />
      </main>
    </div>
  );
}
