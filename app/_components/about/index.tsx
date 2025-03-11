"use client";

import Dashboard from "./dashboard";

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
      </div>
    </section>
  );
}
