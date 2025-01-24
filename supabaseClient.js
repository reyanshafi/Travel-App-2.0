import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://isscjqcwfxplybhlkxng.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzc2NqcWN3ZnhwbHliaGxreG5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NTg2MjUsImV4cCI6MjA1MzIzNDYyNX0.Y68UsMHHpHWuMu9VqUoxNYHYOgTJYYpH98xfUMq75iM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;