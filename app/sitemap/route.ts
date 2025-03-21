import sitemap from "../sitemap";

export async function GET() {
  return new Response(JSON.stringify(sitemap()), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
