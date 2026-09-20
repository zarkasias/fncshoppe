"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Navbar({ isTopOfPage }: { isTopOfPage: boolean }) {
  return <nav>
    <div className={`fixed top-0 z-30 w-full py-6 transition-colors duration-300 ${isTopOfPage ? "bg-gray-50/95" : "bg-indigo-50 drop-shadow"}`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <Link href="/" className="block"><Logo /></Link>
      </div>
    </div>
  </nav>;
}
