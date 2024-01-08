<template>
  <v-toolbar class="v-toolbar rounded">
    <section class="v-toolbar-logo">
      <img
        class="v-toolbar-logo_img"
        alt="Porfolio logo"
        src="../assets/logo.png"
      />
    </section>
    <section class=""><h1>Resume</h1></section>
    <div class="v-toolbar-spacer"></div>
    <nav class="v-toolbar-items">
      <ul v-if="showToolbarItems">
        <v-btn variant="plain">About Me</v-btn>
        <v-btn variant="plain">Skills</v-btn>
        <v-btn variant="plain">Portfolio</v-btn>
        <v-btn variant="plain">Experience</v-btn>
        <v-btn variant="plain">Support</v-btn>
      </ul>
    </nav>
    <section class="v-toolbar-icons">
      <v-app-bar-nav-icon @click="toggleToolbar" class="v-toolbar-icons_item"></v-app-bar-nav-icon>
      <v-btn class="v-toolbar-icons_item" icon="mdi-brightness-4"></v-btn>
      <v-btn class="v-toolbar-icons_item" icon="mdi-web"></v-btn>
    </section>
    <v-tooltip activator="parent" location="bottom">
      Made with Vue.js
    </v-tooltip>
  </v-toolbar>   
  <Sidebar v-if="showToolbarItems"></Sidebar>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "navbar-component",
  components: {
    Sidebar,
  },
  data() {
    return {
      showToolbarItems: true,
    };
  },
  methods: {
    toggleToolbar() {
      this.showToolbarItems = !this.showToolbarItems;
    },
  },
};
</script>

<style>
.v-toolbar {
  display: flex;
  position: absolute;
}
.v-toolbar-logo_img {
  display: inherit;
  align-items: center;
  margin: 0.5rem;
  width: 3rem;
}
.v-toolbar-icons_item {
  display: inherit;
  align-items: center;
  margin: 0.5rem;
  width: 3rem;
}
.v-toolbar-title {
  display: inherit;
}
.v-toolbar-spacer {
  display: inherit;
  flex-grow: 1;
}
.v-toolbar-items {
  display: inherit;
  align-items: center;
}
.v-enter-active,
.v-leave-active {
  transition: max-height 0.3s ease;
}

.v-enter,
.v-leave-to {
  max-height: 0; 
}
</style>
