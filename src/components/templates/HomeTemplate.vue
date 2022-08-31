<script setup>
import CardPostVue from "../molecules/CardPost.vue";
import PostList from "../organisms/PostsList.vue";
</script>

<template>
  <div class="home">
    <div class="home__title">
      <span> Sample Blog </span>
    </div>

    <div class="home__main-post">
      <CardPostVue :isMainPost="true" />
    </div>

    <div class="home__posts">
      <PostList />
    </div>
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
