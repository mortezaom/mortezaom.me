<template>
  <div class="footer-section">
    Developed by <a href="https://github.com/mortezaom">MortezaOM</a>, Design based
    on
    <a href="https://brittanychiang.com">brittanychiang.com</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer-section {
  margin-top: 150px;
  margin-bottom: 24px;
  font-family: "Cascadia Code", monospace;
  font-size: 0.9rem;
  padding-right: 12px;
  padding-left: 12px;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  * {
    color: #ccd6f6;
  }

  a {
    text-decoration: none;
    color: #8892b0;
    &:visited {
      color: #8892b0;
    }
  }
}
</style>
