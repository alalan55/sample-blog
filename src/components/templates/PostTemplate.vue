<script setup></script>
<template>
  <div class="post">
    <div class="post__title">
      <span> Lotem ipsum dolor met acnu pra varlesies. </span>
    </div>
    <div class="post__cover">
      <figure>
        <img src="/imgs/ballon.jpg" alt="Capa" />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.post {
  padding: $sb-nav_height;
  &__title {
    margin: $sb-size-2 0;
    text-align: center;
    span {
      font-size: 2.5em;
      font-weight: 600;
      color: $sb-bg-black-1;
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
  }
}
</style>
