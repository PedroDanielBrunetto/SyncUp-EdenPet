"use client";

export default function dashboard() {
  const dashboard = {
    familias: {
      titulo: "Famílias atendidas",
      valor: "2k+",
    },
    satisfacao: {
      titulo: "Satisfação das Famílias",
      valor: "98%",
    },
    homenagens: {
      titulo: "Homenagens realizadas",
      valor: "1.5k+",
    },
    experiencia: {
      titulo: "Anos de Experiência",
      valor: "15+",
    },
  };
  return (
    <section className="flex sm:flex-row flex-col gap-4 justify-between py-8">
      <div id="familias">
        <h1 className="text-4xl font-medium">{dashboard.familias.valor}</h1>
        <h2 className="text-base font-normal">{dashboard.familias.titulo}</h2>
      </div>
      <div id="satisfacao">
        <h1 className="text-4xl font-medium">{dashboard.satisfacao.valor}</h1>
        <h2 className="text-base font-normal">{dashboard.satisfacao.titulo}</h2>
      </div>
      <div id="homenagens">
        <h1 className="text-4xl font-medium">{dashboard.homenagens.valor}</h1>
        <h2 className="text-base font-normal">{dashboard.homenagens.titulo}</h2>
      </div>
      <div id="experiencia">
        <h1 className="text-4xl font-medium">{dashboard.experiencia.valor}</h1>
        <h2 className="text-base font-normal">
          {dashboard.experiencia.titulo}
        </h2>
      </div>
    </section>
  );
}
