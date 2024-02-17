<template>
  <div
    data-theme="forest"
    class="flex flex-col justify-between h-screen font-mono"
  >
    <NavBar />
    <main class="flex flex-col max-w-screen-lg gap-8 mx-4 md:mx-auto">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>
