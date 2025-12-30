import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: 'https://josuekennedy.com',
  output: 'server',
  adapter: vercel({
    maxDuration: 30,
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['resend']
    }
  },
});