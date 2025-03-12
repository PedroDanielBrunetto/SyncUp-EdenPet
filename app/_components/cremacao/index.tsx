"use client";

import Image from "next/image";

import cremacaoImage from "@/public/cremacao/cremacao.png";

export default function Cremacao() {
  return (
    <section className="xl:px-40 lg:px-20 w-full pt-12 p-8 lg:p-0">
      <div className="flex lg:flex-row flex-col gap-8 justify-around items-center">
        <div className="rounded-2xl">
          <Image
            width={480}
            src={cremacaoImage}
            className="rounded-2xl"
            alt="Cremação"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-[600px]">
          <div>
            <h2 className="text-3xl font-bold text-black">Cremação</h2>
            <h3 className="text-base font-semibold text-gray-400">
              Por que optar pela cremação?
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="italic text-base">
              A cremação é uma alternativa segura e respeitosa para a despedida
              do seu pet. Além de ser uma forma digna de homenagear seu
              companheiro, ela evita riscos ambientais, como a contaminação do
              solo e lençóis freáticos, comuns em enterros inadequados.
            </p>
            <p className="italic text-base">
              Com a cremação, você ainda pode guardar as cinzas em uma urna
              especial ou espalhá-las em um local significativo, mantendo a
              memória do seu amigo sempre presente. É uma escolha consciente que
              une amor, respeito e cuidado com o meio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
