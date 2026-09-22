/**
 * All site copy and contact details live here.
 */

export const site = {
  name: "Dharmik Joshi",
  url: "https://dharmikjoshi.space",
  title: "Dharmik Joshi — Stop doing robot work",
  description:
    "We build the robots. Automations and agents for the job your team already does, in your tools. Then the keys are yours.",
  location: "India (IST)",
  replyNote: "Bangalore",
  cta: "Start a job",

  email: "hey@dharmikjoshi.space",
  phone: "+91 932425 8918",
  phoneDisplay: "+91 932425 8918",
  linkedin: "https://www.linkedin.com/in/dharmikjoshi/",

  nav: [
    { label: "The work", href: "#work", tone: "lime" },
    { label: "Fit", href: "#fit", tone: "clay" },
    { label: "The keys", href: "#keys", tone: "mist" },
  ],

  hero: {
    lines: ["Software is so 2020.", "Buy outcomes instead."],
    script: "SaaS is the old news",
    support: "AI automations and agents built around how your team actually works.",
  },

  ribbon: "Less busywork. More business.",

  work: {
    heading: "The boring jobs.",
    script: "Put them on autopilot.",
    items: [
      {
        image: "intake",
        tone: "lime",
        rotate: -6,
        title: "Intake",
        body: "Approvals, routing, and follow-ups leave someone’s memory.",
      },
      {
        image: "filing",
        tone: "tangerine",
        rotate: 4,
        title: "Filing",
        body: "The document lands in the system. People touch the exceptions.",
      },
      {
        image: "report",
        tone: "aqua",
        rotate: -3,
        title: "The weekly report",
        body: "It arrives. Nobody assembled it this week.",
      },
      {
        image: "handoff",
        tone: "gold",
        rotate: 5,
        title: "The handoff",
        body: "Source, runbooks, and the keys. Then we step off.",
      },
    ],
  },

  fit: {
    heading: "Is this the job?",
    yes: {
      title: "A fit when",
      tone: "lime",
      items: [
        "The same job happens every week",
        "The tools are already in the building",
        "Someone inside will own it",
        "You want it running, not presented",
      ],
    },
    no: {
      title: "Not a fit when",
      tone: "gold",
      items: [
        "You only want a chatbot on the side",
        "There is no job yet, only a mood",
        "You need a lab, not a system in use",
        "Nobody will take the keys",
      ],
    },
  },

  keys: {
    heading: "What you leave with?",
    stamp: "YOURS",
    stickers: [
      { label: "In your tools", tone: "lime", rotate: -8 },
      { label: "You own the source", tone: "tangerine", rotate: 6 },
      { label: "Runbooks and evals", tone: "aqua", rotate: -4 },
      { label: "Humans, where it matters", tone: "gold", rotate: 5 },
      { label: "The product, if it needs one", tone: "clay", rotate: -6 },
      { label: "The repeated question, answered", tone: "hot", rotate: 7 },
    ],
  },

  contact: {
    heading: "Hire your first AI worker.",
    support: "If the same job ate this week, send it.",
  },
} as const;

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent("The job this week")}`;
export const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
