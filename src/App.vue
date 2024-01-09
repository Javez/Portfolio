<template>
  <Home msg="Welcome to Your Vue.js App" />
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  methods: {
    handleMouseMove(event) {
      const containerWidth = event.target.offsetWidth;
      const mouseX = event.clientX;
      this.translateX = (mouseX / containerWidth) * 20;
    },
  },
};
</script>

<style>
@import "../src/assets/styles/base.css";
@import "../src/assets/styles/typography.css";

@media (min-width: 0px) {
  body {
    font-size: 1rem;
  }
}
@media (min-width: 640px) {
  body {
    font-size: 1rem;
  }
}
@media (min-width: 960px) {
  body {
    font-size: 1.2rem;
  }
}
@media (min-width: 1100px) {
  body {
    font-size: 1.5rem;
  }
}

</style>
