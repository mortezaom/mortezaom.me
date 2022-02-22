<template>
  <div class="right-side">
    <div>
      <a href="mailto:mortezaomarmohammady@gmail.com"
        >mortezaomarmohammady@gmail.com</a
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.right-side {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  padding: 69px;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  div {
    a {
      position: relative;
      display: flex;
      color: white;
      writing-mode: vertical-rl;
      text-decoration: none;
      font-family: "Cascadia Code", monospace;
      transition: all 0.23s ease;
      font-size: .9rem;

      &:hover {
        color: #5ab0ff;
        transform: translateY(-4px);
      }
    }

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 30px auto;
      background-color: white;
    }

    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 30px auto;
      background-color: white;
    }
  }
}
</style>
