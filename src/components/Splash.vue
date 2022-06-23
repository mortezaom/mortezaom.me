<template>
  <transition name="fade">
    <div v-show="show" :class="['vue-splash', 'vue-splash--fixed']">
      <div>
        <div class="vue-splash__anim">
          <div class="img">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Logo from "./icons/Logo.vue";

const { show } = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
});

onMounted(() => {
  setColor();
});
const setColor = () => {
  document.documentElement.style.setProperty("--splash-color", "#5ab0ffaa");
};
</script>

<style lang="scss" scoped>
$splash-color: var(--splash-color);

.vue-splash {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11111;
  background-color: var(--color-primary-dark) !important;

  &--fixed {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: var(--color-text-white);
  }
}

.vue-splash__anim {
  text-align: center;
  animation: splashAnimation 1.3s infinite;

  .img {
    margin: auto;

    svg {
      width: 100px;
      height: 100px;
      fill: var(--color-primary);
    }
  }
}

@keyframes splashAnimation {
  0% {
    filter: drop-shadow(0px 0px 0px $splash-color);
  }

  100% {
    filter: drop-shadow(0px 0px 200px $splash-color);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
