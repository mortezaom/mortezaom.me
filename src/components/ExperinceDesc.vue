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
    <a class="exp-email" :href="'mailto:' + data.email">
      {{ data.email }}
    </a>
    <ul>
      <li v-for="item in data.texts">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Experience } from "../types/Experience";

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
    color: var(--color-text-primary);
    margin-bottom: 12px;

    .exp-corp {
      color: var(--color-primary);
      text-decoration: none;
    }
  }

  .exp-email {
    color: var(--color-primary);
    font-size: 1.05rem;
    text-decoration: none;
  }

  .hide {
    opacity: 0;
  }

  .exp-time {
    margin-bottom: 10px;
    color: var(--color-text-secondary);
    font-family: var(--font-second), monospace;
  }

  ul {
    margin-top: 10px;
    >li {
      color: var(--color-text-secondary);
      padding-left: 24px;
      position: relative;
      margin-bottom: 12px;
      font-size: 1.05rem;
      line-height: 1.2;

      &::before {
        position: absolute;
        content: "◈ ";
        color: var(--color-primary);
        left: 0;
        font-size: small;
      }
    }
  }
}
</style>
