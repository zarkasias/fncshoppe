import { useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToShop = () => {
    document.getElementById("shoppe")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section data-fnc-hero className="mx-auto max-w-5xl px-6">
      <div
        className={`fnc-hero-grid grid grid-cols-1 bg-gray-50 md:grid-cols-2 ${
          loaded ? "loaded" : ""
        }`}
      >
        <div className={`fnc-hero-text ${loaded ? "loaded" : ""}`}>
          {/* <p className="fnc-eyebrow">Handmade originals · FNC Shoppe</p> */}
          <h1 className="fnc-headline">
            Original work.<br />
            <em>One-of-a-kind</em><br />
            pieces.
          </h1>
          <div className="fnc-bar" />
          <p className="fnc-sub">
            Handmade art and crafts, designed with intention.
            Every item in the FNC Shoppe is made by hand —
            thoughtful gifts and original pieces for everyday life.
          </p>
          <div className="fnc-cta-row">
            <button type="button" className="fnc-btn-primary" onClick={scrollToShop}>
              Browse the shop
            </button>
            {/* <button className="fnc-btn-ghost">View collections</button> */}
          </div>
        </div>

        <div className={`fnc-hero-image ${loaded ? "loaded" : ""}`}>
          <img src="/hero.png" alt="Handmade crafts by FNC Shoppe" className="fnc-img-inner" />
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
            <span className="fnc-tag-value">Made by hand</span>
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
