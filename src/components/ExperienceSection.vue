<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <v-container id="experience">
      <div style="margin-top: 5rem !important; margin-bottom: 5rem !important">
        <v-card
          class="d-flex justify-center"
          style="
            background-color: rgba(0, 0, 0, 0.889);
            margin: 1rem 18.5rem 4rem;
          "
        >
          <h1
            style="
              background: linear-gradient(
                to top left,
                #ffff82 10%,
                #ff0030 90%
              );
              -webkit-background-clip: text;
              color: transparent;
              display: inline-block;
            "
          >
            Experience
          </h1></v-card
        >
        <div class="d-flex justify-center flex-row">
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
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  name: "experience-component",
  data() {
    return {
      items: [
        {
          title: "Learning web tech stack at Udemy",
          subtitle: "Self learning",
          text: "Jan 2023 — Present",
        },
        {
          title: "Fullstack web developer at Upwork",
          subtitle: "As a freelancer",
          text: "Feb 2023 — Oct 2023",
        },
        {
          title: "Web developer at BlockSolution",
          subtitle: "Contract individual entrepreneur",
          text: "Nov 2023 — Dec 2023",
        },
        {
          title: "Fullstack developer at Zahist",
          subtitle: "As a freelancer",
          text: "Jan 2024 — Present",
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
