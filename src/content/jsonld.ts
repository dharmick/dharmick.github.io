import { site } from "@/content/site";

const personId = `${site.url}/#dharmik-joshi`;

/**
 * Person and professional-service facts already visible on the page,
 * plus the FAQ answers printed in the same document.
 */
export function jsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        jobTitle: "Software developer",
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressCountry: "IN",
        },
        sameAs: [site.linkedin],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        url: site.url,
        description: site.hero.support,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressCountry: "IN",
        },
        founder: { "@id": personId },
        sameAs: [site.linkedin],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: site.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return JSON.stringify(data).replace(/</g, "\\u003c");
}
