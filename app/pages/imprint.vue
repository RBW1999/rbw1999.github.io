<script setup lang="ts">
useSeoMeta({
  title: "Imprint — rbw1999",
  description: "Legal information and imprint for rbw1999",
});
</script>

<template>
  <div
    class="mx-auto w-[min(940px,calc(100%_-_48px))] py-12 max-[760px]:w-[calc(100%_-_24px)] max-[760px]:py-8"
  >
    <NuxtLink
      to="/"
      class="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
    >
      <UIcon name="i-lucide-arrow-left" class="size-4" />
      Back home
    </NuxtLink>

    <h1 class="mt-8 text-3xl font-bold text-white sm:text-4xl">Imprint</h1>

    <div
      class="mt-8 max-w-2xl text-sm leading-relaxed text-white/70 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-white [&_p]:mt-2"
    >
      <h2>Information according to § 5 TMG</h2>
      <p>
        Rafael Wortmann<br />
        [Street Address]<br />
        [City, Postal Code]<br />
        Germany
      </p>

      <h2>Contact</h2>
      <p>Email: [your-email@example.com]</p>

      <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
      <p>
        Rafael Wortmann<br />
        [Street Address]<br />
        [City, Postal Code]<br />
        Germany
      </p>

      <h2>Disclaimer</h2>

      <h3>Liability for content</h3>
      <p>
        The contents of this website were created with great care. However, no
        guarantee can be given for the accuracy, completeness, and topicality of
        the content.
      </p>

      <h3>Liability for links</h3>
      <p>
        This website contains links to external websites. We have no influence
        on the content of these websites and therefore cannot accept any
        liability for them. The respective provider or operator of the linked
        pages is always responsible for their content.
      </p>

      <h2>Copyright</h2>
      <p>
        The content and works created by the site operators on these pages are
        subject to German copyright law. The duplication, processing,
        distribution, and any kind of exploitation outside the limits of
        copyright law require the written consent of the respective author or
        creator.
      </p>
    </div>
  </div>
</template>
