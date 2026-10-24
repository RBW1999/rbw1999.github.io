<script setup lang="ts">
const site = useAppConfig().site;
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="page-container relative flex flex-col border-y-[0.5px] border-white py-[30px]"
  >
    <h2
      id="contact-title"
      class="mb-0 text-left text-2xl leading-[normal] font-normal min-[1181px]:absolute min-[1181px]:top-[61px] min-[1181px]:right-full min-[1181px]:mr-[19px] min-[1181px]:text-right min-[1181px]:whitespace-nowrap"
    >
      Let's Connect
    </h2>

    <div
      class="flex min-h-[102px] w-full items-center justify-between gap-6 py-[30px] max-[760px]:flex-col max-[760px]:items-start"
    >
      <p class="m-0 w-[400px] text-base leading-[normal] max-[760px]:w-auto">
        Let's build something together. Reach out for collaborations, freelance
        work, or just to say hi.
      </p>

      <div class="connect-actions flex gap-[10px]">
        <UButton
          :to="`mailto:${site.email}`"
          variant="ghost"
          color="neutral"
          label="Mail"
          class="pill"
        />
        <UButton
          :to="site.github"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          color="neutral"
          label="GitHub"
          class="pill"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.connect-actions :deep(.pill) {
  height: auto;
  min-height: 42px;
  border-radius: 9999px;
  border: 0.5px solid #fff;
  padding: 10px 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
}

.connect-actions :deep(.pill:hover),
.connect-actions :deep(.pill:focus-visible) {
  background-color: var(--color-accent);
  color: #000;
}
</style>
