<template>
  <h1 class="text-3xl my-8">Welcome to my Tech-Tales Blog!</h1>
  <p>
    Hey there, tech enthusiasts and curious minds! 👋 Join me as we explore the
    captivating world of
    <span class="italic text-[#00cc66]">Computer Science & New Work</span>. I'll
    share my experiences, insights, and the joys of turning ideas into reality.
    Let's embark on this exciting tech-filled journey together!
  </p>
  <p>
    Thank you for joining me on this adventure, and I can't wait to share my
    passion for technology with all of you! 😊
  </p>
  <section class="grid md:grid-cols-3 my-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => {
  return queryContent('blog').find();
});
</script>

<style scoped></style>
