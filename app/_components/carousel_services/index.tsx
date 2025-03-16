"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import assistida from "@/public/services/assistida.png";
import coletiva from "@/public/services/coletiva.png";
import individual from "@/public/services/individual.png";
import Image from "next/image";
import { useRef } from "react";

export default function CarouselServices() {
  const plugin = useRef(
    Autoplay({ delay: 3600, stopOnInteraction: false })
  ).current;

  const services = [
    {
      id: 2,
      title: "Cremação Individual",
      topics: [
        "O corpinho do pet é cremado individualmente no forno de cremação, as cinzas são recolhidas, seladas e armazenadas em uma urna padrão em madeira MDF (outros modelos de urnas disponíveis no nosso catálogo de urnas);",
        "O certificado de cremação impresso com a digital (carimbo) da patinha e tufo do pelinho do pet são entregues junto à urna e as cinzas.",
      ],
      image: individual,
    },
    {
      id: 3,
      title: "Cremação Individual Assistida",
      topics: [
        "O procedimento é igual ao da cremação individual, mas assistida presencialmente;",
        "Os tutores agendam o dia e o horário da cremação, para assistir presencialmente no Eden Pet Crematório todo o procedimento de cremação;",
        "Desde o velório, a cremação até o processo final de embalagem e armazenamento das cinzas.",
      ],
      image: assistida,
    },
    {
      id: 1,
      title: "Cremação Coletiva",
      topics: [
        "O corpinho do pet é cremado coletivamente, junto a outros pets no forno de cremação;",
        "Não há a devolução das cinzas, as mesmas são espargidas na Natureza;",
        "O certificado de cremação é digital, enviado por e-mail ou Whatsapp.",
      ],
      image: coletiva,
    },
  ];

  return (
    <section className="w-full flex justify-center xl:px-40 lg:px-20">
      <Carousel
        plugins={[plugin]}
        className="w-full"
        onMouseEnter={() => plugin.stop()}
        onMouseLeave={() => plugin.reset()}
      >
        <div className="p-6 lg:-mb-20 -mb-12">
          <h1 className="text-3xl font-medium text-center">Serviços</h1>
        </div>
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className={`flex justify-around flex-col lg:flex-row w-full items-center lg:p-0 p-8 gap-8 min-h-[500px]`}
            >
              <div className="min-w-[320px] flex flex-col items-center gap-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={220}
                  className="object-cover rounded-lg"
                />
                <h1 className="text-2xl font-medium pt-2 h-12 lg:h-auto">
                  {service.title}
                </h1>
                <div className="flex lg:hidden flex-col gap-4 justify-start text-start max-w-[420px] min-h-[200px]">
                  <ul className="list-disc pl-5 space-y-2 h-72 lg:h-auto">
                    {service.topics.map((topic) => (
                      <li key={topic} className="text-base font-normal">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-4 justify-start text-start max-w-[420px] min-h-[200px]">
                <ul className="list-disc pl-5 space-y-2">
                  {service.topics.map((topic) => (
                    <li key={topic} className="text-base font-normal">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex">
          <CarouselPrevious className="bg-black text-white" />
          <CarouselNext className="bg-black text-white" />
        </div>
      </Carousel>
    </section>
  );
}
