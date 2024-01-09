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
      <Navbar/>
      <Sidebar />
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
  width: calc(100vw - 2rem);
  height: 68rem;
  z-index: 0;
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
  background-color: rgb(163, 163, 163);
}
.chapter-three {
  height: 70rem;
  width: 100vw;
  background-color: rgb(55, 55, 55);
}
.chapter-four {
  height: 70rem;
  width: 100vw;
  background-color: rgb(190, 190, 190);
}
.chapter-five {
  height: 70rem;
  width: 100vw;
  background-color: rgb(67, 67, 67);
}
.chapter-six {
  height: 70rem;
  width: 100vw;
  background-color: rgb(190, 190, 190);
}
.chapter-seven {
  height: 70rem;
  width: 100vw;
  background-color: rgb(73, 72, 72);
}
.chapter-eight {
  height: 70rem;
  width: 100vw;
  background-color: rgb(190, 190, 190);
}

@media (min-width: 0px) {
  .chapter-one {
    height: 55rem;
  }
  .bg-img-one,
  .bg-img-two {
    height: 52rem;
  }
}
@media (min-width: 640px) {
  .chapter-one {
    height: 60rem;
  }
  .bg-img-one,
  .bg-img-two {
    height: 58rem;
  }
}
@media (min-width: 960px) {
  .chapter-one {
    height: 65rem;
  }
  .bg-img-one,
  .bg-img-two {
    height: 62rem;
  }
}
@media (min-width: 1100px) {
  .chapter-one {
    height: 70rem;
  }
  .bg-img-one,
  .bg-img-two {
    height: 68rem;
  }
}
</style>
