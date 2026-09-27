<script setup lang="ts">
defineProps<{
  projects: Array<{
    title: string;
    headline: string;
    description: string;
    tags: string[];
    image: string;
    _path: string;
  }>;
}>();
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <ProjectCard v-for="project in projects" :key="project._path" :project="project" />
  </div>
</template>
