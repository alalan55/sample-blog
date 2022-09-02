<script setup>
import CardPostVue from "../molecules/CardPost.vue";

const props = defineProps({ posts: { type: Array, required: true } });
</script>

<template>
  <div class="posts-list">
    <CardPostVue class="posts-list__card" v-for="post in props.posts" :key="post.id" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.posts-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 2.5rem;

  &__card {
    flex: 1 1 350px;
  }
  @media (min-width: $sb-x-lg) {
    justify-content: space-evenly;
    &__card {
      flex: 0 1 350px;
    }
  }
}
</style>
