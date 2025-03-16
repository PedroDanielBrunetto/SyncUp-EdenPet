"use client";

import Image from "next/image";
import shape from "@/public/hero/Shape.png";
import ave from "@/public/hero/ave.png";
import main from "@/public/hero/main.png";

export default function Hero() {
  return (
    <main className="relative xl:px-40 lg:px-20 lg:mt-0 -mt-12">
      <div
        id="shape"
        className="absolute inset-0 left-96 -top-20 z-10 hidden lg:block"
      >
        <Image src={shape} alt="Figura" width={160} className="object-cover" />
      </div>
      <div
        id="ave"
        className="absolute inset-0 lg:left-[450px] vw:left-[500px] xl:left-[700px] top-0 z-10 hidden lg:block"
      >
        <Image src={ave} alt="Ave" width={120} className="object-cover" />
      </div>
      <section className="flex justify-between lg:flex-row flex-col items-center relative z-20 pt-0 p-0">
        <div id="introducao" className="flex flex-col gap-4 pt-16 p-6">
          <h4 className="text-sm font-medium text-[#57534E]">
            Eden Pet Litoral
          </h4>
          <h1 className="xl:text-5xl vw:text-3xl text-2xl font-medium">
            A memória do seu pet para sempre{" "}
          </h1>
          <h3 className="text-base font-mono text-[#57534E]">
            Conte conosco para honrar a memória do seu pet dignamente, com
            respeito e afeto.
          </h3>
          <a
            href="https://wa.me/+55013992028013"
            className="bg-[#090706] rounded-lg text-white p-3 text-center font-medium w-52"
          >
            Contate-nos
          </a>
        </div>
        <div id="imagens" className="relative z-0">
          <Image src={main} alt="Principal Image" />
        </div>
      </section>
    </main>
  );
}
