<template>
  <header
    class="relative z-10 backdrop-blur-sm mx-auto flex min-h-16 w-[min(82.1vw,1182px)] items-center justify-between overflow-hidden rounded-full border-[0.5px] border-white px-[23px] py-[19px] text-[20px] max-[760px]:min-h-[54px] max-[760px]:w-[calc(100%_-_24px)] max-[760px]:px-[18px] max-[760px]:py-[15px] max-[760px]:text-[15px]"
  >
    <NuxtLink to="/">Home</NuxtLink>

    <nav
      aria-label="Main navigation"
      class="relative flex gap-[40px] max-[760px]:gap-[15px]"
    >
      <NuxtLink to="/#projects">Projects</NuxtLink>
      <NuxtLink to="/#experience" class="max-[450px]:hidden">
        Experience
      </NuxtLink>
      <NuxtLink to="/#about">About</NuxtLink>
    </nav>
  </header>
</template>
