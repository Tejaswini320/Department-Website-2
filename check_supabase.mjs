import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU';
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('app_state').select('data').eq('id', 1).single();
  if (error) console.error("Error", error);
  else {
    console.log("Cultural:", data.data.events?.cultural);
    console.log("Conferences:", data.data.events?.conferences);
    console.log("Extra Curricular:", data.data.events?.extraCurricular);
  }
}
check();
