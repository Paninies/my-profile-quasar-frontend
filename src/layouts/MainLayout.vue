<template>
  <q-layout view="lHh lpr lFf" uhyhjuycfgv>

    <div class="footer-header-text">
    <q-header elevated class="bg-blue-grey-10  header-text" height-hint="98">
      <router-link to="/" style="text-decoration: none">
          <q-toolbar>
            <q-toolbar-title class="toolbar-title">
              <q-avatar>
                <img class="white-img" src="../images/panini-logo.png" alt="logo"/>
              </q-avatar>
              <div class="logo-text">
           Panini by Illia
              </div>
            </q-toolbar-title>
          </q-toolbar>
      </router-link>

      <div class="tools">
        <q-tabs align="left">
          <q-route-tab to="/" label="Intro" />
          <q-route-tab to="/cv" label="CV" />

          <div class="no-border-radius">
          <q-btn text-color="white" label="Articles" style="margin: 0 5px">
            <q-menu
              transition-show="rotate"
              transition-hide="rotate"
              >
              <q-list>
                <q-item clickable>
                  <q-item-section>Java</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Spring Boot</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>AWS</q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable>
                  <q-item-section>Computer Science</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn  text-color="white" label="Admin Tools" >
            <q-menu
              transition-show="rotate"
              transition-hide="rotate"
            >
              <q-list>
                <q-item clickable>
                  <q-item-section>Article Editor</q-item-section>
                </q-item>

              </q-list>
            </q-menu>
          </q-btn>
          </div>
          <q-route-tab to="/" label="Page Three" />
          <q-route-tab to="/" label="Page Three" />
        </q-tabs>

        <div class="loggin-btn q-gutter-sm">
          <my-button
            v-for="button in logButtons"
            :button="button"
          />
        </div>

      </div>

    </q-header>

    <q-footer elevated class="footer bg-blue-grey-10 text-white q-pa-md">
      <div class="row justify-center">

        <div v-for="link in linksRef" class="col-4">
          <div class="text-center">
            <a :href="link.href" :target="link.target" style="text-decoration: none" class="text-white"> {{ link.name }}</a>
          </div>
        </div>
      </div>
    </q-footer>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyButton from 'src/components/MyButton.vue';
import { CustomButton } from 'src/models/CustomButton';
import  { Link } from "src/models/models";

function getRandomNumber(): number {
  return Math.floor(10001 * Math.random());
}



export default defineComponent({

  name: 'MainLayout',
  components: {
    MyButton,
  },

  setup () {
    const color = 'blue-grey-7';
    const links: Link[] = [
      {
        href: "https://www.linkedin.com/in/illia-ponomarov-6a5457215/",
        target: "_blank",
        name: "LinkedIn"
      },

      {
        href: "https://github.com/IlliaPonomarov",
        target: "_blank",
        name: "GitHub"
      }
    ]

    const logginButtons: CustomButton[] = [
      {
        id: getRandomNumber(),
        label: 'Sing in',
        color: color,
        name: 'singin',
        route: '/singin'
      },
      {
        id: getRandomNumber(),
        label: 'Logout',
        name: 'logout',
        color: color,
        route: '/logout'
      }
    ];

    const logButtons = ref<CustomButton[]>(logginButtons);
    const linksRef = ref<Link[]>(links);

    return { logButtons, linksRef };
  }

});
</script>

<style scoped>
 .borderless-button {
   border: none !important;
   background: none !important;
 }

 .footer-header-text {
   color: white;
   font-size: 20px;
   font-weight: bold;
   font-family: "Menlo", monospace;
   text-decoration: none;
 }

 .header-text {
   color: white;
   font-size: 20px;
   font-weight: bold;
   font-family: "Menlo", monospace;
   text-decoration: none;
 }

 .loggin-btn {
   margin-left: auto;
   margin-right: 10px;

 }

 .white-img {
   filter: brightness(0) invert(1);
   height: auto;
    width: 40px;
 }

 .toolbar-title {
   display: flex;
   align-items: center;
   text-decoration: none;
 }

 .tools {
   display: flex;
   align-items: center;
 }

 .footer {
   margin-top: auto;
 }
 .logo-text {
   color: white;
   margin-left: 8px;
   text-decoration: none;
   font-family: "Liberation Mono", monospace;
 }
</style>
