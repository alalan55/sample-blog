<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";
import Logo from "@/components/atoms/LogoIcon.vue";

const toast = useToast();
const store = useAuthStore();
const router = useRouter();
const showPassword = ref(false);
const type = ref("password");
const loading = ref(false);
const user = ref({
  email: "",
  password: "",
  email_confirm: true,
});

const login = async () => {
  loading.value = true;
  let isSuccefullyLogin = await store.login(user.value);
  if (isSuccefullyLogin) {
    router.push("/");
  } else {
    toast.error("Erro ao realizar login");
  }

  loading.value = false;
};

watch(showPassword, (newValue) => {
  newValue ? (type.value = "text") : (type.value = "password");
});
</script>

<template>
  <div class="auth">
    <div class="auth__card">
      <div class="auth__card__logo">
        <Logo />
      </div>

      <div class="auth__card__title">
        <span> Olá, seja bem-vindo! </span>
      </div>

      <div class="auth__card__desctiprion">
        <span>
          Insira suas informações abaixo, para realizar a autenticação
        </span>
      </div>

      <div class="auth__card__form">
        <div class="auth__card__form__email">
          <input type="text" placeholder="E-mail" v-model="user.email" />
          <img src="/icons/internet.svg" alt="Internet" />
        </div>

        <div class="auth__card__form__password">
          <input :type="type" placeholder="Senha" v-model="user.password" />
          <img
            src="/icons/eye.svg"
            alt="Olhos"
            v-if="showPassword"
            @click="showPassword = false"
          />
          <img
            src="/icons/eye-closed.svg"
            alt="Olhos"
            v-else
            @click="showPassword = true"
          />
        </div>
        <div class="auth__card__form--action">
          <button @click="login">
            <span v-if="loading"> Entrando... </span>
            <span v-else> Entrar </span>
          </button>
        </div>
      </div>

      <div class="auth__card__link">
        <RouterLink to="/register">Faça seu registro</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.auth {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $sb-bg;
  padding: $sb-size-2;

  &__card {
    padding: $sb-size-4 $sb-size-2;
    border-radius: 10px;
    background: white;
    -webkit-box-shadow: -2px 8px 12px -1px rgba(0, 0, 0, 0.14);
    box-shadow: -2px 8px 12px -1px rgba(0, 0, 0, 0.14);

    &__logo {
      text-align: center;
      margin-bottom: $sb-size-2;
    }
    &__title {
      margin: 0 0 1rem 0;
      text-align: center;
      span {
        font-weight: 800;
        letter-spacing: 0.25px;
        font-size: 1.5em;
        color: $sb-bg-black-1;
      }
    }
    &__desctiprion {
      span {
        color: $sb-bg-black-1;
        letter-spacing: 0.15px;
      }
    }

    &__form {
      & > div {
        margin: 1.5rem 0;
        height: 45px;
        position: relative;
        input {
          height: 100%;
          width: 100%;
          border-radius: 5px;
          border: 1px solid $sb-bg-dark-3;
          padding: 0.8rem 3rem 0.8rem 0.8rem;
          font-weight: 700;
          color: $sb-bg-black-1;

          &:focus {
            outline: none;
          }
        }
      }
      &__email {
        img {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(-50%, -50%);
        }
      }
      &__password {
        cursor: pointer;
        img {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(-50%, -50%);
        }
      }
      &--action {
        text-align: center;

        button {
          width: 70%;
          padding: $sb-size-1;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 1.1em;
          font-weight: 800;
          color: white;
          background: $sb-bg-pink-1;
          transition: 0.2s ease-in-out;

          &:hover {
            background: $sb-bg-pink-2;
          }
        }
      }
    }
    &__link {
      text-align: center;
      margin-top: 0.5rem;

      a {
        text-decoration: none;
        font-weight: 600;
        color: $sb-bg-pink-1;
      }
    }
  }
}
</style>
