import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "EHR systems, electronic patient records, EMR software",
  tagline: "AI in healthcare,Medical Software Company",
  description: " Best EHR EMR Software Hubli Dharwad,Best hospital software in India,Medical software for clinics,Medical data analytics,Healthcare automation,Software for hospitals",
  description_short: "Medical Software Management in Hubli-Dharwad , Clinic Management Sofware ,EMR Software , Samarth Meditech delivers advanced technology solutions for healthcare and businesses, specializing in custom software, patient management systems, and mobile applications to enhance efficiency and performance | Software Company near me ",
  url: "https://samarthmeditech.com",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Advanced Tech for Healthcare`,
  description: "Samarth Meditech provides innovative healthcare and business technology solutions, offering custom software development, patient management systems, and mobile applications to streamline operations and improve efficiency. With a focus on cutting-edge technology, user-friendly interfaces, and scalable solutions, Samarth Meditech empowers businesses and healthcare providers to achieve operational excellence and drive growth.",
  image: ogImageSrc,
};
