<template>
  <div class="loading">
    <div class="loading__title">
      <span> Carregando dados... </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.loading {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 40vh;
  -webkit-box-shadow: -2px 8px 12px -1px rgba(0, 0, 0, 0.14);
    box-shadow: -2px 8px 12px -1px rgba(0, 0, 0, 0.14);
  &__title {
    span {
      font-size: 1.5em;
      font-weight: 700;
      color: $sb-bg-black-1;
    }
  }
}
</style>
