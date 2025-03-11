"use client";

import About from "../_components/about";
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
      <section>
        <About />
      </section>
    </main>
  );
}
