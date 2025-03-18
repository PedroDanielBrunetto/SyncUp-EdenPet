"use client";

import ButtonContactCard from "./button-contact-card";

export default function Plans() {
  return (
    <section className="p-8 xl:px-40 lg:px-20 -mt-20 lg:-mt-12">
      <div className="pb-10">
        <h1 className="text-3xl font-medium text-center">Planos</h1>
      </div>
      <section className="flex lg:flex-row flex-col lg:gap-10 gap-6">
        <div className="rounded-2xl lg:w-2/4 bg-gradient-to-l from-[#1C1917] to-[#3f3d3b] p-4 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl text-white font-bold">Plano Emergencial</h2>
          <p className="text-white font-medium text-center px-6">
            O Plano Emergencial, como o nome diz, é para situações de prontidão.
            O preço é cheio e a remoção é imediata.
          </p>
          <div className="pt-4">
            <ButtonContactCard />
          </div>
        </div>
        <div className="rounded-2xl lg:w-2/4 bg-gradient-to-r from-[#1C1917] to-[#3f3d3b] p-4 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl text-white font-bold">Plano Preventivo</h2>
          <p className="text-white font-medium text-center px-6">
            O Plano Preventivo, é contratado com o pet ainda em vida, com valor
            descontado. 48 horas de carência a partir da confirmação do plano.
          </p>
          <div className="pt-4">
            <ButtonContactCard />
          </div>
        </div>
      </section>
    </section>
  );
}
