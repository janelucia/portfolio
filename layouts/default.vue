<template>
  <div
    data-theme="forest"
    class="flex flex-col justify-between h-screen font-mono"
  >
    <NavBar />
    <main class="flex flex-col max-w-screen-xl gap-8 mx-4 lg:mx-auto">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>
