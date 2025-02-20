import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "CASO Maitre 3500",
    image: "/images/maitre_3500.jpg",
    description: "Mobiles Doppelinduktionskochfeld, Testsieger.",
  },
  {
    id: 2,
    name: "CASO Classico T2",
    image: "/images/classico_t2.jpg",
    description: "Toaster für 2 Scheiben.",
  },
  {
    id: 3,
    name: "CASO MCG 25 Ceramic Chef",
    image: "/images/mcg_25.jpg",
    description: "Mikrowelle + Heißluft + Grill.",
  },
  {
    id: 4,
    name: "CASO AirFry & Steam 700",
    image: "/images/airfry_steam_700.jpg",
    description: "3 Garmethoden in einem Gerät – Dampfgaren, Heißluftfrittieren oder in Kombination.",
  },
  {
    id: 5,
    name: "CASO BaristaChef Inox",
    image: "/images/baristachef_inox.jpg",
    description: "Kaffeemühle mit Auffangbehälter und Siebträgerhaltung.",
  },
  {
    id: 6,
    name: "CASO Vakuumiergerät FastVac 500",
    image: "/images/fastvac_500.jpg",
    description: "Professionelles Edelstahl-Vakuumsystem zum Vakuumieren Ihrer Lebensmittel.",
  },
  {
    id: 7,
    name: "CASO SV 400",
    image: "/images/sv_400.jpg",
    description: "Sous Vide Stick, Sieger Preis/Leistung.",
  },
  {
    id: 8,
    name: "CASO WaffleUp",
    image: "/images/waffleup.jpg",
    description: "Design belgisches Waffeleisen.",
  },
  {
    id: 9,
    name: "CASO Juice Fit Pro",
    image: "/images/juice_fit_pro.jpg",
    description: "Design Slow Juicer, Gewinner Preis/Leistung.",
  },
  {
    id: 10,
    name: "CASO WineCase One Black",
    image: "/images/winecase_one_black.jpg",
    description: "Design Weinkühler für eine Flasche.",
  },
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
        <h2 className="text-center mb-12 uppercase">Produkte</h2>
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