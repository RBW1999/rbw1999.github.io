<script setup lang="ts">
import type { ProjectItem } from "~/types/content";

const { data: projects } = await useAsyncData("all-projects", () =>
  queryCollection("projects")
    .where("hidden", "=", false)
    .order("date", "DESC")
    .all(),
);

useSeoMeta({
  title: "Projects — rbw1999",
  description:
    "Selected projects by Rafael Wortmann — XR development, UX / UI design and immersive web experiences.",
});
</script>

<template>
  <div class="page-container py-12 max-[760px]:py-8">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Projects</h1>
    <p class="mt-4 max-w-[42rem] text-white/70">
      A selection of work across XR development, UX / UI design and immersive
      web experiences.
    </p>

    <div v-if="projects?.length" class="mt-10 flex flex-col gap-[26px]">
      <ProjectCardHorizontal
        v-for="project in projects"
        :key="project.path"
        :project="project as ProjectItem"
      />
    </div>

    <p v-else class="mt-10 text-white/60">
      No projects to show yet — check back soon.
    </p>
  </div>
</template>
