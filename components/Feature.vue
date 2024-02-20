<template>
  <div
    class="flex flex-col items-center w-full gap-4 xl:flex-row"
    :class="{ 'xl:flex-row-reverse': reverse }"
  >
    <NuxtPicture
      v-if="item.name === repo.name"
      format="avif, webp"
      :src="item.image ? item.image : '/images/showcase-not-found.png'"
      class="w-full xl:w-1/2"
      :img-attrs="{ class: 'rounded-lg w-full' }"
    />
    <div class="xl:w-1/2">
      <div class="flex justify-between gap-4">
        <h4 class="text-2xl font-bold text-primary">{{ repo.name }}</h4>
        <a
          :href="repo.homepage"
          target="_blank"
          class="text-xl hover:text-primary hover:underline"
          >{{ repo.homepage ? "Homepage" : "Source Code" }}</a
        >
      </div>
      <p v-if="item.name === repo.name" class="text-lg">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    name: string;
    image?: string;
    description: string;
  };
  repo: {
    name: string;
    homepage: string;
    html_url: string;
  };
  reverse?: boolean;
}>();
</script>
