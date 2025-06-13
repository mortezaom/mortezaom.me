<template>
  <section class="section main" id="main">
    <p class="f-p">Hello, my name is</p>
    <h1>Morteza Omar Mohammadi</h1>
    <h2>Full-Stack Developer & Software Architect</h2>
    <p class="s-p">
      I design and build complex, scalable, and user-centric digital solutions.
      My focus is on architecting robust systems from the ground up, ensuring
      they are not only functional but also secure, performant, and built to
      last.
    </p>
    <button v-scroll-to="'#contact'">Get In Touch</button>
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
    font-family: var(--font-second), monospace;
    color: var(--color-primary);
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
    color: var(--color-text-secondary);

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
    color: var(--color-text-secondary);

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 450px) {
      font-size: 1.1rem;
    }
  }

  button {
    font-family: var(--font-second), monospace;
    margin-bottom: 0px;
    margin-top: 16px;
    display: flex;
    padding: 16px 40px;
    background-color: var(--color-transparent);
    border-radius: var(--mo-d-border-radius);
    border: var(--color-primary) 1px solid;
    color: var(--color-primary);
    font-size: 1.2rem;
    transition: all 0.23s ease;

    &:hover {
      background-color: var(--color-primary-trans);
    }
  }
}
</style>
