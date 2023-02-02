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
    id: 1,
    title: "Webfume LLC",
    desc: {
      title: "Application Developer",
      corp: "Webfume LLC",
      link: "https://webfume.com/",
      email: "m.omar@webfume.com",
      time: "March 2022 - Present",
      texts: [
        `As an application developer, working on in-house/clients projects .`,
        `Working with Angular&Vue for web development and Flutter for mobile development.`,
        `Working with the team to create new products and services for clients and the company.`,
        `Creating custom libraries and custom modules for mobile and web projects.`,
      ],
    },
  },
  {
    id: 2,
    title: "Cynoco.co.uk",
    desc: {
      title: "Web/Mobile Developer",
      corp: "Cynoco",
      link: "https://cynoco.co.uk/",
      email: "mrtz@cycoco.co.uk",
      time: "June 2020 - Present",
      texts: [
        `Working as product manager for the web team.`,
        `Working and Realeasing apps to AppStore/PlayStore.`,
        `Creating apps and websites/panels with Flutter/VueJS.`,
        `Currently working on in-house products and services to release in code markets.`
      ],
    },
  },
  {
    id: 3,
    title: "TechnologyStar",
    desc: {
      title: "Web Developer",
      corp: "Technology Star",
      link: "",
      email: "",
      time: "Feb 2018 - July 2020",
      texts: [
        `Part of web applications and websites development team for writing different websites and web apps for customers and clients.`,
        `Work as a back-end developer for the front-end team.`,
        `Using and learning web technologies like PHP and Laravel.`,
      ],
    },
  },
  {
    id: 4,
    title: "Freelancing",
    desc: {
      title: "Web & Mobile Developer",
      corp: "Freelancer",
      link: "",
      email: "hi@mortezaom.dev",
      time: "Sep 2018 - Present",
      texts: [
        `Learning and working with the best and updated technologies for mobile and web development.`,
        `Creating and managing mobile and web projects for different clients around the globe.`,
        `Working with: Java/Kotlin , Dart/Flutter , Javascript/TypeScript/VueJS/NodeJS.`,
        `Helping people and solving problems in private groups (Telegram).`,
        `Design (maybe) and Develop new products to publish in code markets or download markets for clients or me.`,
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
