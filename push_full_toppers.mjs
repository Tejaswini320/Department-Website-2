import { createClient } from '@supabase/supabase-js';
import { initialData } from './src/data/initialData.js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
// Note: This is a public ANON key, assuming it's correct from the other scripts
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU'; 
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    console.log("Fetching current app state from Supabase...");
    const { data: dbRes, error: fetchErr } = await supabase.from('app_state').select('data').eq('id', 1).single();
    
    if (fetchErr) {
        console.error("Fetch error:", fetchErr);
        return;
    }
    
    let appData = dbRes.data;
    
    console.log(`Current toppers count in DB: ${appData.toppers.length}`);
    console.log(`New toppers count in initialData.js: ${initialData.toppers.length}`);
    
    // Replace the toppers array entirely with the clean one from initialData.js
    appData.toppers = initialData.toppers;
    
    console.log("Pushing updated toppers list to Supabase...");
    const { error: updateErr } = await supabase.from('app_state').update({ data: appData }).eq('id', 1);
    
    if (updateErr) {
        console.error("Update error:", updateErr);
    } else {
        console.log("Successfully updated Supabase with proper toppers data!");
    }
}

main();
