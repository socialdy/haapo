import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Viola Sessel",
    image: "/images/viola.webp",
    description: "Vereint zeitgemäßes Design mit erstklassiger Handwerkskunst und traditionellen Materialien wie Eiche, Nuss, Wolle und Loden. Maße: B70 x H65 x T72 x SH40 cm. Kollektion: viola",
    designer: "Mathias Künzler"
  },
  {
    id: 2,
    name: "Garmisch-Stuhl",
    image: "/images/garmisch.webp",
    description: "Kompakte Sesselserie mit und ohne Armlehnen, ideal für Objekt- und private Essbereiche. Maße: B49 x H79 x T57 x SH46 cm.",
    designer: "<b>Haapo</b>"
  },
  {
    id: 3,
    name: "Malaun-Sessel",
    image: "/images/malaun.webp",
    description: "Malaun verbindet Tiroler Handwerkstradition mit alpenländischer Formensprache. Komfortable Polsterung in Wolle, Loden oder Leinen, umrahmt von einem filigranen Eichenholzgestell. Maße: B90 x H84 x T56 x SH43 cm.",
    designer: "Gabriela Raible"
  },
  {
    id: 4,
    name: "Apennin-Wohnessecke",
    image: "/images/apennin.webp",
    description: "Zentimetergenau planbare Wohnessecke in verschiedenen Varianten mit glatter oder gesteppter Polsterung und diversen Fußoptionen (Eiche, Buche oder Metallkufen). Maße: B170 x 230 x H86 x T70 x SH49 cm.",
    designer: "arge2"
  },
  {
    id: 5,
    name: "Mailand-Sofa",
    image: "/images/mailand.webp",
    description: "Dem Trend zu weicherem Sitzen und Relaxen begegnet <b>Haapo</b> mit daniele. Italienisches Flair, kubische aber dennoch weiche Formen und hervorragender legerer Sitzkomfort vereint mit Maßanfertigung ergeben das perfekte Polstermöbel. Italienische Stoffe geben daniele den typisch mediterranen Style. Maße: B200 x H78/88 x T84 x SH44 cm.",
    designer: "Haapo"
  },
  {
    id: 6,
    name: "Luis-Schlafsofa",
    image: "/images/luis.webp",
    description: "Den Sitz nach vorne ziehen, den Rücken runterklappen und aus einem ansprechenden Sofa wird ein Querschläfer-Schlafsofa. Maße: B212/222 x H85/90 x T90 x SH44 cm.",
    designer: "Haapo"
  },
  {
    id: 7,
    name: "Relax-Liege",
    image: "/images/relax.webp",
    description: "Das Topmodell der <b>Haapo</b>-Liegen-Kollektion. Optisch anspruchsvoll, hochwertigste Materialien, flexible Maße und viele Varianten bereichert diese Liege viele Wohn-, Wellness- und Ruhebereiche. Maße: B92 x H85 x T190 x SH44 cm.",
    designer: "Haapo"
  },
  {
    id: 8,
    name: "Haapo-Naturbett",
    image: "/images/naturbett.webp",
    description: "Natürlich und formschön Schlafen – die Betteneuheit aus komplett natürlichen Materialien: Naturlatex, Kokosplatten, reine Schurwolle und die Sichtholzteile geölt oder gewachst. Maße: B80/90/100/160/180/200 x H140 x L200.",
    designer: "Haapo"
  },
  {
    id: 9,
    name: "Apennin-Tisch",
    image: "/images/apennin_tisch.webp",
    description: "Der apennin Tisch ist Teil der apennin Wohnessecke. Erhältlich mit massiven Holzfüßen (Eiche, Buche) oder modernen schwarz lackierten Metallkufen. Tischplatte in Standardgrößen: 90, 140, 160, 180, 200.",
    designer: "arge2"
  },
  {
    id: 10,
    name: "Malaun-Tisch",
    image: "/images/malaun_tisch.webp",
    description: "Details Maße: D 45/55/80 x H 55/35/35 cm Kollektion: malaun",
    designer: "Gabriela Raible"
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
    <section className="py-20 bg-[rgba(241,241,241,1)]" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center mb-12 text-[32px] font-signika font-light text-black leading-normal no-underline tracking-normal">Produkte</h2>
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
                      className="mx-auto block object-contain h-40 w-full"
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="mb-2">{product.name}</h3>
                      {/* {product.designer && <p className="text-sm text-gray-500 mb-2">by {product.designer}</p>} */}
                      <p className="mb-4 text-lg">{product.description}</p>
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