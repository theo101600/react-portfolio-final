import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gomfxmkebyzbqwrxvdkj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbWZ4bWtlYnl6YnF3cnh2ZGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNDUzNDMsImV4cCI6MjA2OTYyMTM0M30.lo580m4zQ-Dxa8dnH65i-V1GguO4R5gUUkl3JO5J9Tk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
