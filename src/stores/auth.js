import { defineStore } from "pinia";
import supabase from "../services/supabaseConfig";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({}),
  getters: {},
  actions: {
    // async login(form){
    //    try {
    //     const response = await supabase.auth.signIn(form)
    //    } catch (error) {
    //     console.log(error)
    //    }
    // }
  },
});
