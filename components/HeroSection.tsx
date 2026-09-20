"use client";
import Image from "next/image";
export default function HeroSection() {
  const scrollToShop = () => {
    document.getElementById("shoppe")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section data-fnc-hero className="mx-auto max-w-5xl px-6">
      <div
        className="fnc-hero-grid loaded grid grid-cols-1 bg-gray-50 md:grid-cols-2"
      >
        <div className="fnc-hero-text loaded">
          {/* <p className="fnc-eyebrow">Handmade originals · FNC Shoppe</p> */}
          <h1 className="fnc-headline">
            Original work.<br />
            <em>One-of-a-kind</em><br />
            pieces.
          </h1>
          <div className="fnc-bar" />
          <p className="fnc-sub">
            Handmade art and crafts, designed with intention.
            Every item in the FNC Shoppe is an original design —
            thoughtful gifts and everyday essentials.
          </p>
          <div className="fnc-cta-row">
            <button type="button" className="fnc-btn-primary" onClick={scrollToShop}>
              Browse the shop
            </button>
            {/* <button className="fnc-btn-ghost">View collections</button> */}
          </div>
        </div>

        <div className="fnc-hero-image loaded">
          <Image src="/hero.png" alt="Handmade crafts by FNC Shoppe" fill priority sizes="(max-width: 768px) 100vw, 420px" className="fnc-img-inner" />
          {/* Replace with your product photo:
              <img src="/your-image.jpg" alt="Handmade crafts by FNC Shoppe" className="fnc-img-inner" /> */}
          {/* <div className="fnc-img-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>Add your product photo here</span>
          </div> */}

          <div className="fnc-tag">
            <span className="fnc-tag-label">Every piece</span>
            <span className="fnc-tag-value">An original design</span>
          </div>
        </div>
      </div>

      <div id="shoppe" className="fnc-hero-scroll mt-auto flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Scroll</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
    </section>
  );
}
