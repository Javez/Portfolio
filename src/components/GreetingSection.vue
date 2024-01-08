<template>
  <section class="greeting-section" z-index="1">
    <h1 class="greeting-section_h1">Glad to see you on my page</h1>
    <h3 class="greeting-section_h3">Im a full stack web developer</h3>
  </section>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>

<style>
.greeting-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 60rem;
  z-index: 10;
}

.greeting-section_h1 {
  font-size: 4rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.greeting-section_h3 {
  font-size: 3rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
@media (min-width: 0px) { .greeting-section_h1 {font-size:2rem;};  .greeting-section_h3{font-size:1.5rem;}; }
@media (min-width: 640px) { .greeting-section_h1 {font-size:2.5rem;};  .greeting-section_h3{font-size:2rem;}; }
@media (min-width: 960px) { .greeting-section_h1 {font-size:3rem;};  .greeting-section_h3{font-size:2.5rem;};  }
@media (min-width: 1100px) { .greeting-section_h1 {font-size:3.5rem;};  .greeting-section_h3{font-size:2.5rem;}; }
</style>
