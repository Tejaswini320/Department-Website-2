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
    const toppers = dbRes.data.toppers;
    const ajinkya = toppers.filter(t => t.name.includes("Dhawale Ajinkya"));
    console.log("Entries for Dhawale Ajinkya:");
    console.log(JSON.stringify(ajinkya, null, 2));
}

main();
