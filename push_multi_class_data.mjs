import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU';
const supabase = createClient(supabaseUrl, supabaseKey);

const newToppers = [
  {
      "id": 1001,
      "name": "Patil Aryan Sanjay",
      "program": "F.Y. B.Sc. (Comp. Sci.)",
      "class": "FY",
      "year": "2026",
      "cgpa": "9.12",
      "rank": "1",
      "imageUrl": ""
  },
  {
      "id": 1002,
      "name": "Deshmukh Neha Sunil",
      "program": "F.Y. B.Sc. (Comp. Sci.)",
      "class": "FY",
      "year": "2026",
      "cgpa": "8.95",
      "rank": "2",
      "imageUrl": ""
  },
  {
      "id": 1003,
      "name": "Jadhav Omkar Vikas",
      "program": "S.Y. B.Sc. (Comp. Sci.)",
      "class": "SY",
      "year": "2026",
      "cgpa": "9.34",
      "rank": "1",
      "imageUrl": ""
  },
  {
      "id": 1004,
      "name": "Kulkarni Sakshi Mahesh",
      "program": "S.Y. B.Sc. (Comp. Sci.)",
      "class": "SY",
      "year": "2026",
      "cgpa": "9.18",
      "rank": "2",
      "imageUrl": ""
  },
  {
      "id": 1005,
      "name": "Pawar Rahul Arjun",
      "program": "M.Sc. Computer Science - I",
      "class": "M.Sc. I",
      "year": "2026",
      "cgpa": "9.52",
      "rank": "1",
      "imageUrl": ""
  },
  {
      "id": 1006,
      "name": "Shinde Tanvi Rajesh",
      "program": "M.Sc. Computer Science - II",
      "class": "M.Sc. II",
      "year": "2026",
      "cgpa": "9.21",
      "rank": "1",
      "imageUrl": ""
  }
];

async function main() {
  const { data: dbRes, error: fetchErr } = await supabase.from('app_state').select('data').eq('id', 1).single();
  if (fetchErr) {
    console.error("Fetch error:", fetchErr);
    return;
  }
  
  let appData = dbRes.data;
  
  // To avoid duplicates if run multiple times, filter out IDs we're adding
  const newIds = newToppers.map(t => t.id);
  appData.toppers = appData.toppers.filter(t => !newIds.includes(t.id));
  
  // Add the new toppers
  appData.toppers = [...appData.toppers, ...newToppers];
  
  const { error: updateErr } = await supabase.from('app_state').update({ data: appData }).eq('id', 1);
  if (updateErr) {
    console.error("Update error:", updateErr);
  } else {
    console.log("Successfully pushed FY/SY/MSc data to Supabase!");
  }
}
main();
