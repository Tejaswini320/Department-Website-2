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
    const manoj = toppers.filter(t => t.name.includes("Telore Manoj"));
    console.log("Entries for Telore Manoj:");
    console.log(JSON.stringify(manoj, null, 2));
}

main();
