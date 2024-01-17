<template>
  <div class="home" @mousemove="handleMouseMoveX">
    <section class="chapter-one">
      <img
        class="bg-img-one"
        :style="{
          transform: `translate(${translateX}px, ${translateY}px)`,
        }"
        alt="Responsive Background"
        src="../assets/greeting-section/bg-desktop-one.svg"
      />
      <img
        class="bg-img-two"
        :style="{
          transform: `translate(${-translateX}px, ${-translateY}px)`,
        }"
        alt="Responsive Background"
        src="../assets/greeting-section/bg-desktop-two.svg"
      />
      <div class="blurry-div bg-img-two">
        <div class="blurry-div-content">This is a blurry div</div>
      </div>
      <Navbar />
      <GreetingSection />
    </section>
    <section class="chapter-two">
      <AboutMe />
    </section>
    <section class="chapter-three">
      <SkillsSection />
    </section>
    <section class="chapter-four">
      <ExperienceSection />
    </section>
    <section class="chapter-five">
      <EducationSection />
    </section>
    <section class="chapter-six">
      <AboutPortfolioSection />
      <PortfolioRedirectSection />
    </section>
    <section class="chapter-seven">
      <GameSection />
    </section>
    <section class="chapter-eight">
      <Footer />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import GreetingSection from "../components/GreetingSection.vue";
import AboutMe from "../components/AboutMe.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import EducationSection from "../components/EducationSection.vue";
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
    AboutMe,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    AboutPortfolioSection,
    PortfolioRedirectSection,
    GameSection,
    Footer,
  },
  methods: {
    updateImagePath() {
      this.$forceUpdate();
    },
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
.chapter-one {
  display: flex;
  justify-content: center;
  height: 60rem;
  width: 100vw;
  position: relative;
}
.bg-img-one,
.bg-img-two {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%; /* Modify this line */
  z-index: 0;
  top: 0; /* Add this line */
  left: 0; /* Add this line */
  object-fit: cover;
}

.chapter-two {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
.chapter-three {
  width: 100vw;
}
.chapter-four {
  height: 70rem;
  width: 100vw;
}
.chapter-five {
  height: 70rem;
  width: 100vw;
}
.chapter-six {
  height: 70rem;
  width: 100vw;
}
.chapter-seven {
  height: 70rem;
  width: 100vw;
}
.chapter-eight {
  width: 100vw;
}

.blurry-div {
  background-color: rgba(223, 223, 223, 0.596);
  filter: blur(100rem);
}

@media (min-width: 0px) {

}
@media (min-width: 640px) {

}
@media (min-width: 960px) {

}
@media (min-width: 1100px) {

}
</style>
