<script setup lang="ts">
import MainSection from "../components/MainSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import WorkSection from "../components/WorkSection.vue";
import ContactSection from "../components/ContactSection.vue";

</script>

<template>
  <MainSection />
  <AboutSection />
  <ExperienceSection />
  <WorkSection />
  <ContactSection />
</template>

<style lang="scss">
.section {
  width: 80%;
  max-width: 1024px;

  @media (min-width: 769px) {
    width: 70%;
  }
}
</style>
