<template>
  <q-page class="q-pa-md q-gutter-sm">
    <q-input square outlined v-model="text" label="Topic Name"/>
    <q-select outlined v-model="selectedValue" :options="topics" label="Select an option" @update:model-value="handleSelectClick"></q-select>

    <div class="row">
    <div v-if="selectedValues.length > 0 && selectedValue" v-for="topic in selectedValues" class="col-12 col-md-auto">
        <q-chip removable
          color="primary"
          text-color="white"
          icon="cake"
          :label="topic.name"
          :title="topic.name"
          @remove="removeTopic(topic)"
        >  {{ topic }}</q-chip>
    </div>
    <div v-else>
      You have to choose a topic !
    </div>
    </div>

    <q-editor  v-model="editorText"
               :dense="$q.screen.lt.md"
               toolbar-bg="grey-8"
               toolbar-color="white"
               :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
               :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />

    <div class="row">

    <div v-if="editorText">

      <div class="column q-my-md">
        <h5>HTML</h5>
        <q-separator inset spaced class="bg-black"/>
        <q-card flat bordered class="col-1">
          <q-card-section>
              <pre style="white-space: pre-line">{{ editorText }}</pre>
          </q-card-section>
        </q-card>
      </div>

      <div class="column q-my-md">
        Rendered HTML
      <q-card flat bordered class="col-1">
        <q-card-section v-html="editorText" />
      </q-card>
      </div>

      <div class="q-my-md">

      <my-button class="col-1 col-md-auto" :button="editorButton"/>
      </div>

    </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {Ref, ref} from 'vue'
import {TopicEnum} from "../models/article-models";
import MyButton from "components/MyButton.vue";
import {CustomButton} from "src/models/CustomButton";


export default {
  name: "ArticleEditor",
  components: {MyButton},

  setup () {

    const topicOptions: TopicEnum[] = Object.values(TopicEnum)
    const editorButton: CustomButton = {
      id: 88,
      label: 'Save',
      name: 'editorButton',
      route: '/',
      backgroundColor: 'grey-8',
      class: 'white-shadow'

    }

    const selectedValue = ref(null)
    const selectedValues = ref([])
    const topics = Object.values(TopicEnum)
    const editorText = ref('')


    function handleSelectClick() {
      console.log(78979898789)
      if (selectedValue.value)
        selectedValues.value.push(selectedValue.value)

    }

    function removeTopic(topic: TopicEnum) {
      const index: number = selectedValues.value.indexOf(topic);

      if (index > -1) {
        selectedValues.value.splice(index, 1);
      }

    }


    return {
      text: ref(''),
      editorText,
      selectedValue,
      topics,
      handleSelectClick,
      editorButton,
      selectedValues,
      removeTopic
    }
  },


}
</script>

<style scoped>

</style>
