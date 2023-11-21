<template>
  <section class="py-8">
    <h2 class="text-6xl text-secondary">Portfolio</h2>
    <div class="flex flex-wrap gap-4">
      <Card
        v-for="repo in (portfolio as Portfolio)"
        :key="repo.id"
        :avatar-url="repo.owner.avatar_url"
        :repository-name="repo.name"
        :owner-name="repo.owner.login"
        :latest-update="repo.updated_at"
        :repository-url="repo.html_url"
        :owner-url="repo.owner.html_url"
        class="w-full"
      >
      </Card>
    </div>
  </section>
  <NavBar />
</template>

<script setup lang="ts">
const { data: portfolio } = useFetch('/api/github/repos');

type Repo = {
  id: number;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
  name: string;
  updated_at: string;
  html_url: string;
};

type Portfolio = Repo[];
</script>
