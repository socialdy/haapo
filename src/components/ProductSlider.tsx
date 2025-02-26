import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Jet Air System",
    image: "/images/jet-air-system.jpg",
    description: "Revolutionäre Umlufttechnologie ohne Fettfilter – hygienisch, geruchsreduzierend und leistungsstark."
  },
  {
    id: 2,
    name: "CASO Ci AIR Induktionskochfeld",
    image: "/images/ci_air.jpg",
    description: "Einbau-Induktionskochfeld mit integriertem Dunstabzug und JET AIR Separation Technology für saubere Luft.",
  },
  {
    id: 3,
    name: "Flächeninduktionskochfeld Ci",
    image: "/images/ci_flaecheninduktion.jpg",
    description: "Modernes Induktionskochfeld mit Touch-Bedienung, Slider-Steuerung und flexiblen Kochzonen.",
  },
  {
    id: 4,
    name: "CASO Selection E 25 MGS",
    image: "/images/selection_e25_mgs.jpg",
    description: "Einbaumikrowelle mit Heißluftfunktion – vollwertiger Ersatz für einen Backofen.",
  },
  {
    id: 5,
    name: "SteamMaster E 56",
    image: "/images/steammaster_e56.jpg",
    description: "Multifunktions-Dampfbackofen mit 3000 W für Backen, Braten, Dampfgaren und Kombifunktionen",
  },
  {
    id: 6,
    name: "CASO Vakuumiersystem",
    image: "/images/vakuumiersystem.jpg",
    description: "Hochwertiges Vakuumiersystem mit doppelter Schweißnaht für längere Haltbarkeit von Lebensmitteln.",
  },
  {
    id: 7,
    name: "CASO Sous Vide Garer",
    image: "/images/sous_vide.jpg",
    description: "Präziser Sous Vide Garer für perfekte Garergebnisse bei niedrigen Temperaturen.",
  },
  {
    id: 8,
    name: "Zubehör für Umluftbetrieb",
    image: "/images/zubehoer_umluft.jpg",
    description: "Energie- und materialsparendes Umluftsystem, ideal für moderne Küchen und Energiesparhäuser.",
  }
];



export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center mb-12">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="mb-2">{product.name}</h3>
                      <p className="mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 text-black bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-black md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};