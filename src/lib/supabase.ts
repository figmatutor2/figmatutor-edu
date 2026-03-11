import type { SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (_supabase) return _supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return null;

  // 런타임에서만 동적 import
  const { createClient } = require("@supabase/supabase-js");
  _supabase = createClient(supabaseUrl, supabaseAnonKey) as SupabaseClient;
  return _supabase;
}
