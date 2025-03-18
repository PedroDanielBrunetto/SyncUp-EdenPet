"use client";

import Image from "next/image";

import structureImage from "@/public/structure/estrutura.png";

export default function Structure() {
  return (
    <section className="bg-white xl:px-40 lg:px-20 w-full pt-12 p-8">
      <div className="flex lg:flex-row flex-col gap-8 justify-around items-center">
        <div className="rounded-2xl">
          <Image
            width={480}
            src={structureImage}
            className="rounded-2xl"
            alt="Cremação"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-[600px]">
          <div>
            <h2 className="text-3xl font-bold text-black">Estrutura</h2>
            <h3 className="lg:text-base text-sm font-semibold text-gray-400">
              Matriz - Campinas
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="italic text-base">
              Nossa área foi cuidadosamente selecionada e nossas instalações
              equipadas para prover todo o conforto e respeito necessários para
              preservar a memória dos animais de família que nos são confiados.
            </p>
            <p className="italic text-base">
              Nosso crematório está instalado o entre as duas maiores cidades do
              estado de São Paulo, nos arredores de Campinas, ás margens da
              rodovia Anhanguera a menos de 1 hora da capital paulista.
            </p>
            <p className="italic text-base">
              Nosso escritório no litoral de São Paulo fica situado na cidade de
              São Vicente, no endereço Av. Antônio Emmerich, 841 - Vila
              Cascatinha, São Vicente - SP. Fazemos entrega em todo litoral de
              São Paulo e região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
