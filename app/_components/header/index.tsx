"use client";

import Image from "next/image";
import DescriptionHeader from "./description";
import logo from "@/public/logo-header.png";
import { Mail, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="xl:px-60 lg:px-40 px-12 xl:pt-0 pt-4">
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
          <div className="absolute top-16 right-4 bg-white p-4 shadow-md rounded-b-2xl md:hidden">
            <nav id="links">
              <ul className="flex flex-col gap-4">
                <li className="font-medium">
                  <a>Início</a>
                </li>
                <li className="font-medium">
                  <a>Serviços</a>
                </li>
                <li className="font-medium">
                  <a>Cremação</a>
                </li>
                <li className="font-medium">
                  <a>Contato</a>
                </li>
              </ul>
            </nav>
            <div id="contato" className="mt-4">
              <ul className="flex gap-4">
                <li className="font-medium">
                  <Phone />
                </li>
                <li className="font-medium">
                  <Mail />
                </li>
              </ul>
            </div>
          </div>
        )}

        <nav id="links" className="md:block hidden">
          <ul className="flex justify-between items-center gap-4">
            <li className="font-medium md:text-sm text-base">
              <a>Início</a>
            </li>
            <li className="font-medium md:text-sm text-base">
              <a>Serviços</a>
            </li>
            <li className="font-medium md:text-sm text-base">
              <a>Cremação</a>
            </li>
            <li className="font-medium md:text-sm text-base">
              <a>Contato</a>
            </li>
          </ul>
        </nav>
        <div id="contato" className="md:flex hidden gap-4">
          <Phone />
          <Mail />
        </div>
      </section>
    </header>
  );
}
