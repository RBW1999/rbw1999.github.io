<script setup lang="ts">
const site = useAppConfig().site;

const pillClass =
  "h-auto min-h-[42px] rounded-full border-[0.5px] border-white px-5 py-[10px] text-base font-normal leading-[normal] hover:bg-accent hover:text-black focus-visible:bg-accent focus-visible:text-black";
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="relative mx-auto flex w-[min(940px,calc(100%_-_48px))] flex-col border-y-[0.5px] border-white py-[30px] max-[760px]:w-[calc(100%_-_24px)]"
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

      <div class="flex gap-[10px]">
        <UButton
          :to="`mailto:${site.email}`"
          variant="ghost"
          color="neutral"
          label="Mail"
          :class="pillClass"
        />
        <UButton
          :to="site.github"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          color="neutral"
          label="GitHub"
          :class="pillClass"
        />
      </div>
    </div>
  </section>
</template>
