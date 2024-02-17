<template>
  <div
    class="flex flex-wrap justify-center max-w-screen-lg gap-4 m-4 mx-auto text-lg sm:justify-between"
  >
    <NuxtLink v-for="nav in navigation" :to="nav.href" :key="nav">
      <button
        class="px-4 py-2 text-lg border border-solid rounded-md border-primary hover:bg-primary hover:text-neutral"
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
  { name: "Home", href: "/", current: route.name === "index" },
  { name: "About Me", href: "/about", current: route.name.includes("about") },
  {
    name: "Portfolio",
    href: "/portfolio",
    current: route.name.includes("portfolio"),
  },
]);
</script>
