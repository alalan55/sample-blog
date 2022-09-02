import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_SUPABASE,
  headers: {
    'apiKey': import.meta.env.VITE_ANON_KEY,
    'Authorization': `${import.meta.env.VITE_ANON_KEY}`,
  },
});

export default api
