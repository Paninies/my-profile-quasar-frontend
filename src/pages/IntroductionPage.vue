<template>
  <q-page class="row-lg justify-center">
    <div class="q-pa-md q-gutter-lg-md bg-black" style="width: 100%; height: 100%">
      <div class="row justify-between">
        <q-parallax

          :height="500"
          src="https://cdn.quasar.dev/img/parallax2.jpg">
          <h1 class="text-white text-h3">Introduction</h1>
        </q-parallax>
      </div>
    </div>


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
</style>
