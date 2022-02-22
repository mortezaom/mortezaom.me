<template>
  <section class="section main" id="main">
    <p class="f-p">Hello, my name is</p>
    <h1>Morteza Omar Mohammadi</h1>
    <h2>Web & Mobile Developer with some experiece :)</h2>
    <p class="s-p">
      I'm a software engineer who creates apps or websites to be part of the
      digital world. Currently, I'm focused on learning new things to improve my
      knowledge and working as a freelancer to create improved products for
      people and organizations (or teams).
    </p>
    <button v-scroll-to="'#contact'">Contact Me</button>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;

  * {
    margin-bottom: 16px;
  }

  .f-p {
    font-family: "Cascadia Code", monospace;
    color: #5ab0ff;
    font-weight: 600;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    @media (max-width: 1080px) {
      font-size: 5.4vw;
    }
    @media (max-width: 768px) {
      font-size: 7vw;
    }

    @media (max-width: 600px) {
      font-size: 46px;
    }

    @media (max-width: 450px) {
      font-size: 34px;
    }
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgba(214, 235, 255, 0.514);

    @media (max-width: 1080px) {
      font-size: 4.8vw;
    }
    @media (max-width: 768px) {
      font-size: 6vw;
    }

    @media (max-width: 600px) {
      font-size: 26px;
    }

    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  .s-p {
    max-width: 504px;
    font-size: 1.3rem;
    line-height: 1.2;
    color: rgba(214, 235, 255, 0.514);

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 450px) {
      font-size: 1.1rem;
    }
  }

  button {
    font-family: "cascadia code", monospace;
    margin-bottom: 0px;
    margin-top: 16px;
    display: flex;
    padding: 16px 40px;
    background-color: #ff000000;
    border-radius: 8px;
    border: #5ab0ff 1px solid;
    color: #5ab0ff;
    font-size: 1.2rem;
    transition: all 0.23s ease;

    &:hover {
      background-color: #5aafff2c;
    }
  }
}
</style>
