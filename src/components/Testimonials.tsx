import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alexander Müller",
      role: "Selbstständiger Koch",
      quote: "Das Jet Air System hat meine Küche revolutioniert. Die Umlufttechnologie funktioniert einwandfrei, und die Luft bleibt immer frisch, selbst nach intensiven Kochsessions. Ein Muss für jeden ambitionierten Koch!"
    },
    {
      id: 2,
      name: "Monika Weber",
      role: "Kochbuchautorin",
      quote: "Das CASO Ci AIR Induktionskochfeld hat mich durch seine Technologie begeistert. Der integrierte Dunstabzug sorgt dafür, dass ich in der Küche nicht von Gerüchen überflutet werde, während ich gleichzeitig präzise kochen kann."
    },
    {
      id: 3,
      name: "Johannes Richter",
      role: "Vielbeschäftigter Berufspendler",
      quote: "Mit dem Flächeninduktionskochfeld Ci spare ich enorm viel Zeit. Die flexiblen Zonen machen das Kochen so viel einfacher, und die Touch-Bedienung reagiert perfekt – schnell und einfach."
    },
    {
      id: 4,
      name: "Sophie König",
      role: "Kaffeeliebhaberin und Hobbybäckerin",
      quote: "Der CASO Selection E 25 MGS ist für mich ein absoluter Gamechanger. Durch die Heißluftfunktion kann ich jetzt sowohl backen als auch grillen, was mir bei der Zubereitung von Gerichten enorm viel Zeit spart."
    }
  ];

  return (
    <section className="py-20 bg-[#161616] text-white" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-12">Referenzen</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white/10 p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="">{testimonial.name}</p>
                      <p className="">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
