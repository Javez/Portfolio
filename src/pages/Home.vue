<template>
  <div class="home" @mousemove="handleMouseMoveX">
    <section class="chapter-one">
      <img
        class="bg-img-one"
        :style="{
           transform: `translate(-${translateX}px, -${translateY}px)`,
        }"
        src="../assets/triangle-bg-one.png"
        alt=""
      />
      <img
        class="bg-img-two"
        :style="{
             transform: `translate(${translateX}px, ${translateY}px)`,
        }"
        src="../assets/triangle-bg-two.png"
        alt=""
      />
      <Navbar />
      <Sidebar />
      <GreetingSection />
    </section>
    <section class="chapter-two">
      <TechSection />
    </section>
    <section class="chapter-three">
      <AboutPortfolioSection />
      <PortfolioRedirectSection />
    </section>
    <section class="chapter-four">
      <GameSection />
    </section>
    <section class="chapter-five">
      <Footer />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import GreetingSection from "../components/GreetingSection.vue";
import TechSection from "../components/TechSection.vue";
import AboutPortfolioSection from "../components/AboutPorfolioSection.vue";
import PortfolioRedirectSection from "../components/PortfolioRedirectSection.vue";
import GameSection from "../components/GameSection.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "home-page",
  data() {
    return {
      translateX: 0,
      translateY: 0,
    };
  },
  components: {
    Navbar,
    GreetingSection,
    TechSection,
    AboutPortfolioSection,
    PortfolioRedirectSection,
    GameSection,
    Footer,
  },
  methods: {
    handleMouseMoveX(event) {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      this.translateX = (mouseX / containerWidth) * 20;
      this.translateY = (mouseY / containerHeight) * 20;
    },
  },
};
</script>

<style>
.home {
  display: block;
  position: absolute;
  z-index: 99;
}
.bg-img-one,
.bg-img-two {
  display: block;
  position: absolute;
  object-fit: fill;
  z-index: 0;
  max-width: 100%;
  max-height: 100%;
}
.chapter-one {
  height: 70rem;
  width: 100vw;
  padding: 1rem;
  background-color: rgb(51, 51, 51);
}
.chapter-two {
  height: 70rem;
  width: 100vw;
  background-color: green;
}
.chapter-three {
  height: 70rem;
  width: 100vw;
  background-color: red;
}
.chapter-four {
  height: 70rem;
  width: 100vw;
  background-color: rgb(93, 1, 121);
}
.chapter-five {
  height: 70rem;
  width: 100vw;
  background-color: white;
}
</style>
