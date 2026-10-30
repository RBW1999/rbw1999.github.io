// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "node:fs";
import path from "node:path";

/**
 * Collect every project subpage route so each one is prerendered as a static
 * URL (needed for GitHub Pages).
 *
 * Projects live in `content/projects/<project>/index.md`; their subpages are
 * the direct `.md` children of that project folder.
 */
function collectProjectSubpageRoutes(projectsDir: string): string[] {
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  return fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((projectDir) => {
      const projectPath = path.join(projectsDir, projectDir.name);

      return fs
        .readdirSync(projectPath, { withFileTypes: true })
        .filter(
          (entry) =>
            entry.isFile() &&
            path.extname(entry.name) === ".md" &&
            entry.name !== "index.md",
        )
        .map(
          (entry) =>
            `/projects/${projectDir.name}/${path.basename(entry.name, ".md")}`,
        );
    });
}

const projectSubpageRoutes = collectProjectSubpageRoutes(
  path.resolve(process.cwd(), "content/projects"),
).sort();

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  css: ["@/assets/css/main.css"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/assets/favicon.svg",
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: projectSubpageRoutes,
    },
  },
});
