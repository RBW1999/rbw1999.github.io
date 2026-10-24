<script setup lang="ts">
import type { ProjectItem } from "~/types/content";

defineProps<{
  projects: ProjectItem[];
}>();
</script>

<template>
  <div class="grid gap-[26px] sm:grid-cols-2">
    <ProjectCard
      v-for="project in projects"
      :key="project.path"
      :project="project"
    />
  </div>
</template>
