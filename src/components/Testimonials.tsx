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
      name: "Sebastian Lenz",
      role: "Hobbykoch",
      quote: "Der 'CASO Maitre 3500' ist eine echte Bereicherung für meine kleine Küche. Die Hitzeverteilung ist super und ich kann präzise kochen, ohne dass mir was anbrennt. Perfekt für unterwegs oder als Zusatzkochfeld!"
    },
    {
      id: 2,
      name: "Lisa Kramer",
      role: "Mutter von zwei Kindern",
      quote: "Der 'CASO Classico T2' ist bei uns jeden Morgen im Einsatz. Egal ob Toast oder Brötchen – alles wird gleichmäßig gebräunt. Endlich ein Toaster, der tut, was er soll!"
    },
    {
      id: 3,
      name: "Daniel Hofmann",
      role: "Vielbeschäftigter",
      quote: "Mit der 'CASO MCG 25 Ceramic Chef' spare ich mir viel Zeit. Mikrowelle, Grill und Heißluft in einem – da kann ich mein Essen schnell und unkompliziert aufwärmen, ohne auf Geschmack zu verzichten."
    },
    {
      id: 4,
      name: "Marina Beck",
      role: "Weinliebhaberin",
      quote: "Der 'CASO WineCase One Black' sieht nicht nur edel aus, sondern hält meine Lieblingsflasche immer auf der perfekten Temperatur. Gerade für hochwertige Weine echt ein Gamechanger!"
    }
  ];
  

  return (
<section className="py-20 bg-[#333] text-white" id="referenzen">
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
      {/* Pfeile werden auf Mobile und Tablet ausgeblendet */}
      <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
      <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
    </Carousel>
  </div>
</section>


  );
};
