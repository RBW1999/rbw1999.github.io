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
</script>

<template>
  <div
    class="page-container mt-[15px] h-[520px] py-[60px] max-[760px]:mt-0 max-[760px]:h-[430px] max-[760px]:py-[32px]"
  >
    <section
      aria-labelledby="hero-title"
      class="hero-panel flex h-full flex-col items-center justify-center rounded-[40px] border-[0.5px] border-white max-[760px]:rounded-[28px]"
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

      <div class="hero-actions flex gap-[10px]">
        <UButton
          to="#contact"
          variant="ghost"
          color="neutral"
          label="contact"
          class="pill"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-panel {
  background-image: radial-gradient(
    ellipse 58% 80% at center,
    #1b1b1b 0%,
    #0d0d0d 50%,
    #070707 75%,
    #000 100%
  );
}

.hero-actions :deep(.pill) {
  height: auto;
  min-height: 42px;
  border-radius: 9999px;
  border: 0.5px solid #fff;
  padding: 10px 1.25rem;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}

.hero-actions :deep(.pill:hover),
.hero-actions :deep(.pill:focus-visible) {
  background-color: var(--color-accent);
  color: #000;
}

@media (max-width: 760px) {
  .hero-actions :deep(.pill) {
    font-size: 18px;
  }
}
</style>
