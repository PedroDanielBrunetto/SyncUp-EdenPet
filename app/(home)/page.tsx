"use client";

import { useEffect, useState } from "react";
import eden1 from "@/public/jardim-eden.webp";
import eden2 from "@/public/jardim-eden-2.webp";
import eden3 from "@/public/jardim-eden-3.webp";

import Image from "next/image";
import About from "../_components/about";
import CarouselServices from "../_components/carousel_services";
import Contact from "../_components/contact";
import Cremacao from "../_components/cremacao";
import Header from "../_components/header";
import Hero from "../_components/hero";

import logo from "@/public/logo-header.png";
import Plans from "../_components/plans";
import Structure from "../_components/structure";
import ButtonDownload from "../_components/plans/button-download";

const images = [eden1, eden2, eden3];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <main className="bg-[#F8F9FA]">
      <header className="relative z-50">
        <Header />
      </header>
      <section
        id="banner"
        className="xl:px-40 lg:px-20 relative z-50 p-6 lg:pb-0"
      >
        <Image
          src={images[currentImage]}
          alt="Jardim do Eden"
          className="rounded-2xl max-w-full transition-opacity duration-1000 opacity-100"
        />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section className="w-full">
        <Cremacao />
      </section>
      <section id="tipos-de-cremacao" className="">
        <CarouselServices />
      </section>
      <section id="planos">
        <Plans />
      </section>
      <section className="pt-4 pb-12 flex w-full justify-center flex-col items-center gap-4">
        <h2 className="text-base font-bold text-center w-80">
          Disponibilizamos modelos de urnas diferenciadas e outros itens:
        </h2>
        <div>
          <ButtonDownload />
        </div>
      </section>
      <section>
        <Structure />
      </section>
      <section id="contato">
        <Contact />
      </section>

      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} alt="Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" className="hover:underline me-4 md:me-6">
                  Início
                </a>
              </li>
              <li>
                <a href="#tipos-de-cremacao" className="hover:underline me-4 md:me-6">
                  Tipos de Cremação
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:underline me-4 md:me-6">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a href="https://syncupbrasil.tech" className="hover:underline">
              SyncUp Brasil
            </a>
            . Todos os direitos reservados
          </span>
        </div>
      </footer>
    </main>
  );
}
