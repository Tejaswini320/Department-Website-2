import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

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
  
  appData.events = {
    alumni: [],
    extraCurricular: [
      { id: 1, title: "NSS Camp", date: "2025-01-20", description: "National Service Scheme camp organized by the department.", imageUrl: "/Information/Photos/Extra Activity/DSC_3011.JPG" },
      { id: 2, title: "Blood Donation Drive", date: "2025-02-10", description: "Students participated in the blood donation awareness camp.", imageUrl: "/Information/Photos/Extra Activity/DSC_3016.JPG" },
      { id: 3, title: "Sports Day", date: "2025-01-15", description: "Annual sports day celebration with various indoor and outdoor events.", imageUrl: "/Information/Photos/Extra Activity/DSC_5037.JPG" },
      { id: 4, title: "Tree Plantation", date: "2025-03-05", description: "Environmental awareness drive by CS department students.", imageUrl: "/Information/Photos/Extra Activity/IMG-20250203-WA0003.jpg" },
      { id: 5, title: "Guest Lecture", date: "2025-02-25", description: "Industry expert guest lecture on emerging technologies.", imageUrl: "/Information/Photos/Extra Activity/IMG_0644.JPG" },
    ],
    conferences: [
      { id: 1, title: "Workshop on Data Analytics", date: "2025-03-15", description: "Hands-on workshop on Data Analytics using Python.", imageUrl: "/Information/Photos/Workshop/76693d43-c967-4ef3-bba8-d826302e139c.jpg" },
      { id: 2, title: "Technical Workshop", date: "2025-03-20", description: "Departmental workshop on modern web technologies.", imageUrl: "/Information/Photos/Workshop/DSC_3182.JPG" },
      { id: 3, title: "Seminar on AI & ML", date: "2025-02-28", description: "Seminar on Artificial Intelligence and Machine Learning trends.", imageUrl: "/Information/Photos/Workshop/DSC_8003.JPG" },
      { id: 4, title: "Cybersecurity Awareness", date: "2025-01-25", description: "Workshop on cybersecurity best practices and ethical hacking.", imageUrl: "/Information/Photos/Workshop/DSC_8007.JPG" },
      { id: 5, title: "Cloud Computing Session", date: "2025-03-10", description: "Hands-on session on cloud computing platforms.", imageUrl: "/Information/Photos/Workshop/DSC_8011.JPG" },
    ],
    cultural: [
      { id: 1, title: "Tech Srujana 2025", date: "2025-02-14", description: "Annual technical and cultural festival of the Computer Science Department featuring project exhibitions, coding contests, and cultural performances.", imageUrl: "/Information/Photos/Tech Srujana/DSC_2953.JPG" },
      { id: 2, title: "Tech Srujana - Project Exhibition", date: "2025-02-14", description: "Students showcasing innovative projects and research work.", imageUrl: "/Information/Photos/Tech Srujana/DSC_2970.JPG" },
      { id: 3, title: "Tech Srujana - Cultural Program", date: "2025-02-14", description: "Cultural performances and entertainment programs by students.", imageUrl: "/Information/Photos/Tech Srujana/DSC_2989.JPG" },
      { id: 4, title: "Tech Srujana - Inaugural Function", date: "2025-02-14", description: "Inaugural ceremony of Tech Srujana with chief guests.", imageUrl: "/Information/Photos/Tech Srujana/DSC_3061.JPG" },
    ],
    awards: [
      { id: 1, title: "Prize Distribution Ceremony", date: "2025-02-15", description: "Annual prize distribution ceremony for academic and sports achievements.", imageUrl: "/Information/Photos/Awards/20220502114007_IMG_0728.JPG" },
      { id: 2, title: "Faculty Award Ceremony", date: "2025-01-30", description: "Recognition and awards for outstanding faculty contributions.", imageUrl: "/Information/Photos/Awards/IMG-20250909-WA0097.jpg" },
      { id: 3, title: "Student Achievement Awards", date: "2025-03-01", description: "Felicitation of students for academic excellence and co-curricular achievements.", imageUrl: "/Information/Photos/Awards/WhatsApp Image 2026-04-10 at 8.49.00 PM.jpeg" },
    ],
    social: [],
  };

  const { error: updateErr } = await supabase.from('app_state').update({ data: appData }).eq('id', 1);
  if (updateErr) {
    console.error("Update error:", updateErr);
  } else {
    console.log("Successfully updated Supabase Events data!");
  }
}
main();
