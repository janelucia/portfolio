<template>
  <Hero
    hero-title="Hello, I'm Jane"
    image-href="/images/jane-animation.gif"
    image-alt="A girl in a black shirt, smiling at the camera, leaning on a table. It is a gif where the girl looks away and then into the camera."
  >
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
  </Hero>
</template>

<script setup>
const { data: latestCommit } = useFetch("/api/github/commits");

const { data: posts } = await useAsyncData("latest-posts", () => {
  return queryContent("blog").sort({ date: 1 }).limit(3).find();
});
</script>
