<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import api from "../../services/http";

const CardCommentVue = defineAsyncComponent(() => import("../molecules/CardComment.vue"));
const CardCommentsAndLikes = defineAsyncComponent(() =>
  import("../molecules/CardCommentsAndLikes.vue")
);

const route = useRoute();

const slug = ref("");
const post = ref({});

slug.value = route.params.slug;

const findPost = async () => {
  try {
    let response = await api.get(`/rest/v1/posts?slug=eq.${slug.value}`);
    post.value = response.data[0];
  } catch (error) {
    console.error(error);
  }
};
findPost();
</script>

<template>
  <div class="post">
    <div class="post__card">
      <div class="post__card__title">
        <span> {{ post.title }} </span>
      </div>
      <div class="post__card__cover">
        <figure>
          <img :src="post.cover || '/imgs/ballon.jpg'" alt="Capa" />
        </figure>
        <span>Postado em: 5 de maio de 2021</span>
      </div>
      <div class="post__card__text">
        <p v-for="(text, idx) in post.descriptions" :key="idx">
          {{ text }}
        </p>
      </div>
      <div class="post__card__infos">
        <CardCommentsAndLikes :post="post" />
      </div>
    </div>
    <CardCommentVue />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.post {
  padding: $sb-nav_height $sb-size-2;

  &__card {
    border: 1px solid $sb-bg-dark-2;
    max-width: 900px;
    margin: $sb-size-1 auto;
    padding: $sb-size-1 $sb-size-2;
    border-radius: 10px;
    &__title {
      margin: $sb-size-2 0;
      text-align: center;
      span {
        font-size: 2.3em;
        font-weight: 400;
        color: $sb-bg-black-1;
        transition: 0.2s ease-in-out;
        @media (max-width: $sb-mobile) {
          font-size: 1.8em;
        }
      }
    }

    &__cover {
      figure {
        width: 100%;
        height: 400px;

        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      span {
        display: block;
        margin: 0.6rem 0;
        font-weight: 500;
        color: $sb-bg-dark-2;
      }
    }

    &__text {
      padding: $sb-size-1 $sb-size-5;
      p {
        letter-spacing: 0.15px;
        font-size: 1.2em;
        font-weight: 600;
        margin: 2rem 0;
        text-align: justify;
        color: $sb-bg-dark-3;
        line-height: 1.6;
      }
      @media (max-width: $sb-tablet) {
        padding: $sb-size-2;
      }
    }
  }
}
</style>
