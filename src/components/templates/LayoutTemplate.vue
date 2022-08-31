<script>
import NavBar from "../organisms/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="layout-template">
    <NavBar />
    <div class="layout-template__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.layout-template {
  min-height: 100vh;
  background: $sb-bg;

  &__content {
    min-height: 100vh;
  }
}
</style>
