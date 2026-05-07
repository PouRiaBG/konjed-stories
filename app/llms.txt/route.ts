import { absoluteUrl, seoKeywords, siteConfig } from "../_lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name}

${siteConfig.description}

## Primary page

- [${siteConfig.title}](${absoluteUrl("/")}) - An English photo story about Konjed, a cream British Shorthair cat in Tehran.

## Topics

${seoKeywords.map((keyword) => `- ${keyword}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
