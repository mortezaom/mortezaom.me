<template>
  <section class="section about" id="about">
    <SectionTitle :number="'I'" :text="'About Me'" />
    <div class="about-content">
      <div class="about-text">
        <p>
          Hello, I am Morteza Omar Mohammadi, a 21 years old developer. My main
          skill is in FrontEnd Web development VueJS ( or pure CSS/Javascript )
          and Mobile App development with Flutter.
          I am interested in new technologies in my field like VueJS, NuxtJS and Flutter :)
        </p>
        <p>
          Fast-forward to today, and I've had the experience of working at an
          ICT solution company as a Web Developer and many of these years spent
          learning technologies as a self-learner. I have also experience in
          publishing
          <a href="https://codecanyon.net/item/paper-flutter-news-app-with-firebase-backend/28068212">a product on
            Codecanyon market</a>
          and some individual projects.
        </p>
        <p>
          For now, I am part of Cynoco Team and also Webfume LLC as Application Developer and creating Web applications
          and Mobile applications for clients or just in-house projects.
        </p>
        <p>Here are some technologies I've been working with:</p>
        <ul>
          <div class="t-web">
            <li>JavaScript (+ES6)</li>
            <li>TypeScript</li>
            <li>VueJS</li>
            <li>Some NodeJS</li>
          </div>
          <div class="t-android">
            <li>Flutter</li>
            <li>Dart</li>
            <li>Kotlin</li>
            <li>Android SDK</li>
          </div>
        </ul>
      </div>
      <div class="about-img"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "./SectionTitle.vue";
</script>

<style lang="scss">
.about {
  padding: 100px 0px;

  .about-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .about-text {
      max-width: 50%;
      font-size: 1.1rem;
      color: var(--color-text-secondary);
      line-height: 1.15;

      @media (max-width: 768px) {
        max-width: 100%;
        margin-bottom: 20px;
      }

      &>* {
        margin-top: 16px;
        margin-bottom: 16px;
      }

      a {
        color: var(--color-primary);
        text-decoration: none;

        &:visited {
          color: var(--color-primary);
        }
      }

      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        line-height: 1.5;
        font-family: var(--font-second), monospace;

        div {
          width: 50%;

          li {
            &::before {
              content: "◈ ";
              color: var(--color-primary);
              margin-right: 8px;
              margin-top: auto;
              font-size: small;
              vertical-align: text-top;
            }
          }
        }
      }
    }
  }

  .about-img {
    width: 320px;
    height: 320px;
    background: url("../assets/img/photo.webp");
    background-position: center;
    border-radius: var(--mo-d-border-radius);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    transform: rotateY(10deg);

    &:after {
      content: "";
      background-color: var(--image-overlay);
      border-radius: var(--mo-d-border-radius);
      width: 100%;
      height: 100%;
      position: absolute;
      transition: all 0.3s ease;
    }

    &:hover:after {
      background-color: var(--color-transparent);
    }

    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: 1080px) {
      width: 25vw;
      height: 25vw;
    }

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
  }
}
</style>
