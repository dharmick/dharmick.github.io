import { About } from "@/components/About";
import { AiFit } from "@/components/AiFit";
import { DataRules } from "@/components/DataRules";
import { Examples } from "@/components/Examples";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Jobs } from "@/components/Jobs";
import { Process } from "@/components/Process";
import { Start } from "@/components/Start";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <DataRules />
        <About />
        <Start />
        <Jobs />
        <Process />
        <AiFit />
        <Why />
        <Examples />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
