"use client";

import Image from "next/image";
import DescriptionHeader from "./description";
import logo from "@/public/logo-header.png";
import { Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="xl:px-40 lg:px-30 px-9 xl:pt-0 pt-4">
      <div id="description" className="lg:block hidden">
        <DescriptionHeader />
      </div>
      <section className="bg-white lg:p-4 p-3 flex justify-between rounded-4xl items-center">
        <div id="logo" className=" bg-white">
          <Image src={logo} alt="Eden Pet Logo" />
        </div>

        <div className="block md:hidden pl-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md z-50">
            <button
              className="flex justify-end pr-2 w-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <X />
            </button>
            <nav id="links">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a className="font-medium" href="/">
                    Início
                  </a>
                </li>
                <li>
                  <a className="font-medium" href="#tipos-de-cremacao">
                    Tipos de Cremação
                  </a>
                </li>
                <li>
                  <a className="font-medium" href="#planos">
                    Planos
                  </a>
                </li>
                <li>
                  <a className="font-medium" href="#contato">
                    Contato
                  </a>
                </li>
                <li className="font-medium">
                  <a href="https://wa.me/+55013992028013">
                    <Phone />
                  </a>
                </li>
                <li className="font-medium">
                  <a href="mailto:edenpet@edenpet.com.br">
                    <Mail />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <nav id="links" className="md:block hidden">
          <ul className="flex justify-between items-center gap-4">
            <li className="font-medium md:text-sm text-base">
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a className="font-medium md:text-sm text-base" href="#tipos-de-cremacao">
                Tipos de Cremação
              </a>
            </li>
            <li>
              <a className="font-medium md:text-sm text-base" href="#planos">
                Planos
              </a>
            </li>
            <li>
              <a className="font-medium md:text-sm text-base" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div id="contato" className="md:flex hidden gap-4">
          <a href="https://wa.me/+55013992028013">
            <Phone />
          </a>
          <a href="mailto:edenpet@edenpet.com.br">
            <Mail />
          </a>
        </div>
      </section>
    </header>
  );
}
