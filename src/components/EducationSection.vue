<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
  <section>
    <h1>Education section</h1>
  </section>
  </v-lazy>
</template>

<script>
export default {
  name: "education-component",
};
</script>
