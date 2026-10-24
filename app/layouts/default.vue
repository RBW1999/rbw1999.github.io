<template>
  <div class="flex min-h-dvh flex-col py-5 max-[760px]:pt-3">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
