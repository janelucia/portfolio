<template>
  <ul class="flex flex-col">
    <li v-for="nav in navigation" :key="nav">
      <NuxtLink :to="nav.href" class="hover:text-primary text-xl">{{
        nav.name
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

const navigation = [
  { name: 'Home', href: '/', current: route.name === '/' },
  { name: 'About', href: '#about', current: route.name === 'about' },
  {
    name: 'Portfolio',
    href: '#portfolio',
    current: route.name === 'portfolio',
  },
  { name: 'Contact', href: '#contact', current: route.name === 'contact' },
  { name: 'Blog', href: '/blog', current: route.name.includes('blog') },
];
</script>
