<script setup lang="ts">
const { data: experience } = await useAsyncData("experience-page", () =>
  queryCollection("content").path("/experience").first(),
);

useSeoMeta({
  title: computed(() => `${experience.value?.title ?? "Experience"} — rbw1999`),
  description: computed(
    () =>
      experience.value?.description ??
      "Professional experience of Rafael Wortmann.",
  ),
});
</script>

<template>
  <div class="page-container py-12 max-[760px]:py-8">
    <div v-if="experience" class="content-prose">
      <ContentRenderer :value="experience" />
    </div>
    <p v-else class="text-white/60">This page is not available yet.</p>
  </div>
</template>
