import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data: dbRes, error: fetchErr } = await supabase.from('app_state').select('data').eq('id', 1).single();
  if (fetchErr) {
    console.error("Fetch error:", fetchErr);
    return;
  }
  
  console.log("Current Toppers count:", dbRes.data.toppers.length);
  console.log("Unique years:", [...new Set(dbRes.data.toppers.map(t => t.year))]);
  console.log("Unique classes:", [...new Set(dbRes.data.toppers.map(t => t.class))]);
  console.log("Unique programs sample:", [...new Set(dbRes.data.toppers.map(t => t.program))].slice(0, 5));
}
main();
