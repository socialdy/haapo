export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-[#333]" id="ueber-casodesign">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">

          <img 
            src="/images/caso.svg" 
            alt="CASO Design Logo" 
            className="h-16 w-auto"
          />
          
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#d9d9d9] leading-relaxed mb-6">
            CASO Design steht für innovative Küchentechnik, die starke Funktionen, ästhetische Formen und durchdachte Ideen vereint. Seit 2003 entwickelt und vertreibt das Familienunternehmen aus dem Sauerland mobile Küchengeräte, die Design, Funktionalität und intuitive Bedienung in Einklang bringen. Ob Induktionskochfelder, Vakuumiersysteme oder Weintemperierer – CASO Design bietet hochwertige Lösungen für moderne Küchen. Mit mehr als 200 Produkten hat sich CASO Design als eine der führenden Marken für smarte Küchentechnik etabliert und exportiert heute in über 30 Länder weltweit.
          </p>
        </div>
      </div>
    </section>
  );
};
