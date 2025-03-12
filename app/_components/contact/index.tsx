"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-6 w-full bg-white xl:px-40 lg:px-20 p-8 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center">Contato</h1>
      <div className="flex lg:flex-row flex-col justify-around gap-8 items-center">
        <div className="max-w-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.04703110878!2d-46.37663349999999!3d-23.958776999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1de58a6d89f3%3A0x5fabd0b11ba7c901!2sEden%20Pet%20-%20Cremat%C3%B3rio%20de%20animais%20no%20litoral%20de%20SP!5e0!3m2!1spt-BR!2sbr!4v1741820378189!5m2!1spt-BR!2sbr"
            loading="lazy"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-6">
          <a
            href="https://maps.app.goo.gl/tF4zBsZYkb6GWXZQ6"
            className="flex items-center font-medium gap-2"
          >
            <MapPin className="text-primary" />
            Av. Antônio Emmerich, 841 - Vila Cascatinha, São Vicente - SP,
            11390-000
          </a>
          <a
            href="https://wa.me/+55013992028013"
            className="flex items-center font-medium gap-2"
          >
            <Phone className="text-primary" />
            (13) 99202-8013
          </a>
          <a
            href="mailto:edenpet@edenpet.com.br"
            className="flex items-center font-medium gap-2"
          >
            <Mail className="text-primary" />
            edenpet@edenpet.com.br
          </a>
          <div className="flex items-center font-medium gap-2">
            <Clock className="text-primary" />
            Todos os dias 24h
          </div>
        </div>
      </div>
    </section>
  );
}
