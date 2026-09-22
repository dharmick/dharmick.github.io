import { site } from "@/content/site";
import { SplitText } from "@/components/SplitText";

const tones = {
  lime: "bg-lime",
  tangerine: "bg-tangerine",
  aqua: "bg-aqua",
  gold: "bg-gold",
  clay: "bg-clay",
  hot: "bg-hot",
} as const;

const stickerClass =
  "max-w-[8.4em] rounded-full px-[0.7em] py-[0.42em] text-center font-display text-[clamp(2rem,3.6vw,3.5rem)] font-extrabold leading-[0.8] tracking-[-0.01em] text-balance text-ink";

export function Keys() {
  const { keys } = site;
  const [first, second, third, fourth, fifth, sixth] = keys.stickers;
  const rows = [
    [first, second],
    [third, fourth],
    [fifth, sixth],
  ] as const;

  return (
    <section id="keys" className="scroll-mt-28 px-8 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="max-w-[12ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.8] tracking-[-0.01em]">
          <SplitText text={keys.heading} />
        </h2>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-3 md:mt-16 md:gap-4">
          {rows.map((row, rowIndex) => (
            <ul
              key={rowIndex}
              className="flex max-w-full flex-col items-center justify-center gap-1.5 md:flex-row md:gap-2"
            >
              <li
                data-sticker
                style={{ "--tilt": `${row[0].rotate}deg` } as React.CSSProperties}
                className={`${stickerClass} ${tones[row[0].tone]}`}
              >
                {row[0].label}
              </li>
              {rowIndex === 1 ? (
                <li className="flex size-32 shrink-0 items-center justify-center rounded-full border-4 border-ink bg-sheet text-center font-display text-[2rem] font-extrabold leading-none tracking-[-0.01em] md:size-40 md:text-[2.6rem]">
                  {keys.stamp}
                </li>
              ) : null}
              <li
                data-sticker
                style={{ "--tilt": `${row[1].rotate}deg` } as React.CSSProperties}
                className={`${stickerClass} ${tones[row[1].tone]}`}
              >
                {row[1].label}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
