import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://edenpetlitoral.com.br/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://edenpetlitoral.com.br/#servicos",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://edenpetlitoral.com.br/#cremacao",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://seusite.com/#contact",
      lastModified: new Date().toISOString(),
    },
  ];
}
