<script setup>
import { ref } from "vue";
import {} from "pinia";
import { useAuthStore } from "@/stores/auth";
import Logo from "@/components/atoms/LogoIcon.vue";

const store = useAuthStore();
const userLogged = ref(null);
userLogged.value = store.$user;

const logout = async () => {
  let isSuccefullyLogout = await store.logout();
  if (isSuccefullyLogout) {
    userLogged.value = store.$user;
  }
};
</script>
<template>
  <header>
    <nav>
      <div class="logo">
        <Logo />
      </div>
      <div class="links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li v-if="!userLogged">
            <router-link to="/auth">Login</router-link>
          </li>
          <li v-if="userLogged">
            <a @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

header {
  height: $sb-nav_height;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: $sb-size-1 $sb-size-2;

    .links {
      ul {
        padding: 0;
        display: flex;
        align-items: center;
        gap: 1rem;

        li {
          list-style: none;

          a {
            text-decoration: none;
            font-weight: 800;
            color: $sb-bg-dark;
            font-size: 1.2em;
            cursor: pointer;
          }
          .router-link-exact-active {
            color: $sb-bg-pink-1;
          }
        }
      }
    }
  }
}
</style>
