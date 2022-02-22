<template>
  <section class="section experience" id="experience">
    <SectionTitle :number="'II'" :text="'Where I\'ve Work'" />
    <div>
      <div class="exp-sec exp-titles">
        <div
          v-for="({ id, title, desc }, index) in exps"
          class="exp-title"
          :class="{ active: index == selectedExp }"
          @click="changeExp(index)"
          :key="id + index"
        >
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
import { ref, watch } from "vue";
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
    title: "TechnologyStar",
    desc: {
      title: "Web Developer",
      corp: "Technology Star",
      link: "",
      time: "Feb 2018 - July 2020",
      texts: [
        `Part of web applications and websites development team for writing different websites and web apps for customers and clients.`,
        `Work as a back-end developer for the front-end team.`,
        `Using and learning web technologies like PHP and Laravel.`,
      ],
    },
  },
  {
    id: 1,
    title: "TopDeves",
    desc: {
      title: "Web & Android Developer",
      corp: "Top Deves",
      link: "",
      time: "Sep 2020 - Aug 2021",
      texts: [
        `Working as a web developer for creating team website and client projects.`,
        `Part of the product management team for android apps.`,
        `Trainer for new or junior developers when joining the team.`,
        `Creating apps and websites with Java/Kotlin/NodeJS.`,
      ],
    },
  },
  {
    id: 1,
    title: "Freelancing",
    desc: {
      title: "Web & Mobile Developer",
      corp: "Freelancer",
      link: "",
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

  > div {
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
      scrollbar-color: #ff000000 #495670;
      scrollbar-width: thin;

      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        overflow-x: auto;
      }

      *::selection {
        background-color: #233554;
        color: #ccd6f6;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #495670;
        border: 2px solid #0a192f;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-corner {
        background-color: #495670;
        border: 2px solid #0a192f;
        border-radius: 10px;
      }
      &::-webkit-scrollbar {
        width: 8px;
      }

      > div {
        padding: 16px 18px;
        font-size: 1.1rem;
        font-weight: 500;
        color: #ccd6f6;
        transition: padding 0.3s ease;
        box-sizing: content-box;
        border-left: #5aafff2c solid 2px;

        @media (max-width: 768px) {
          border-left: none;
          border-bottom: #5aafff2c solid 2px;
          width: 33.99999%;
          text-align: center;
        }

        &:hover {
          background-color: #5aafff2c;
        }

        &.active {
          border-left: #5aafff solid 2px;

          @media (min-width: 769px) {
            padding-left: 24px;
          }

          @media (max-width: 768px) {
            border-left: none;
            border-bottom: #5aafff solid 2px;
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
