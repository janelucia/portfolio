<template>
  <div
    class="relative flex flex-col-reverse justify-between w-full gap-8 md:flex-row md:items-end"
  >
    <div class="flex flex-col w-full gap-8">
      <h1
        class="absolute top-0 left-0 w-full text-5xl font-extrabold sm:text-8xl text-primary"
      >
        {{ heroTitle }}<span class="blink">|</span>
      </h1>
      <slot />
    </div>
    <div class="flex justify-center w-full">
      <img :src="imageHref" :alt="imageAlt" class="rounded-xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  heroTitle: string;
  imageHref: string;
  imageAlt: string;
}>();
</script>

<style scoped>
.blink {
  animation: blink 3s step-end infinite;
}

@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
</style>
