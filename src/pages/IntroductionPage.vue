<template>
  <q-page  class="row-lg justify-center bg-black" style="height: 100vh;">


    <q-scroll-area style="height: 100%;">

      <div class="q-pa-md q-gutter-lg-md bg-black" style="width: 100%; height: 100%">
        <div class="row justify-between">
          <q-parallax
            src="../images/programminng-intro.jpg">
            <h1 class="text-white text-h3">Introduction</h1>
          </q-parallax>
        </div>
      </div>
      <div class="text-white text-h3 text-center">
        <div class="intro-text bg-black text-white text-center">
          <h2>Hello, my name is Illia Ponomarov</h2>
        </div>

        <div class="main" >
          <h2>About me</h2>
          <p class="text-center about-me-text">
            I am a software developer with a passion for creating and developing web applications.
            I have a strong background in Java, Spring Boot, and Computer Science.
            I am a quick learner and a team player who is always looking to improve my skills.
          </p>
        </div>

        <q-separator class="bg-white" inset />
        <div class="my-articles">
          <h2>My articles</h2>
          <p class="text-center about-me-text">
            I have written a few articles on Medium about my experience with programming.
          </p>


          <div class="row">
              <article-card class="col" :article="article" v-for="article in articles"
              :key="article.id"
              />
          </div>

        </div>

        <br/>
        <q-separator class="bg-white" inset />
        <br/>
        <div class="my-experience">
          <h2>Experience</h2>
          <p class="text-center about-me-text">
            I've been working as a java software developer for over 1 years in Telco industry.
          </p>
        </div>

        <div class="main">
          <h2>My skills</h2>
          <p>
            I have experience with the following technologies:
          </p>

          <ul class="skill-list text-left" style="list-style-type: none">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>RESTful APIs</li>
            <li>Bootstrap</li>
            <li>Quasar</li>
            <li>Material Design</li>
            <li>Agile</li>
            <li>Scrum</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>Test Driven Development</li>
            <li>Object Oriented Programming</li>
            <li>Functional Programming</li>
            <li>Responsive Design</li>

          </ul>
        </div>
      </div>

    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import ArticleCard from "components/ArticleCard.vue";
import { Article, TopicEnum } from "src/models/article-models";
import { getRandomId } from "src/models/CustomButton";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "IntroductionPage",
  components: {
    ArticleCard,
  },

  setup() {
    const articles: Article[] = [
      {
        id: getRandomId(),
        title: "Java",
        author: "Illia Ponomarov",
        description: "Here you can find articles about Java",
        topics: [TopicEnum.JAVA],
        created_at: new Date("2021-01-01"),
        updated_at: new Date("2021-01-01"),
        image: "src/images/JavaImg.png",
      },

      {
        id: getRandomId(),
        title: "Spring Boot",
        author: "Illia Ponomarov",
        description: "Here you can find articles about Spring Boot",
        topics: [TopicEnum.SPRING_BOOT],
        created_at: new Date("2021-01-01"),
        updated_at: new Date("2021-01-01"),
        image: "src/images/default-photo.png",
      }

    ];

    const articlesRef = ref<Article[]>(articles);

    return {
      articles, articlesRef,
    };
  },
});
</script>

<style scoped>
 .card-intro-size {
   width: 100%;
   height: 100%;
 }

 .main {
    font-family: 'Courier New', monospace;
    padding: 20px;
    font-size: 20px;
    line-height: 1.5;
    color: white;
 }

 .skill-list {
   font-family: 'Courier New', monospace;
   padding: 20px;
   font-size: 20px;
   line-height: 1.5;
   color: white;
 }
 .my-articles {
   font-family: 'Courier New', monospace;
   padding: 20px;
   font-size: 20px;
   line-height: 1.5;
   color: white;
 }

 .about-me-text {
   margin-left: 300px;
    margin-right: 300px;
 }
 .intro-text {
   font-family: 'Courier New', monospace;
   padding: 20px;
   font-size: 20px;
   line-height: 1.5;
   color: white;
 }
</style>
