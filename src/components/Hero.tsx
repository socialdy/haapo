import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-start xl:p-10">
      {/* Hintergrundbild mit Responsive Support */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet="/images/bg-hero.jpg"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="/images/bg-hero.jpg"
        />
        <img
          className="w-full h-full object-cover"
          src="/images/bg_hero.webp"
          alt="Haapo Polstermöbel"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content (links ausgerichtet) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center px-6 sm:px-12 lg:px-20">
        <h1 className="text-4xl lg:text-6xl">Haapo - Maßgeschneiderte Polstermöbel aus den Alpen</h1>
        <p className="mt-4 max-w-2xl">
          Haapo steht seit 1910 für handgefertigte Polstermöbel aus den Alpen. Wir kombinieren traditionelle Tiroler Werte mit modernem Design, verwenden regionale Materialien und bieten individuelle Lösungen. Besuchen Sie uns bei Küchenstudio Bergheim und erleben Sie unsere Qualität.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/#produkte" className="bg-black text-white text-md px-12 py-3 hover:bg-[rgba(225,66,67,1)] focus:outline-none focus:ring-0 focus:ring-offset-0">
              Mehr erfahren &gt;
          </a>
        </div>
      </div>
    </section>
  );
};
