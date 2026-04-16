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
    console.log(`Total toppers in Supabase: ${toppers.length}`);
    console.log("Last 5 toppers:");
    console.log(JSON.stringify(toppers.slice(-5), null, 2));
    
    const thore = toppers.filter(t => t.name.includes("Thore Vaishnavi"));
    console.log("Entries for Thore Vaishnavi:");
    console.log(JSON.stringify(thore, null, 2));
}

main();
