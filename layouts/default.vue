<template>
  <div data-theme="forest" class="flex flex-col justify-between h-screen">
    <NavBar />
    <main class="flex flex-col max-w-screen-lg gap-8 p-4 mx-auto">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>
