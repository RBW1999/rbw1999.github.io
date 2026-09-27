<script setup lang="ts">
const route = useRoute();

const { data: project } = await useAsyncData(() =>
  queryCollection("projects")
    .path(`/projects/${route.params.slug}`)
    .first(),
);

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

useSeoMeta({
  title: `${project.value.title} — rbw1999`,
  description: project.value.description,
});

const formattedDate = computed(() => {
  if (!project.value?.date) return "";
  return new Date(project.value.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<template>
  <div v-if="project">
    <!-- Project Hero -->
    <section class="border-b">
      <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to projects
        </NuxtLink>

        <div class="mt-6">
          <div class="flex flex-wrap gap-1.5 mb-3">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {{ tag }}
            </span>
          </div>

          <h1 class="text-3xl font-bold text-text sm:text-4xl">
            {{ project.title }}
          </h1>
          <p class="mt-2 text-lg text-primary font-medium">
            {{ project.headline }}
          </p>
          <p v-if="formattedDate" class="mt-2 text-sm text-text-muted">
            {{ formattedDate }}
          </p>
        </div>
      </div>
    </section>

    <!-- Project Image -->
    <section v-if="project.image" class="border-b border-border">
      <div class="mx-auto max-w-4xl px-4 sm:px-6">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full rounded-xl object-cover"
        />
      </div>
    </section>

    <!-- Project Content -->
    <section class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <ContentRenderer :value="project" class="prose prose-lg max-w-none" />
    </section>
  </div>
</template>
