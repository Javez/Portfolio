<template>
   <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title>
      This is a title
    </template>

    <v-card-text>
      This is content
    </v-card-text>
  </v-card>
  <section>
       <h1>Skill section</h1>
    <div>
      <h1>Programming language section</h1>
      <p>Javascript</p>
      <p>Typescript</p>
      <p>C#</p>
      <p>Java</p>
    </div>
    <div>
      <h1>Frontend Frameworks section</h1>
      <p>React, Redux, Next</p>
      <p>Vue, Vuex, Nuxt</p>
    </div>
    <div>
      <h2>Backend Frameworks section</h2>
      <p>Node, Nest, Express</p>
    </div>
    <div>
      <h2>Database section</h2>
      <p>Sequelize, Mongoose</p>
      <p>SQL: Mysql, Postgresql, Sqlite, MSSQL</p>
      <p>NoSQL: Mongo</p>
    </div>
    <div>
      <h2>Cloud section</h2>
      <p>AWS, GCP, Firebase</p>
    </div>
    <template>
 
</template>
  </section>
</template>

<script>
export default {
  name: "skills-component",
};
</script>
