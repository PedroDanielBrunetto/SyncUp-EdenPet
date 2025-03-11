"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function DescriptionHeader() {
  return (
    <header className="flex justify-between p-4">
      <section className="flex gap-4">
        <div id="telefone" className="flex items-center gap-1">
          <Phone />
          <span className="font-medium text-sm hidden vw:block">
            +55 13 99202-8013
          </span>
        </div>
        <div id="email" className="flex items-center gap-1">
          <Mail />
          <span className="font-medium text-sm hidden vw:block">
            contato@edenpetlitoral.com.br
          </span>
        </div>
      </section>
      <section>
        <div id="endereco" className="flex items-center gap-1">
          <MapPin />
          <a className="font-medium text-sm">
            Av. Antônio Emmerich, 841 - Vila Cascatinha, São Vicente - SP,
            11390-000
          </a>
        </div>
      </section>
    </header>
  );
}
