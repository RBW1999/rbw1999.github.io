<script setup lang="ts">
import type { ProjectItem } from "~/types/content";

defineProps<{
  project: ProjectItem;
}>();
</script>

<template>
  <article
    class="relative flex min-h-[240px] min-w-0 overflow-hidden rounded-[20px] border-[0.5px] border-hairline max-[760px]:min-h-0 max-[760px]:flex-col"
  >
    <div
      class="relative w-[38%] shrink-0 overflow-hidden max-[760px]:h-[200px] max-[760px]:w-full"
    >
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="h-full w-full object-cover"
      />
    </div>

    <div
      class="flex min-w-0 flex-1 flex-col gap-[15px] px-[15px] pt-[15px] pb-[25px] text-base"
    >
      <NuxtLink
        :to="project.path"
        class="pr-[52px] text-2xl leading-[normal] font-semibold text-white transition-colors hover:text-accent"
      >
        {{ project.title }}
      </NuxtLink>

      <p class="m-0 line-clamp-3 leading-[normal]">
        {{ project.description }}
      </p>

      <div class="mt-auto pt-[10px]">
        <ProjectTags :tags="project.tags" />
      </div>
    </div>

    <NuxtLink
      :to="project.path"
      :aria-label="`Read more about ${project.title}`"
      class="absolute top-[15px] right-[15px] flex size-[36px] items-center justify-center rounded-full border-[0.5px] border-hairline bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent hover:text-black"
    >
      <UIcon name="i-lucide-arrow-up-right" class="size-[16px]" />
    </NuxtLink>
  </article>
</template>
