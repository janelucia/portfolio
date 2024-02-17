<template>
  <section>
    <Hero
      hero-title="Learn more about me"
      image-href="/images/jane-animation2.gif"
      image-alt="Girl at a frozen sea with the sun in the background. She is wearing a warm jacket and is smiling at the camera. It is a gif and the girl is twirling around."
      class="mb-8"
    >
      <p class="text-xl leading-relaxed md:text-justify">
        Hi there! My name is Jane Schönfeld, and I'm a passionate frontend
        developer based in Kiel, Germany. With a background in educational
        science and sociology, I bring a unique perspective to my work, focusing
        on creating user-friendly and visually appealing web experiences. I have
        a strong foundation in HTML, CSS, and JavaScript, and I'm proficient in
        frameworks like React and Vue.js. Currently, I'm pursuing a B.Sc. in
        Computer Science with a focus on artificial intelligence. In my free
        time, you can find me rowing, reading, or coding. Let's connect and
        create something amazing together!
      </p>
    </Hero>
    <div class="flex flex-col gap-4 md:flex-row">
      <div class="flex flex-col self-end w-full gap-2 md:w-1/2">
        <h2 class="text-6xl text-primary">About</h2>
        <div class="z-10 flex flex-col gap-4 p-4 text-xl rounded-md bg-neutral">
          <div>
            <p class="font-bold">Name</p>
            <p>Jane Schönfeld</p>
          </div>
          <div>
            <p class="font-bold">Age</p>
            <p>26</p>
          </div>
          <div>
            <p class="font-bold">Location</p>
            <p>Kiel, Germany</p>
          </div>
          <div>
            <p class="font-bold">Education</p>
            <ul>
              <ul>
                B.A. Educational science and sociology,
                Christian-Albrecht-University Kiel (1.5):
                <li class="pl-4">
                  Focus on organisational sociology, bachelor thesis on the
                  topic of New Work.
                </li>
              </ul>
              <ul>
                <a
                  href="https://edu.opencampus.sh/course/94"
                  class="hover:underline hover:text-primary"
                  >Frontend Developer Program</a
                >
                from opencampus (January - July 2022):
                <li class="pl-4">
                  Inverted classroom model, learning through videos and asking
                  questions in "class".
                </li>
              </ul>
              <ul>
                B.Sc. in Computer Science since 2022, University of Applied
                Sciences Kiel (currently: 1.6):
                <li class="pl-4">Focus on artificial intelligence.</li>
              </ul>
            </ul>
          </div>
          <div>
            <p class="font-bold">Work</p>
            <ul class="list-disc list-inside">
              working student in software development:
              <li>at GEPROG: feb 2022 - 2024</li>
              <li>at OTTO: feb 2024 - today</li>
            </ul>
          </div>
          <ul class="list-disc list-inside">
            <p class="font-bold">Tech Stack</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Nuxt 3</li>
            <li>Flutter</li>
            <li>C</li>
            <li>Tailwind CSS</li>
            <li>Figma</li>
            <li>GraphQL</li>
            <li>SQL</li>
          </ul>
          <div>
            <p class="font-bold">Interests</p>
            <p>Rowing, Reading, Coding</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full gap-4 md:w-1/2">
        <NuxtPicture
          format="avif, webp"
          src="/images/jane-business.jpg"
          class="flex justify-center w-full"
          alt="Girl in a black turtle neck, with brown hair and eyes, smiling at the camera. Arms crossed."
          :img-attrs="{ class: 'rounded-xl' }"
        />
        <NuxtPicture
          format="avif, webp"
          src="/images/jane-rudern2.jpg"
          alt="A girl at a pier, with a rowing boat and other people in the background. She is wearing a magenta a purple shirt and black leggings. Head is bowed."
          class="flex justify-center w-full"
          :img-attrs="{ class: 'rounded-xl' }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
