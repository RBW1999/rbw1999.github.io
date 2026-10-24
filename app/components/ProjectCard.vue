<script setup lang="ts">
import type { ProjectItem } from "~/types/content";

defineProps<{
  project: ProjectItem;
}>();
</script>

<template>
  <article
    class="flex h-full min-h-[400px] min-w-0 flex-col overflow-hidden rounded-[20px] border-[0.5px] border-hairline"
  >
    <div class="relative min-h-0 flex-1 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="absolute -top-[35px] left-0 h-[304px] w-full object-cover"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(0,0,0,0.79)_85%)]"
      />
      <NuxtLink
        :to="project.path"
        class="absolute bottom-[10px] left-[15px] z-[1] text-2xl leading-[normal] font-semibold text-white transition-colors hover:text-accent [text-shadow:0_4px_4px_rgba(0,0,0,0.5)]"
      >
        {{ project.title }}
      </NuxtLink>
    </div>

    <div class="flex flex-col gap-[25px] px-[15px] pt-[15px] pb-[25px] text-base">
      <p class="m-0 line-clamp-3 leading-[normal]">
        {{ project.description }}
      </p>

      <div
        class="flex items-center justify-between gap-[10px] max-[450px]:flex-col max-[450px]:items-start"
      >
        <ProjectTags :tags="project.tags" class="min-w-0 flex-1" />
        <NuxtLink
          :to="project.path"
          class="flex shrink-0 items-center gap-[10px] whitespace-nowrap underline transition-colors hover:text-accent"
        >
          Read More
          <UIcon name="i-lucide-arrow-up-right" class="size-[26px]" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
