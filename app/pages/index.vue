<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

const { data: projects } = await useAsyncData(() =>
  queryCollection("projects")
    .where("hidden", "=", false)
    .order("date", "DESC")
    .all()
);

useSeoMeta({
  title: home.value?.title ?? "Rafael Wortmann",
  description: home.value?.description ?? "Portfolio of Rafael Wortmann",
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="border-b border-border bg-surface-alt">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <ContentRenderer v-if="home" :value="home" class="prose prose-lg max-w-none" />
      </div>
    </section>

    <!-- Projects Section -->
    <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 class="text-2xl font-bold text-text sm:text-3xl">Projects</h2>
      <p class="mt-2 text-text-muted">A selection of things I've built and contributed to.</p>

      <div class="mt-8">
        <ProjectGrid v-if="projects?.length" :projects="projects" />
        <p v-else class="text-text-muted">No projects yet — check back soon.</p>
      </div>
    </section>
  </div>
</template>
