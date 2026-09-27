<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-border bg-surface-alt">
    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-text-muted">
          &copy; {{ currentYear }} rbw1999. All rights reserved.
        </p>
        <nav class="flex gap-4">
          <NuxtLink to="/imprint" class="text-sm text-text-muted hover:text-text transition-colors">
            Imprint
          </NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-text-muted hover:text-text transition-colors">
            Contact
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>
