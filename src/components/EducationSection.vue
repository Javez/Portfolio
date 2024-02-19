<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <section id="education">
      <div class="pa-4">
        <div style="margin: 1rem 18.5rem 4rem; width: calc(100vw - 37rem)">
          <v-card
            class="d-flex justify-center"
            style="background-color: rgba(0, 0, 0, 0.889); margin: 1rem 0 4rem"
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
              Education section
            </h1></v-card
          >
          <v-container
            class="d-flex flex-column justify-center align-center elevation-2"
            style="
              background: linear-gradient(
                to top left,
                #43434372 10%,
                #060606be 90%
              );
              color: rgb(0, 0, 0);
              border-radius: 5px;
            "
          >
            <h2 class="">University</h2>
            <div
              class="d-flex flex-row pa-4"
              style="flex-wrap: wrap; justify-content: center"
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
          </v-container>
          <div style="padding: 2rem"></div>
          <v-container
            class="d-flex flex-column justify-center align-center elevation-2"
            style="
              background: linear-gradient(
                to top left,
                #43434372 10%,
                #060606be 90%
              );
              color: rgb(0, 0, 0);
              border-radius: 5px;
            "
          >
            <h2>Udemy courses</h2>
            <div
              class="d-flex flex-row"
              style="flex-wrap: wrap; justify-content: center"
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
          </v-container>
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
