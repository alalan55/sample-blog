<script setup>
import { ref, defineAsyncComponent } from "vue";
import api from "@/services/http";

const CardPostVue = defineAsyncComponent(() => import("../molecules/CardPost.vue"));
const PostList = defineAsyncComponent(() => import("../organisms/PostsList.vue"));

const majorPost = ref({});
const posts = ref([]);

async function fetchPosts() {
  try {
    let response = await api.get("/rest/v1/posts?select=*");
    majorPost.value = response.data[0];
    posts.value = response.data.slice(1);
  } catch (error) {
    console.error(error);
  }
}
fetchPosts();
</script>

<template>
  <div class="home">
    <div class="home__title">
      <span> Sample Blog </span>
    </div>

    <Suspense>
      <div class="home__main-post">
        <CardPostVue :isMainPost="true" :majorPost="majorPost" v-if="majorPost.id" />
      </div>
      <template #fallback>
        <span> Loading </span>
      </template>
    </Suspense>

    <Suspense>
      <div class="home__posts">
        <PostList :posts="posts" />
      </div>
      <template #fallback>
        <span> Loading </span>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.home {
  padding: $sb-nav_height $sb-size-2 $sb-size-4;
  &__title {
    margin: 0 0 $sb-size-2 0;
    span {
      font-size: 3.5em;
      font-weight: 700;
      color: $sb-bg-black-1;
      transition: 0.2s ease-in-out;

      @media (max-width: $sb-mobile) {
        font-size: 2.8em;
      }
    }
  }
  &__main-post {
    margin: 0 0 $sb-size-2 0;
  }
}
</style>
