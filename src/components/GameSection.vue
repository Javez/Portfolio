<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <nav>
        <section><p>Game</p>Thank you for being a part of this journey.</section>
    </nav>
    </v-lazy>
</template>

<script>

export default {
  name: "navbar-component",
};
</script>