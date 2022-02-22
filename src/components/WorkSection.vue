<template>
  <section class="section work" id="work">
    <SectionTitle :number="'III'" :text="'Things that I\'ve Built'" />
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
    title: "MDToast - MaterialDesign Toast",
    description:
      "MaterialDesign Toast library written with Kotlin with lots of extensions to interact easily in contexts",
    link: "https://github.com/mortezaom/MDToast",
    technologies: ["Android", "Kotlin"],
  },
  {
    title: "BeatPlayer - Android Music Player",
    description:
      "A high functional music player based on open-source libraries and repos created for (Rozhak Team)",
    link: "https://cafebazaar.ir/app/com.rozhak.player",
    technologies: ["Android", "Kotlin", "MVVM", "Adivery"],
  },
  {
    title: "News Section for ZamInfo Application",
    description:
      "Adding a news section to an android app called ZamInfo using Flutter/Dart (somethings may changed after I finish this project)",
    link: "https://play.google.com/store/apps/details?id=com.griene.zaminfo",
    technologies: ["Dart", "Flutter", "BloC", "Firebase"],
  },
  {
    title: "My Personal website",
    description: `Design is based on <a href="brittanychiang.com">Brittany's</a> website and coded from scratch with Vue3 as a SSG website`,
    link: "/",
    technologies: ["Vue3", "SCSS", "TypeScript"],
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

  > h2 {
    align-self: flex-start;
  }

  > button {
    border-radius: 6px;
    border: #8892b0 1px solid;
    padding: 16px 40px;
    transition: all 0.23s ease;
    background: #ff000000;
    color: #8892b0;
    font-family: "Cascadia Code", monospace;
    margin-top: -12px;
    // &:hover {
    //   background-color: #5aafff2c;
    // }
  }
  .works-con {
    margin-top: 80px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    > .work-item {
      height: 300px;
      background-color: #0e2242;
      box-shadow: #0a192f1f 0px 1px 2px 0px;
      border-radius: 6px;
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
        color: #5aafff;
        fill: #5aafff;
      }

      &:hover path {
        fill: #5aafff !important;
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
            fill: #8892b0;
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
          color: #ccd6f6;
          transition: all 0.3s ease;
        }
        p {
          color: #8892b0;
          font-size: 1.03rem;

          a {
            color: #5aafff;
          }
        }
      }

      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-size: 0.85rem;
        font-weight: 500;
        font-family: "Cascadia code", monospace;
        line-height: 1.5;
        * {
          margin-left: 6px;
          margin-right: 6px;
          color: #8892b0;
        }
      }
    }
  }
}
</style>
