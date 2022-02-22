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
    font-family: "Cascadia Code", monospace;
    color: #5ab0ff;
  }

  h2 {
    font-size: 2.5rem;
    color: #ccd6f6;
  }

  p {
    color: #8892b0;
    font-size: 1.2rem;
    line-height: 1.1;
  }

  a {
    text-decoration: none;
    border-radius: 6px;
    border: #5ab0ff 1px solid;
    padding: 16px 40px;
    transition: all 0.23s ease;
    background: #ff000000;
    color: #5aafff;
    font-family: "Cascadia Code", monospace;
    margin-top: 12px;
    &:hover {
      background-color: #5aafff2c;
    }
  }
}
</style>
