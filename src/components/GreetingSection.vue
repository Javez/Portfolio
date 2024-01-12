<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <section class="greeting-wrapper d-flex justify-center align-center">
      <div class="greeting-section d-flex justify-center align-center">
        <svg viewBox="0 0 1320 300">
          <text
            class="text-one"
            x="50%"
            y="35%"
            dy=".35em"
            text-anchor="middle"
          >
            Hello, nice to meet you
          </text>
          <text
            class="text-two"
            x="50%"
            y="65%"
            dy=".35em"
            text-anchor="middle"
          >
            Im a fullstack web developer
          </text>
        </svg>
      </div>
    </section>
  </v-lazy>
</template>

<script>
export default {
  name: "navbar-component",
  data() {},
};
</script>

<style>
:root {
  --color-primary: #f6aca2;
  --color-secondary: #f49b90;
  --color-tertiary: #f28b7d;
  --color-quaternary: #f07a6a;
  --color-quinary: #ee6352;
}

.greeting-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60rem;
  width: 100vw;
  z-index: 100;
}

.greeting-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 100vw;
  z-index: 101;
}

svg {
  font-family: "Russo One", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
}

svg text {
  text-transform: uppercase;
  animation: stroke 5s infinite alternate;
  stroke-width: 2;
  stroke: #a14d4d;
}

svg .text-one {
  font-size: 3rem;
}

svg .text-two {
  font-size: 2rem;
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(43, 43, 43);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(24, 24, 24);
  }
  80% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(17, 17, 17);
    stroke-width: 3;
  }
  100% {
    fill: rgb(0, 0, 0);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

@media (min-width: 0px) {
  svg .text-one {
    font-size: 4.5rem;
  }
  svg .text-two {
    font-size: 3.5rem;
  }
  
  .greeting-wrapper {
    height: 45rem;
  }
}
@media (min-width: 640px) {
  svg .text-one {
    font-size: 5rem;
  }
  svg .text-two {
    font-size: 4rem;
  }
  
  .greeting-wrapper {
    height: 45rem;
  }
}
@media (min-width: 960px) {
  svg .text-one {
    font-size: 4rem;
  }
  svg .text-two {
    font-size: 3rem;
  }
    .greeting-wrapper {
    height: 55rem;
  }
}
@media (min-width: 1100px) {
  svg .text-one {
    font-size: 3rem;
  }
  svg .text-two {
    font-size: 2rem;
  }
  
  .greeting-wrapper {
    height: 60rem;
  }
}
</style>
