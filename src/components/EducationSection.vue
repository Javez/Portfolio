<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <section id="education">
      <div class="pa-4">
        <div>
          <v-card class="d-flex justify-center">
            <h1>Education section</h1>
          </v-card>

          <h2 class="pa-4">University</h2>
          <div
            class="d-flex flex-row pa-4"
            style="justify-content: flex-start !important"
          >
            <v-card
              class="edu-card ma-2"
              style="flex-direction: column"
              v-for="(item, index) in education"
              :key="index"
            >
              <v-card-text>
                <div style="font-size: 1rem !important">{{ item.time }}</div>

                <div style="font-size: 1rem !important" class="text--primary">
                  {{ item.title }}
                </div>
              </v-card-text>
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    variant="text"
                    color="deep-purple-accent-4"
                    >Show</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card title="Dialog">
                    <v-card-text>
                      {{ item.info }}
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close "
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card>
          </div>

          <h2 class="pa-4">Udemy courses</h2>
          <div
            class="d-flex flex-row pa-4"
            style="justify-content: flex-start !important"
          >
            <v-card
              class="edu-card ma-2"
              style="flex-direction: column"
              v-for="(item, index) in courses"
              :key="index"
            >
              <v-card-text>
                <div style="font-size: 1rem !important">{{ item.time }}</div>

                <div style="font-size: 1rem !important" class="text--primary">
                  {{ item.title }}
                </div>
              </v-card-text>
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    variant="text"
                    color="deep-purple-accent-4"
                    >Show</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card title="Dialog">
                    <v-card-text>
                      {{ item.info }}
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close "
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </v-lazy>
</template>

<script>
export default {
  name: "education-component",
  data() {
    return {
      education: [
        {
          title: "Bachelor degree",
          time: "2018-2022",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
        {
          title: "Master degree",
          time: "2022-2023",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
      ],
      courses: [
        {
          title: "Javascript course",
          time: "2023",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
        {
          title: "Typescript course",
          time: "2023",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
        {
          title: "Node.js course",
          time: "2024",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
        {
          title: "React course",
          time: "2023",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
        {
          title: "Testing",
          time: "2023",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima",
        },
      ],
    };
  },
};
</script>

<style>
.edu-card {
  display: flex;
  height: 10rem;
  width: 10rem;
  border-radius: 0.2rem;
}
</style>
