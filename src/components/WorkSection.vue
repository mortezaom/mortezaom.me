<template>
  <section class="section work" id="work">
    <SectionTitle :number="'III'" :text="'Other things that I\'ve Built'" />
    <div class="works-con">
      <WorkItem v-for="work in works" :work="work" />
    </div>
    <button>More Projects on the way</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./SectionTitle.vue";
import WorkItem from "./WorkItem.vue";

const works = ref([
  {
    title: "Paper - Flutter News App with Firebase backend",
    description:
      "A cross-platform news app designed and developed with Google Flutter framework and admin panel created with Vue2",
    link: "https://codecanyon.net/item/paper-flutter-news-app-with-firebase-backend/28068212",
    technologies: [
      "Dart",
      "Flutter",
      "Firebase",
      "ADMob",
      "Vue2",
      "Javascript",
    ],
  },
  {
    title: "Farsian",
    description: `A informational app for iranians who live in UK, designed and developed for Cynoco.co.uk with Flutter`,
    link: "https://apps.apple.com/us/app/farsian/id6469011161",
    technologies: ["Flutter", "Dart", "Firebase", "Kotlin"],
  },
  {
    title: "TD App",
    description: `A radio station app that dedicated to promoting Persian artists around the world!, designed and developed for Cynoco.co.uk with Flutter`,
    link: "https://apps.apple.com/us/app/td-app/id6445922452",
    technologies: ["Flutter", "Dart", "Just Audio", "Firebase"],
  },
  {
    title: "Dast ba Dast",
    description: `A kind of social media app to connect afghan peoples around the world!, Work in progress for Webfume LLC with Flutter`,
    link: "https://webfume.com",
    technologies: ["Flutter", "Dart", "Firebase", "Hive"],
  },
  {
    title: "MDToast - MaterialDesign Toast",
    description:
      "MaterialDesign Toast library written with Kotlin with lots of extensions to interact easily in contexts",
    link: "https://github.com/mortezaom/MDToast",
    technologies: ["Android", "Kotlin"],
  },
  {
    title: "Mortezam.me",
    description: `A personal website for myself, designed and developed with VueJS 3, exported with Vite-SSG.`,
    link: "https://github.com/mortezaom/mortezaom.me",
    technologies: ["Vue3", "SCSS", "TypeScript", "Vite-SSG"],
  },
  {
    title: "BeatPlayer - Android Music Player",
    description:
      "A high functional music player based on open-source libraries and repos created for (Rozhak Team)",
    link: "https://cafebazaar.ir/app/com.rozhak.player",
    technologies: ["Android", "Kotlin", "MVVM", "Adivery"],
  },
  {
    title: "Other things",
    description: `Many small or large projects that I was part of development team or created by myself`,
    link: "",
    technologies: ["Java", "Kotlin", "Flutter", "..."],
  },
]);
</script>

<style lang="scss">
.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0px;

  >h2 {
    align-self: flex-start;
  }

  >button {
    border-radius: var(--mo-d-border-radius);
    border: var(--color-text-secondary) 1px solid;
    padding: 16px 40px;
    transition: all 0.23s ease;
    background: var(--color-transparent);
    color: var(--color-text-secondary);
    font-family: var(--font-second), monospace;
    margin-top: -12px;
  }

  .works-con {
    margin-top: 80px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;

    >.work-item {
      height: 300px;
      background-color: var(--color-primary-deep);
      box-shadow: var(--color-primary-deep-shadow) 0px 1px 2px 0px;
      border-radius: var(--mo-d-border-radius);
      padding: 24px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: pointer;

      * {
        text-decoration: none;
      }

      &:hover {
        transform: translateY(-8px);
      }

      &:hover .texts h3 {
        color: var(--color-primary);
        fill: var(--color-primary);
      }

      &:hover path {
        fill: var(--color-primary) !important;
      }

      .icons {
        display: flex;
        justify-content: space-between;

        .i-project {
          height: 36px;
          width: 36px;
        }

        .i-link {
          width: 24px;
          height: 24px;
          cursor: pointer;

          * {
            fill: var(--color-text-secondary);
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          }
        }
      }

      .texts {
        margin-top: 12px;
        margin-bottom: 16px;

        h3 {
          font-size: 1.15rem;
          line-height: 1.15;
          margin-bottom: 6px;
          color: var(--color-text-primary);
          transition: all 0.3s ease;
        }

        p {
          color: var(--color-text-secondary);
          font-size: 1.03rem;

          a {
            color: var(--color-primary);
          }
        }
      }

      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-size: 0.85rem;
        font-weight: 500;
        font-family: var(--font-second), monospace;
        line-height: 1.5;

        * {
          margin-left: 6px;
          margin-right: 6px;
          color: var(--color-text-secondary);
        }
      }
    }
  }
}
</style>
