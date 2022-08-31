<script setup>
import CardCommentVue from "../molecules/CardComment.vue";
import CardCommentsAndLikes from '../molecules/CardCommentsAndLikes.vue'
</script>

<template>
  <div class="post">
    <div class="post__card">
      <div class="post__card__title">
        <span> Lotem ipsum dolor met acnu pra varlesies. </span>
      </div>
      <div class="post__card__cover">
        <figure>
          <img src="/imgs/ballon.jpg" alt="Capa" />
        </figure>
        <span>Postado em: 5 de maio de 2021</span>
      </div>
      <div class="post__card__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, eros in
          porttitor auctor, massa sapien sagittis turpis, sed semper neque turpis vel
          dolor. Vestibulum non suscipit erat, quis ornare turpis. Nullam id lobortis
          ipsum. Maecenas fringilla pretium rhoncus. Vestibulum sagittis sollicitudin
          aliquam. Proin commodo tristique lacus, ac interdum nisi vestibulum id.
        </p>
        <p>
          Vivamus porttitor velit in libero semper, a bibendum augue dictum. Vestibulum
          cursus arcu eget dolor fermentum condimentum. Vestibulum pharetra, ipsum vel
          eleifend dictum, leo sem maximus ligula, nec posuere tellus magna ac ante.
          Suspendisse vel sapien quis enim dapibus sodales. Morbi malesuada a nisi sed
          ultricies.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis
          lobortis metus vitae lobortis. Vestibulum porta sollicitudin sem, sed egestas
          nisi scelerisque in. Sed dui tellus, maximus sit amet nunc ac, consectetur
          consequat tortor. Maecenas ultrices mollis mi ut cursus. Morbi a sem pharetra,
          vehicula nisl vitae, scelerisque turpis. Vestibulum consequat scelerisque neque,
          sed tempus orci eleifend id. Proin pulvinar, augue et sagittis viverra, magna
          nibh eleifend nisl, eget egestas leo magna blandit sapien. Duis nec porttitor
          orci, sed volutpat tellus. Nulla facilisi. Cras turpis ante, sollicitudin a
          aliquet eget, pretium eu risus. Duis sit amet eros id risus vulputate porttitor.
          Morbi nunc ligula, volutpat ac eros ut, commodo sodales felis. Duis fermentum
          augue in ipsum iaculis, at fermentum ligula bibendum.
        </p>
      </div>
      <div class="post__card__infos">
        <CardCommentsAndLikes/>
    
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
      padding: $sb-size-2 $sb-size-5;
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

  &__comment {
  }
}
</style>
