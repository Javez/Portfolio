<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <v-app>
      <v-footer class="bg-grey-lighten-1">
        <v-col>
          <v-row justify="center" no-gutters>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="text"
            ></v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              variant="text"
              class="mx-2"
            >
              {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
              <strong
                >© 2022 - {{ new Date().getFullYear() }} Danylov Oleksiy | All
                Rights Reserved</strong
              >
            </v-col>
          </v-row>
        </v-col>
      </v-footer>
    </v-app>
  </v-lazy>
</template>

<script>
export default {
  name: "navbar-component",
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
.v-application__wrap {
  background-color: #f0f0f0 !important;
  height: 100px !important;
  min-height: auto !important;
  max-height: auto !important;
}
</style>
