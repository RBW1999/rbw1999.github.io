import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        name: z.string().optional(),
        rolePrimary: z.string().optional(),
        roleSecondary: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/*/index.md",
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
    projectSubpages: defineCollection({
      type: "page",
      source: {
        include: "projects/*/*.md",
        exclude: ["projects/*/index.md"],
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
});
