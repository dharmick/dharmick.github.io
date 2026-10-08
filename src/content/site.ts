/**
 * Customer-facing copy and contact facts for the single page.
 * Square-bracket placeholders from the copy draft are resolved here:
 * the call buttons use email until a booking link exists, and there is no photo.
 */

export const site = {
  name: "Dharmik Joshi",
  url: "https://dharmikjoshi.space",
  title: "Dharmik Joshi — Back-office work that runs itself",
  description:
    "I automate the repetitive jobs across accounts, admin and ops, and hand you code you own. Start with one job. Bangalore, India.",
  email: "hey@dharmikjoshi.space",
  phone: "+91 932425 8918",
  location: "Bangalore, India (IST)",
  linkedin: "https://www.linkedin.com/in/dharmikjoshi/",
  bookLabel: "Book a 15-minute call",
  bookSubject: "Book a 15-minute call",
  navCta: "Book a call",

  nav: [
    { label: "What I automate", href: "#work" },
    { label: "How I work", href: "#process" },
    { label: "Your data", href: "#data" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    heading: "Back-office work that runs itself.",
    support:
      "I automate the repetitive jobs across accounts, admin and ops, and hand you code you own.",
    emailLead: "Prefer email? Write to",
    note: "The 15-minute call is free, and it's with me.",
  },

  data: {
    id: "data",
    heading: "You choose where your data runs.",
    intro:
      "You'd be handing me your books, your orders and your customers' details. These six rules apply whichever setup you pick.",
    rules: [
      {
        title: "Your accounts, or hosted by me.",
        body: "A build can run in your own accounts, where you keep admin control. Or I host and run it for you for a monthly fee. You choose before the build starts.",
      },
      {
        title: "Business-grade AI only.",
        body: "When a job needs AI, say to read a scanned bill or draft a reply, I use production-grade business services whose terms rule out training on your data. Free consumer chat tools are never part of a build.",
      },
      {
        title: "A person approves anything a customer sees.",
        body: "Reminders, replies and updates wait for someone on your team to approve them. Every build is designed this way by default.",
      },
      {
        title: "A one-page note of where your data goes.",
        body: "You get a single page that shows where the build runs and which services touch which data. Your accountant or IT person can file it.",
      },
      {
        title: "An NDA before discovery.",
        body: "I sign an NDA before the first discovery session, so it's in place before you show me any customer records. If you have your own NDA, send it over.",
      },
      {
        title: "The code and docs are yours.",
        body: "You own them whether the build runs in your accounts or on my hosting. If you stop working with me, you keep both, and another developer can run the system from them.",
      },
    ],
  },

  about: {
    id: "about",
    heading: "You work with me from the first call to the handover.",
    body: "I'm Dharmik Joshi, a software developer in Bangalore. I work alone, under my own name. The person on the 15-minute call is the person who writes the code, hands it over and answers your questions about it.",
    linkedinLabel: "LinkedIn",
  },

  start: {
    id: "start",
    heading: "Start with one job.",
    paragraphs: [
      "Most teams have a long list of things they'd like to automate. Pick one. A good first job is something your team does every week, follows the same steps each time and rarely needs anyone's judgment.",
      "I build that one, make sure it holds up in daily use, and hand it over. Then you decide whether a second job is worth doing. I quote one workflow at a time, so that's all you commit to.",
    ],
  },

  work: {
    id: "work",
    heading: "The jobs I take off your team.",
    intro:
      "Each of these connects to tools you already use, such as Zoho, Google Sheets, Gmail, Excel and WhatsApp Business. On the call, I'll help you pick the one that costs you the most time.",
    groups: [
      {
        title: "Money in: where most clients start",
        items: [
          {
            n: "1",
            title: "Order entry without retyping.",
            body: "Orders from email, WhatsApp, PDFs or portals go straight into Zoho Books or your sheet, and odd ones get flagged for a person.",
          },
          {
            n: "2",
            title: "Invoices and payment reminders.",
            body: "Invoices raised from orders, polite reminders on a schedule that stop when the customer pays, and you approve anything sensitive.",
          },
          {
            n: "3",
            title: "Payment matching.",
            body: "Bank, gateway and marketplace payouts matched to invoices, with mismatches listed for review.",
          },
        ],
      },
      {
        title: "Reports and records",
        items: [
          {
            n: "4",
            title: "Reports that build themselves.",
            body: "The weekly MIS or month-end pack, assembled from the same exports each time, with a plain-English summary.",
          },
          {
            n: "5",
            title: "Tools that stay in sync.",
            body: "CRM, accounts, inventory and sheets updated from one place, with no copy-paste between them.",
          },
          {
            n: "6",
            title: "Paperwork to data.",
            body: "Purchase orders, bills, delivery challans and statements read into clean rows, with a review tab for doubtful fields.",
          },
        ],
      },
      {
        title: "Customers and team admin",
        items: [
          {
            n: "7",
            title: "Shared inboxes that sort themselves.",
            body: "orders@ and accounts@ sorted, routed and given draft replies for a person to send.",
          },
          {
            n: "8",
            title: "Customer updates on WhatsApp or email.",
            body: "Order confirmations, COD checks, dispatch and delivery updates.",
          },
          {
            n: "9",
            title: "Onboarding and handovers.",
            body: "New customer, vendor or staff checklists, with the next person's task created automatically.",
          },
        ],
      },
      {
        title: "When spreadsheets aren't enough",
        items: [
          {
            n: "10",
            title: "Small internal apps.",
            body: "Approval screens, order portals and admin panels built around the workflow.",
          },
          {
            n: "11",
            title: "Websites that feed your systems.",
            body: "Sites whose enquiry and order forms land directly in your CRM or sheet.",
          },
        ],
      },
    ],
  },

  process: {
    id: "process",
    heading: "How a project runs.",
    steps: [
      {
        n: "01",
        title: "A 15-minute call.",
        body: "Tell me which job eats your team's week. I'll ask which tools you use and tell you plainly whether I can help. The call is free.",
      },
      {
        n: "02",
        title: "A paid assessment.",
        body: "This usually takes one to two weeks and two to three hours of your team's time: a kickoff with you, then short conversations with the people who do the job. I map how it runs today, step by step. You get a written plan of what I'd build, where your data would go, and a fixed price for the workflow. If you go ahead, the assessment fee is credited toward the build.",
      },
      {
        n: "03",
        title: "The build.",
        body: "Most single-workflow builds take two to six weeks. The range depends on how many tools the job connects and how many approval steps it needs. I test it on real examples from your business, and your team reviews its early work before anyone relies on it.",
      },
      {
        n: "04",
        title: "Handover.",
        body: "I walk the person who'll own it through how it works, and you get written docs. The code and the docs are yours. For 30 days after launch, I fix problems with the build at no charge.",
      },
      {
        n: "05",
        title: "Monthly care.",
        body: "For a monthly fee, I cover the running costs (AI usage and any third-party services the build uses), watch that it keeps working, fix it when something changes and make small changes when you ask. If I host the build, this is the monthly fee that covers it. If it runs in your own accounts, monthly care is optional.",
      },
    ],
  },

  ai: {
    id: "ai",
    heading: "AI reads the messy parts. A person still checks.",
    paragraphs: [
      "Most back-office work runs on plain rules. If an order arrives, create the invoice. If a payment lands, mark it paid and stop the reminders. That part needs careful wiring and no AI at all.",
      "AI is useful for the untidy bits: reading a scanned bill, working out what an email is asking for, drafting a first reply. It gets those wrong sometimes, so every build shows the doubtful cases to a person, and anything that reaches a customer waits for approval. I only use business AI services whose terms rule out training on your data.",
    ],
    points: [
      "I start from the job your team repeats, then pick the tool.",
      "AI drafts, reads and sorts. People decide.",
      "You control what gets sent.",
    ],
  },

  why: {
    id: "why",
    heading: "Why work with me.",
    points: [
      {
        title: "One developer, start to finish.",
        body: "I'm based in Bangalore and work in IST. You deal with me from the first call to the handover, under my own name, and I reply within one business day.",
      },
      {
        title: "Your tools, your code.",
        body: "I build around the software you already pay for. When the work is done you own the code and the docs, so the system can keep running whether or not I'm involved.",
      },
      {
        title: "A broad offer, one job at a time.",
        body: "The menu covers accounts, admin and ops. Each project covers one specific job at a fixed price, so you know what you're paying for before it starts.",
      },
    ],
  },

  examples: {
    id: "examples",
    heading: "Example workflow ideas",
    disclaimer:
      "These are ideas, not client work. Each one shows the kind of job I'd build for a business with the problem described.",
    items: [
      {
        title: "Orders that arrive everywhere",
        problem:
          "Orders come in by email, WhatsApp and PDF. Someone retypes each one into Zoho Books at the end of the day.",
        idea: "Each order is read as it arrives and entered as a draft. Anything unusual, like an unknown product code or a missing price, is flagged for a person.",
        aim: "Orders land in the books the same day, and nobody retypes them.",
      },
      {
        title: "Payments that need chasing",
        problem:
          "Someone keeps a sheet of unpaid invoices and sends reminders by hand, often forgetting who has already paid.",
        idea: "Reminders go out on a schedule you set. They stop once the payment shows up, and sensitive ones wait for your approval.",
        aim: "Steady follow-up that doesn't depend on someone remembering.",
      },
      {
        title: "Payouts that don't line up",
        problem:
          "Bank, gateway and marketplace payouts arrive in different formats, and matching them to invoices takes hours each month.",
        idea: "Payouts are matched to invoices automatically. The ones that don't match go on a short list for review.",
        aim: "Your team spends its time on the exceptions.",
      },
      {
        title: "The weekly MIS",
        problem:
          "Every Monday someone pulls the same exports, pastes them into the same Excel file and writes the same summary.",
        idea: "The pack builds itself from those exports each week, with a plain-English summary for a person to read and edit.",
        aim: "The report is ready when the week starts.",
      },
      {
        title: "Paperwork from suppliers",
        problem:
          "Bills and delivery challans arrive as scans and photos. Someone types them into a sheet line by line.",
        idea: "Each document is read into clean rows in Google Sheets, and fields the system isn't sure about go to a review tab.",
        aim: "Clean records without line-by-line typing, with a person checking the doubtful parts.",
      },
    ],
  },

  faq: {
    id: "faq",
    heading: "Questions before you book",
    items: [
      {
        q: "What does it cost?",
        a: "I quote a fixed price per workflow, after the paid assessment. The price depends on how many tools the job connects and how many approval steps it needs, and it's on paper before the build starts. Two things are free: the 15-minute call, and fixes for 30 days after launch. Everything else is paid.",
      },
      {
        q: "What happens to the assessment fee?",
        a: "If you go ahead with the build, the fee is credited toward it.",
      },
      {
        q: "How long does a project take?",
        a: "The assessment usually takes one to two weeks. A single workflow usually takes two to six weeks to build and test, depending on how many tools it connects. Your assessment plan gives you the range for your job.",
      },
      {
        q: "Do I have to host it myself?",
        a: "You choose. It can run in your own accounts, where you keep admin control, or I can host and run it for a monthly fee. Either way, you own the code and the docs.",
      },
      {
        q: "You're one person. What if you disappear?",
        a: "You own the code and the docs, so another developer can pick the system up and run it. Every build comes with a walkthrough and written docs for that reason. A person on your side still approves anything that goes to a customer.",
      },
      {
        q: "Which tools do you work with?",
        a: "Usually the ones you already have: Zoho, Google Workspace and Gmail, Google Sheets, Excel, Airtable and WhatsApp Business are common. If a job can't be done cleanly in your setup, I'll tell you on the call.",
      },
      {
        q: "Where does my data go? Does it train AI models?",
        a: "That depends on where you choose to run the build, and you get a one-page note that shows exactly where it goes. Where AI is used, I use production-grade business services whose terms rule out training on your data.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. I sign one before the first discovery session. If you have your own, send it over.",
      },
      {
        q: "Will anything go to my customers without someone checking?",
        a: "By default, no. Reminders, replies and updates wait for a person on your team to approve them.",
      },
      {
        q: "Can I start with one small job?",
        a: "Yes, and I'd suggest it. I quote one workflow at a time. Once the first one is running, you decide whether there's a second.",
      },
      {
        q: "Will there be software costs on top?",
        a: "AI usage and third-party service fees are covered by the monthly fee I bill for care or hosting. If the build runs in your own accounts without monthly care, those services bill your accounts directly, and the assessment plan lists them.",
      },
      {
        q: "You're in Bangalore. Does the time difference matter?",
        a: "I work in IST and reply within one business day. Most of the work happens between calls, so the time difference mainly affects when you hear back.",
      },
      {
        q: "What happens after handover?",
        a: "You keep the code and the docs. For 30 days after launch I fix problems with the build for free. After that, monthly care covers running costs, monitoring, fixes and small changes, billed monthly.",
      },
    ],
  },

  contact: {
    id: "contact",
    heading: "Tell me which job eats your team's week.",
    support:
      "On a 15-minute call I'll tell you whether I can automate it and what the next step would be.",
    emailLead: "Or email",
    phoneLead: "Phone:",
    reply: "I reply within one business day.",
  },
} as const;

export const bookHref = `mailto:${site.email}?subject=${encodeURIComponent(site.bookSubject)}`;
export const emailHref = `mailto:${site.email}`;
export const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
