<template>
  <q-btn
    :label="button.label"
    :name="button.name"
    :color="button.color"
    :to="button.route"
    style="margin: 0 5px"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CustomButton } from "src/models/CustomButton";

export default defineComponent({
  name: "MyButton",
  props:{
    button: {
      type: Object as () => CustomButton,
      required: true
    }
  },
});
</script>

<style scoped>

</style>
