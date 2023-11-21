<template>
  <div
    class="flex justify-between w-full relative flex-col-reverse md:flex-row md:items-end gap-8"
  >
    <div class="w-full flex flex-col gap-8">
      <h1
        class="text-8xl font-extrabold text-secondary absolute w-full top-0 left-0"
      >
        Hello I'm Jane <span class="blink">|</span>
      </h1>
      <div class="text-xl text-secondary">
        <p>software dev in training</p>
        <p>rowing enthusiast</p>
      </div>
      <div class="flex flex-col shadow-md bg-neutral rounded-md p-4 gap-8">
        <div class="flex gap-4">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <NuxtImg :src="latestCommit.committer.avatar_url" />
            </div>
          </div>
          <div>
            <p class="font-bold">{{ latestCommit.repository.name }}</p>
            <p>{{ latestCommit.repository.owner.name }}</p>
          </div>
        </div>
        <div>
          <p class="font-bold">
            {{ latestCommit.message }}
          </p>
          <p>{{ latestCommit.committer.name }}</p>
          <p>{{ new Date(latestCommit.date).toLocaleString() }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <img src="/images/jane-animation.gif" alt="" class="rounded-xl" />
    </div>
    <!-- <NavBar /> -->
  </div>
  <Stat
    :public="user.public_repos"
    :url="user.avatar_url"
    :link="user.html_url"
    class="p-4"
    :github-member="new Date(user.created_at).toLocaleDateString()"
  />
  <AboutSection />
</template>

<script setup>
const { data: portfolio } = useFetch('/api/github/repos');

const { data: user } = useFetch('/api/github/user');

const { data: latestCommit } = useFetch('/api/github/commits');

const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryContent('blog').sort({ date: 1 }).limit(3).find();
});
</script>

<style scoped>
.blink {
  animation: blink 3s step-end infinite;
}

@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
</style>
