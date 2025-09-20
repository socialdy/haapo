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
      name: "Anna Gruber",
      role: "Hotelierin, Tirol",
      quote: "Die Viola Sessel in unserer Lobby sind der Hammer! Nicht nur mega bequem, sondern sehen auch noch top aus und passen perfekt zum alpinen Stil. Man merkt einfach die Handwerkskunst. Top!"
    },
    {
      id: 2,
      name: "Maximilian Koch",
      role: "Innenarchitekt, Salzburg",
      quote: "Für mein letztes Projekt brauchte ich spezielle Sitzgelegenheiten, und der Garmisch-Stuhl von Haapo war die beste Wahl. Die können die Stühle genau anpassen und die Materialien sind super hochwertig. Meine Kunden sind total happy damit!"
    },
    {
      id: 3,
      name: "Lena Schmidt",
      role: "Privatkundin, München",
      quote: "Unsere Apennin-Wohnessecke ist jetzt das Herzstück bei uns zu Hause. Die Beratung war erste Sahne, und das Endergebnis ist noch besser, als wir dachten. Ein richtiges Kunstwerk, das super bequem und stylisch ist."
    },
    {
      id: 4,
      name: "Thomas Berger",
      role: "Restaurantbesitzer, Wien",
      quote: "Das Mailand-Sofa hat unseren Barbereich total aufgewertet. Das italienische Design und der Wahnsinns-Sitzkomfort machen es zu einem echten Highlight für unsere Gäste. Wir sind echt beeindruckt, wie robust und schick es ist."
    },
    {
      id: 5,
      name: "Carina Fischer",
      role: "Familienmutter, Kitzbühel",
      quote: "Unser Luis-Schlafsofa ist einfach genial – super praktisch und sieht dabei auch noch toll aus. Es ist nicht nur ein gemütlicher Schlafplatz für unsere Besucher, sondern auch tagsüber ein stylisches Möbelstück, das perfekt ins Wohnzimmer passt. Die Kohle war hier super investiert!"
    }
  ];

  return (
    <section className="pb-20 bg-white text-black" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-12 text-[32px] font-signika font-light text-black leading-normal no-underline tracking-normal">Referenzen</h2>
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
                <div className="bg-[rgb(220_38_38)] p-8 h-full animate-fade-in text-white">
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
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 bg-white border border-[rgb(220_38_38)] text-[rgb(220_38_38)] hover:bg-[rgb(220_38_38)] hover:text-white" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 bg-white border border-[rgb(220_38_38)] text-[rgb(220_38_38)] hover:bg-[rgb(220_38_38)] hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};
