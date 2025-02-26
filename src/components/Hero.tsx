import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-start xl:p-10">
      {/* Hintergrundbild mit Responsive Support */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet="public/images/bg-hero.jpg"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="public/images/bg-hero.jpg"
        />
        <img
          className="w-full h-full object-cover"
          src="public/images/bg-hero.jpg"
          alt="CASO Design Küchengeräte"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content (links ausgerichtet) */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-10 text-left px-6 sm:px-12 lg:px-20">
        <h3 className="text-white mb-2">Innovative Küchentechnologie</h3>
        <div className="w-24 h-[2px] bg-white mb-4" />
        <h1 className="">Das neue JET AIR System</h1>
        <p className="mt-4 max-w-2xl">
          Hygienischer, einfacher und nachhaltiger: Das neue CASO Design JET AIR System setzt neue Maßstäbe im Bereich der
          Einbaukochfelder. Es benötigt keine regelmäßigen Filterwechsel, ist platzsparend einbaubar und lässt sich komplett hygienisch reinigen.
        </p>
        <ul className="mt-4 list-disc pl-6 max-w-2xl">
          <li>100 % hygienisch</li>
          <li>Bis zu 98 % geruchsgereinigte Luft</li>
          <li>Energieeffizient und wartungsarm</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/#beratung">
            <Button className="bg-[#161616] text-md uppercase hover:bg-[#333] text-white px-6">
              Beratungsgespräch vereinbaren
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
