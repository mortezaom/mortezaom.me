<script setup lang="ts">
const { number, text } = defineProps(["number", "text"]);
</script>

<template>
  <h2 class="section-title">
    <span>{{ number }}. </span> {{ text }}
  </h2>
</template>

<style lang="scss">
.section-title {
  font-size: 2rem;
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;
  color: #ccd6f6;

  @media (max-width: 768px) {
    font-size: 5vw;
  }

  @media (max-width: 450px) {
    font-size: 28px;
  }

  &:after {
    content: "";
    height: 1px;
    width: 300px;
    max-width: 30%;
    position: absolute;
    margin-left: 24px;
    top: 50%;
    bottom: 50%;
    background-color: #8892b0;


    @media (max-width: 450px) {
      display: none;
    }
  }

  span {
    font-size: 1.8rem;
    font-family: "Cascadia code", sans-serif;
    color: #5ab0ff;

    @media (max-width: 768px) {
      font-size: 4vw;
    }

    @media (max-width: 450px) {
      font-size: 22px;
    }
  }
}
</style>
