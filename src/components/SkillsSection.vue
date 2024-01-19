<template>
  <section>
    <v-divider :thickness="3" class="border-opacity-25 ma-5"></v-divider>
    <v-container id="skills">
      <v-card class="d-flex justify-center ma-3">
        <h1>Skills section</h1></v-card
      >
      <v-row no-gutters>
        <v-col cols="12" sm="12">
          <v-col v-for="(skillGroup, index) in skills" :key="index">
            <div>
              <h1 class="d-flex justify-center">{{ skillGroup.name }}</h1>
            </div>
            <div class="skills-card-items d-flex ga-4">
              <v-card
                v-for="(data, dataIndex) in skillGroup.skills"
                :key="dataIndex"
                cols="12"
                class="d-flex flex-column justify-center align-center"
                style="flex: 2 1 auto; flex-wrap: wrap"
              >
                <img
                  style="
                    width: 5rem;
                    height: 5rem;
                    border: 2px solid black;
                    border-radius: 0.4rem;
                  "
                  class="v-card-img ma-2"
                  :alt="data.name + ' logo'"
                  :src="data.logo"
                />
                <p>{{ data.name }}</p>
              </v-card>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <template> </template>
  </section>
</template>

<script>
import jsLogo from "../assets/skills-section/js-logo.png";
import tsLogo from "../assets/skills-section/ts-logo.png";
import cSharpLogo from "../assets/skills-section/c-sharp-logo.png";
import reactLogo from "../assets/skills-section/react-logo.png";
import reduxLogo from "../assets/skills-section/redux-logo.png";
import nextLogo from "../assets/skills-section/next-logo.png";
import nodeLogo from "../assets/skills-section/node-logo.png";
import nestLogo from "../assets/skills-section/nest-logo.png";
import expressLogo from "../assets/skills-section/express-logo.png";
import sequelizeLogo from "../assets/skills-section/sequelize-logo.png";
import mongooseLogo from "../assets/skills-section/mongoose-logo.png";
import mysqlLogo from "../assets/skills-section/mysql-logo.png";
import postgresqlLogo from "../assets/skills-section/postgresql-logo.png";
import sqliteLogo from "../assets/skills-section/sqlite-logo.png";
import mssqlLogo from "../assets/skills-section/mssql-logo.png";
import mongoLogo from "../assets/skills-section/mongo-logo.png";
import awsLogo from "../assets/skills-section/aws-logo.png";
import gcpLogo from "../assets/skills-section/gcp-logo.png";
import firebaseLogo from "../assets/skills-section/firebase-logo.png";
import bootsrapLogo from "../assets/skills-section/bootstrap-logo.png";
import sassLogo from "../assets/skills-section/sass-logo.png";
import tailwindLogo from "../assets/skills-section/tailwind-css-logo.png";
import materialuiLogo from "../assets/skills-section/material-ui-logo.png";
import vuetifyLogo from "../assets/skills-section/vuetify-logo.png";
import restLogo from "../assets/skills-section/rest-logo.png";
import graphqlLogo from "../assets/skills-section/graphql-logo.png";
import websocketsLogo from "../assets/skills-section/web-sockets-logo.png";
import subscriptionsLogo from "../assets/skills-section/subscriptions-logo.png";

export default {
  name: "skills-component",
  data() {
    return {
      skills: [
        {
          name: "Programming languages",
          skills: [
            {
              name: "Javascript",
              logo: jsLogo,
            },
            {
              name: "Typescript",
              logo: tsLogo,
            },
            {
              name: "C#",
              logo: cSharpLogo,
            },
          ],
        },
        {
          name: "Frontend Frameworks",
          skills: [
            {
              name: "React",
              logo: reactLogo,
            },
            {
              name: "Redux",
              logo: reduxLogo,
            },
            {
              name: "Next",
              logo: nextLogo,
            },
          ],
        },
        {
          name: "Backend Frameworks",
          skills: [
            {
              name: "Node",
              logo: nodeLogo,
            },
            {
              name: "Nest",
              logo: nestLogo,
            },
            {
              name: "Express",
              logo: expressLogo,
            },
          ],
        },
        {
          name: "ORM",
          skills: [
            {
              name: "Sequelize",
              logo: sequelizeLogo,
            },
            {
              name: "Mongoose",
              logo: mongooseLogo,
            },
          ],
        },
        {
          name: "Databases",
          skills: [
            {
              name: "MySQL",
              logo: mysqlLogo,
            },
            {
              name: "PostgreSQL",
              logo: postgresqlLogo,
            },
            {
              name: "SQLite",
              logo: sqliteLogo,
            },
            {
              name: "MSSQL",
              logo: mssqlLogo,
            },
            {
              name: "Mongo",
              logo: mongoLogo,
            },
          ],
        },

        {
          name: "Cloud services",
          skills: [
            {
              name: "AWS",
              logo: awsLogo,
            },
            {
              name: "GCP",
              logo: gcpLogo,
            },
            {
              name: "Firebase",
              logo: firebaseLogo,
            },
          ],
        },
        {
          name: "Style frameworks",
          skills: [
            {
              name: "Bootstrap",
              logo: bootsrapLogo,
            },
            {
              name: "SaSS",
              logo: sassLogo,
            },
            {
              name: "Tailwind",
              logo: tailwindLogo,
            },
            {
              name: "MaterialUI",
              logo: materialuiLogo,
            },
            {
              name: "Vuetify",
              logo: vuetifyLogo,
            },
          ],
        },
        {
          name: "Other technologies",
          skills: [
            {
              name: "REST",
              logo: restLogo,
            },
            {
              name: "GraphQL",
              logo: graphqlLogo,
            },
            {
              name: "WebSockets",
              logo: websocketsLogo,
            },
            {
              name: "Subscriptions",
              logo: subscriptionsLogo,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
@media (min-width: 0px) {
  .skills-card-items {
    flex-direction: column !important;
  }
}

@media (min-width: 1200px) {
  .skills-card-items {
    flex-direction: row !important;
  }
}
</style>
