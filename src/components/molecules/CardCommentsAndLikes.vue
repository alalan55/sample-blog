<script setup>
const props = defineProps({ post: { type: Object } });
</script>

<template>
  <div class="card">
    <div class="card__left">
      <div class="card__left__visu">
        <img src="/icons/eye.svg" alt="Visualizações" />
        <span>{{ props.post.visualization || "0" }} Visualizações</span>
      </div>
      <div class="card__left__comments">
        <span>{{ props.post.comments || "0" }} Comentários</span>
      </div>
    </div>
    <div class="card__right">
      <div class="card__right__like">
        <img src="/icons/hearth.svg" alt="Visualizações" />
        <span>{{ props.post.likes || "0" }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.card {
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  &__left {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    &__visu {
      display: flex;
      align-items: center;
      span {
        padding-left: 0.5rem;
      }
    }
  }
  &__right {
    &__like {
      display: flex;
      align-items: center;

      img {
        cursor: pointer;
      }

      span {
        color: $sb-bg-red-1;
        font-weight: 500;
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
