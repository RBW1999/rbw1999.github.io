<script setup lang="ts">
const { data: home } = await useAsyncData("home", () =>
  queryCollection("content").path("/").first(),
);

const { data: featured } = await useAsyncData("featured-projects", () =>
  queryCollection("projects")
    .where("hidden", "=", false)
    .order("date", "DESC")
    .limit(2)
    .all(),
);

useSeoMeta({
  title: home.value?.title ?? "Rafael Wortmann",
  description: home.value?.description ?? "Portfolio of Rafael Wortmann",
});
</script>

<template>
  <div>
    <HeroSection
      :name="home?.name || undefined"
      :role-primary="home?.rolePrimary || undefined"
      :role-secondary="home?.roleSecondary || undefined"
    />

    <ProjectsSection :projects="featured ?? []" />

    <ConnectSection />
  </div>
</template>
