import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error("Missing SUPABASE_URL");
}

if (!supabaseSecretKey) {
  throw new Error("Missing SUPABASE_ANON_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseSecretKey);
