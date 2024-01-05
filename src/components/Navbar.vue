<template>
  <v-toolbar class="v-toolbar">
    <section class="v-toolbar--logo">
      <img class="v-toolbar--logo_img" alt="Porfolio logo" src="../assets/logo.png" />
    </section>
    <section class="v-toolbar-title"><h1>Porfolio</h1></section>
    <div class="v-toolbar-spacer">Space</div>
    <nav class="v-toolbar-items">
      <ul>
        <v-btn variant="plain">About Me</v-btn>
        <v-btn elevation="10">Skills</v-btn>
        <v-btn>Recent Projects</v-btn>
        <v-btn>Experience</v-btn>
        <v-btn>Support</v-btn>
      </ul>
    </nav>
    <section class="v-toolbar-icons">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn icon="mdi-brightness-4"></v-btn>
      <v-btn icon="mdi-web"></v-btn>
      
    </section>
    <v-tooltip activator="parent" location="bottom">
      Made with Vue.js
    </v-tooltip>
  </v-toolbar>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>

<style>
  .v-toolbar {
   
    color: red
  }
  .v-toolbar--logo_img {
    width: 40px;
    height: 40px;
  }
</style>
