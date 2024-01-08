<template>
    <section>
        <img
      class="about-me-section_img"
      alt="resume person photo"
      src="../assets/my-icon.png"
    />
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu leo, elementum sed tristique nec, gravida nec tellus. Ut neque felis, viverra quis arcu ac, sodales facilisis elit. Donec aliquet sagittis mauris, a placerat felis vehicula eget. Nam libero nisl, tristique vitae tincidunt nec, auctor sed elit. Phasellus tincidunt ligula ac nisl volutpat varius. Sed eu lectus vestibulum, rhoncus felis et, tristique ipsum. Proin finibus laoreet nunc a lobortis. Curabitur posuere ornare risus, et feugiat lorem accumsan eu. Suspendisse ac turpis enim. Cras vitae maximus diam. Fusce id nulla pellentesque mi tincidunt feugiat vitae eu sem. Sed id consequat sem, nec pulvinar turpis. Nulla volutpat justo nec egestas finibus. </p>
        <v-btn>Hire Me</v-btn>
        <v-btn>Resume</v-btn>
    </section>
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

@media (min-width: 0px) { .about-me-section_img {width: 15rem};  }
@media (min-width: 640px) { .about-me-section_img {width: 25rem};  }
@media (min-width: 960px) {  .about-me-section_img {width: 25rem};   }
@media (min-width: 1100px) {  .about-me-section_img {width: 30rem;}; }
</style>
