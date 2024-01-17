<template>
  <section>
    <v-container class="bg-surface-variant" id="skills">
      <h1>Skills section</h1>
      <v-row no-gutters>
        <v-col cols="12" sm="12">
          <v-sheet class="ma-2 pa-2">
            <h1>Programming language section</h1>
            <v-row>
              <v-col
                v-for="(language, index) in languages"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="d-flex flex-column justify-center align-center">
                  <img
                    style="width: 5rem; height: 5rem; border-radius: 0.2rem"
                    class="v-card-img"
                    :alt="language.name + ' logo'"
                    :src="`logo`"
                  />
                  <p>{{ language.name }}</p>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <template> </template>
  </section>
</template>

<script>
import jsLogo from "../assets/skills-section/js-logo.png"; 
console.log(jsLogo)
export default {
  name: "skills-component",
  data() {
    return {
      logo: jsLogo,
      languages: [
        {
          name: "Javascript",
          logo: "@/src/assets/skills-section/js-logo.png",
        },
        {
          name: "Typescript",
          logo: "../assets/ts-logo.png",
        },
        {
          name: "C#",
          logo: "../assets/c-sharp-logo",
        },
      ],
      frontendFrameworks: [
        {
          name: "React",
          logo: "../assets/react-logo.png",
        },
        {
          name: "Redux",
          logo: "../assets/redux-logo.png",
        },
        {
          name: "Next",
          logo: "../assets/next-logo.png",
        },
      ],
      backendFrameworks: [
        {
          name: "Node",
          logo: "../assets/node-logo.png",
        },
        {
          name: "Nest",
          logo: "../assets/nest-logo.png",
        },
        {
          name: "Express",
          logo: "../assets/express-logo.png",
        },
      ],
      orm: [
        {
          name: "Sequelize",
          logo: "../assets/sequelize-logo.png",
        },
        {
          name: "Mongoose",
          logo: "../assets/mongoose-logo.png",
        },
      ],
      databases: [
        {
          name: "MySQL",
          logo: "../assets/mysql-logo.png",
        },
        {
          name: "PostgreSQL",
          logo: "../assets/postgresql-logo.png",
        },
        {
          name: "SQLite",
          logo: "../assets/sqlite-logo.png",
        },
        {
          name: "MSSQL",
          logo: "../assets/mssql-logo.png",
        },
        {
          name: "Mongo",
          logo: "../assets/mongo-logo.png",
        },
      ],
      cloud: [
        {
          name: "AWS",
          logo: "../assets/aws-logo.png",
        },
        {
          name: "GCP",
          logo: "../assets/gcp-logo.png",
        },
        {
          name: "Firebase",
          logo: "../assets/firebase-logo.png",
        },
      ],
      css: [
        {
          name: "Bootstrap",
          logo: "../assets/bootstrap-logo.png",
        },
        {
          name: "SaSS",
          logo: "../assets/sass-logo.png",
        },
        {
          name: "Tailwind",
          logo: "../assets/tailwind-logo.png",
        },
        {
          name: "MaterialUI",
          logo: "../assets/materialui-logo.png",
        },
        {
          name: "Vuetify",
          logo: "../assets/vuetify-logo.png",
        },
      ],
      tech: [
        {
          name: "REST",
          logo: "../assets/rest-logo.png",
        },
        {
          name: "GraphQL",
          logo: "../assets/graphql-logo.png",
        },
        {
          name: "WebSockets",
          logo: "../assets/websockets-logo.png",
        },
        {
          name: "Subscriptions",
          logo: "../assets/subscriptions-logo.png",
        },
      ],
    };
  },
};
</script>
