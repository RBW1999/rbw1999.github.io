import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/**/*.md",
      schema: z.object({
        title: z.string(),
        headline: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        hidden: z.boolean(),
        date: z.string(),
      }),
    }),
  },
});
