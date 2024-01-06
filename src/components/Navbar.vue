<template>
  <v-toolbar class="v-toolbar rounded" color="rgba(0, 0, 0, 0.2)">
    <section class="v-toolbar-logo" >
      <img class="v-toolbar-logo_img" alt="Porfolio logo" src="../assets/logo.png" />
    </section>
    <section class="v-toolbar-title d-inline-flex"><h1>Porfolio</h1></section>
    <div class="v-toolbar-spacer"></div>
    <nav class="v-toolbar-items">
      <ul>
        <v-btn variant="plain">About Me</v-btn>
        <v-btn variant="plain" elevation="10">Skills</v-btn>
        <v-btn variant="plain">Recent Projects</v-btn>
        <v-btn variant="plain">Experience</v-btn>
        <v-btn variant="plain">Support</v-btn>
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
  .v-toolbar-logo_img {
    display: inherit;
    align-items: center;
    
    margin: 0.5rem;
    width: 3rem;
  }
  .v-toolbar-title {
    display: inherit;
    flex-grow: 0;
  }
  .v-toolbar-spacer {
    display: inherit;
    flex-grow: 1;
  }
  .v-toolbar-items {
    display: inherit;
    align-items: center;
  }
</style>
