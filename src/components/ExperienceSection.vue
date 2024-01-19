<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <section id="experience" style="padding: 2rem">
      <div style="margin: 10rem 0 10rem !important">
        <v-card class="d-flex justify-center my-10">
          <h1>Experience section</h1>
        </v-card>
        <div
          class="d-flex justify-center flex-row"
          
        >
          <div class="card-container">
            <v-card class="card-time" v-for="item in items" :key="item.title">
              <v-card-text>{{ item.text }}</v-card-text>
            </v-card>
          </div>
          <div class="card-container">
            <v-card class="card-job" v-for="item in items" :key="item.title">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </v-lazy>
</template>

<script>
export default {
  name: "experience-component",
  data() {
    return {
      items: [
        {
          title: "Fullstack Developer - Upwork",
          subtitle: "As a freelancer",
          text: "01.02.2023 - 05.05.2023",
        },
        {
          title: "Fullstack Developer - Startup (Part Time)",
          subtitle: "Contract individual entrepreneur",
          text: "05.05.2023 - 05.07.2023",
        },
        {
          title: "Back-end Developer - Full Time",
          subtitle: "Hired with Pioneer payment method",
          text: "10.07.2023 - 10.09.2023",
        },
        {
          title: "Upwork",
          subtitle: "As a freelancer",
          text: "23.09.2023 - Until now",
        },
      ],
    };
  },
};
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(0, 1fr);
  gap: 5rem;
}

.card-time,
.card-job {
  flex: 1 !important;
}
</style>
