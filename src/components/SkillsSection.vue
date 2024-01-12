<template>
  <section>
    <v-container class="bg-surface-variant" id="skills">
      <h1>Skills section</h1>
      <v-row no-gutters>
        <v-col cols="12" sm="12">
          <v-sheet class="ma-2 pa-2">
            <h1>Programming language section</h1>
            <v-row>
              <v-col>
                <img
                  style="width: 5rem; height: 5rem; border-radius: 0.2rem"
                  class="d-flex justify-center align-center"
                  alt="javascript logo"
                  src="../assets/js-logo.png"
                />
                <p>Javascript</p>
              </v-col>
              <v-col>
                <img
                  style="
                    position: relative;
                    width: 5rem;
                    height: 5rem;
                    border-radius: 0.2rem;
                    margin-top: 1rem;
                    margin-left: 1rem;
                    z-index: 10;
                  "
                  class="v-card-img"
                  alt="typescript logo"
                  src="../assets/ts-logo.png"
                />
                <p>Typescript</p>
              </v-col>
              <v-col class="d-flex flex-column justify-center align-center p-2">
                <v-card class="d-flex flex-column justify-center align-center">
                <img
                  style="
                    width: 5rem;
                    height: 5rem;
                    border-radius: 0.2rem;
                  "
                  class="v-card-img"
                  alt="c sharp logo"
                  src="../assets/c-sharp-logo.png"
                />
                <p>Typescript</p>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <h1>Frontend Frameworks section</h1>
            <p>React, Redux, Next</p>
            <p>Vue, Vuex, Nuxt</p>
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <h2>Backend Frameworks section</h2>
            <p>Node, Nest, Express</p>
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <h2>Database section</h2>
            <p>Sequelize, Mongoose</p>
            <p>SQL: Mysql, Postgresql, Sqlite, MSSQL</p>
            <p>NoSQL: Mongo</p>
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <h2>Cloud section</h2>
            <p>AWS, GCP, Firebase</p>
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <h2>CSS section</h2>
            <p>Bootstrap, SCSS, Tailwind, MaterialUI, Vuetify</p>
          </v-sheet>
          <v-sheet class="ma-2 pa-2">
            <h2>Tech section</h2>
            <p>REST, GraphQL, WebSockets, Subscriptions</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <template> </template>
  </section>
</template>

<script>
export default {
  name: "skills-component",
  data() {
    return {
      languages: { javascript: {
        name: "Javascript",
        logo: "../assets/js-logo.png",

      }} ["Javascript", "Typescript", "C#"],
      frontendFrameworks: ["React", "Redux", "Next"],
      backendFrameworks: ["Node", "Nest", "Express"],
      orm: ["Sequelize", "Mongoose"],
      databases: ["MySQL", "PostgreSQL", "SQLite", "MSSQL", "Mongo"],
      cloud: ["AWS", "GCP", "Firebase"],
      css: ["Bootstrap", "SCSS", "Tailwind", "MaterialUI", "Vuetify"],
      tech: ["REST", "GraphQL", "WebSockets", "Subscriptions"],
    };
  },
};
</script>
