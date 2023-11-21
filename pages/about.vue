<template>
  <section class="py-8">
    <h2 class="text-6xl text-secondary">About</h2>
    <div class="flex">
      <div
        class="bg-neutral w-full text-xl p-4 rounded-md z-10 flex flex-col gap-2"
      >
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
        <ul>
          <p class="font-bold">Education</p>
          <li>
            B.A. Educational science and sociology,
            Christian-Albrecht-University Kiel (1.5)
          </li>
          <li>
            B.Sc. in Computer Science since 2022, University of Applied Sciences
            Kiel (currently: 1.9)
          </li>
        </ul>
        <div>
          <p class="font-bold">Work</p>
          <p>working student in software development since feb 2022</p>
        </div>
        <div>
          <p class="font-bold">Interests</p>
          <p>Rowing, Reading, Coding</p>
        </div>
      </div>
    </div>
  </section>
  <NavBar />
</template>

<script setup lang="ts"></script>
