<script setup lang="ts">
const route = useRoute();

const project = String(route.params.project ?? "");
const subpage = String(route.params.subpage ?? "");

const contentPath = `/projects/${project}/${subpage}`;

const { data: projectSubPage } = await useAsyncData(
  `project-subpage-${project}-${subpage}`,
  () => queryCollection("projectSubpages").path(contentPath).first(),
);

const subPage = projectSubPage.value;

if (!subPage) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project sub page not found",
  });
}

useSeoMeta({
  title: `${subPage.title} — rbw1999`,
  description: subPage.description,
});
</script>

<template>
  <div v-if="subPage" class="page-container py-12 max-[760px]:py-8">
    <header class="mt-8 border-b-[0.5px] border-white/50 pb-8">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">
        {{ subPage.title }}
      </h1>
    </header>

    <div class="mt-8 max-w-none text-white/80">
      <ContentRenderer :value="subPage" />
    </div>
  </div>
</template>
