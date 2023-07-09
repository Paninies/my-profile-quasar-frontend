<template>
  <q-page class="row-lg justify-center bg-black" style="height: 100vh;">
    <q-scroll-area style="height: 100%;">

      <div class="text-white text-h3 text-center">

        <embed :src="pdfUrl" type="application/pdf" width="30%" height="1000px"/>
        <div class="main">
          <h2>About me</h2>
          <p class="text-center about-me-text">
            Highly motivated and skilled <strong>Java Software Developer</strong> with a background in <b>EAI architecture</b>, REST and SOAP services, event-driven systems, integration development, and Agile methodologies. Seeking a challenging role where I can leverage my technical expertise and Agile experience to contribute to the success of innovative projects.
          </p>
        </div>

        <br />
        <q-separator class="bg-white" spaced inset />
        <br />

        <div class="my-experience">
          <h2>Experience</h2>
          <div class="text-center about-me-text">
            <h4 class="q-ml-md">Java Application Developer at Atos </h4>
            <h5>2023 - current</h5>
            <ul class="skill-list text-left" >
              <li>Collaborated within a dynamic team to implement EAI Architecture, enabling seamless integration of disparate systems and facilitating efficient data flow.</li>
              <li>Developed and deployed REST and SOAP services on the Enterprise Service Bus, ensuring smooth communication between applications and enabling effective data exchange. Implemented comprehensive unit tests for REST and SOAP services, ensuring high code quality and reducing the occurrence of defects.</li>
              <li>Leveraged Kafka, an event streaming platform, to handle real-time events and streamline event-driven architectures, enhancing system responsiveness.</li>
              <li>Utilized JMS to establish reliable communication between engines in the EAI system, ensuring seamless data transfer and maintaining system integrity.</li>
              <li>Applied Java and Python programming languages to enhance and optimize business processes, resulting in improved efficiency and increased productivity.</li>
              <li>Contributed to integration development using TIBCO BW, facilitating smooth communication and data synchronization between applications, systems, and databases.</li>
            </ul>

            <h4 class="q-ml-md">Self-employed </h4>
            <h5>2021 - 2023</h5>
            <ul class="skill-list text-left">
              <li>Developed a robust online chat application, inspired by the Telegram platform, using a Single Page Application (SPA) format. Leveraged expertise in Back-End technologies such as Spring Boot, Spring Security, Hibernate, and WebSocket to ensuresecure and efficient communication. Implemented the Front-End using JavaScript, Vue.js, and Vuex, enabling seamless and responsive user experiences.</li>
              <li>Demonstrated proficiency by creating an Ethernet Analyzer, inspired by the functionalities of Wireshark. This powerful tool analyzes packet communications, specifically focusing on frame types like ETHERNET II and IEEE 802.3, as well as protocols including TCP, UDP, ICMP, and ARP.</li>
              <li>Developed a REST API application utilizing Spring Boot and Hibernate. The application retrieves temperature data from a sensor, demonstrating proficiency in building RESTful services and integrating database operations.</li>
              <li>Implemented a Binary Decision Tree algorithm to efficiently calculate solutions from conjunctive normal forms using the Java language.</li>
              <li>Developed a REST API application utilizing Spring Boot and Hibernate. The application
                retrieves temperature data from a sensor, demonstrating my proficiency in building RESTful
                services and integrating database operations.
              </li>
              <li>Implemented my version of the Binary Decision Tree to efficiently calculate solutionsfrom
                conjunctive normal forms using the Java languag</li>

            </ul>
          </div>
        </div>
        <div class="hard-skills text-center about-me-text" v-for="skill in skillsRef">
          <h2 class="text-left">{{ skill.type }}</h2>
          <ul class="skill-list text-left">
            <li v-for="item in skill.items">
              <i :class="item.icon"></i> {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="my-education">
          <h2>Education</h2>
          <div class="text-center skill-list">
            I am currently a student at the Slovak Technical University, majoring in Computer Science.
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue"

export default {
  name: "CVPage",

  setup () {

    const skills: Array<Object> = [
      {
        type: "Programming Languages",
        items: [
          {
            name: "Java",
            icon: "fab fa-java",
          },
          {
            name: "Python",
            icon: "fab fa-python",
          },
          {
            name: "JavaScript, TypeScript",
            icon: "fab fa-js",
          },
          {
            name: "C/C++",
            icon: "fab fa-c",
          },
        ],
      },

      {
        type: "Hard Skills",
        items: [
          {
            name: "Linux, Bash, Vim",
            icon: "fab fa-linux",
          },
          {
            name: "Spring Core, Spring Boot, Spring Security, Spring Data. Spring MVC",
            icon: "fas fa-code",
          },
          {
            name: "Hibernate",
            icon: "fas fa-object-group",
          },
          {
            name: "PostgreSQL, OracleDB",
            icon: "fas fa-database",
          },
          {
            name: "Vue.js",
            icon: "fab fa-vuejs",
          },
          {
            name: "Kafka, JMS",
            icon: "fas fa-stream",
          },
          {
            name: "Bitbucket , Maven, Gradle",
            icon: "fab fa-bitbucket",
          },
          {
            name: "Docker, Docker Compose",
            icon: "fab fa-docker",
          },
          {
            name: "JUnit",
            icon: "fab fa-unity",
          },
        ],
      },
      {
        type: "Soft Skills",
        items: [
          {
            name: "English - B2",
            icon: "fas fa-language",
          },
          {
            name: "Ukrainian - Native",
            icon: "fas fa-language",
          },
          {
            name: "Russian - Native",
            icon: "fas fa-language",
          },
          {
            name: "Slovak - B2",
            icon: "fas fa-language",
          },
          {
            name: "Agile",
            icon: "fas fa-users",
          },
        ],
      },
    ]
    const skillsRef = ref(skills)
    const pdfUrl = "src/images/Illia_Ponomarov_Junior_Java_Developer_CV.pdf"
    return {
      skillsRef,
      pdfUrl
    }
  }
}
</script>

<style scoped>
.card-intro-size {
  width: 100%;
  height: 100%;
}

.main {
  font-family: 'Courier New', monospace;
  padding: 20px;
  padding: 20px;
  font-size: 20px;
  line-height: 1.5;
  color: white;
}
li {
  margin-bottom: 10px;
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
