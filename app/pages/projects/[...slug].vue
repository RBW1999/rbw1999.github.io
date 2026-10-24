<script setup lang="ts">
const route = useRoute();

const rawSlug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

const slug = (rawSlug ?? "").replace(/^\/+|\/+$/g, "");

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection("projects")
    .path(`/projects/${slug}`)
    .first(),
);

const projectData = project.value;

if (!projectData) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

useSeoMeta({
  title: `${projectData.title} — rbw1999`,
  description: projectData.description,
});

const formattedDate = computed(() => {
  if (!projectData?.date) return "";
  return new Date(projectData.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<template>
  <div
    v-if="project"
    class="page-container py-12 max-[760px]:py-8"
  >
    <NuxtLink
      to="/#projects"
      class="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
    >
      <UIcon name="i-lucide-arrow-left" class="size-4" />
      Back to projects
    </NuxtLink>

    <header class="mt-8 border-b-[0.5px] border-white/50 pb-8">
      <ProjectTags v-if="project.tags?.length" :tags="project.tags" class="mb-4" />

      <h1 class="text-3xl font-bold text-white sm:text-4xl">
        {{ project.title }}
      </h1>
      <p v-if="project.headline" class="mt-2 text-lg font-medium text-accent">
        {{ project.headline }}
      </p>
      <p v-if="formattedDate" class="mt-2 text-sm text-white/60">
        {{ formattedDate }}
      </p>
    </header>

    <img
      v-if="project.image"
      :src="project.image"
      :alt="project.title"
      class="mt-8 w-full rounded-[20px] border-[0.5px] border-hairline object-cover"
    />

    <div class="mt-8 max-w-none text-white/80">
      <ContentRenderer :value="project" />
    </div>
  </div>
</template>
