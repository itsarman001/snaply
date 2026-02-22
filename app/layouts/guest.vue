<template>
  <div
    class="flex flex-col items-center justify-center bg-slate-950 text-white"
  >
    <LandingHeader />
    <main class="grow">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
