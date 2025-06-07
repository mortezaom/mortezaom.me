<template>
  <section class="section about" id="about">
    <SectionTitle :number="'I'" :text="'About Me'" />
    <div class="about-content">
      <div class="about-text">
        <p>
          Hello! I'm Morteza Omar, a Lead Developer and Software Architect
          passionate about designing and building scalable, high-performance
          applications. My expertise lies in architecting full-stack systems,
          from back-end services and database design to intuitive front-end
          interfaces and cross-platform mobile apps.
        </p>
        <p>
          My passion for robust architecture led me to spearhead the development
          of a high-volume online ticketing platform, guiding the project
          through its full lifecycle from system design to successful
          deployment and scaling. This experience solidified my skills in creating
          resilient, user-centric products that deliver tangible business value.
        </p>
        <p>
          Currently, as an Application Developer with Cynoco and Webfume LLC, I
          continue to apply these principles to build sophisticated web and
          mobile solutions for a diverse range of clients and in-house
          projects.
        </p>
        <p>Here are a few technologies and concepts I specialize in:</p>
        <ul>
          <div class="tech-column">
            <li>System & Microservice Architecture</li>
            <li>Node.js & TypeScript</li>
            <li>Database Design (SQL & NoSQL)</li>
            <li>API Security (OAuth2.0 / REST)</li>
          </div>
          <div class="tech-column">
            <li>React.js & Vue.js</li>
            <li>Flutter (Cross-Platform Mobile)</li>
            <li>Cloud Deployment (AWS/GCP)</li>
            <li>CI/CD & Containerization (Docker/K8s)</li>
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
      max-width: 60%;
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
        font-size: .93rem;

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
