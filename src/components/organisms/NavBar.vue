<template>
  <header>
    <nav>
      <div class="logo">
        <span> SB </span>
      </div>
      <div class="links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">Posts</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
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

header {
  height: $sb-nav_height;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: $sb-size-1 $sb-size-2;
    .logo {
      span {
        font-weight: 800;
        padding: 0.5rem;
        color: white;
        border-radius: 50%;
        background: rgb(131, 58, 180);
        background: linear-gradient(
          90deg,
          rgba(131, 58, 180, 1) 0%,
          rgba(253, 29, 29, 0.6895133053221288) 50%,
          rgba(252, 176, 69, 1) 100%
        );
      }
    }

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
