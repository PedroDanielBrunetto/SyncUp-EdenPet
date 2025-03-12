"use client";

import Image from "next/image";
import Dashboard from "./dashboard";

import respeito from "@/public/about/respeito.png";
import economia from "@/public/about/economia.png";
import contribuicao from "@/public/about/contribuicao.png";

export default function About() {
  return (
    <section className="bg-white z-50 w-full xl:px-40 lg:px-20 p-6 lg:p-0">
      <div id="title">
        <h1 className="font-medium text-3xl py-6">Sobre a Eden Pet</h1>
      </div>
      <div
        id="resume"
        className="flex flex-col lg:flex-row justify-between gap-4"
      >
        <p>
          A relação com animais de família é muito sincera e afetuosa, pensando
          nesse laço de amor e amizade, desde 2008 o EDEN PET ajuda a preservar
          a memória dos bichinhos de estimação e a amparar sua família num
          momento tão delicado como é a perda dos nossos companheiros.
        </p>
        <p>
          Somos representantes do Eden Pet Crematório aqui na baixada santista e
          Litoral de SP. A matriz do Eden Pet Crematório está situado em
          Campinas, onde as cremações dos pets da baixada santista e Litoral de
          SP ocorrem todas as quartas feiras.
        </p>
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="sustentabilidade">
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
