<template>
  <v-app>
      <v-footer class="footer">
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
.footer {
  border-top: 0.2rem solid black !important;
}
.v-application__wrap {
  background-color: #00000000 !important;
  height: 100px !important;
  min-height: auto !important;
  max-height: auto !important;
}
</style>
