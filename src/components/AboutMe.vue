<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <section id="about-me" class="about-me-section" style="padding: 10rem">
      <v-card
        class="section-card"
        style="
          display: flex;
          flex-direction: column;
          padding: 1rem;
          justify-content: center;
          align-items: center;
        "
      >
        <div style="display: flex"><v-card-title>About Me</v-card-title></div>

        <div style="display: flex; flex-direction: column">
          <div
            class="about-me-first--part"
            style="display: flex; align-items: center; flex-direction: row"
          >
            <div>
              <div
                style="
                  position: absolute;
                  border: 0.5rem solid black;
                  border-radius: 0.2rem;
                  width: 20rem;
                  height: 20rem;
                  z-index: 5;
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
                >Welcome to Oleksiy's World! Hello there! I'm Oleksiy, the
                creator and curator behind this little corner of the internet.
                As a Fullstack Web Developer, I've embarked on a journey to
                share my experiences, insights, and a bit of my personality with
                you.
              </v-card-text>
              <v-card-text>
                A Brief Introduction: Since childhood, I have been interested in
                new technologies and devices, thus discovering the possibilities
                of a PC and surfing the Internet. This is how I discovered
                programming. My interest boiled down to the development of
                various kinds of web applications and the driving force behind
                the creation of this space. With a background in computing, I've
                found a unique combination of skills and interests that I can't
                wait to share with you.
              </v-card-text>
              <v-card-text>
                Embarking on the Journey: The idea for this website sprouted
                from my own journey—filled with twists, turns, and moments. It's
                my hope that by sharing my experiences, i can interest you in me
                as a developer, for future cooperation.
              </v-card-text>
            </div>
          </div>

          <div
            class="about-me-second--part"
            style="display: flex; align-items: center; flex-direction: row"
          >
            <div class="about-me-second--googlemap_group" style="order: 2">
              <div
                style="
                  position: absolute;
                  border: 0.5rem solid black;
                  border-radius: 0.2rem;
                  width: 20rem;
                  height: 20rem;
                  z-index: 5;
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
                Values and Mission: At the core of my world are honesty,
                fairness and hard work. This website is more than just a
                collection of words and images; it's a place built on to share
                my interests and possibilities with you. I believe in that we
                can get along well together and am excited to have you still
                reading this resume.
              </v-card-text>
              <v-card-text>
                Origin: I was born and continue to live in Ukraine. At the
                moment I am permanently in Kyiv, in the very center of Ukraine.
              </v-card-text>
              <v-card-text>
                Connect With Me: Feel free to write me your suggestions or
                follow me on LinkedIn. I love hearing from fellows, and I'm
                always open to new ideas and conversations. Now let's explore, a
                little bit of my skills.
              </v-card-text>
            </div>
          </div>
        </div>
        <div style="display: flex">
          <v-card-actions
            ><v-btn>Hire Me</v-btn><v-btn>Resume</v-btn></v-card-actions
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
  line-height: 2rem;
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
