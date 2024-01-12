<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <section id="experience">
      <h1>Experience section</h1>
      <v-card title="Fullstack Developer - Upwork" subtitle="As a freelancer" text="01.02.2023 - 05.05.2023">
        <v-card-actions>
        </v-card-actions>
      </v-card>
      <v-card title="Fullstack Developer - Startup (Part Time)" subtitle="Contract individual entrepreneur" text="05.05.2023 - 05.07.2023">
        <v-card-actions>
        </v-card-actions>
      </v-card>
      <v-card title="Back-end Developer - Full Time" subtitle="Hired with Pioneer payment method" text="10.07.2023 - 10.09.2023">
        <v-card-actions>
        </v-card-actions>
      </v-card>
       <v-card title="Upwork" subtitle="As a freelancer" text="23.09.2023 - Until now">
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </section>
  </v-lazy>
</template>

<script>
export default {
  name: "experience-component",
};
</script>
