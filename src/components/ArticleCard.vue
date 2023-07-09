<template>
  <div class="q-pa-md">
    <q-card class="my-card" standout>

      <img :src="article.image" />

      <q-card-section class="card-text-section text-black bg-white">
        <div class="text-bold"> <p>{{ article.title }}</p></div>
        <my-button :button="articleButtonRef" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">

import MyButton from "components/MyButton.vue";
import { ref, defineComponent } from "vue";
import { CustomButton, getRandomId } from "../models/CustomButton";
import { Article } from "../models/article-models";

function validateArticle(article: Article) {
  const { id, title, content, topics, created_at } = article;
  if (!id) {
    throw new Error("Article id is not defined: ${id}");
  }

  if (!title) {
    throw new Error("Article title is not defined: ${title}");
  }

  if (!content) {
    throw new Error("Article content is not defined: ${content}");
  }

  if (!topics) {
    throw new Error("Article topics is not defined: ${topics}");
  }

  if (!created_at) {
    throw new Error("Article created_at is not defined: ${created_at}");
  }




}
export default defineComponent( {
  name: "ArticleCard",
  components: {
    MyButton
  },

  props: {
    article: {
      type: Object as () => Article,
      required: true
    }
  },

  setup (props) {

    try {
      validateArticle(props.article)
    } catch (error) {
      console.log(error);
    }


    const articleButton: CustomButton = {
      id: getRandomId(),
      label: "Read more",
      class: "text-white bg-grey-9 q-ma-md text-bold whote-shadow",
      name: "readmore",
      route: "/article/" + props.article.id
    };

    const article = ref<Article>(props.article);
    const articleButtonRef = ref<CustomButton>(articleButton);

    return {
      article,
      articleButtonRef
    }
  }
});
</script>

<style scoped>

.card-text-section {
  padding: 10px;
  color: black;
}

.my-card {
  border: 2px solid;
}
</style>
