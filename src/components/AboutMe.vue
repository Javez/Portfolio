<template>
  <v-lazy
    :min-height="200"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <section class="about-me-section" style="padding: 10rem;">
      <v-card style="display: flex; flex-direction: row; padding: 1rem;">
        <div >
          <div style="position: absolute; border: 0.5rem solid black; border-radius: 0.2rem; width: 20rem; height: 20rem; z-index: 5;"></div>
          <img
            style="position:relative; width: 20rem; height: 20rem; border-radius: 0.2rem; margin-top: 1rem; margin-left: 1rem; z-index: 10;"
            class="v-card-img"
            alt="resume person photo"
            src="../assets/my-icon.png"
          />
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;;">
          <v-card-title style="">About Me</v-card-title>
          <v-card-text style=""
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu
            leo, elementum sed tristique nec, gravida nec tellus. Ut neque
            felis, viverra quis arcu ac, sodales facilisis elit. Donec aliquet
            sagittis mauris, a placerat felis vehicula eget. Nam libero nisl,
            tristique vitae tincidunt nec, auctor sed elit. Phasellus tincidunt
            ligula ac nisl volutpat varius. Sed eu lectus vestibulum, rhoncus
            felis et, tristique ipsum. Proin finibus laoreet nunc a lobortis.
            Curabitur posuere ornare risus, et feugiat lorem accumsan eu.
            Suspendisse ac turpis enim. Cras vitae maximus diam. Fusce id nulla
            pellentesque mi tincidunt feugiat vitae eu sem. Sed id consequat
            sem, nec pulvinar turpis. Nulla volutpat justo nec egestas
            finibus.</v-card-text
          >
          <v-card-actions
            ><v-btn>Hire Me</v-btn><v-btn>Resume</v-btn></v-card-actions
          >
        </div>
      </v-card>
    </section>
  </v-lazy>
</template>

<script>
export default {
  name: "about-me-component",
};
</script>

<style>
.about-me-section_img {
  border-radius: 50%;
  width: 30rem;
}

@media (min-width: 0px) {
  .about-me-section_img {
    width: 15rem;
  }
}
@media (min-width: 640px) {
  .about-me-section_img {
    width: 25rem;
  }
}
@media (min-width: 960px) {
  .about-me-section_img {
    width: 25rem;
  }
}
@media (min-width: 1100px) {
  .about-me-section_img {
    width: 30rem;
  }
}
</style>
