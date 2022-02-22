<template>
  <div
    @click="isOpen = !isOpen"
    class="burger burger-slip"
    :class="{ open: isOpen }"
    id="burgerMenu"
  >
    <div class="burger-lines"></div>
  </div>
  <div
    id="overlay"
    class="overlay"
    :class="{ active: isOpen }"
    @click="onClickOutside"
  ></div>
  <div id="navMenu" class="nav-menu" :class="{ 'menu-open': isOpen }">
    <div class="menu-links">
      <div v-scroll-to="'#about'" @click="isOpen = false" class="menu-link">
        <span>I.</span> About
      </div>
      <div
        v-scroll-to="'#experience'"
        @click="isOpen = false"
        class="menu-link"
      >
        <span>II.</span> Experience
      </div>
      <div v-scroll-to="'#work'" @click="isOpen = false" class="menu-link">
        <span>III.</span> Work
      </div>
      <div v-scroll-to="'#contact'" @click="isOpen = false" class="menu-link">
        <span>IV.</span> Contact
      </div>
      <a class="menu-button" target="_blank" href="/Resume.pdf">
        <span>Resume</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isOpen = ref<Boolean>(false);

const onClickOutside = () => {
  isOpen.value = false;
};
watch(
  () => isOpen.value,
  (open) => {
    if (open) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }
);
</script>

<style lang="scss">
.no-scroll {
  height: 100vh;
  overflow: hidden;
}
.nav-menu {
  width: 350px;
  transform: translateX(350px);
  height: 100%;
  background: #0a192f;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: all 0.3s ease;
  z-index: 100;
  opacity: 0;

  @media (max-width: 400px) {
    width: 100vw;
    transform: translateX(100vw);
  }
}
.menu-open {
  opacity: 1;
  transform: translateX(0);
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 0vw;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -110;
}
.overlay.active {
  z-index: 99;
  opacity: 1;
  width: 100vw;
}

.burger {
  height: 3em;
  width: 3em;
  position: relative;
  font-size: 12px;
  cursor: pointer;
  -webkit-transition: 0.3s all;
  -o-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-tap-highlight-color: transparent;
  z-index: 111;
}
.burger
  .burger::after
  .burger::before
  .burger-lines
  .burger-lines::after
  .burger-lines::before {
  z-index: 2000;
}

@media (min-width: 769px) {
  .burger {
    display: none;
  }
}
.burger .burger-lines:after {
  left: 0;
  top: -1em;
}
.burger .burger-lines:before {
  left: 1em;
  top: 1em;
}
.burger:after {
  content: "";
  display: block;
  position: absolute;
  height: 150%;
  width: 150%;
  top: -25%;
  left: -25%;
}
.burger .burger-lines {
  top: 50%;
  margin-top: -0.125em;
}
.burger .burger-lines,
.burger .burger-lines:after,
.burger .burger-lines:before {
  pointer-events: none;
  display: block;
  content: "";
  width: 100%;
  border-radius: 0.25em;
  background-color: white;
  height: 0.25em;
  position: absolute;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}
.burger .burger-lines:after {
  left: 0;
  top: -1em;
}
.burger .burger-lines:before {
  left: 1em;
  top: 1em;
}
.burger.burger-slip .burger-lines:after,
.burger.burger-slip .burger-lines:before {
  width: 2em;
}

.burger.burger-slip .burger-lines,
.burger.burger-slip .burger-lines:after,
.burger.burger-slip .burger-lines:before {
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.burger.burger-slip.open .burger-lines {
  -webkit-transform: translateX(-2em);
  -ms-transform: translateX(-2em);
  transform: translateX(-2em);
  background-color: transparent;
}

.burger.burger-slip.open .burger-lines:before,
.burger.burger-slip.open .burger-lines:after {
  left: 0.5em;
  top: 0px;
}

.burger.burger-slip.open .burger-lines:before {
  -webkit-transform: translateX(2em) rotate(135deg);
  -ms-transform: translateX(2em) rotate(135deg);
  transform: translateX(2em) rotate(135deg);
}

.burger.burger-slip.open .burger-lines:after {
  -webkit-transform: translateX(2em) rotate(-135deg);
  -ms-transform: translateX(2em) rotate(-135deg);
  transform: translateX(2em) rotate(-135deg);
}
.menu-links {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 1.15rem;

  div {
    cursor: pointer;
    transition: all 0.23s ease;
    font-family: "Cascadia Code", monospace;
    span {
      color: #5ab0ff !important;
      font-family: inherit;
      transition: all 0.23s ease;
    }

    &:hover {
      color: #5ab0ff;
    }
  }

  .menu-link {
    margin: 8px;
    padding: 16px;
  }

  .menu-button {
    margin-top: 24px;
    padding: 16px 32px;
    border-radius: 6px;
    border: #5ab0ff 1px solid;
    color: inherit;
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &:hover {
      background-color: #5aafff2c;
    }
  }
}
</style>
