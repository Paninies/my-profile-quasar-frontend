<template>
  <q-btn
    :label="button.label"
    :name="button.name"
    :class="[button.class]"
    :to="button.route"
    style="margin: 0 5px"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CustomButton } from "src/models/CustomButton";
import { WebColors } from "src/models/web-colors";

export default defineComponent({
  name: "MyButton",
  props:{
    button: {
      type: Object as () => CustomButton,
      required: true
    }
  },

  setup (props) {

    const { id, label, color, name, route, backgroundColor } = props.button;

    if (!backgroundColor) {
      props.button.backgroundColor = WebColors.BG_GREY_8;
    }


    return { button: props.button };
  }
});
</script>

<style scoped>

.white-shadow {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
}
</style>
