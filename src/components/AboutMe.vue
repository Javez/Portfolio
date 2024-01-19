<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <section id="about-me" class="about-me-section">
      <v-divider :thickness="3" class="border-opacity-25 ma-5"></v-divider>
      <v-card
        class="section-card"
        style="
          display: flex;
          flex-direction: column;
          padding: 1rem;
          margin: 10rem;
          justify-content: center;
          align-items: center;
        "
      >
        <div style="display: flex"><v-card-title>About Me</v-card-title></div>

        <div style="display: flex; flex-direction: column">
          <div
            class="about-me-first--part"
            style="
              display: flex;
              align-items: center;
              flex-direction: row;
              border: 2px solid black;
              border-radius: 0.2rem;
              padding: 1rem;
              margin-top: 1rem;
              margin-bottom: 1rem;
            "
          >
            <div>
              <div
                style="
                  position: absolute;
                  width: 20rem;
                  height: 20rem;
                  z-index: 5;
                  border-radius: 0.5rem;
                  border: 10px solid transparent;
                  background: linear-gradient(45deg, #ffff82, #ff0030)
                    border-box;
                  -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                    linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                "
              ></div>

              <img
                style="
                  position: relative;
                  width: 20rem;
                  height: 20rem;
                  border-radius: 0.2rem;
                  margin-top: 1rem;
                  margin-left: 1rem;
                  z-index: 10;
                "
                class="v-card-img"
                alt="resume person photo"
                src="../assets/about-section/my-icon.png"
              />
            </div>
            <div>
              <v-card-text
                >Hello there! I'm Oleksiy, the creator and curator behind this
                little corner of the internet. As a Fullstack Web Developer,
                I've embarked on a journey to share my experiences, insights,
                and a bit of my personality with you.
              </v-card-text>
              <v-card-text>
                Since childhood, I have been interested in new technologies and
                devices, thus discovering the possibilities of a PC and surfing
                the Internet. This is how I discovered programming.
              </v-card-text>
              <v-card-text>
                My interest boiled down to the development of various kinds of
                web applications and the driving force behind the creation of
                this space. With a background in computing, I've found a unique
                combination of skills and interests that I can't wait to share
                with you.
              </v-card-text>
            </div>
          </div>

          <div
            class="about-me-second--part"
            style="
              display: flex;
              align-items: center;
              flex-direction: row;
              border: 2px solid black;
              border-radius: 0.2rem;
              padding: 1rem;
              margin-top: 1rem;
              margin-bottom: 1rem;
            "
          >
            <div class="about-me-second--googlemap_group" style="order: 2">
              <div
                style="
                  position: absolute;
                  width: 20rem;
                  height: 20rem;
                  z-index: 5;
                  border-radius: 0.5rem;
                  border: 10px solid transparent;
                  background: linear-gradient(45deg, #ffff82, #ff0030)
                    border-box;
                  -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                    linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                "
              ></div>
              <iframe
                style="
                  position: relative;
                  width: 20rem;
                  height: 20rem;
                  border-radius: 0.2rem;
                  margin-top: 1rem;
                  margin-left: 1rem;
                  z-index: 10;
                "
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAXzY2-s6scppf_jWH6LVfRsklLmCDFoz8&q=Kyiv,Ukraine"
                allowfullscreen
              ></iframe>
            </div>
            <div class="about-me-second--text_group" style="order: 1">
              <v-card-text>
                I was born and continue to live in Ukraine. At the moment I am
                permanently located in Kyiv, in the very center of Ukraine.
              </v-card-text>
              <v-card-text>
                At the core of my world are honesty, fairness and hard work.
                I can adapt to any work time as well as work type (remote/office or hybrid).
              </v-card-text>
              <v-card-text>
                Feel free to write me your suggestions or follow me on LinkedIn.
                I love hearing from fellows, and I'm always open to new ideas
                and conversations. Now let's explore, a little bit of my skills.
              </v-card-text>
            </div>
          </div>
        </div>
        <div style="display: flex">
          <v-card-actions
            ><v-btn size="x-large" variant="outlined">Hire Me</v-btn
            ><v-btn size="x-large" variant="outlined"
              >Resume</v-btn
            ></v-card-actions
          >
        </div>
      </v-card>
    </section>
  </v-lazy>
</template>

<script>
export default {
  name: "about-me-component",
};
</script>

<style>
.about-me-section_img {
  border-radius: 50%;
  width: 30rem;
}
.v-card-text {
  font-size: 1.4rem !important;
  line-height: 2rem !important;
}

@media (min-width: 0px) {
  .about-me-section_img {
    width: 15rem;
  }
  .about-me-first--part,
  .about-me-second--part {
    flex-direction: column !important;
  }
  .about-me-second--googlemap_group {
    order: 1 !important;
  }
  .about-me-second--text_group {
    order: 2 !important;
  }
}
@media (min-width: 640px) {
  .about-me-section_img {
    width: 25rem;
  }
}
@media (min-width: 960px) {
  .about-me-section_img {
    width: 25rem;
  }
}
@media (min-width: 1100px) {
  .about-me-section_img {
    width: 30rem;
  }
}
@media (min-width: 1300px) {
  .about-me-first--part,
  .about-me-second--part {
    flex-direction: row !important;
  }
  .about-me-second--googlemap_group {
    order: 2 !important;
  }
  .about-me-second--text_group {
    order: 1 !important;
  }
}
</style>
