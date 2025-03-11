"use client";

import Header from "../_components/header";
import Hero from "../_components/hero";

export default function Home() {
  return (
    <main className="bg-[#F8F9FA]">
      <header className="relative z-20">
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <section className="bg-white z-50 absolute w-full h-96"></section>
    </main>
  );
}
