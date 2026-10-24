<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string;
    rolePrimary?: string;
    roleSecondary?: string;
  }>(),
  {
    name: "Rafael",
    rolePrimary: "XR Developer",
    roleSecondary: "UX / UI Designer",
  },
);

const toast = useToast();

function openXr() {
  toast.add({ title: "XR experience coming soon." });
}

const pillClass =
  "h-auto min-h-[42px] rounded-full border-[0.5px] border-white px-5 py-[10px] text-[24px] font-normal leading-[normal] hover:bg-accent hover:text-black focus-visible:bg-accent focus-visible:text-black max-[760px]:text-[18px]";
</script>

<template>
  <div
    class="mx-auto mt-[15px] h-[520px] w-[min(940px,calc(100%_-_48px))] py-[60px] max-[760px]:mt-0 max-[760px]:h-[430px] max-[760px]:w-[calc(100%_-_24px)] max-[760px]:py-[32px]"
  >
    <section
      aria-labelledby="hero-title"
      :style="{
        backgroundImage:
          'radial-gradient(ellipse 58% 80% at center, #1b1b1b 0%, #0d0d0d 50%, #070707 75%, #000 100%)',
      }"
      class="flex h-full flex-col items-center justify-center rounded-[40px] border-[0.5px] border-white max-[760px]:rounded-[28px]"
    >
      <h1
        id="hero-title"
        class="flex flex-col p-5 text-center text-[40px] leading-[normal] font-normal max-[760px]:text-[clamp(26px,8vw,34px)]"
      >
        <span>
          Hey, I’m
          <strong class="font-bold text-accent">{{ name }}</strong>
        </span>
        <span>
          a <strong class="font-bold text-accent">{{ rolePrimary }}</strong>
          and <strong class="font-bold text-accent">{{ roleSecondary }}</strong>
        </span>
      </h1>

      <div class="flex gap-[10px] max-[450px]:flex-col">
        <UButton
          to="#contact"
          variant="ghost"
          color="neutral"
          label="contact"
          :class="pillClass"
        />
        <UButton
          variant="ghost"
          color="neutral"
          label="open in XR"
          :class="pillClass"
          @click="openXr"
        />
      </div>
    </section>
  </div>
</template>
