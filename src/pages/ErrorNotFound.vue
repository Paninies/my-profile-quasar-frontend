<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center">
    <div class="q-pa-lg">
      <h1 class="text-h3">404 - Page Not Found</h1>
      <p class="text-subtitle1">
        Oops! The page you are looking for does not exist.
      </p>
      <q-img
        src="../images/gifs/computer-cat.gif"
        alt="Error 404"
        class="error-image"
      />
      <q-btn
        to="/"

        label="Go Back to Homepage"
        class="q-mt-lg bg-grey-8"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound'
});
</script>
