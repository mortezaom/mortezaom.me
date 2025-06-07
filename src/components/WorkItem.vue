<template>
  <div class="work-item">
    <div class="icons">
      <Project class="i-project" />
      <a v-if="work.link != ''" :href="work.link"
        ><ExternalLink class="i-link"
      /></a>
    </div>
    <div class="texts">
      <a v-if="work.link != ''" :href="work.link"
        ><h3>{{ work.title }}</h3></a
      >
      <h3 v-else>{{ work.title }}</h3>
      <p v-html="work.description"></p>
    </div>
    <ul>
      <li v-for="item in work.technologies">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Project from "./icons/Project.vue";
import ExternalLink from "./icons/ExternalLink.vue";
import type { PropType } from "vue";
import type { Work } from "@/types/Work";

const { work } = defineProps({
  work: Object as PropType<Work>,
});
</script>
