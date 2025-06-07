<template>
  <section class="section experience" id="experience">
    <SectionTitle :number="'II'" :text="'Where I\'ve Work'" />
    <div>
      <div class="exp-sec exp-titles">
        <div v-for="({ id, title, desc }, index) in exps" class="exp-title" :class="{ active: index == selectedExp }"
          @click="changeExp(index)" :key="id + index">
          {{ title }}
        </div>
      </div>
      <div class="exp-sec exp-descs" :class="{ hide: shouldHide }">
        <ExperinceDesc :data="exps[selectedExp].desc" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./SectionTitle.vue";
import ExperinceDesc from "./ExperinceDesc.vue";

const selectedExp = ref(0);
const shouldHide = ref(false);

const changeExp = (index: number) => {
  shouldHide.value = true;
  setTimeout(() => {
    selectedExp.value = index;
    shouldHide.value = false;
  }, 150);
};

const exps = ref([
  {
    id: 0, // New entry, placed first
    title: "Bilit Entertainments",
    desc: {
      title: "Lead Developer & Architect",
      corp: "Bilit Entertainments",
      link: "https://bilit.events/",
      email: "hi@mortezaom.dev",
      time: "2024 - Present",
      texts: [
        `Architected and led the development of a high-volume ticketing platform, scaling to support thousands of users and process significant transaction volumes.`,
        `Designed a scalable microservices architecture using Node.js, React, and MongoDB to ensure high availability and performance.`,
        `Engineered a cross-platform mobile application with Flutter, creating a seamless and unified user experience across all devices.`,
        `Implemented secure, multi-currency payment gateways and a real-time analytics dashboard for event organizers.`,
      ],
    },
  },
  {
    id: 1,
    title: "Webfume LLC",
    desc: {
      title: "Application Developer",
      corp: "Webfume LLC",
      link: "https://webfume.com/",
      email: "m.omar@webfume.com",
      time: "March 2022 - October 2024",
      texts: [
        `Engineered full-stack applications for a diverse range of in-house and client projects, focusing on performance and scalability.`,
        `Developed responsive front-end interfaces using Vue.js and built cross-platform mobile applications with Flutter.`,
        `Collaborated within an agile team to design, develop, and deploy new software solutions and custom features.`,
        `Architected and implemented reusable component libraries and custom modules to accelerate development cycles.`,
      ],
    },
  },
  {
    id: 2,
    title: "Cynoco.co.uk",
    desc: {
      title: "Lead Frontend Developer",
      corp: "Cynoco",
      link: "https://cynoco.co.uk/",
      email: "mrtz@cynoco.co.uk",
      time: "June 2021 - Present",
      texts: [
        `Led the front-end development team, defining best practices and guiding the implementation of user-centric web applications.`,
        `Managed the full lifecycle of mobile application deployment to the Apple App Store and Google Play Store.`,
        `Utilized Flutter and Vue.js to build and maintain high-quality, responsive web and mobile applications.`,
        `Contributed to the design and development of new in-house products, focusing on market viability and technical robustness.`,
      ],
    },
  },
  {
    id: 4,
    title: "Freelancing",
    desc: {
      title: "Freelance Software Architect & Developer",
      corp: "Freelancer",
      link: "https://mortezaom.dev",
      email: "hi@mortezaom.dev",
      time: "Sep 2018 - Present",
      texts: [
        `Provided full-stack development and architectural consulting for a global client base, delivering custom software solutions.`,
        `Independently managed end-to-end project lifecycles, from initial client consultation and system design to final deployment.`,
        `Applied a broad range of technologies including Node.js, Vue.js, and Flutter to meet unique project requirements.`,
        `Acted as a technical mentor and problem-solver within developer communities, contributing to knowledge sharing.`,
      ],
    },
  },
]);
</script>

<style lang="scss">
.experience {
  padding: 150px 0px;
  min-height: 40vh;

  >div {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }

    .exp-titles {
      width: 20%;
      cursor: pointer;
      -ms-overflow-style: auto;
      scrollbar-color: var(--color-transparent) var(--scrollbar-background);
      scrollbar-width: thin;

      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        overflow-x: auto;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-background);
        border: 2px solid var(--color-primary-dark);
        border-radius: var(--mo-d-border-radius);
      }

      &::-webkit-scrollbar-corner {
        background-color: var(--scrollbar-background);
        border: 2px solid var(--color-primary-dark);
        border-radius: var(--mo-d-border-radius);
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      >div {
        padding: 16px 18px;
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--color-text-primary);
        transition: padding 0.3s ease;
        box-sizing: content-box;
        border-left: var(--color-primary-trans) solid 2px;

        @media (max-width: 768px) {
          border-left: none;
          border-bottom: var(--color-primary-trans) solid 2px;
          width: 33.99999%;
          text-align: center;
        }

        &:hover {
          background-color: var(--color-primary-trans);
        }

        &.active {
          border-left: var(--color-primary) solid 2px;

          @media (min-width: 769px) {
            padding-left: 24px;
          }

          @media (max-width: 768px) {
            border-left: none;
            border-bottom: var(--color-primary) solid 2px;
          }
        }
      }
    }

    .exp-descs {
      width: 70%;
      transition: opacity 0.15s ease-in-out;

      @media (max-width: 768px) {
        width: 100%;
      }

      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
