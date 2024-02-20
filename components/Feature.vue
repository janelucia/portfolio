<template>
  <div
    class="flex flex-col items-center w-full gap-4 xl:flex-row"
    :class="{ 'xl:flex-row-reverse': reverse }"
  >
    <a :href="repo.html_url" class="w-full xl:w-1/2" target="_blank">
      <NuxtPicture
        v-if="item.name === repo.name"
        format="avif, webp"
        :src="item.image ? item.image : '/images/showcase-not-found.png'"
        :img-attrs="{ class: 'rounded-lg w-full' }"
      />
    </a>
    <div class="xl:w-1/2">
      <div class="flex justify-between gap-4">
        <h4 class="text-2xl font-bold text-primary">
          <a :href="repo.html_url" class="hover:underline" target="_blank">{{
            repo.name
          }}</a>
        </h4>
        <a
          v-if="repo.homepage"
          :href="repo.homepage"
          target="_blank"
          class="text-xl hover:text-primary hover:underline"
          >Look at me!</a
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
