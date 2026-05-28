import Script from "next/script";

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Winter Climatização e Refrigeração",
    "image": "https://www.google.com/maps/vt/data=...", // idealmente a URL do logo
    "@id": "",
    "url": "https://winterclimatizacao.com.br", // domínio final
    "telephone": "+554732786570",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Kurt Meinert, 76",
      "addressLocality": "Joinville",
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.343750,
      "longitude": -48.835472
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://wa.me/5547999707590"
    ]
  };

  return (
    <Script
      id="schema-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
