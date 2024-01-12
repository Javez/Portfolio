<template>
  <v-lazy
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <v-toolbar rounded tile class="v-toolbar">
      <section class="v-toolbar-logo">
        <img
          class="v-toolbar-logo_img"
          alt="Porfolio logo"
          src="../assets/logo-white-hd.png"
        />
      </section>
      <section class=""><h1>Resume</h1></section>
      <div class="v-toolbar-spacer"></div>
      <nav class="v-toolbar-items">
        <ul v-if="showToolbarItems">
          <v-btn variant="plain" href="#about-me">About Me</v-btn>
          <v-btn variant="plain" href="#skills">Skills</v-btn>
          <v-btn variant="plain" href="#portfolio">Portfolio</v-btn>
          <v-btn variant="plain" href="#experience">Experience</v-btn>
          <v-btn variant="plain">Support</v-btn>
        </ul>
      </nav>
      <section class="v-toolbar-buttons">
        <v-app-bar-nav-icon
          @click="toggleToolbar"
          @click.stop="drawer = !drawer"
          class="v-toolbar-buttons_item"
        ></v-app-bar-nav-icon>
        <v-btn class="v-toolbar-buttons_item" icon="mdi-brightness-4" @click="toggleTheme"></v-btn>
        <v-btn class="v-toolbar-buttons_item" icon="mdi-web"></v-btn>
      </section>
      <v-card class="v-toolbar-card">
        <v-layout class="v-toolbar-card_layout">
          <v-navigation-drawer v-model="drawer" location="bottom" temporary class="v-toolbar-card_drawer">
            <v-list :items="items" class="v-toolbar-card_list"></v-list>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
      <v-tooltip activator="parent" location="bottom">
        Made with Vue.js and Vuetify
      </v-tooltip>
    </v-toolbar>
  </v-lazy>
</template>

<script>

export default {
  name: "navbar-component",
  data() {
    return {
      showToolbarItems: false,
      drawer: false,
      group: null,
      items: [
        {
          title: "About Me",
          value: "About Me",
        },
        {
          title: "Skills",
          value: "Skills",
        },
        {
          title: "Portfolio",
          value: "Portfolio",
        },
        {
          title: "Experience",
          value: "Experience",
        },
        {
          title: "Support",
          value: "Support",
        },
      ],
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

@media (min-width: 960px) {
  .v-navigation-drawer {
    display: none !important;
  }
}
@media (max-width: 960px) {
  .sidebar {
    visibility: visible;
  }
  .v-toolbar-items {
    display: none !important;
  }
}
.v-toolbar {
  display: flex;
  width: calc(100vw - 2rem) !important;
  z-index: 1000;
  position: fixed !important;
}
.v-toolbar-logo_img {
  display: inherit;
  align-items: center;
  margin: 0.5rem;
  width: 3rem;
}
.v-toolbar-buttons_item {
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
  align-items: center;
}
.v-navigation-drawer {
  height: auto !important;
}
.v-toolbar-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.v-toolbar-card_layout {
  
}
.v-toolbar-card_drawer {
  border-radius: 0.2rem;
  margin: 1rem;
  width: calc(100vw - 2rem) !important;
  
}
.v-toolbar-card_list {
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
