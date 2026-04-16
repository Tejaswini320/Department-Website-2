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

  let appData = dbRes.data;

  // Check if Semester IV for M.Sc. CS - II already exists
  const exists = appData.timetables.some(
    t => t.year === "M.Sc. CS - II" && t.semester === "Semester IV"
  );

  if (exists) {
    console.log("Semester IV for M.Sc. CS - II already exists. No changes needed.");
    return;
  }

  // Add Semester IV for M.Sc. CS - II
  const newId = Math.max(...appData.timetables.map(t => t.id)) + 1;
  appData.timetables.push({
    id: newId,
    year: "M.Sc. CS - II",
    pdfUrl: "/Information/Time Table/Sem- II/M.Sc. - II Sem- IV Theroy Time Table.docx",
    semester: "Semester IV"
  });

  console.log("Updated timetables:", appData.timetables.map(t => `${t.year} - ${t.semester}`));

  const { error: updateErr } = await supabase.from('app_state').update({ data: appData }).eq('id', 1);
  if (updateErr) {
    console.error("Update error:", updateErr);
  } else {
    console.log("✅ Successfully added M.Sc. CS - II Semester IV to Supabase!");
  }
}
main();
