<template>
  <div class="home">
    <h1>Welcome to My Portfolio</h1>
    <Navbar />
    <Sidebar />
    <GreetingSection />
    <TechSection />
    <AboutPortfolioSection />
    <PortfolioRedirectSection />
    <GameSection />
    <Footer />
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
