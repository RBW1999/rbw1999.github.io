<script setup lang="ts">
const site = useAppConfig().site;
const currentYear = new Date().getFullYear();

const socials = [
  { label: "GitHub", icon: "i-simple-icons-github", to: site.github },
  { label: "LinkedIn", icon: "i-simple-icons-linkedin", to: site.linkedin },
  {
    label: "ArtStation",
    icon: "i-simple-icons-artstation",
    to: site.artstation,
  },
  { label: "Itch.io", icon: "i-simple-icons-itchdotio", to: site.itch },
];
</script>

<template>
  <footer
    id="about"
    class="page-container flex flex-wrap items-center justify-between gap-6 pt-[40px] text-lg leading-[normal] max-[760px]:text-sm"
  >
    <p class="m-0">© {{ currentYear }} Rafael Wortmann</p>

    <div class="flex gap-[23px] max-[450px]:order-3 max-[450px]:w-full">
      <NuxtLink to="/imprint">Imprint</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>

    <div class="flex items-center gap-[15px]">
      <a
        v-for="social in socials"
        :key="social.label"
        :href="social.to"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.label"
        :title="social.label"
        class="flex size-[22px] items-center justify-center rounded-full bg-[#d9d9d9] text-black transition-opacity hover:opacity-80"
      >
        <UIcon :name="social.icon" class="size-[14px]" />
      </a>
    </div>
  </footer>
</template>
