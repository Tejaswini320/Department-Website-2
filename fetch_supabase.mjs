import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase.from('app_state').select('data').eq('id', 1).single();
  if (error) console.error(error);
  else {
    console.log("FACULTY:", data.data.faculty.map(f => ({ id: f.id, name: f.name })));
    console.log("CONFERENCES:", data.data.events?.conferences);
  }
}
main();
