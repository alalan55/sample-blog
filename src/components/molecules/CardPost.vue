<script setup>
const props = defineProps({
  isMainPost: { type: Boolean, default: false },
  post: { type: Object },
});
</script>

<template>
  <div class="card">
    <figure class="item">
      <img src="/imgs/ballon.jpg" alt="Imagem de capa" />
    </figure>

    <div class="card__content item">
      <div class="card__content__date">
        <span> 05 de maio de 2021 </span>
      </div>

      <div class="card__content__title">
        <span :class="{ isMajorPost: props.isMainPost }">
          Lorem Ipsum Dolor Met? Seler At dom!
        </span>
      </div>

      <div class="card__content__pre-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error
          laboriosam corporis aspernatur.
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.card {
  display: flex;
  align-items: flex-start;
  gap: $sb-size-2;
  flex-wrap: wrap;
  cursor: pointer;

  figure {
    overflow: hidden;
    border-radius: 15px;
    img {
      width: 100%;
      border-radius: 15px;
      height: 100%;
      object-fit: cover;
      image-rendering: pixelated;
      transition: 0.3s ease-in-out;
    }
  }

  &__content {
    &__date {
      span {
        font-weight: 600;
        font-size: 0.9em;
        color: $sb-bg-dark-2;
      }
    }

    &__title {
      margin: $sb-size-2 0;

      span {
        font-size: 2em;
        font-weight: 700;
        color: $sb-bg-black-1;
        transition: 0.2s ease-in-out;
      }

      .isMajorPost {
        font-size: 3.5em;
        font-weight: 700;
        color: $sb-bg-black-1;
        transition: 0.2s ease-in-out;
        @media (max-width: $sb-mobile) {
          font-size: 2em;
        }
      }

      @media (max-width: $sb-mobile) {
        margin: $sb-size-1 0;
        span {
          font-size: 2em;
        }
      }
    }

    &__pre-description {
      span {
        color: $sb-bg-dark-2;
        font-size: 1.3em;
        font-weight: 500;
        letter-spacing: 0.15px;
      }
    }
  }
  .item {
    flex: 1 1 350px;
  }

  &:hover {
    figure {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
