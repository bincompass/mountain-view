export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mountain View",
    alternateName: "ماونتن فيو",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logos/logo-blue.png`,
    description:
      "Mountain View is a leading private property developer in Egypt, specializing in first-tier residences and luxury resorts.",
    foundingDate: "2005",
    sameAs: [
      "https://www.facebook.com/MountainViewEgypt",
      "https://www.instagram.com/mountainviewegypt",
      "https://www.linkedin.com/company/mountain-view-egypt",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressRegion: "Cairo",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mountain View",
    url: baseUrl,
    description: "Inspired by Happiness",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Mountain View",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logos/logo-blue.png`,
    description:
      "Leading developer of luxury residences and resorts in East and West Cairo, the Red Sea, and North Coast.",
    areaServed: [
      {
        "@type": "City",
        name: "New Cairo",
      },
      {
        "@type": "City",
        name: "6th of October",
      },
      {
        "@type": "City",
        name: "North Coast",
      },
      {
        "@type": "City",
        name: "Ain Sokhna",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Communities",
        item: `${baseUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Evia",
        item: `${baseUrl}/#evia`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Innovation",
        item: `${baseUrl}/#innovation`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact Us",
        item: `${baseUrl}/calendly`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
