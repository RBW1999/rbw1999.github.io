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
  <div class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-text">Contact</h1>
    <p class="mt-2 text-text-muted">
      Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you.
    </p>

    <div v-if="submitted" class="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 class="mt-3 text-lg font-semibold text-green-800">Message sent!</h2>
      <p class="mt-1 text-sm text-green-700">Thanks for reaching out. I'll get back to you soon.</p>
    </div>

    <form v-else class="mt-8 space-y-5" @submit.prevent="onSubmit">
      <div>
        <label for="name" class="block text-sm font-medium text-text">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-text">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-text">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          class="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="loading">Sending...</span>
        <span v-else>Send Message</span>
      </button>
    </form>
  </div>
</template>
