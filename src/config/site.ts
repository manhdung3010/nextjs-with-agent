import { env } from "./env";

export const siteConfig = {
  name: env.NEXT_PUBLIC_APP_NAME,
  description: "Reusable Next.js base with agent-ready tooling",
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    docs: "https://nextjs.org/docs",
  },
};
