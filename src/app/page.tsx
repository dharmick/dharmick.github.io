import { Fit } from "@/components/Fit";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Keys } from "@/components/Keys";
import { Motion } from "@/components/Motion";
import { Ribbon } from "@/components/Ribbon";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <main id="main">
          <Hero />
          <Work />
          <Ribbon />
          <Fit />
          <Keys />
        </main>
      </div>
      <Footer />
      <Motion />
    </>
  );
}
