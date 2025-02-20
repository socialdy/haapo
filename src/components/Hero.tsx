import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-start xl:p-10">
      {/* Hintergrundbild mit Responsive Support */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet="https://caso-design.de/media/images/showcase/3511_JuiceFitPro_header_1400x1400px_responsive.jpg"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="https://caso-design.de/media/images/showcase/3511_JuiceFitPro_header_960x500px_responsive_j44UqIi.jpg"
        />
        <img
          className="w-full h-full object-cover"
          src="https://caso-design.de/media/images/showcase/3511_JuiceFitPro_header_gruen_2000x450px.jpg"
          alt="CASO Design Küchengeräte"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content (links ausgerichtet) */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-10 text-left px-6 sm:px-12 lg:px-20">
        <h3 className="text-white mb-2">
        Design trifft Funktion
        </h3>

        <div className="w-24 h-[2px] bg-white mb-4" />

        <h1 className="">
          Hochwertige Küchengeräte für wahre Genießer
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/#beratung">
            <Button className="bg-[#333] text-md uppercase hover:bg-[#333] text-white px-6">
              Beratung vereinbaren
            </Button>
          </a>
        </div>

    
      </div>
    </section>
  );
};
