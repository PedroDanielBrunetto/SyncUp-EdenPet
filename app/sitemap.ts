import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.edenpetlitoral.com.br/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.edenpetlitoral.com.br/#tipos-de-cremacao",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.edenpetlitoral.com.br/#planos",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.edenpetlitoral.com.br/#contato",
      lastModified: new Date().toISOString(),
    },
  ];
}
