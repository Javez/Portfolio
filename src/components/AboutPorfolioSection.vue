<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <section id="portfolio">
        <h1>This is section about portfolio</h1>
        <p>Portfolio is fullstack Next and Nest app which contain my recent projects</p>
        <p>Projects has their own </p>
    </section>
    </v-lazy>
</template>

<script>

export default {
  name: "about-portfolio-component",
};
</script>
