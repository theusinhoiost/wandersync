"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function EmergingDestinationsCarousel() {
  const destinations = [
    {
      name: "Porto de Galinhas, PE",
      image:
        "https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg",
      desc: "Um dos destinos litorâneos mais charmosos do Brasil, ideal para relaxar.",
    },
    {
      name: "Jalapão, TO",
      image:
        "https://images.pexels.com/photos/16193114/pexels-photo-16193114.jpeg",
      desc: "Paisagens únicas e fervedouros cristalinos — natureza em estado bruto.",
    },
    {
      name: "Pipa, RN",
      image:
        "https://images.pexels.com/photos/6153372/pexels-photo-6153372.jpeg",
      desc: "Mistura de praias, trilhas e boas vibes. Perfeita para quem busca energia positiva.",
    },
    {
      name: "Chapada das Mesas, MA",
      image:
        "https://images.pexels.com/photos/4606217/pexels-photo-4606217.jpeg",
      desc: "Um paraíso escondido com cachoeiras e formações rochosas impressionantes.",
    },
    {
      name: "Urubici, SC",
      image:
        "https://images.pexels.com/photos/13573516/pexels-photo-13573516.jpeg",
      desc: "Destino de montanha com cachoeiras e clima frio — ideal para quem ama natureza.",
    },
  ];

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-center mb-6">
        🌎 Destinos Emergentes
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative max-w-6xl mx-auto"
      >
        <CarouselContent>
          {destinations.map((dest, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {dest.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-primary" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
}
