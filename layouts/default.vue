<template>
  <div class="flex flex-col justify-between min-h-screen">
    <NavBar />
    <main
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full grow items-start"
    >
      <slot />
    </main>
    <FooterBar />
  </div>
</template>
