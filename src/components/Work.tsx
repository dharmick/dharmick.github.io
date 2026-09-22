import Image from "next/image";
import { clerk, type ClerkId } from "@/content/media";
import { site } from "@/content/site";
import { SplitText } from "@/components/SplitText";

const tones = {
  lime: "bg-lime",
  tangerine: "bg-tangerine",
  aqua: "bg-aqua",
  gold: "bg-gold",
} as const;

const lifts = ["lg:mt-0", "lg:mt-10", "lg:mt-3", "lg:mt-14"] as const;

export function Work() {
  const { work } = site;

  return (
    <section id="work" className="scroll-mt-28 px-8 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-[minmax(0,1fr)_8.5rem] items-end gap-2 md:flex md:items-start md:gap-12">
          <h2 className="max-w-[10ch] font-display text-[clamp(3.2rem,7vw,6.25rem)] font-extrabold leading-[0.8] tracking-[-0.01em]">
            <SplitText text={work.heading} />
          </h2>
          <p className="min-w-0 -rotate-6 font-script text-[1.35rem] leading-[0.95] text-note-rust md:mt-8 md:max-w-[13rem] md:-rotate-[8deg] md:text-[2.15rem]">
            {work.script}
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-6 lg:mt-24 lg:flex-row lg:items-start lg:justify-center lg:gap-6">
          {work.items.map((item, index) => {
            const image = clerk[item.image as ClerkId];
            return (
              <article
                key={item.title}
                data-card
                data-rotate={item.rotate}
                style={{ "--tilt": `${item.rotate}deg` } as React.CSSProperties}
                className={`w-full min-w-0 rounded-[1.8rem] p-6 lg:w-[calc((100%-4.5rem)/4)] ${lifts[index]} ${tones[item.tone]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="300px"
                  className="mx-auto h-44 w-auto max-w-full object-contain"
                />
                <h3 className="mt-4 font-display text-[2rem] font-extrabold leading-none tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-snug">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
