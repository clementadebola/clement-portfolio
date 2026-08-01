"use client";

import useLenis from "@/hooks/useLenis";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/page";
import Projects from "@/components/project/Project";
import Services from "@/components/services/Services"
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects/>
        <Services/>
        <Footer/>
      </main>
    </>
  );
}