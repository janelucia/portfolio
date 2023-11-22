<template>
  <div
    class="flex justify-center sm:justify-between text-lg p-4 flex-wrap gap-4 max-w-screen-lg mx-auto"
  >
    <NuxtLink v-for="nav in navigation" :to="nav.href" :key="nav">
      <button
        class="text-lg px-4 py-2 border border-solid border-primary rounded-md hover:bg-primary hover:text-neutral"
        :class="nav.current ? 'bg-primary text-neutral' : 'text-primary'"
      >
        {{ nav.name }}
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();

const navigation = computed(() => [
  { name: 'Home', href: '/', current: route.name === '/' },
  { name: 'About Me', href: '/about', current: route.name.includes('about') },
  {
    name: 'Portfolio',
    href: '/portfolio',
    current: route.name.includes('portfolio'),
  },
]);
</script>
