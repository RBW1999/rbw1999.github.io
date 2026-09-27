<script setup lang="ts">
const route = useRoute();

const links = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
  { to: "/imprint", label: "Imprint" },
];

const isActive = (to: string) => route.path === to;
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <NuxtLink to="/" class="text-lg font-bold text-text">
        rbw<span class="text-primary">1999</span>
      </NuxtLink>
      <nav class="flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="
            isActive(link.to)
              ? 'bg-primary/10 text-primary'
              : 'text-text-muted hover:text-text hover:bg-surface-alt'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
