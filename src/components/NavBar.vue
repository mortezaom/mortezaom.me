<template>
  <nav class="navbar" id="navBar" :class="{ 'navbar--hidden': !showNavbar }">
    <a class="nav-icon" href="/">
      <Logo />
    </a>
    <div class="nav-links">
      <a v-scroll-to="'#about'" class="nav-link"><span>I.</span> About</a>
      <a v-scroll-to="'#experience'" class="nav-link"
        ><span>II.</span> Experience</a
      >
      <a v-scroll-to="'#work'" class="nav-link"><span>III.</span> Work</a>
      <a v-scroll-to="'#contact'" class="nav-link"><span>IV.</span> Contact</a>
      <a class="nav-button" target="_blank" href="/Resume.pdf">
        <span>Resume</span>
      </a>
    </div>
    <Burger />
  </nav>
</template>

<script setup lang="ts">
import Logo from "./icons/Logo.vue";
import Burger from "./Burger.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

const onScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) {
    return;
  }
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 30) {
    return;
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss">
nav.navbar {
  height: 8vh;
  display: flex;
  position: fixed;
  top: 0px;
  z-index: 100;
  padding: 0px 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #0a192f9d;
  transition: all 0.3s ease;

  &.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }

  @media (max-width: 1080px) {
    padding: 0px 25px;
  }

  @media (max-width: 768px) {
    padding: 0px 16px;
    height: 8vh;
  }

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  .nav-icon {
    position: relative;
    height: 60px;
    width: 60px;

    @media (max-width: 768px) {
      height: 40px;
      width: 40px;
    }

    #mLogo {
      fill: #5ab0ff;
      transition: all 0.23s ease;
      cursor: pointer;

      &:hover {
        fill: #5aafffbb;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    position: relative;
    font-family: "Cascadia Code", monospace !important;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      display: none;
    }

    .nav-link {
      padding: 16px;
      cursor: pointer;
      transition: all 0.23s ease;
      font-family: inherit;
      color: inherit;
      text-decoration: none;

      &:visited {
        color: inherit;
      }
      span {
        color: #5ab0ff !important;
        font-family: inherit;
        transition: all 0.23s ease;
      }

      &:hover {
        color: #5ab0ff;
      }
    }

    .nav-button {
      border-radius: 6px;
      border: #5ab0ff 1px solid;
      padding: 12px 8px;
      margin: 4px 8px;
      transition: all 0.23s ease;
      cursor: pointer;
      color: inherit;
      text-decoration: none;

      &:visited {
        color: inherit;
      }

      span {
        margin-left: 6px;
        font-family: inherit;
        margin-right: 6px;
      }

      &:hover {
        background-color: #5aafff2c;
      }
    }
  }
}
</style>
