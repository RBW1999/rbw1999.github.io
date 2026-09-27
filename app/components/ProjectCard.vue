<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    headline: string;
    description: string;
    tags: string[];
    image: string;
    _path: string;
  };
}>();
</script>

<template>
  <NuxtLink
    :to="project._path"
    class="group block overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md hover:border-primary/30"
  >
    <div class="aspect-video overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div class="p-5">
      <h3 class="text-lg font-semibold text-text group-hover:text-primary transition-colors">
        {{ project.title }}
      </h3>
      <p class="mt-1 text-sm font-medium text-primary">{{ project.headline }}</p>
      <p class="mt-2 text-sm text-text-muted line-clamp-2">{{ project.description }}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="inline-block rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-text-muted"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
