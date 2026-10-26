<script setup lang="ts">
const { data: about } = await useAsyncData("about-page", () =>
  queryCollection("content").path("/about").first(),
);

useSeoMeta({
  title: computed(() => `${about.value?.title ?? "About"} — rbw1999`),
  description: computed(
    () =>
      about.value?.description ??
      "About Rafael Wortmann — XR Developer and UX / UI Designer.",
  ),
});
</script>

<template>
  <div class="page-container py-12 max-[760px]:py-8">
    <div v-if="about" class="content-prose">
      <ContentRenderer :value="about" />
    </div>
    <p v-else class="text-white/60">This page is not available yet.</p>
  </div>
</template>
