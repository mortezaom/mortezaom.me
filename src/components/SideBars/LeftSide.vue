<template>
  <div class="left-side">
    <ul>
      <a href="https://github.com/mortezaom" target="_blank">
        <Github />
      </a>
      <a href="https://linkedin.com/in/mortezaom" target="_blank">
        <Linkedin />
      </a>
      <a href="https://t.me/MortezOM" target="_blank">
        <Telegram />
      </a>
      <a href="https://twitter.com/omar_morteza" target="_blank">
        <Twitter />
      </a>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Github from "../icons/Github.vue";
import Linkedin from "../icons/Linkedin.vue";
import Telegram from "../icons/Telegram.vue";
import Twitter from "../icons/Twitter.vue";
</script>

<style lang="scss">
.left-side {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  padding: 50px;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    padding: 22px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  ul>a {
    padding: 20px;
    stroke: var(--color-icons);
    fill: var(--color-icons);
    transition: all 0.23s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 20px;
    height: 20px;

    &:hover {
      stroke: var(--color-primary);
      transform: translateY(-6px);
    }
  }

  ul::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 10px auto;
    background-color: var(--color-icons);

    @media (max-width: 768px) {
      display: none;
    }
  }

  ul::before {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 10px auto;
    background-color: var(--color-icons);

    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
