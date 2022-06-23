<template>
  <div class="footer">
    <ul>
      <li>
        <a href="https://github.com/mortezaom" target="_blank">
          <Github />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/mortezaom" target="_blank">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://t.me/MortezOM" target="_blank">
          <Telegram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/omar_morteza" target="_blank">
          <Twitter />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Github from "./icons/Github.vue";
import Linkedin from "./icons/Linkedin.vue";
import Telegram from "./icons/Telegram.vue";
import Twitter from "./icons/Twitter.vue";
</script>

<style lang="scss">
.footer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  margin-top: 50px;
  padding-top: 45px;
  padding-bottom: 8px;
  align-items: center;
  box-sizing: border-box;
  display: none;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    display: flex;
  }

  ul {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }

  ul>li {
    padding: 24px;
    width: 24px;
    height: 24px;
    stroke: var(--color-icons);
    fill: var(--color-icons);
    transition: all 0.23s ease;
    cursor: pointer;

    &:hover {
      stroke: var(--color-primary);
      transform: translateY(-6px);
    }
  }
}
</style>
