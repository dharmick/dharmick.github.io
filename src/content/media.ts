/**
 * Ink clerk illustrations.
 * Original generated images, September 2026, made for this page.
 * The white field was removed so the line art can sit on flat color.
 */
export const clerk = {
  intake: {
    src: "/clerk/intake.png",
    width: 677,
    height: 729,
    alt: "A boxy robot sorts papers into two trays.",
  },
  filing: {
    src: "/clerk/filing.png",
    width: 643,
    height: 742,
    alt: "A boxy robot files a folder in a drawer.",
  },
  report: {
    src: "/clerk/report.png",
    width: 809,
    height: 785,
    alt: "A boxy robot holds a clipped stack beside a blank calendar.",
  },
  handoff: {
    src: "/clerk/handoff.png",
    width: 768,
    height: 774,
    alt: "A boxy robot carries a stickered folder toward a desk.",
  },
} as const;

export type ClerkId = keyof typeof clerk;
