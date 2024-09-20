import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "SamarthMeditech",
  tagline: "Transforming Healthcare with Smart Solutions",
  description: "Samarth Meditech is a leading provider of innovative medical technology solutions that simplify business management and drive growth for healthcare professionals. Our cutting-edge applications leverage advanced technology to streamline operations, enhance patient care, and boost profitability. With a commitment to local support and personalized service, Samarth Meditech partners with industry experts to deliver responsive solutions tailored to the unique needs of each client. Experience the future of medical technology with Samarth Meditech today.",
  description_short: "Samarth Meditech delivers advanced technology solutions for healthcare and businesses, specializing in custom software, patient management systems, and mobile applications to enhance efficiency and performance.",
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
