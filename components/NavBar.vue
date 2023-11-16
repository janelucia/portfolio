<template></template>

<script setup>
const route = useRoute();

const navigation = [
  { name: 'Home', href: '/', current: route.name == 'index' },
  { name: 'Blog', href: '/blog', current: route.name.includes('blog') },
];
</script>
