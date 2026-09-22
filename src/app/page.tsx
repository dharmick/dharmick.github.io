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
          <div className="bg-white">
            <Work />
            <Ribbon />
            <Fit />
            <Keys />
          </div>
        </main>
      </div>
      <Footer />
      <Motion />
    </>
  );
}
