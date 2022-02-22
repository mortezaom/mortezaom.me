<template>
  <div class="exp-desc">
    <p class="exp-title">
      {{ data.title }} @
      <a class="exp-corp" v-if="data.link != ''" :href="data.link">{{
        data.corp
      }}</a>
      <span v-else class="exp-corp">{{ data.corp }}</span>
    </p>
    <p class="exp-time">
      {{ data.time }}
    </p>
    <ul>
      <li v-for="item in data.texts">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type Experience from "../types/Experience";

const { data } = defineProps({
  data: Object as PropType<Experience>,
});

</script>

<style lang="scss">
.exp-desc {
  transition: all 0.2s ease;
  opacity: 1;

  .exp-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ccd6f6;
    margin-bottom: 12px;

    .exp-corp {
      color: #5aafff;
      text-decoration: none;
    }
  }

  .hide {
    opacity: 0;
  }

  .exp-time {
    margin-bottom: 20px;
    color: #a8b2d1;
    font-family: "Cascadia Code", monospace;
  }

  ul {
    > li {
      color: #a8b2d1;
      padding-left: 24px;
      position: relative;
      margin-bottom: 12px;
      // font-weight: 500;
      font-size: 1.05rem;
      line-height: 1.2;

      &::before {
        position: absolute;
        content: "◈ ";
        color: #5ab0ff;
        left: 0;
        font-size: small;
      }
    }
  }
}
</style>
