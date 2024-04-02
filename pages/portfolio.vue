<template>
  <Hero
    hero-title="Portfolio"
    image-href="/images/jane-animation3.gif"
    image-alt="Collection of pictures of Jane in front of the prague castle"
  >
    Ready to explore? Click the "Look at me" link beside each project to dive
    in. Plus, check out my latest Git commits for a peek at my recent work.
    Let's get started!
  </Hero>
  <section class="flex flex-col w-full gap-8 px-4 md:flex-row">
    <div class="flex flex-col gap-8 lg:w-3/4">
      <div v-for="(repo, index) in (portfolio as Repo[])">
        <div
          v-for="item in listPortfolio.filter(
            (portfolioItem) => portfolioItem.name === repo.name
          )"
        >
          <Feature :item="item" :repo="repo" :reverse="index % 2 !== 0" />
        </div>
      </div>
    </div>
    <div class="lg:w-1/4">
      <h2 class="text-4xl text-primary">Timeline</h2>
      <div class="flex flex-col gap-4">
        <Card
          v-for="commit in (commits?.items as Commit[])"
          :key="commit.sha"
          :avatar-url="commit.committer.avatar_url"
          :repository-name="commit.repository.name"
          :owner-name="commit.committer.login"
          :latest-update="commit.commit.committer.date"
          :repository-url="commit.repository.html_url"
          :owner-url="commit.committer.html_url"
          :commit-message="commit.commit.message"
          class="w-full"
        >
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { listPortfolio } from "~/helpers/listPortfolio";
import type { Repo, Commit } from "~/helpers/types";

const { data: portfolio } = useFetch("/api/github/repos");
const { data: commits } = useFetch("/api/github/commits");
</script>
