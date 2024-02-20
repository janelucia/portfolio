<template>
  <div
    v-for="post in props.posts"
    :key="post.slug"
    class="overflow-hidden bg-white rounded-lg shadow-md hover:opacity-75"
  >
    <NuxtLink :to="post._path">
      <img
        :src="`images/blog/${post.cover}`"
        alt="Blog Post Cover Image"
        class="object-cover w-full h-48"
      />
    </NuxtLink>
    <div class="p-6">
      <h2 class="mb-2 text-xl font-bold">{{ post.title }}</h2>
      <p class="mb-4 text-gray-700">{{ post.description }}</p>
      <NuxtLink
        :to="post._path"
        class="inline float-right px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >Read More</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["posts"]);
</script>
