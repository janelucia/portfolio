<template>
  <div
    class="flex justify-between w-full relative flex-col-reverse md:flex-row md:items-center gap-8"
  >
    <div class="w-full flex flex-col gap-8">
      <h1
        class="text-6xl md:text-8xl font-extrabold text-secondary absolute w-2/3 top-0 left-0"
      >
        Hello I'm Jane <span class="blink">|</span>
      </h1>
      <div class="text-xl">
        <p>software dev in training</p>
        <p>rowing enthusiast</p>
      </div>
    </div>
    <NuxtImg
      sizes="30vw"
      src="/images/jane-animation.gif"
      alt=""
      class="rounded-xl"
    />
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryContent('blog').sort({ date: 1 }).limit(3).find();
});
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
