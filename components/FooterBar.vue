<template>
  <footer>
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex items-center justify-end"
    >
      <div class="flex justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
const links = [
  { name: 'Github', href: 'https://github.com/', icon: 'uil:github' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jane-sch%C3%B6nfeld/',
    icon: 'uil:linkedin',
  },
];
</script>

<style scoped></style>
