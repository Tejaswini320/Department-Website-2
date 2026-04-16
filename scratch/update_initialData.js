import fs from 'fs';

const filePath = 'd:/OJT Project/OJT/College_Website-main/src/data/initialData.js';
let content = fs.readFileSync(filePath, 'utf8');

const newToppers = [
      { id: 401, year: "2015", class: "TY", rank: "1", name: "Mehta Roshni Nihar", marks: "-", percentage: "81.73%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 402, year: "2015", class: "TY", rank: "2", name: "Umale Chaitali Ashok", marks: "-", percentage: "72.84%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 403, year: "2015", class: "TY", rank: "3", name: "Khule Gauri Rajendra", marks: "-", percentage: "72.57%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 404, year: "2016", class: "TY", rank: "1", name: "Nawal Surekha Khandu", marks: "-", percentage: "73.68%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 405, year: "2016", class: "TY", rank: "2", name: "Auti Priyanka Kashinath", marks: "-", percentage: "72.36%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 406, year: "2016", class: "TY", rank: "3", name: "Kawad Ashwini Rama", marks: "-", percentage: "70.94%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 407, year: "2017", class: "TY", rank: "1", name: "Nagarkar Vranjangana Vilas", marks: "-", percentage: "80.66%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 408, year: "2017", class: "TY", rank: "2", name: "Yewale Pavan Vitthal", marks: "-", percentage: "72.41%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 409, year: "2017", class: "TY", rank: "3", name: "Shirke Prajakta Ravindra", marks: "-", percentage: "70.25%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 410, year: "2018", class: "TY", rank: "1", name: "Kadam Harshada Subhash", marks: "-", percentage: "79.47%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 411, year: "2018", class: "TY", rank: "2", name: "Shaikh Shabana Rahimoodin", marks: "-", percentage: "79.29%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 412, year: "2018", class: "TY", rank: "3", name: "Bora Pratiksha Nitin", marks: "-", percentage: "76.42%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 413, year: "2019", class: "TY", rank: "1", name: "Pawar Pranit Mohan", marks: "-", percentage: "76.57%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 414, year: "2019", class: "TY", rank: "2", name: "Nawale Vidya Dadabhau", marks: "-", percentage: "74.52%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 415, year: "2019", class: "TY", rank: "3", name: "Gavhane Amol Gahininath", marks: "-", percentage: "71.94%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 501, year: "2020", class: "TY", rank: "1", name: "Telore Manoj Pandurang", marks: "-", percentage: "86.03%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 502, year: "2020", class: "TY", rank: "2", name: "Dipali Gore Babasaheb", marks: "-", percentage: "86.03%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 503, year: "2020", class: "TY", rank: "3", name: "Surase Tejas Sandip", marks: "-", percentage: "85.33%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 504, year: "2020", class: "SY", rank: "1", name: "Kandekar Vedika Gorakshanath", marks: "-", percentage: "88.00%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 505, year: "2020", class: "SY", rank: "2", name: "Urane Ankita Laxmikant", marks: "-", percentage: "80.00%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 506, year: "2020", class: "SY", rank: "3", name: "Kapale Saurabh Gangadhar", marks: "-", percentage: "79.00%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 507, year: "2020", class: "FY", rank: "1", name: "Shelke Kalyani Rajendra", marks: "9.34 (CGPA)", percentage: "-", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 508, year: "2020", class: "FY", rank: "2", name: "Sekakar Rutuja Dhynaeshwar", marks: "9.3 (CGPA)", percentage: "-", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 509, year: "2020", class: "FY", rank: "3", name: "Nimbalkar Pranali Gangadhar", marks: "9.23 (CGPA)", percentage: "-", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 510, year: "2021", class: "FY", rank: "1", name: "Dhawale Ajinkya Balasaheb", marks: "1090/1200", percentage: "90.83%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 511, year: "2021", class: "FY", rank: "2", name: "Barde Pratik Dilip", marks: "1078/1200", percentage: "89.83%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 512, year: "2021", class: "FY", rank: "3", name: "Pawar Aishwarya Jaydeep", marks: "1039/1200", percentage: "86.58%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 513, year: "2021", class: "SY", rank: "1", name: "Shelke Kalyani R", marks: "9.55", percentage: "88.00%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 514, year: "2021", class: "SY", rank: "1", name: "Munot Riya Rajendra", marks: "9.55", percentage: "88.00%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 515, year: "2021", class: "SY", rank: "2", name: "Mhaske Harshada Satish", marks: "9.45", percentage: "87.00%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 516, year: "2021", class: "SY", rank: "3", name: "Adhav Vrushali A", marks: "9.18", percentage: "84.3%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 517, year: "2021", class: "TY", rank: "1", name: "Kandekar Vedika Gorakshanath", marks: "1925/2200", percentage: "87.50%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 518, year: "2021", class: "TY", rank: "2", name: "Bodkhe Sayali Anil", marks: "1922/2200", percentage: "87.36%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 519, year: "2021", class: "TY", rank: "3", name: "Wakhare Om Ravindra", marks: "1910/2200", percentage: "86.86%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 520, year: "2021", class: "M.Sc. I", rank: "1", name: "Berad Snehal Satish", marks: "935/1100", percentage: "85.00%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 521, year: "2021", class: "M.Sc. I", rank: "2", name: "Date Suchita Ramdas", marks: "903/1100", percentage: "82.09%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 522, year: "2021", class: "M.Sc. I", rank: "3", name: "Berad Rutuja Ashok", marks: "895/1100", percentage: "81.36%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 523, year: "2021", class: "M.Sc. II", rank: "1", name: "Supekar Sarang Sunil", marks: "1761/2000", percentage: "88.09%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 524, year: "2021", class: "M.Sc. II", rank: "2", name: "Zaware Chaitali Popat", marks: "1674/2000", percentage: "83.70%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 525, year: "2021", class: "M.Sc. II", rank: "3", name: "Akolkar Rushikesh Babasaheb", marks: "1615/2000", percentage: "80.75%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 526, year: "2022", class: "FY", rank: "1", name: "Kute Nikhil Pruthviraj", marks: "9.83", percentage: "93.30%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 527, year: "2022", class: "FY", rank: "2", name: "Thore Vaishnavi Vijay", marks: "9.73", percentage: "92.30%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 528, year: "2022", class: "FY", rank: "3", name: "Tokekar Himanshu Sudhir", marks: "9.62", percentage: "91.20%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 529, year: "2022", class: "FY", rank: "3", name: "Pawar Sakshi Bapurao", marks: "9.62", percentage: "91.20%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 530, year: "2022", class: "SY", rank: "1", name: "Dhawale Ajinkya Balasaheb", marks: "9.73", percentage: "89.5%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 531, year: "2022", class: "SY", rank: "2", name: "Kolge Dipali Rajendra", marks: "9.38", percentage: "86.5%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 532, year: "2022", class: "SY", rank: "2", name: "Lokhande Ashwini Adinath", marks: "9.30", percentage: "85.5%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 533, year: "2022", class: "SY", rank: "3", name: "Kolhe Prathamesh Vijay", marks: "9.21", percentage: "84.5%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 534, year: "2022", class: "TY", rank: "1", name: "Shelke Kalyani Rajendra", marks: "9.60", percentage: "91.20%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 535, year: "2022", class: "TY", rank: "2", name: "Mhaske Harshada Satish", marks: "9.41", percentage: "89.39%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 536, year: "2022", class: "TY", rank: "3", name: "Pawar Sakshi Dattatraya", marks: "9.13", percentage: "86.74%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 537, year: "2022", class: "M.Sc. I", rank: "1", name: "Misal Aboli Suresh", marks: "8.32", percentage: "79.04%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 538, year: "2022", class: "M.Sc. I", rank: "2", name: "Pandarkar Abhijeet Anil", marks: "8.22", percentage: "78.09%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 539, year: "2022", class: "M.Sc. I", rank: "3", name: "Zarekar Nikita Vishnu", marks: "8.13", percentage: "77.23%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 540, year: "2022", class: "M.Sc. II", rank: "1", name: "Berad Snehal Satish", marks: "9.16", percentage: "85.05%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 541, year: "2022", class: "M.Sc. II", rank: "2", name: "Shete Aditi Dnyaneshwar", marks: "8.75", percentage: "80.73%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 542, year: "2022", class: "M.Sc. II", rank: "3", name: "Yeole Prachi Ramesh", marks: "8.75", percentage: "80.27%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 543, year: "2023", class: "FY", rank: "1", name: "Shelke Sayali Sheshmal", marks: "9.29", percentage: "88.25%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 544, year: "2023", class: "FY", rank: "2", name: "Shelke Tejaswini Ajinath", marks: "9.09", percentage: "86.36%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 545, year: "2023", class: "FY", rank: "3", name: "Darekar Jui Abhijeet", marks: "9.00", percentage: "85.50%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 546, year: "2023", class: "FY", rank: "3", name: "Shelke Akshada Dhondiba", marks: "9.00", percentage: "85.50%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 547, year: "2023", class: "SY", rank: "1", name: "Sonawane Suraj Kailas", marks: "2231", percentage: "89.24%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 548, year: "2023", class: "SY", rank: "2", name: "Andhare Supriya Sunil", marks: "2172", percentage: "86.88%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 549, year: "2023", class: "SY", rank: "2", name: "Bawadkar Madhavi Keshav", marks: "2089", percentage: "83.56%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 550, year: "2023", class: "TY", rank: "1", name: "Dhawale Ajinkya Balasaheb", marks: "9.76", percentage: "91.33%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 551, year: "2023", class: "TY", rank: "2", name: "Barde Pratik Dilip", marks: "9.43", percentage: "88.14%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 552, year: "2023", class: "TY", rank: "3", name: "Kolge Dipali Rajendra", marks: "9.27", percentage: "85.17%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 553, year: "2023", class: "M.Sc. I", rank: "1", name: "Shinde Shivani Jagannath", marks: "1067", percentage: "88.91%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 554, year: "2023", class: "M.Sc. I", rank: "2", name: "Pawar Tanya Kanifnath", marks: "1051", percentage: "87.58%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 555, year: "2023", class: "M.Sc. I", rank: "3", name: "Joshi Sakshi Vijay", marks: "999", percentage: "83.25%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 556, year: "2023", class: "M.Sc. II", rank: "1", name: "Rankhanb Gauri Pravinchand", marks: "1712", percentage: "77.82%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 557, year: "2023", class: "M.Sc. II", rank: "2", name: "Karale Avdhut Ghanshyam", marks: "1697", percentage: "77.14%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 558, year: "2023", class: "M.Sc. II", rank: "3", name: "Kakade Akshada Bharat", marks: "1695", percentage: "77.05%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 559, year: "2024", class: "FY", rank: "1", name: "Kulkarni Sanika Yogesh", marks: "934", percentage: "84.91%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 560, year: "2024", class: "FY", rank: "2", name: "Jare Archana Bapu", marks: "924", percentage: "84.00%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 561, year: "2024", class: "FY", rank: "3", name: "Honde Rutuja Dnyaneshwar", marks: "919", percentage: "83.55%", program: "F.Y. B.Sc. (Comp. Sci.)" },
      { id: 562, year: "2024", class: "SY", rank: "1", name: "Shelke Sayali Sheshmal", marks: "9.04", percentage: "85.92%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 563, year: "2024", class: "SY", rank: "2", name: "Shelke Akshada Dhondiba", marks: "8.95", percentage: "84.98%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 564, year: "2024", class: "SY", rank: "2", name: "Shelke Tejaswini Ajinath", marks: "8.86", percentage: "84.16%", program: "S.Y. B.Sc. (Comp. Sci.)" },
      { id: 565, year: "2024", class: "TY", rank: "1", name: "Thore Vaishnavi Vijay", marks: "3195/9.43", percentage: "88.75%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 566, year: "2024", class: "TY", rank: "2", name: "Kule Nikhil Pruthviraj", marks: "3180/9.45", percentage: "88.33%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 567, year: "2024", class: "TY", rank: "3", name: "Tokekar Himanshu Sudhir", marks: "3170/9.49", percentage: "88.06%", program: "T.Y. B.Sc. (Comp. Sci.)" },
      { id: 568, year: "2024", class: "M.Sc. I", rank: "1", name: "Wagh Shivani Balasaheb", marks: "981", percentage: "81.75%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 569, year: "2024", class: "M.Sc. I", rank: "2", name: "Aher Abhishek Shivaji", marks: "936", percentage: "78.00%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 570, year: "2024", class: "M.Sc. I", rank: "3", name: "Walke Vaishnavi Dattatraya", marks: "923", percentage: "76.92%", program: "M.Sc. (Comp. Sci.) – I" },
      { id: 571, year: "2024", class: "M.Sc. II", rank: "1", name: "Pawar Tanaya K", marks: "2054", percentage: "87.40%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 572, year: "2024", class: "M.Sc. II", rank: "2", name: "Shinde Shivani K", marks: "2043", percentage: "86.94%", program: "M.Sc. (Comp. Sci.) – II" },
      { id: 573, year: "2024", class: "M.Sc. II", rank: "3", name: "Joshi Sakshi Vijay", marks: "2023", percentage: "86.09%", program: "M.Sc. (Comp. Sci.) – II" }
];

const startStr = 'toppers: [';
const endStr = '],';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr, startIndex + startStr.length);

if (startIndex !== -1 && endIndex !== -1) {
  const newToppersStr = 'toppers: ' + JSON.stringify(newToppers, null, 2);
  content = content.substring(0, startIndex) + newToppersStr + content.substring(endIndex + 1);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated toppers data!");
} else {
  console.error("Could not find toppers array markers.");
}
