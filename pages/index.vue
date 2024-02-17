<template>
  <div
    class="relative flex flex-col-reverse justify-between w-full gap-8 md:flex-row md:items-end"
  >
    <div class="flex flex-col w-full gap-8">
      <h1
        class="absolute top-0 left-0 w-full font-extrabold text-8xl text-secondary"
      >
        Hello, I'm Jane <span class="blink">|</span>
      </h1>
      <div class="text-xl text-secondary">
        <p>software dev in training</p>
        <p>rowing enthusiast</p>
      </div>
      <Card
        :avatar-url="latestCommit.committer.avatar_url"
        :repository-name="latestCommit.repository.name"
        :owner-name="latestCommit.repository.owner.name"
        :commit-message="latestCommit.message"
        :committer-name="latestCommit.committer.name"
        :commit-date="latestCommit.date"
        :repository-url="latestCommit.repository.html_url"
        :owner-url="latestCommit.repository.owner.html_url"
        :committer-url="latestCommit.committer.html_url"
      />
    </div>
    <div class="flex justify-center">
      <img src="/images/jane-animation.gif" alt="" class="rounded-xl" />
    </div>
  </div>
</template>

<script setup>
const { data: latestCommit } = useFetch("/api/github/commits");

const { data: posts } = await useAsyncData("latest-posts", () => {
  return queryContent("blog").sort({ date: 1 }).limit(3).find();
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
