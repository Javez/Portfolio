<template>
  <Home msg="Welcome to Your Vue.js App"/>
</template>

<script>

import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import "../src/assets/styles/base.css";
@import "../src/assets/styles/typography.css";
</style>