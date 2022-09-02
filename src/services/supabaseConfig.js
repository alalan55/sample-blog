import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE;
const supabaseKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
