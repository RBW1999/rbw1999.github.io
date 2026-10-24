<script setup lang="ts">
import type { ProjectItem } from "~/types/content";

defineProps<{
  projects: ProjectItem[];
}>();
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-title"
    class="page-container relative border-t-[0.5px] border-white py-[60px] max-[760px]:py-[40px]"
  >
    <h2
      id="projects-title"
      class="mb-6 text-left text-2xl leading-[normal] font-normal min-[1181px]:absolute min-[1181px]:top-[60px] min-[1181px]:right-full min-[1181px]:mr-[22px] min-[1181px]:mb-0 min-[1181px]:text-right min-[1181px]:whitespace-nowrap"
    >
      Featured<br class="max-[1180px]:hidden" /> Projects
    </h2>

    <div
      class="grid h-[400px] grid-cols-2 gap-[26px] max-[760px]:h-auto max-[760px]:grid-cols-1"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.path"
        :project="project"
      />
    </div>
  </section>
</template>
