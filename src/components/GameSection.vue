<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <nav>
        <section><p>Game</p></section>
    </nav>
    </v-lazy>
</template>

<script>

export default {
  name: "navbar-component",
};
</script>