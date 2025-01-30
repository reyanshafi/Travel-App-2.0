import { createClient } from '@supabase/supabase-js';

// Use environment variables to store sensitive information
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Create the Supabase client with the environment variables
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
