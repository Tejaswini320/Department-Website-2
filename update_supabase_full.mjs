import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU';
const supabase = createClient(supabaseUrl, supabaseKey);

const imageMap = {
  'Prof. A.D. Gangarde': '/Information/teacher img/Prof. Arun D. Gangarde.jpeg',
  'Prof. M.B. Bhingare': '/Information/teacher img/Prof. M.B. Bhingare.jpeg',
  'Prof. M.B. Gobare': '/Information/teacher img/Prof. M.B. Gobare.jpeg',
  'Prof. B.M. Danave': '/Information/teacher img/Prof. B.M. Danave.jpeg',
  'Dr. A.A. Takate': '/Information/teacher img/Dr. A.A. Takate.jpeg',
  'Prof. M.A. Karkhile': '/Information/teacher img/Prof. M.A. Karkhile.jpeg',
  'Prof. T.S. Thange': '/Information/teacher img/Prof. T.S. Thange.jpeg',
  'Prof. S.S. Kale': '/Information/teacher img/Prof. S.S. Kale.jpeg',
  'Prof. M.R. Choudhary': '/Information/teacher img/Prof. M.R. Choudhary.jpeg',
  'Prof. S.B. Khalekar': '/Information/teacher img/Prof. S.B. Khalekar.jpeg',
  'Prof. M.J. Jasud': '/Information/teacher img/Prof. M.J. Jasud.jpeg',
  'Prof. K.S. Chaure': '/Information/teacher img/Prof. K.S. Choure.jpeg'
};

async function main() {
  const { data: dbRes, error: fetchErr } = await supabase.from('app_state').select('data').eq('id', 1).single();
  if (fetchErr) {
    console.error("Fetch error:", fetchErr);
    return;
  }
  
  let appData = dbRes.data;
  
  // Update Faculty Images
  appData.faculty = appData.faculty.map(f => {
    if (imageMap[f.name]) {
      f.imageUrl = imageMap[f.name];
    }
    return f;
  });
  
  // Update Conferences
  if (!appData.events) appData.events = {};
  appData.events.conferences = [
    { id: 1, title: "Conference Event", date: "2026-03-15", description: "Departmental Conference", imageUrl: "/Information/teacher img/con.jpeg.jpg" },
    { id: 2, title: "Technical Workshop", date: "2026-03-20", description: "Hands-on Technical Workshop", imageUrl: "/Information/teacher img/work.jpeg.jpg" }
  ];

  const { error: updateErr } = await supabase.from('app_state').update({ data: appData }).eq('id', 1);
  if (updateErr) {
    console.error("Update error:", updateErr);
  } else {
    console.log("Successfully updated Supabase data!");
  }
}
main();
