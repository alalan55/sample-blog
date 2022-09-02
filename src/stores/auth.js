import { defineStore, acceptHMRUpdate } from "pinia";
import supabase from "../services/supabaseConfig";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  getters: {
    $user: (state) => state.user,
  },
  actions: {
    async login(form) {
      try {
        const { user, error } = await supabase.auth.signIn(form);
        if (!error) {
          this.user = user;
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async register(form) {
      try {
        const { error } = await supabase.auth.signUp(form);

        if (!error) {
          return true;
        }
      } catch (error) {
        return false;
      }
    },
    async logout() {
      try {
        let { error } = await supabase.auth.signOut();

        if (!error) {
          this.user = null;
          return true;
        }
      } catch (error) {
        return false;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
