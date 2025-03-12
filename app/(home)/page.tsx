"use client";

import Image from "next/image";
import About from "../_components/about";
import CarouselServices from "../_components/carousel_services";
import Contact from "../_components/contact";
import Cremacao from "../_components/cremacao";
import Header from "../_components/header";
import Hero from "../_components/hero";

import logo from "@/public/logo-header.png";

export default function Home() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <main className="bg-[#F8F9FA]">
      <header className="relative z-50">
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section id="servicos" className="lg:pb-12">
        <CarouselServices />
      </section>
      <section id="cremacao" className="w-full pb-12">
        <Cremacao />
      </section>
      <section id="contact">
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
                <a href="#servicos" className="hover:underline me-4 md:me-6">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#cremacao" className="hover:underline me-4 md:me-6">
                  Cremação
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
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
