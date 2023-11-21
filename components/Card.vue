<template>
  <div class="flex flex-col shadow-md bg-neutral rounded-md p-4 gap-8">
    <div class="flex gap-4">
      <div class="avatar">
        <div class="w-12 rounded-full">
          <NuxtImg :src="avatarUrl" />
        </div>
      </div>
      <div>
        <a
          :href="repositoryUrl"
          target="_blank"
          class="hover:text-primary cursor-pointer"
        >
          <p class="font-bold">{{ repositoryName }}</p>
        </a>
        <a
          :href="ownerUrl"
          target="_blank"
          class="hover:text-primary cursor-pointer"
        >
          <p>{{ ownerName }}</p>
        </a>
      </div>
    </div>
    <div>
      <p v-if="commitMessage" class="font-bold">
        {{ commitMessage }}
      </p>
      <a
        v-if="committerUrl"
        :href="committerUrl"
        target="_blank"
        class="hover:text-primary cursor-pointer"
      >
        <p>{{ committerName }}</p>
      </a>
      <p v-if="commitDate">{{ new Date(commitDate).toLocaleString() }}</p>
      <p v-if="latestUpdate">
        Updated: {{ new Date(latestUpdate).toLocaleString() }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatarUrl: string;
  repositoryName: string;
  ownerName: string;
  repositoryUrl: string;
  ownerUrl: string;
  latestUpdate?: string;
  commitMessage?: string;
  committerName?: string;
  commitDate?: string;
  committerUrl?: string;
}>();
</script>
