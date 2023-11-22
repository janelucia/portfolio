<template>
  <div data-theme="forest">
    <NavBar />
    <main class="mx-auto max-w-screen-lg p-4 flex flex-col gap-8">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>
