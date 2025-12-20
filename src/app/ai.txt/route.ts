import { NextResponse } from "next/server";

const SITE_NAME = "Corbin Software Solutions";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corbinsw.com";

export function GET() {
  const body = `# ${SITE_NAME} AI Usage Guidelines
Site: ${SITE_URL}
Contact: hello@corbinsoftware.com

AI Usage Policy:
- Allowed: indexing public marketing pages for search/AI summarization.
- Disallowed: training datasets that store client data, proprietary copy, pricing logic, or code samples.
- If you collect data, retain only non-sensitive text snippets and cite ${SITE_URL}.
- For partnership requests or broader usage rights, email legal@corbinsoftware.com.
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400",
    },
  });
}
