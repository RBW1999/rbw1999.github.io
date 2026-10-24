<script setup lang="ts">
useSeoMeta({
  title: "Contact — rbw1999",
  description: "Get in touch with Rafael Wortmann",
});

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitted = ref(false);
const loading = ref(false);

async function onSubmit() {
  loading.value = true;
  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000));
  submitted.value = true;
  loading.value = false;
}
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

    <h1 class="mt-8 text-3xl font-bold text-white sm:text-4xl">Contact</h1>
    <p class="mt-2 max-w-xl text-white/70">
      Have a project in mind or just want to say hi? Fill out the form below and
      I'll get back to you.
    </p>

    <div
      v-if="submitted"
      class="mt-8 max-w-xl rounded-[20px] border-[0.5px] border-accent/40 bg-accent/10 p-6 text-center"
    >
      <UIcon
        name="i-lucide-check-circle"
        class="mx-auto size-12 text-accent"
      />
      <h2 class="mt-3 text-lg font-semibold text-white">Message sent!</h2>
      <p class="mt-1 text-sm text-white/70">
        Thanks for reaching out. I'll get back to you soon.
      </p>
    </div>

    <form v-else class="mt-8 max-w-xl space-y-5" @submit.prevent="onSubmit">
      <UFormField label="Name" name="name" required>
        <UInput
          v-model="form.name"
          type="text"
          placeholder="Your name"
          autocomplete="name"
          required
          class="w-full"
        />
      </UFormField>

      <UFormField label="Email" name="email" required>
        <UInput
          v-model="form.email"
          type="email"
          placeholder="you@example.com"
          autocomplete="email"
          required
          class="w-full"
        />
      </UFormField>

      <UFormField label="Message" name="message" required>
        <UTextarea
          v-model="form.message"
          :rows="5"
          placeholder="Tell me about your project..."
          required
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        color="primary"
        variant="solid"
        size="lg"
        :loading="loading"
        label="Send Message"
        class="w-full justify-center rounded-full"
      />
    </form>
  </div>
</template>
