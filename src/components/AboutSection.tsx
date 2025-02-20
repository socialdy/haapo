import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Innovative Küchentechnik mit durchdachten Funktionen und ästhetischem Design.",
    "Über 20 Jahre Erfahrung in der Entwicklung hochwertiger Haushaltsgeräte.",
    "Breites Sortiment von Induktionskochfeldern bis hin zu Weinkühlschränken.",
    "Hohe Qualitätsstandards, regelmäßig ausgezeichnet von Testmagazinen.",
    "Marktführend in den Bereichen Induktion, Vakuumiersysteme und Weintemperierung.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/WAjvys_XDTU"
              title="CASO Design Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-4 ">Warum CASO Design wählen?</h2>
            <p className=" mb-8">
              CASO Design steht für intelligente Küchengeräte, die das Kocherlebnis durch innovative Technik und modernes Design revolutionieren.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-[#2c2c2e]" />
                  <span className="text-[#2c2c2e]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
