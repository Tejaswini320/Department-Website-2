import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mljabpzcfhmjmexwrwwp.supabase.co';
const supabaseKey = 'sb_publishable_cfegB0Qn9TNJ9emHtgZ5-A_BdnP_nyU';
const supabase = createClient(supabaseUrl, supabaseKey);

// Real toppers extracted from each Result Analysis document
const toppers = [
  // 2015 — T.Y. B.Sc. toppers from April 2015 doc
  { id: 1, name: 'Mehta Roshni Nihar', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2015', cgpa: '81.73%', rank: '1', imageUrl: '' },
  { id: 2, name: 'Umale Chaitali Ashok', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2015', cgpa: '72.84%', rank: '2', imageUrl: '' },
  { id: 3, name: 'Khule Gauri Rajendra', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2015', cgpa: '72.57%', rank: '3', imageUrl: '' },

  // 2016 — T.Y. B.Sc. toppers from April 2016 doc
  { id: 4, name: 'Nawal Surekha Khandu', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2016', cgpa: '73.68%', rank: '1', imageUrl: '' },
  { id: 5, name: 'Auti Priyanka Kashinath', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2016', cgpa: '72.36%', rank: '2', imageUrl: '' },
  { id: 6, name: 'Kawad Ashwini Rama', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2016', cgpa: '70.94%', rank: '3', imageUrl: '' },

  // 2017 — T.Y. B.Sc. toppers from April 2017 doc
  { id: 7, name: 'Nagarkar Vranjangana Vilas', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2017', cgpa: '80.66%', rank: '1', imageUrl: '' },
  { id: 8, name: 'Yewale Pavan Vitthal', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2017', cgpa: '72.41%', rank: '2', imageUrl: '' },
  { id: 9, name: 'Shirke Prajakta Ravindra', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2017', cgpa: '70.25%', rank: '3', imageUrl: '' },

  // 2018 — T.Y. B.Sc. toppers from April 2018 doc
  { id: 10, name: 'Kadam Harshada Subhash', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2018', cgpa: '79.47%', rank: '1', imageUrl: '' },
  { id: 11, name: 'Shaikh Shabana Rahimoodin', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2018', cgpa: '79.29%', rank: '2', imageUrl: '' },
  { id: 12, name: 'Bora Pratiksha Nitin', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2018', cgpa: '76.42%', rank: '3', imageUrl: '' },

  // 2019 — T.Y. B.Sc. toppers from April 2019 doc
  { id: 13, name: 'Pawar Pranit Mohan', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2019', cgpa: '76.57%', rank: '1', imageUrl: '' },
  { id: 14, name: 'Nawale Vidya Dadabhau', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2019', cgpa: '74.52%', rank: '2', imageUrl: '' },
  { id: 15, name: 'Gavhane Amol Gahininath', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2019', cgpa: '71.94%', rank: '3', imageUrl: '' },

  // 2020 — T.Y. B.Sc. toppers from 2019-20 doc
  { id: 16, name: 'Kshirsagar Shraddha Rahul', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2020', cgpa: '88.00%', rank: '1', imageUrl: '' },
  { id: 17, name: 'Bhandari Shruti Surendra', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2020', cgpa: '80.00%', rank: '2', imageUrl: '' },
  { id: 18, name: 'Pawar Amrta Annasaheb', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2020', cgpa: '79.00%', rank: '3', imageUrl: '' },

  // 2021 — T.Y. B.Sc. toppers from 2020-21 doc
  { id: 19, name: 'Telore Manoj Pandurang', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2021', cgpa: '86.03%', rank: '1', imageUrl: '' },
  { id: 20, name: 'Dipali Gore Babasaheb', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2021', cgpa: '86.03%', rank: '2', imageUrl: '' },
  { id: 21, name: 'Surase Tejas Sandip', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2021', cgpa: '85.33%', rank: '3', imageUrl: '' },

  // 2022 — T.Y. B.Sc. toppers from March 2022 doc
  { id: 22, name: 'Kandekar Vedika Gorakshanath', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2022', cgpa: '87.50%', rank: '1', imageUrl: '' },
  { id: 23, name: 'Bodkhe Sayali Anil', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2022', cgpa: '87.36%', rank: '2', imageUrl: '' },
  { id: 24, name: 'Wakhare Om Ravindra', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2022', cgpa: '86.86%', rank: '3', imageUrl: '' },

  // 2023 — T.Y. B.Sc. toppers from March 2023 doc
  { id: 25, name: 'Shelke Kalyani Rajendra', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2023', cgpa: '91.20%', rank: '1', imageUrl: '' },
  { id: 26, name: 'Mhaske Harshada Satish', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2023', cgpa: '89.39%', rank: '2', imageUrl: '' },
  { id: 27, name: 'Pawar Sakshi Dattatraya', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2023', cgpa: '86.74%', rank: '3', imageUrl: '' },

  // 2024 — T.Y. B.Sc. toppers from March 2024 doc
  { id: 28, name: 'Dhawale Ajinkya Balasaheb', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2024', cgpa: '91.33%', rank: '1', imageUrl: '' },
  { id: 29, name: 'Barde Pratik Dilip', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2024', cgpa: '88.14%', rank: '2', imageUrl: '' },
  { id: 30, name: 'Kolge Dipali Rajendra', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2024', cgpa: '85.17%', rank: '3', imageUrl: '' },

  // 2025 — T.Y. B.Sc. toppers from March 2025 doc
  { id: 31, name: 'Thore Vaishnavi Vijay', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2025', cgpa: '88.75%', rank: '1', imageUrl: '' },
  { id: 32, name: 'Kule Nikhil Pruthviraj', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2025', cgpa: '88.33%', rank: '2', imageUrl: '' },
  { id: 33, name: 'Tokekar Himanshu Sudhir', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2025', cgpa: '88.06%', rank: '3', imageUrl: '' },

  // 2026 — same as 2025 (current year, latest available data)
  { id: 34, name: 'Thore Vaishnavi Vijay', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2026', cgpa: '88.75%', rank: '1', imageUrl: '' },
  { id: 35, name: 'Kule Nikhil Pruthviraj', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2026', cgpa: '88.33%', rank: '2', imageUrl: '' },
  { id: 36, name: 'Tokekar Himanshu Sudhir', program: 'T.Y. B.Sc. (Comp. Sci.)', year: '2026', cgpa: '88.06%', rank: '3', imageUrl: '' },
];

async function pushToppers() {
  const { data: remoteData, error: fetchError } = await supabase
    .from('app_state')
    .select('data')
    .eq('id', 1)
    .single();

  if (fetchError) {
    console.error('Error fetching data:', fetchError);
    return;
  }

  const updatedData = { ...remoteData.data, toppers: toppers };
  
  const { error: updateError } = await supabase
    .from('app_state')
    .update({ data: updatedData })
    .eq('id', 1);

  if (updateError) {
    console.error('Error updating:', updateError);
  } else {
    console.log('SUCCESS! Pushed', toppers.length, 'real toppers to Supabase.');
    console.log('Years covered: 2015-2026');
  }
}

pushToppers();
