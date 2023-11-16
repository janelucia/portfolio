<template>
  <div class="flex flex-col gap-4">
    <section>
      <h1 class="text-5xl font-bold mt-20">👋 Hello, I am Jane!</h1>
      <p class="text-base text-gray-900 p-2 italic">Software Dev to be</p>
    </section>
    <section class="flex flex-col md:flex-row md:items-center">
      <div class="md:w-3/4">
        <p>Hi there! 🌞</p>
        <p>
          I'm a 26-year-old with a penchant for exploring life's twists and
          turns, embracing every experience with open arms.
        </p>
        <p>
          Initially, I studied sociology and education, but a serendipitous
          encounter led me to a new passion -
          <span class="font-bold text-[#00cc66]">computer science</span>. It's
          been an intriguing journey so far, from a bootcamp course to diving
          into Computer Science studies, where I recently wrapped up my first
          year and look forward to the next.
        </p>
        <p>
          Currently, I'm working as a working student at a Software Dev Company,
          gaining valuable insights and building my expertise in the tech world.
        </p>
        <p>
          Home is in the picturesque city of Kiel, where I've found solace and
          joy in various sports, especially
          <span class="font-bold text-[#00cc66]">water sports</span>. Among
          them, rowing holds a special place in my heart, and it's a delight to
          share that joy with friends.
        </p>
        <p>
          That's a brief glimpse into my life's tapestry. I hope you'll join me
          as I continue exploring, learning, and making the most of this
          beautiful journey we call life. Thanks for stopping by!
        </p>
      </div>

      <div class="w-1/2 md:max-w-sm p-8 mx-auto">
        <img src="/images/jane.jpg" alt="" class="rounded-full" />
      </div>
    </section>
    <section>
      <h2 class="font-bold text-2xl">Latest blog posts!</h2>
      <div class="grid md:grid-cols-3 py-8 gap-10">
        <Post :posts="posts" />
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryContent('blog').sort({ date: 1 }).limit(3).find();
});
</script>

<style scoped></style>
