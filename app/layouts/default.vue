<template>
  <div class="flex min-h-dvh flex-col pb-5 max-[760px]:pb-3">
    <div class="sticky top-0 z-50 pt-5 max-[760px]:pt-3">
      <SiteHeader />
    </div>
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
