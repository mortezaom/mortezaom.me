<template>
  <div class="footer-section">
    Developed by <a href="https://github.com/mortezaom">MortezaOM</a>, Design based
    on
    <a href="#">brittanychiang.com</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer-section {
  margin-top: 150px;
  margin-bottom: 24px;
  font-family: var(--font-second), monospace;
  font-size: 0.9rem;
  padding-right: 12px;
  padding-left: 12px;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  * {
    color: var(--color-text-primary);
  }

  a {
    text-decoration: none;
    color: var(--color-text-secondary);

    &:visited {
      color: var(--color-text-secondary);
    }
  }
}
</style>
