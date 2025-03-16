"use client";

export default function About() {
  return (
    <section className="bg-white z-50 w-full xl:px-40 lg:px-20 p-6 lg:p-0">
      <div id="title">
        <h1 className="font-medium text-3xl py-6">Sobre a Eden Pet</h1>
      </div>
      <div id="resume" className="flex flex-col justify-between gap-4">
        <div>
          <p>
            A relação com animais de família é muito sincera e afetuosa.
            Pensando nesse laço de amor e amizade, desde 2008, o EDEN PET provê
            a preservação da memória dos bichinhos de estimação e amparo à sua
            família, em um momento tão delicado como o da perda dos nossos
            amados companheiros.
          </p>
        </div>
        <div>
          <p>
            Somos representantes do Eden Pet Crematório aqui na baixada santista
            e Litoral de SP (unidade São Vicente, Baixada Santista).
          </p>
          <p>
            A matriz do Eden Pet Crematório está situado em Campinas, onde as
            cremações dos pets da baixada santista e Litoral de SP ocorrem
            semanalmente.
          </p>
        </div>
        <div>
          <p>
            <strong>
              Estamos de prontidão para melhor atendê-los todos dias, 24 horas.
            </strong>
          </p>
        </div>
      </div>

      {/* <div id="dashboard">
        <Dashboard />
      </div> */}
      
    </section>
  );
}
