<template>
  <section class="section contact" id="contact">
    <h3 class="s-title"><span>IV. </span> What's Next?</h3>
    <h2>Get In Touch</h2>
    <p>
      Although I'm currently working as a freelancer, I might be available for
      your project or job opportunities. Contact me for anything you want, my
      inbox is always open to you :)
    </p>
    <a href="mailto:mortezaomarmohammady@gmail.com">Feel free to contact</a>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px !important;
  text-align: center;
  padding: 150px 0px;

  * {
    margin-bottom: 20px;
  }

  .s-title {
    font-family: var(--font-second), monospace;
    color: var(--color-primary);
  }

  h2 {
    font-size: 2.5rem;
    color: var(--color-text-primary);
  }

  p {
    color: var(--color-text-secondary);
    font-size: 1.2rem;
    line-height: 1.1;
  }

  a {
    text-decoration: none;
    border-radius: var(--mo-d-border-radius);
    border: var(--color-primary) 1px solid;
    padding: 16px 40px;
    transition: all 0.23s ease;
    background: var(--color-transparent);
    color: var(--color-primary);
    font-family: var(--font-second), monospace;
    margin-top: 12px;

    &:hover {
      background-color: var(--color-primary-trans);
    }
  }
}
</style>
