import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="md:mt-6 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col items-center gap-10 text-center md:grid md:grid-cols-3 md:items-start md:gap-10 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
          </div>

          <div className="hidden md:block" aria-hidden />

          <div className="max-w-xs md:max-w-none">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
              Shop With Us
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
            Handmade art and crafts, designed with intention.
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-12 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} FNC Shoppe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
