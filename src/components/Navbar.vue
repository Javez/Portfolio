<template>
    <nav>
        <section class="nav-logo-section"><img class="nav-logo-img" alt="Porfolio logo" src="../assets/logo.png" /></section>
        <section>
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Recent Projects</li>
            <li>Experience</li>
            <li>Donate</li>
          </ul>
        </section>
        <section>
          <div>Light/Dark Icon</div>
          <div>Language Icon</div>
        </section>
        <section>
          <p>Profile</p>
        </section>
    </nav>
</template>

<script>

export default {
  name: "navbar-component",
};
</script>

<style>
  .nav-logo-img {
    width: 40px;
    height: 40px;
  }
</style>
