<template>
  <section class="relative">
    <h2 class="text-6xl text-secondary">Portfolio</h2>
    <div class="flex flex-wrap gap-4">
      <Card
        v-for="repo in portfolio"
        :key="repo.id"
        :avatar-url="repo.owner.avatar_url"
        :repository-name="repo.name"
        :owner-name="repo.owner.login"
        :commit-message="repo.description"
        :committer-name="repo.owner.login"
        :commit-date="repo.updated_at"
        :repository-url="repo.html_url"
        :owner-url="repo.owner.html_url"
        class="w-full"
      >
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  portfolio: any[];
}>();
</script>
