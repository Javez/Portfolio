<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <section class="greeting-wrapper d-flex justify-center align-center">
      <div class="greeting-section">
        <svg class="svg-one" width="50vw" height="10rem">
          <g fill="#FFF" fill-opacity="0" stroke-miterlimit="10">
            <g stroke="url(#a)" stroke-width="7.919999999999999">
              <path transform="" d="M1409 581 1450.35 511 1490 581z" />
              <circle
                stroke-width="2.64"
                transform=""
                cx="500"
                cy="100"
                r="40"
              />
              <path
                transform=""
                d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
              />
            </g>
            <g stroke="url(#b)" stroke-width="2.4">
              <path
                transform=""
                d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
              />
              <rect
                stroke-width="5.28"
                transform=""
                x="1039"
                y="709"
                width="100"
                height="100"
              />
              <path
                transform=""
                d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
              />
            </g>
          </g>
          <text class="text-one" x="50%" y="25%" text-anchor="middle">
            Hi, my name is Oleksiy
          </text>
          <text class="text-two" x="50%" y="85%" text-anchor="middle">
            Im a fullstack web developer
          </text>
        </svg>
        <svg class="svg-two" width="50vw" height="20rem" display="none">
          <text class="text-one" x="50%" y="15%" text-anchor="middle">Hi</text>
          <text class="text-one" x="50%" y="35%" text-anchor="middle">
            my name is Oleksiy
          </text>
          <text class="text-two" x="50%" y="75%" text-anchor="middle">
            im a fullstack
          </text>
          <text class="text-two" x="50%" y="95%" text-anchor="middle">
            web developer
          </text>
        </svg>
      </div>
      <div class="greeting-section" style="display: none"></div>
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
  width: calc(100vw - 2rem);
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
  width: calc(100vw - 2rem);
  height: 20rem;
}

svg text {
  text-transform: uppercase;
  animation: stroke 5s ease-out alternate;
  stroke-width: 2;
  stroke: #a14d4d00;
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
    font-size: 2rem;
  }
  svg .text-two {
    font-size: 1.5rem;
  }
  .svg-one {
    display: none;
  }
  .svg-two {
    display: block;
  }
}
@media (min-width: 640px) {
  svg .text-one {
    font-size: 3rem;
  }
  svg .text-two {
    font-size: 2.5rem;
  }
  .svg-one {
    display: none;
  }
  .svg-two {
    display: block;
  }
}
@media (min-width: 960px) {
  svg .text-one {
    font-size: 4rem;
  }
  svg .text-two {
    font-size: 3rem;
  }
  .svg-one {
    display: block;
  }
  .svg-two {
    display: none;
  }
}
@media (min-width: 1200px) {
  svg .text-one {
    font-size: 5rem;
  }
  svg .text-two {
    font-size: 4rem;
  }
  .svg-one {
    display: block;
  }
  .svg-two {
    display: none;
  }
}
</style>
