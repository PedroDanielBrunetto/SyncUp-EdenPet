"use client";

import Image from "next/image";

import cremacaoImage from "@/public/cremacao/cremacao.png";

import respeito from "@/public/about/respeito.png";
import economia from "@/public/about/economia.png";
import contribuicao from "@/public/about/contribuicao.png";

export default function Cremacao() {
  return (
    <section className="bg-white xl:px-40 lg:px-20 w-full pt-12 p-8">
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
            <h3 className="lg:text-base text-sm font-semibold text-gray-400">
              Por que optar pela cremação?
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="italic text-base">
              A cremação é uma alternativa segura e respeitosa para a despedida
              do seu pet. Além de ser uma forma digna de homenagear seu
              companheiro, evitando riscos ambientais, como a contaminação do
              solo e lençóis freáticos, comuns em enterros inadequados.
            </p>
            <p className="italic text-base">
              Com a cremação, você ainda pode manter as cinzas em uma urna
              especial ou espalhá-las (espargir) em um local significativo,
              mantendo a memória do seu amigo sempre presente. <br /> É uma
              escolha consciente que une amor, respeito e cuidado com o meio
              ambiente.
            </p>
          </div>
        </div>
      </div>
      <div id="sustentabilidade" className="pt-6">
        <div id="title-sustentabilidade">
          <h1 className="font-medium text-3xl pb-6">Sustentabilidade</h1>
        </div>
        <div id="resume-sustentabilidade" className="flex">
          <p>
            Entendemos que os recursos naturais são finitos e acreditamos que a
            longevidade do sucesso em qualquer atividade empresarial depende do
            equilíbrio harmônico entre os pilares da sustentabilidade.
          </p>
        </div>
        <div
          id="topicos-sustentabilidade"
          className="flex lg:flex-row flex-col justify-between items-center gap-4 py-6"
        >
          <div className="flex flex-col justify-center gap-2 w-[240px]">
            <Image
              src={economia}
              width={240}
              alt="Viabilidade econômica através de atuação ética"
            />
            <p className="text-center">
              Viabilidade econômica através de atuação ética
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 w-[240px]">
            <Image
              src={contribuicao}
              width={240}
              alt="Contribuição a sociedade assegurando a evolução"
            />
            <p className="text-center">
              Contribuição a sociedade assegurando a evolução
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 w-[240px]">
            <Image src={respeito} width={240} alt="Respeito ao meio ambiente" />
            <p className="text-center">Respeito ao meio ambiente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
