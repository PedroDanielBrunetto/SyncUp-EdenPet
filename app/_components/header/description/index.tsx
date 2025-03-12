"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function DescriptionHeader() {
  return (
    <header className="flex justify-between p-4">
      <section className="flex gap-4">
        <div id="telefone" className="flex items-center gap-1">
          <Phone />
          <a
            href="https://wa.me/+55013992028013"
            className="font-medium text-sm hidden vw:block"
          >
            +55 13 99202-8013
          </a>
        </div>
        <div id="email" className="flex items-center gap-1">
          <Mail />
          <a
            href="mailto:contato@edenpetlitoral.com.br"
            className="font-medium text-sm hidden vw:block"
          >
            contato@edenpetlitoral.com.br
          </a>
        </div>
      </section>
      <section>
        <div id="endereco" className="flex items-center gap-1">
          <MapPin />
          <a
            href="https://maps.app.goo.gl/tF4zBsZYkb6GWXZQ6"
            className="font-medium text-sm"
          >
            Av. Antônio Emmerich, 841 - Vila Cascatinha, São Vicente - SP,
            11390-000
          </a>
        </div>
      </section>
    </header>
  );
}
