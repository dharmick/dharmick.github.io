/**
 * All site copy and contact details live here.
 * Replace placeholder companies, email, phone, and LinkedIn before publishing.
 */

export const site = {
  name: "Dharmik Joshi",
  url: "https://dharmikjoshi.space",
  title: "Dharmik Joshi — Internal systems for repeating work",
  description:
    "Repeating work gets a real workflow. Built in your stack, handed to your team. Not a chatbot on a pile of PDFs.",
  location: "India (IST)",
  replyNote: "Replies usually land within a day.",
  cta: "Email",

  email: "hey@dharmikjoshi.space",
  phone: "+91 932425 8918",
  phoneDisplay: "+91 932425 8918",
  linkedin: "https://www.linkedin.com/in/dharmikjoshi/",

  nav: [
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],

  hero: {
    line1: "The messy jobs.",
    line2: "In your stack.",
    line3: "Then off your plate.",
    support:
      "Repeating work gets a real workflow. Built in your tools. Handed to your team.",
  },

  credibility: {
    label: "Six years as a software engineer at",
    companies: [
      { name: "Kustard Technologies", role: "Software Engineer", years: "2020–2022" },
      { name: "Navi", role: "Senior Software Engineer", years: "2022–2026" },
      { name: "GoodScore", role: "Senior Software Engineer", years: "2026" },
    ],
  },

  solutions: {
    label: "Solutions",
    heading: "If it happens every week, it should not need a hero.",
    intro:
      "Most internal AI stalls at a chatbot on a pile of PDFs. The work here starts from the job — then a system your team actually uses, in your tools, with a handoff they can own.",
    items: [
      {
        number: "01",
        title: "Ops and workflow agents",
        who: "Ops, people teams, anyone drowning in intake.",
        pain: "Approvals, routing, follow-ups, and handoffs live in Slack, email, and someone’s memory.",
        build: "Agents and workflows. Humans stay in the loop where judgment still matters.",
        done: "Work moves from intake to done. Not a demo that chats.",
      },
      {
        number: "02",
        title: "Support and internal knowledge",
        who: "Support, IT, and teams tired of answering the same forty questions.",
        pain: "Tribal knowledge. “Check Confluence.” A ping instead of a search.",
        build: "Retrieval over your docs, tickets, and wikis — with sources and access control — in Slack, the helpdesk, or a small internal UI.",
        done: "Answers people trust enough to stop pinging each other.",
      },
      {
        number: "03",
        title: "Reporting without the scramble",
        who: "Founders, ops leads, anyone who builds the same weekly pack by hand.",
        pain: "Metrics archaeology across databases, sheets, Stripe, the CRM.",
        build: "Scheduled briefs and dashboards fed by real data, with the boring joins handled.",
        done: "The report arrives. Nobody assembled it this week.",
      },
      {
        number: "04",
        title: "Documents into the system of record",
        who: "Finance, ops, anyone filing documents into a system you already pay for.",
        pain: "Invoices, emails, PDFs, and forms sitting outside the tools you already use.",
        build: "Extraction, classification, and filing — with review for the messy cases.",
        done: "The document is in the right place, with the right fields. People only touch exceptions.",
      },
    ],
  },

  fit: {
    label: "Fit",
    heading: "When this is the right hire",
    yes: {
      title: "A fit when",
      items: [
        "The same job happens every week",
        "The data and tools already exist",
        "Someone inside will own it after handover",
        "You want it running, not presented",
      ],
    },
    no: {
      title: "Not a fit when",
      items: [
        "You only want to “add ChatGPT”",
        "There is no workflow — only a vague interest in AI",
        "You need a research lab, not a system in production",
        "Nobody will take it after handover",
      ],
    },
  },

  process: {
    label: "Process",
    heading: "Name the job. Ship the system.",
    steps: [
      {
        number: "01",
        title: "Work audit",
        body: "Name the jobs that should not be manual — and which ones can actually run.",
      },
      {
        number: "02",
        title: "Design the system",
        body: "Data, tools, human checkpoints, failure modes, and what “done” looks like.",
      },
      {
        number: "03",
        title: "Build and deploy",
        body: "Product, backend, models or retrieval, infra — in your cloud, in your tools.",
      },
      {
        number: "04",
        title: "Handoff",
        body: "Source, runbooks, evals. You keep the system. You don’t keep a contractor on the critical path.",
      },
    ],
  },

  deliverables: {
    label: "What you leave with",
    heading: "A running system. Not a deck.",
    items: [
      "A running system in your cloud or account",
      "Source you own",
      "Docs and runbooks",
      "Eval checks for quality, cost, and the ugly cases",
    ],
  },

  engineering: {
    label: "Also",
    heading: "If the system needs a real product, that gets built too.",
    body: "Frontend, backend, and infra — six years of that path. The system is the lead. The engineering is why it ships.",
  },

  about: {
    label: "About",
    heading: "Still writes the code. Still owns the deploy.",
    body: [
      "Six years as a software engineer at product companies — shipping things people actually use. The work now is the repeating jobs inside companies, and the systems that run them.",
      "Then off the critical path.",
    ],
  },

  contact: {
    label: "Contact",
    heading: "If the same job ate this week, send it.",
  },
} as const;

export const mailto = `mailto:${site.email}`;
export const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
