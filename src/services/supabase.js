import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfcgjfdmkctnrskzirwo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmY2dqZmRta2N0bnJza3ppcndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0OTg1NjEsImV4cCI6MjAwNzA3NDU2MX0.bl4ajBKV2bZehFo1fl-JKawBQwp-uToqDpoCil0fzPE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
