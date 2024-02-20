<template>
  <footer>
    <section
      class="flex items-center justify-end px-2 mx-auto text-gray-300 max-w-7xl sm:px-4 lg:py-6"
    >
      <div class="flex justify-center gap-4 mt-2 mb-4">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
const links = [
  { name: "Github", href: "https://github.com/janelucia", icon: "uil:github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jane-sch%C3%B6nfeld/",
    icon: "uil:linkedin",
  },
];
</script>

<style scoped></style>
