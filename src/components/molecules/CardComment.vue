<template>
  <div class="card-comment">
    <div class="card-comment__title">
      <span> Comentários </span>
    </div>
    <div class="card-comment__input">
      <input type="text" placeholder="Escreva um comentário" />
      <button>Publicar</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.card-comment {
  border: 1px solid $sb-bg-dark-2;
  max-width: 900px;
  margin: $sb-size-1 auto;
  padding: $sb-size-1 $sb-size-2;
  border-radius: 10px;

  &__title {
    padding: $sb-size-1 0;
    border-bottom: 1px solid $sb-bg-dark-2;
    span {
      font-size: 1.2em;
    }
  }

  &__input {
    height: 50px;
    margin: $sb-size-1 0;
    display: flex;
    gap: 0.5rem;

    input {
      height: 100%;
      width: 100%;
      padding: 0.5rem;
      border-radius: 10px;
      border: 1px solid $sb-bg-dark-2;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.5rem;
      background: $sb-bg-pink-1;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      :hover {
        background: $sb-bg-pink-2;
      }
    }
  }
}
</style>
