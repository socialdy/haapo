import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#161616] text-[#e5e7eb] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
          <a href="https://kuechenstudio-bergheim.at" className="">
            <img
              src="/images/me_logo.png" // Ersetze dies durch den tatsächlichen Pfad zu deinem Logo
              alt="Küchenstudio Bergheim Logo"
              className="h-16 mb-3" // Passe die Größe des Logos an
            />
          </a>
            <p className="text-[#e5e7eb]">
            Hochwertige Einbauküchen von Beeck, innovative Küchengeräte von Miele sowie exklusive Arbeitsplatten und stilvolle Ausstattung – alles für Ihre Traumküche.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Quicklinks</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://kuechenstudio-bergheim.at/kuechen" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                  Küchen
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/abverkauf" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                  Abverkauf
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/ausstattung" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                  Ausstattung
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/bad" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                  Bad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Kontakt</h4>
            <ul className="space-y-3 text-[#e5e7eb]">
              <li>Lamprechtshausener Bundesstraße 1</li>
              <li>5101 Bergheim</li>
              <li><a href="tel:+43 662 452535" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">+43 662 452535</a></li>
              <li>
                <a href="mailto:me@kuechenstudio-bergheim.at" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                  me@kuechenstudio-bergheim.at
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                www.kuechenstudio-bergheim.at
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Öffnungszeiten</h4>
            <ul className="space-y-3 text-[#e5e7eb]">
              <li>Mo – Fr: 10:00 – 17:00 Uhr</li>
              <li>Sa – So: Geschlossen</li>
            </ul>
          </div>
        </div>

        {/* Rechtliche Links */}
        <div className="mt-16 pt-8 border-t border-[#e5e7eb]/40 text-center text-[#e5e7eb]">
          <ul className="space-y-3">
            <li>
              <a href="https://kuechenstudio-bergheim.at/impressum" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                Impressum
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/datenschutz" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/agb" className="text-[#e5e7eb] hover:text-[#e5e7eb] transition-colors">
                AGB
              </a>
            </li>
          </ul>
          <p className="mt-6">© 2025 Küchenstudio Bergheim. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-2">Developed by <a className="font-semibold" href="https://socialdynamics.agency">Social Dynamics</a></p>
        </div>
      </div>
    </footer>
  );
};
