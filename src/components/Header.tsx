import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
  <a href="/" className="h-6 sm:h-8">
    <img
      src="/images/haapo.webp"
      alt="Haapo Logo"
      className="h-full m-0 w-auto"
    />
  </a>
  <a href="https://kuechenstudio-bergheim.at" className="h-11 sm:h-14">
    <img
      src="/images/me_logo_black.png"
      alt="Küchenstudio Bergheim Logo"
      className="h-full"
    />
  </a>
</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#produkte"
              className="text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black"
            >
              Produkte
            </a>
            <a
              href="#ueber-casodesign"
              className="text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black"
            >
              Über Haapo
            </a>
            <a
              href="/#referenzen"
              className="text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black"
            >
              Referenzen
            </a>
            <a href="/#beratung" className="text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black">
              Jetzt Beratung anfordern
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-white  hover:text-gray-700  focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-gray-700 border-t border-gray-100 shadow-md mobile">
            <div className="flex flex-col items-start gap-4 py-4 pl-6">
              <a
                href="/#produkte"
                className="transition-colors text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black"
                onClick={toggleMobileMenu}
              >
                Produkte
              </a>
              <a
                href="/#ueber-casodesign"
                className=" transition-colors text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black"
                onClick={toggleMobileMenu}
              >
                Über Haapo
              </a>
              <a
                href="/#referenzen"
                className="transition-colors text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black"
                onClick={toggleMobileMenu}
              >
                Referenzen
              </a>
              <a href="/#beratung" className="text-black text-[18px] hover:underline hover:text-black focus:outline-none focus:underline focus:text-black">
              Jetzt Beratung anfordern
            </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
