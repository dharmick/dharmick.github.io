import { site } from "@/content/site";
import { SplitText } from "@/components/SplitText";

const tones = {
  lime: "bg-lime",
  gold: "bg-gold",
} as const;

export function Fit() {
  const { fit } = site;
  const columns = [fit.yes, fit.no];

  return (
    <section id="fit" className="scroll-mt-28 px-8 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="max-w-[12ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.8] tracking-[-0.01em]">
          <SplitText text={fit.heading} />
        </h2>
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2">
          {columns.map((column) => (
            <div key={column.title} className={`rounded-[1.8rem] p-6 md:p-8 ${tones[column.tone]}`}>
              <h3 className="font-display text-3xl font-extrabold tracking-[-0.01em]">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-sheet px-4 py-2 text-sm font-bold leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
