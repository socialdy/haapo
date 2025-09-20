import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Handwerklich hochwertige Funktions-Polstermöbel seit 1910.",
    "Traditionelle Tiroler Werte und regionale Materialien.",
    "Zeitloser und moderner Stil, entwickelt und hergestellt von hoch qualifizierten Mitarbeitern.",
    "Anfertigung von Sondergrößen, Sondermaßen und Sondermodellen.",
  ];

  return (
    <section className="pb-20 bg-white" id="ueber-casodesign">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Removed iframe */}
          <div>
          {/* Placeholder for potential image or other content */}
          <img 
            src="/images/der_blick_von_oben.webp" 
            alt="Der Blick von Oben" 
            className="h-auto w-full max-w-md mx-auto"
          />
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-4 text-[32px] font-signika font-light text-black leading-normal no-underline tracking-normal">Warum Haapo wählen?</h2>
            <p className=" mb-12 text-black">
              Haapo fertigt seit 1910 handwerklich hochwertige Funktions-Polstermöbel. Das Unternehmen verschreibt sich traditioneller Tiroler Werte und produziert Möbel seit jeher aus möglichst regionalen Materialien. Einzelmöbel und Wohnlandschaften im zeitlosen und modernen Stil werden von hoch qualifizierten Mitarbeitern entwickelt und hergestellt. Die Anfertigung von Sondergrößen, Sondermaßen und Sondermodellen zeichnet den Betrieb neben der umfangreichen und hochwertigen Auswahl an Funktionsmöglichkeiten aus.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-red-600" />
                  <span className="text-black">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
