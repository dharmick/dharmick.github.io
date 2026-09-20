import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credibility } from "@/components/Credibility";
import { Deliverables } from "@/components/Deliverables";
import { Engineering } from "@/components/Engineering";
import { FitCheck } from "@/components/FitCheck";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Credibility />
        <Solutions />
        <FitCheck />
        <Process />
        <Deliverables />
        <Engineering />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
