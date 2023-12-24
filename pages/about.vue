<template>
  <section class="py-8">
    <div class="flex gap-4">
      <div class="flex flex-col self-end w-1/2 gap-2">
        <h2 class="text-6xl text-secondary">About</h2>
        <div class="z-10 p-4 text-xl rounded-md bg-neutral">
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
              B.Sc. in Computer Science since 2022, University of Applied
              Sciences Kiel (currently: 1.9)
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
      <div class="w-1/2">
        <img src="/images/jane-business.jpg" alt="" class="rounded-md" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
