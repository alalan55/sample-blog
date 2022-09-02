<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  isMainPost: { type: Boolean, default: false },
  majorPost: { type: Object },
  post: { type: Object },
});

const router = useRouter();

const postContent = ref({});

const defineContent = () => {
  props.isMainPost
    ? (postContent.value = props.majorPost)
    : (postContent.value = props.post);
};

const goToPage = (slug) => {
  router.push({ name: "post", params: { slug: slug } });
};
defineContent();
</script>

<template>
  <div class="card" @click="goToPage(postContent.slug)">
    <figure class="item">
      <img
        :src="postContent.cover"
        onerror="this.scr='/imgs/ballon.jpg';"
        alt="Imagem de capa"
      />
    </figure>

    <div class="card__content item">
      <div class="card__content__date">
        <span> 05 de maio de 2021 </span>
      </div>

      <div class="card__content__title">
        <span :class="{ isMajorPost: props.isMainPost }">
          {{ postContent.title }}
        </span>
      </div>

      <div class="card__content__pre-description">
        <span>
          {{ postContent.pre_text }}
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
  gap: $sb-size-1;
  flex-wrap: wrap;
  cursor: pointer;

  figure {
    overflow: hidden;
    border-radius: 15px;
    height: 60vh;
    img {
      width: 100%;
      border-radius: 15px;
      height: 100%;
      object-fit: cover;
      image-rendering: pixelated;
      transition: 0.3s ease-in-out;
    }
    @media (min-width: $sb-x-lg) {
      height: auto;
    }
    @media (max-width: $sb-mobile) {
      height: auto;
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
      margin: $sb-size-1 0;

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
        span {
          font-size: 1.5em;
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
    // border: 2px solid red;
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
