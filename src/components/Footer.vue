<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <footer>
        <section><p>Logo</p></section>
        <section><p>Links</p></section>
        <section><p>Copyright</p></section>
    </footer>
  </v-lazy>
</template>

<script>

export default {
  name: "navbar-component",
};
</script>
