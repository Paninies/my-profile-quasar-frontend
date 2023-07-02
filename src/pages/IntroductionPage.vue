<template>
  <q-page  class="row-lg justify-center bg-black" style="height: 100vh;">


    <q-scroll-area style="height: 100%;">

      <div class="q-pa-md q-gutter-lg-md bg-black" style="width: 100%; height: 100%">
        <div class="row justify-between">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax2.jpg">
            <h1 class="text-white text-h3">Introduction</h1>
          </q-parallax>
        </div>
      </div>
      <div class="intro-text bg-black text-white text-center">

        <h2>Hello, my name is Illia Ponomarov</h2>
      </div>

    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "IntroductionPage"
}
</script>

<style scoped>
 .card-intro-size {
   width: 100%;
   height: 100%;
 }

 .intro-text {
   font-family: 'Courier New', monospace;
   padding: 20px;
   font-size: 20px;
   line-height: 1.5;
   color: white;
 }
</style>
