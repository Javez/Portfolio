<template>
  <section class="greeting-section" z-index="1">
    <h1 class="greeting-section_h1">Glad to see you on my page</h1>
    <img
      class="greeting-section_img"
      alt="resume person photo"
      src="../assets/my-icon.png"
    />
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
  position: relative;
  z-index: 10;
}

.greeting-section_h1 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.greeting-section_img {
  border-radius: 50%;
  width: 15rem;
}

.greeting-section_h3 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
