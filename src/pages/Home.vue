<template>
  <div class="home">
    <section class="chapter-one">
      <div class="background-wrap-one">
        <div class="background-wrap-two">
          <Navbar />
          <Sidebar />
          <GreetingSection />
        </div>
      </div>
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
  import Sidebar from "../components/Sidebar.vue";
  import GreetingSection from "../components/GreetingSection.vue";
  import TechSection from "../components/TechSection.vue";
  import AboutPortfolioSection from "../components/AboutPorfolioSection.vue";
  import PortfolioRedirectSection from "../components/PortfolioRedirectSection.vue";
  import GameSection from "../components/GameSection.vue";
  import Footer from "../components/Footer.vue";

  export default {
    name: "home-page",
    components: {
      Navbar,
      Sidebar,
      GreetingSection,
      TechSection,
      AboutPortfolioSection,
      PortfolioRedirectSection,
      GameSection,
      Footer,
    },
  };
</script>

<style>
  @import '../assets/styles/base.css';
  @import '../assets/styles/typography.css';
  .chapter-one{
    height: 100vh;
    width: 100vw;
    background-color: gray;
    .background-wrap-one {
      .background-wrap-two {
        
      }
    }
  }
  .chapter-two{
    height: 100vh;
    width: 100vw;
    background-color: green;
  }
  .chapter-three{
    height: 100vh;
    width: 100vw;
    background-color: red;
  }
  .chapter-four{
    height: 100vh;
    width: 100vw;
    background-color: black;
  }
  .chapter-five {
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
</style>
