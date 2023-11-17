<template>
  <h1 class="bg-primary">Hello I'm Jane Schönfeld</h1>
</template>

<script setup>
const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryContent('blog').sort({ date: 1 }).limit(3).find();
});
</script>

<style scoped></style>
