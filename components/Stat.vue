<template>
  <div class="stats shadow">
    <NuxtLink :to="link" target="_blank">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img :src="url" />
            </div>
          </div>
        </div>
        <div class="stat-title">Public Repositories on Github</div>
        <div class="stat-value">{{ public }}</div>
        <div class="stat-desc">Mitglied seit: {{ githubMember }}</div>
      </div>
    </NuxtLink>
    <div class="stat">
      <div class="stat-figure text-secondary">
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img :src="url" />
          </div>
        </div>
      </div>
      <div class="stat-title">Private Repositories on Github</div>
      <div class="stat-value">{{ private }}</div>
      <div class="stat-desc">Mitglied seit: {{ githubMember }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  public: number;
  private: number;
  url: string;
  link: string;
  githubMember: string;
}>();
</script>
