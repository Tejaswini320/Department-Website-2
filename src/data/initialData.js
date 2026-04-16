// Real data for AJMVPS New Arts, Commerce and Science College, Ahmednagar
// Sources: newartscollege.ac.in, Shiksha, CollegeDunia, Careers360

export const initialData = {
  notices: [
    { id: 1, title: "CET Exam Guidelines for B.Sc. Data Science, Computer Science & Cloud Computing 2025-26", date: "2026-03-01", content: "Download CET guidelines and syllabus from the college website." },
    { id: 2, title: "Admissions Open for 2026-27 Academic Year", date: "2026-03-10", content: "Applications are now being accepted for B.Sc. CS, M.Sc. CS, and BCA programs." },
    { id: 3, title: "NIRF 2025 Data Published", date: "2026-02-15", content: "The college has submitted NIRF 2025 data. View details on the official website." },
    { id: 4, title: "Supplementary Examination Results April 2024", date: "2026-01-20", content: "Supplementary exam results are now available on the college portal." },
  ],

  faculty: [
    { id: 1, name: "Prof. Arun D. Gangarde", designation: "Head of Department", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. Arun D. Gangarde.jpeg", contact: "9422224440", experience: "15+ Years" },
    { id: 2, name: "Prof. M.B. Bhingare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.B. Bhingare.jpeg", contact: "9423176160", experience: "12+ Years" },
    { id: 3, name: "Prof. M.B. Gobare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.B. Gobare.jpeg", contact: "9420011597", experience: "10+ Years" },
    { id: 4, name: "Prof. B.M. Danave", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. B.M. Danave.jpeg", contact: "9403710000", experience: "8+ Years" },
    { id: 5, name: "Dr. A.A. Takate", designation: "Assistant Professor", qualification: "Ph.D., M.Sc. Computer Science", imageUrl: "/Information/teacher img/Dr. A.A. Takate.jpeg", contact: "9404276376", experience: "14+ Years" },
    { id: 6, name: "Prof. M.A. Karkhile", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.A. Karkhile.jpeg", contact: "9665814300", experience: "9+ Years" },
    { id: 7, name: "Prof. T.S. Thange", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. T.S. Thange.jpeg", contact: "9822393332", experience: "11+ Years" },
    { id: 8, name: "Prof. S.S. Kale", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. S.S. Kale.jpeg", contact: "9284278855", experience: "7+ Years" },
    { id: 9, name: "Prof. M.R. Choudhary", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.R. Choudhary.jpeg", contact: "9049662964", experience: "8+ Years" },
    { id: 10, name: "Prof. S.B. Khalekar", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. S.B. Khalekar.jpeg", contact: "9834756544", experience: "10+ Years" },
    { id: 11, name: "Prof. M.J. Jasud", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.J. Jasud.jpeg", contact: "7218566416", experience: "6+ Years" },
    { id: 12, name: "Prof. K.S. Choure", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. K.S. Choure.jpeg", contact: "7498487397", experience: "7+ Years" },
  ],

  timetables: [
    { id: 1, year: "FY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/FY Theory Time Table.docx", semester: "Semester I" },
    { id: 2, year: "SY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/SY THEORY TIMETABLE.docx", semester: "Semester I" },
    { id: 3, year: "TY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/TY Theory Timetable.docx", semester: "Semester I" },
    { id: 4, year: "M.Sc. CS - I", pdfUrl: "/Information/Time Table/Sem- I/M.Sc. - I Sem- I Theroy Time Table.docx", semester: "Semester I" },
    { id: 5, year: "M.Sc. CS - II", pdfUrl: "/Information/Time Table/Sem- I/M.Sc. - II Sem- III Theroy Time Table.docx", semester: "Semester III" },
    { id: 12, year: "M.Sc. CS - II", pdfUrl: "/Information/Time Table/Sem- II/M.Sc. - II Sem- IV Theroy Time Table.docx", semester: "Semester IV" },
    { id: 6, year: "FY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- II/FY Theory Time Table.docx", semester: "Semester II" },
    { id: 7, year: "SY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- II/SY THEORY TIMETABLE.docx", semester: "Semester II" },
    { id: 8, year: "TY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- II/TY Theory Timetable.docx", semester: "Semester II" },
    { id: 9, year: "M.Sc. CS - I", pdfUrl: "/Information/Time Table/Sem- II/M.Sc. - I Sem- II Theroy Time Table.docx", semester: "Semester II" },
    { id: 10, year: "UG & PG Practical", pdfUrl: "/Information/Time Table/Sem- I/ALL UG & PG PRACTICAL TIMETABLE SEM - I.docx", semester: "Semester I" },
    { id: 11, year: "UG & PG Practical", pdfUrl: "/Information/Time Table/Sem- II/FINAL FY To M.Sc  Practical Timetable.docx", semester: "Semester II" },
  ],

  syllabus: [
    { id: 1, year: "FY B.Sc. CS", level: "UG", semester: "All", syllabusUrl: "/Information/Syllabus/Fy-B.-Sc.-Computer-Sciecne-2024-25.pdf", pyqUrl: "#" },
    { id: 2, year: "SY B.Sc. CS", level: "UG", semester: "All", syllabusUrl: "/Information/Syllabus/SY B. Sc. Major syllabus template for Printout.pdf", pyqUrl: "#" },
    { id: 3, year: "TY B.Sc. CS", level: "UG", semester: "All", syllabusUrl: "/Information/Syllabus/TYBSC  Computer Science Major SYLLABUS 2025-26 FINAL.pdf", pyqUrl: "#" },
    { id: 4, year: "M.Sc. CS - I", level: "PG", semester: "All", syllabusUrl: "/Information/Syllabus/M.SC. CS-I.pdf", pyqUrl: "#" },
    { id: 5, year: "M.Sc. CS - II", level: "PG", semester: "All", syllabusUrl: "/Information/Syllabus/M.SC. CS-II.pdf", pyqUrl: "#" },
  ],

    toppers: [
  {
    "id": 401,
    "year": "2015",
    "class": "TY",
    "rank": "1",
    "name": "Mehta Roshni Nihar",
    "marks": "-",
    "percentage": "81.73%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 402,
    "year": "2015",
    "class": "TY",
    "rank": "2",
    "name": "Umale Chaitali Ashok",
    "marks": "-",
    "percentage": "72.84%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 403,
    "year": "2015",
    "class": "TY",
    "rank": "3",
    "name": "Khule Gauri Rajendra",
    "marks": "-",
    "percentage": "72.57%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 404,
    "year": "2016",
    "class": "TY",
    "rank": "1",
    "name": "Nawal Surekha Khandu",
    "marks": "-",
    "percentage": "73.68%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 405,
    "year": "2016",
    "class": "TY",
    "rank": "2",
    "name": "Auti Priyanka Kashinath",
    "marks": "-",
    "percentage": "72.36%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 406,
    "year": "2016",
    "class": "TY",
    "rank": "3",
    "name": "Kawad Ashwini Rama",
    "marks": "-",
    "percentage": "70.94%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 407,
    "year": "2017",
    "class": "TY",
    "rank": "1",
    "name": "Nagarkar Vranjangana Vilas",
    "marks": "-",
    "percentage": "80.66%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 408,
    "year": "2017",
    "class": "TY",
    "rank": "2",
    "name": "Yewale Pavan Vitthal",
    "marks": "-",
    "percentage": "72.41%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 409,
    "year": "2017",
    "class": "TY",
    "rank": "3",
    "name": "Shirke Prajakta Ravindra",
    "marks": "-",
    "percentage": "70.25%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 410,
    "year": "2018",
    "class": "TY",
    "rank": "1",
    "name": "Kadam Harshada Subhash",
    "marks": "-",
    "percentage": "79.47%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 411,
    "year": "2018",
    "class": "TY",
    "rank": "2",
    "name": "Shaikh Shabana Rahimoodin",
    "marks": "-",
    "percentage": "79.29%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 412,
    "year": "2018",
    "class": "TY",
    "rank": "3",
    "name": "Bora Pratiksha Nitin",
    "marks": "-",
    "percentage": "76.42%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 413,
    "year": "2019",
    "class": "TY",
    "rank": "1",
    "name": "Pawar Pranit Mohan",
    "marks": "-",
    "percentage": "76.57%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 414,
    "year": "2019",
    "class": "TY",
    "rank": "2",
    "name": "Nawale Vidya Dadabhau",
    "marks": "-",
    "percentage": "74.52%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 415,
    "year": "2019",
    "class": "TY",
    "rank": "3",
    "name": "Gavhane Amol Gahininath",
    "marks": "-",
    "percentage": "71.94%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 501,
    "year": "2020",
    "class": "TY",
    "rank": "1",
    "name": "Telore Manoj Pandurang",
    "marks": "-",
    "percentage": "86.03%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 502,
    "year": "2020",
    "class": "TY",
    "rank": "2",
    "name": "Dipali Gore Babasaheb",
    "marks": "-",
    "percentage": "86.03%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 503,
    "year": "2020",
    "class": "TY",
    "rank": "3",
    "name": "Surase Tejas Sandip",
    "marks": "-",
    "percentage": "85.33%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 504,
    "year": "2020",
    "class": "SY",
    "rank": "1",
    "name": "Kandekar Vedika Gorakshanath",
    "marks": "-",
    "percentage": "88.00%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 505,
    "year": "2020",
    "class": "SY",
    "rank": "2",
    "name": "Urane Ankita Laxmikant",
    "marks": "-",
    "percentage": "80.00%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 506,
    "year": "2020",
    "class": "SY",
    "rank": "3",
    "name": "Kapale Saurabh Gangadhar",
    "marks": "-",
    "percentage": "79.00%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 507,
    "year": "2020",
    "class": "FY",
    "rank": "1",
    "name": "Shelke Kalyani Rajendra",
    "marks": "9.34 (CGPA)",
    "percentage": "-",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 508,
    "year": "2020",
    "class": "FY",
    "rank": "2",
    "name": "Sekakar Rutuja Dhynaeshwar",
    "marks": "9.3 (CGPA)",
    "percentage": "-",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 509,
    "year": "2020",
    "class": "FY",
    "rank": "3",
    "name": "Nimbalkar Pranali Gangadhar",
    "marks": "9.23 (CGPA)",
    "percentage": "-",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 510,
    "year": "2021",
    "class": "FY",
    "rank": "1",
    "name": "Dhawale Ajinkya Balasaheb",
    "marks": "1090/1200",
    "percentage": "90.83%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 511,
    "year": "2021",
    "class": "FY",
    "rank": "2",
    "name": "Barde Pratik Dilip",
    "marks": "1078/1200",
    "percentage": "89.83%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 512,
    "year": "2021",
    "class": "FY",
    "rank": "3",
    "name": "Pawar Aishwarya Jaydeep",
    "marks": "1039/1200",
    "percentage": "86.58%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 513,
    "year": "2021",
    "class": "SY",
    "rank": "1",
    "name": "Shelke Kalyani R",
    "marks": "9.55",
    "percentage": "88.00%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 514,
    "year": "2021",
    "class": "SY",
    "rank": "1",
    "name": "Munot Riya Rajendra",
    "marks": "9.55",
    "percentage": "88.00%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 515,
    "year": "2021",
    "class": "SY",
    "rank": "2",
    "name": "Mhaske Harshada Satish",
    "marks": "9.45",
    "percentage": "87.00%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 516,
    "year": "2021",
    "class": "SY",
    "rank": "3",
    "name": "Adhav Vrushali A",
    "marks": "9.18",
    "percentage": "84.3%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 517,
    "year": "2021",
    "class": "TY",
    "rank": "1",
    "name": "Kandekar Vedika Gorakshanath",
    "marks": "1925/2200",
    "percentage": "87.50%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 518,
    "year": "2021",
    "class": "TY",
    "rank": "2",
    "name": "Bodkhe Sayali Anil",
    "marks": "1922/2200",
    "percentage": "87.36%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 519,
    "year": "2021",
    "class": "TY",
    "rank": "3",
    "name": "Wakhare Om Ravindra",
    "marks": "1910/2200",
    "percentage": "86.86%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 520,
    "year": "2021",
    "class": "M.Sc. I",
    "rank": "1",
    "name": "Berad Snehal Satish",
    "marks": "935/1100",
    "percentage": "85.00%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 521,
    "year": "2021",
    "class": "M.Sc. I",
    "rank": "2",
    "name": "Date Suchita Ramdas",
    "marks": "903/1100",
    "percentage": "82.09%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 522,
    "year": "2021",
    "class": "M.Sc. I",
    "rank": "3",
    "name": "Berad Rutuja Ashok",
    "marks": "895/1100",
    "percentage": "81.36%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 523,
    "year": "2021",
    "class": "M.Sc. II",
    "rank": "1",
    "name": "Supekar Sarang Sunil",
    "marks": "1761/2000",
    "percentage": "88.09%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 524,
    "year": "2021",
    "class": "M.Sc. II",
    "rank": "2",
    "name": "Zaware Chaitali Popat",
    "marks": "1674/2000",
    "percentage": "83.70%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 525,
    "year": "2021",
    "class": "M.Sc. II",
    "rank": "3",
    "name": "Akolkar Rushikesh Babasaheb",
    "marks": "1615/2000",
    "percentage": "80.75%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 526,
    "year": "2022",
    "class": "FY",
    "rank": "1",
    "name": "Kute Nikhil Pruthviraj",
    "marks": "9.83",
    "percentage": "93.30%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 527,
    "year": "2022",
    "class": "FY",
    "rank": "2",
    "name": "Thore Vaishnavi Vijay",
    "marks": "9.73",
    "percentage": "92.30%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 528,
    "year": "2022",
    "class": "FY",
    "rank": "3",
    "name": "Tokekar Himanshu Sudhir",
    "marks": "9.62",
    "percentage": "91.20%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 529,
    "year": "2022",
    "class": "FY",
    "rank": "3",
    "name": "Pawar Sakshi Bapurao",
    "marks": "9.62",
    "percentage": "91.20%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 530,
    "year": "2022",
    "class": "SY",
    "rank": "1",
    "name": "Dhawale Ajinkya Balasaheb",
    "marks": "9.73",
    "percentage": "89.5%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 531,
    "year": "2022",
    "class": "SY",
    "rank": "2",
    "name": "Kolge Dipali Rajendra",
    "marks": "9.38",
    "percentage": "86.5%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 532,
    "year": "2022",
    "class": "SY",
    "rank": "2",
    "name": "Lokhande Ashwini Adinath",
    "marks": "9.30",
    "percentage": "85.5%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 533,
    "year": "2022",
    "class": "SY",
    "rank": "3",
    "name": "Kolhe Prathamesh Vijay",
    "marks": "9.21",
    "percentage": "84.5%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 534,
    "year": "2022",
    "class": "TY",
    "rank": "1",
    "name": "Shelke Kalyani Rajendra",
    "marks": "9.60",
    "percentage": "91.20%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 535,
    "year": "2022",
    "class": "TY",
    "rank": "2",
    "name": "Mhaske Harshada Satish",
    "marks": "9.41",
    "percentage": "89.39%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 536,
    "year": "2022",
    "class": "TY",
    "rank": "3",
    "name": "Pawar Sakshi Dattatraya",
    "marks": "9.13",
    "percentage": "86.74%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 537,
    "year": "2022",
    "class": "M.Sc. I",
    "rank": "1",
    "name": "Misal Aboli Suresh",
    "marks": "8.32",
    "percentage": "79.04%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 538,
    "year": "2022",
    "class": "M.Sc. I",
    "rank": "2",
    "name": "Pandarkar Abhijeet Anil",
    "marks": "8.22",
    "percentage": "78.09%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 539,
    "year": "2022",
    "class": "M.Sc. I",
    "rank": "3",
    "name": "Zarekar Nikita Vishnu",
    "marks": "8.13",
    "percentage": "77.23%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 540,
    "year": "2022",
    "class": "M.Sc. II",
    "rank": "1",
    "name": "Berad Snehal Satish",
    "marks": "9.16",
    "percentage": "85.05%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 541,
    "year": "2022",
    "class": "M.Sc. II",
    "rank": "2",
    "name": "Shete Aditi Dnyaneshwar",
    "marks": "8.75",
    "percentage": "80.73%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 542,
    "year": "2022",
    "class": "M.Sc. II",
    "rank": "3",
    "name": "Yeole Prachi Ramesh",
    "marks": "8.75",
    "percentage": "80.27%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 543,
    "year": "2023",
    "class": "FY",
    "rank": "1",
    "name": "Shelke Sayali Sheshmal",
    "marks": "9.29",
    "percentage": "88.25%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 544,
    "year": "2023",
    "class": "FY",
    "rank": "2",
    "name": "Shelke Tejaswini Ajinath",
    "marks": "9.09",
    "percentage": "86.36%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 545,
    "year": "2023",
    "class": "FY",
    "rank": "3",
    "name": "Darekar Jui Abhijeet",
    "marks": "9.00",
    "percentage": "85.50%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 546,
    "year": "2023",
    "class": "FY",
    "rank": "3",
    "name": "Shelke Akshada Dhondiba",
    "marks": "9.00",
    "percentage": "85.50%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 547,
    "year": "2023",
    "class": "SY",
    "rank": "1",
    "name": "Sonawane Suraj Kailas",
    "marks": "2231",
    "percentage": "89.24%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 548,
    "year": "2023",
    "class": "SY",
    "rank": "2",
    "name": "Andhare Supriya Sunil",
    "marks": "2172",
    "percentage": "86.88%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 549,
    "year": "2023",
    "class": "SY",
    "rank": "2",
    "name": "Bawadkar Madhavi Keshav",
    "marks": "2089",
    "percentage": "83.56%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 550,
    "year": "2023",
    "class": "TY",
    "rank": "1",
    "name": "Dhawale Ajinkya Balasaheb",
    "marks": "9.76",
    "percentage": "91.33%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 551,
    "year": "2023",
    "class": "TY",
    "rank": "2",
    "name": "Barde Pratik Dilip",
    "marks": "9.43",
    "percentage": "88.14%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 552,
    "year": "2023",
    "class": "TY",
    "rank": "3",
    "name": "Kolge Dipali Rajendra",
    "marks": "9.27",
    "percentage": "85.17%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 553,
    "year": "2023",
    "class": "M.Sc. I",
    "rank": "1",
    "name": "Shinde Shivani Jagannath",
    "marks": "1067",
    "percentage": "88.91%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 554,
    "year": "2023",
    "class": "M.Sc. I",
    "rank": "2",
    "name": "Pawar Tanya Kanifnath",
    "marks": "1051",
    "percentage": "87.58%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 555,
    "year": "2023",
    "class": "M.Sc. I",
    "rank": "3",
    "name": "Joshi Sakshi Vijay",
    "marks": "999",
    "percentage": "83.25%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 556,
    "year": "2023",
    "class": "M.Sc. II",
    "rank": "1",
    "name": "Rankhanb Gauri Pravinchand",
    "marks": "1712",
    "percentage": "77.82%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 557,
    "year": "2023",
    "class": "M.Sc. II",
    "rank": "2",
    "name": "Karale Avdhut Ghanshyam",
    "marks": "1697",
    "percentage": "77.14%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 558,
    "year": "2023",
    "class": "M.Sc. II",
    "rank": "3",
    "name": "Kakade Akshada Bharat",
    "marks": "1695",
    "percentage": "77.05%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 559,
    "year": "2024",
    "class": "FY",
    "rank": "1",
    "name": "Kulkarni Sanika Yogesh",
    "marks": "934",
    "percentage": "84.91%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 560,
    "year": "2024",
    "class": "FY",
    "rank": "2",
    "name": "Jare Archana Bapu",
    "marks": "924",
    "percentage": "84.00%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 561,
    "year": "2024",
    "class": "FY",
    "rank": "3",
    "name": "Honde Rutuja Dnyaneshwar",
    "marks": "919",
    "percentage": "83.55%",
    "program": "F.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 562,
    "year": "2024",
    "class": "SY",
    "rank": "1",
    "name": "Shelke Sayali Sheshmal",
    "marks": "9.04",
    "percentage": "85.92%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 563,
    "year": "2024",
    "class": "SY",
    "rank": "2",
    "name": "Shelke Akshada Dhondiba",
    "marks": "8.95",
    "percentage": "84.98%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 564,
    "year": "2024",
    "class": "SY",
    "rank": "2",
    "name": "Shelke Tejaswini Ajinath",
    "marks": "8.86",
    "percentage": "84.16%",
    "program": "S.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 565,
    "year": "2024",
    "class": "TY",
    "rank": "1",
    "name": "Thore Vaishnavi Vijay",
    "marks": "3195/9.43",
    "percentage": "88.75%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 566,
    "year": "2024",
    "class": "TY",
    "rank": "2",
    "name": "Kule Nikhil Pruthviraj",
    "marks": "3180/9.45",
    "percentage": "88.33%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 567,
    "year": "2024",
    "class": "TY",
    "rank": "3",
    "name": "Tokekar Himanshu Sudhir",
    "marks": "3170/9.49",
    "percentage": "88.06%",
    "program": "T.Y. B.Sc. (Comp. Sci.)"
  },
  {
    "id": 568,
    "year": "2024",
    "class": "M.Sc. I",
    "rank": "1",
    "name": "Wagh Shivani Balasaheb",
    "marks": "981",
    "percentage": "81.75%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 569,
    "year": "2024",
    "class": "M.Sc. I",
    "rank": "2",
    "name": "Aher Abhishek Shivaji",
    "marks": "936",
    "percentage": "78.00%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 570,
    "year": "2024",
    "class": "M.Sc. I",
    "rank": "3",
    "name": "Walke Vaishnavi Dattatraya",
    "marks": "923",
    "percentage": "76.92%",
    "program": "M.Sc. (Comp. Sci.) – I"
  },
  {
    "id": 571,
    "year": "2024",
    "class": "M.Sc. II",
    "rank": "1",
    "name": "Pawar Tanaya K",
    "marks": "2054",
    "percentage": "87.40%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 572,
    "year": "2024",
    "class": "M.Sc. II",
    "rank": "2",
    "name": "Shinde Shivani K",
    "marks": "2043",
    "percentage": "86.94%",
    "program": "M.Sc. (Comp. Sci.) – II"
  },
  {
    "id": 573,
    "year": "2024",
    "class": "M.Sc. II",
    "rank": "3",
    "name": "Joshi Sakshi Vijay",
    "marks": "2023",
    "percentage": "86.09%",
    "program": "M.Sc. (Comp. Sci.) – II"
  }
],

  placements: [],

  trainings: [
    {
      id: 1,
      name: "Certificate Program in Full Stack Java",
      overview: "Organized by Symbiosis Skills & Professional University's Symbiosis Digital Academy, in collaboration with Capgemini. This comprehensive 3-month program equipped students with industry-ready skills, covering Core Java, Advanced Java, SQL, and Agile Scrum methodologies.",
      imageUrl: ""
    },
    {
      id: 2,
      name: "Employability Skill Training Programme",
      overview: "Conducted by Mahindra Pride Classroom and the Naandi Foundation, this program focuses on essential soft skills beyond academics. It is designed to build self-confidence, develop fluent communication and public speaking skills, and teach students how to interact professionally with others.",
      imageUrl: ""
    },
    {
      id: 3,
      name: "7-Day Workshop on Data Analytics using Python",
      overview: "Organized by the Department of Computer Science, this intensive 7-day workshop provides hands-on knowledge in Python programming and Data Analytics. Students learn to handle real-world datasets by exploring key concepts such as data manipulation (Pandas, NumPy), data visualization (Matplotlib, Seaborn), and foundational statistical analysis.",
      imageUrl: ""
    },
    {
      id: 4,
      name: "4-Day Workshop on Android Development using Flutter",
      overview: "Organized by the Department of Computer Science, this 4-day workshop introduces students to cross-platform mobile application development. Participants gain hands-on experience with the Dart programming language, building interactive UIs using Flutter widgets, state management, and integrating APIs to create dynamic Android apps.",
      imageUrl: "/Information/flutter_workshop.png"
    }
  ],

  events: {
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
  },

  books: {
    "FY": [
      { id: 1, subject: "Problem Solving using C", publication: "Nirali Prakashan", pdfUrl: "#" },
      { id: 2, subject: "Database Management Systems", publication: "Pearson", pdfUrl: "#" },
      { id: 3, subject: "Discrete Mathematics", publication: "McGraw Hill", pdfUrl: "#" },
      { id: 4, subject: "Digital Electronics", publication: "Technical Publications", pdfUrl: "#" },
    ],
    "SY": [
      { id: 1, subject: "Data Structures using C", publication: "Oxford University Press", pdfUrl: "#" },
      { id: 2, subject: "Software Engineering", publication: "Pressman (McGraw Hill)", pdfUrl: "#" },
      { id: 3, subject: "Operating Systems", publication: "Galvin (Wiley)", pdfUrl: "#" },
      { id: 4, subject: "Computer Networks", publication: "Tanenbaum (Pearson)", pdfUrl: "#" },
    ],
    "TY": [
      { id: 1, subject: "Artificial Intelligence", publication: "PHI Publications", pdfUrl: "#" },
      { id: 2, subject: "Web Technologies", publication: "Nirali Prakashan", pdfUrl: "#" },
      { id: 3, subject: "Machine Learning", publication: "O'Reilly Media", pdfUrl: "#" },
      { id: 4, subject: "Information Security", publication: "McGraw Hill", pdfUrl: "#" },
    ],
    "MSC-I": [
      { id: 1, subject: "Advanced Algorithms", publication: "Cormen (MIT Press)", pdfUrl: "#" },
      { id: 2, subject: "Cloud Computing", publication: "Wiley Publications", pdfUrl: "#" },
      { id: 3, subject: "Advanced Database Systems", publication: "Pearson", pdfUrl: "#" },
    ],
    "MSC-II": [
      { id: 1, subject: "Big Data Analytics", publication: "Packt Publishing", pdfUrl: "#" },
      { id: 2, subject: "Deep Learning", publication: "O'Reilly Media", pdfUrl: "#" },
      { id: 3, subject: "Internet of Things", publication: "PHI Publications", pdfUrl: "#" },
    ],
  },

  skillPrograms: [],

  studyMaterials: {
    "FY B.Sc. CS": [
      { 
        id: 1, 
        subject: "Problem Solving using C", 
        semester: "Semester I", 
        notesUrl: "https://www.w3schools.com/c/c_intro.php", 
        youtubeUrl: "https://www.youtube.com/watch?v=KJgsSFOSQv0", 
        referenceUrl: "https://drive.google.com/drive/folders/c-language"
      },
      { 
        id: 2, 
        subject: "Database Management Systems", 
        semester: "Semester I", 
        notesUrl: "https://www.tutorialspoint.com/dbms/index.htm", 
        youtubeUrl: "https://www.youtube.com/watch?v=dl00fOOYLOM", 
        referenceUrl: "https://drive.google.com/drive/folders/dbms"
      },
      { 
        id: 3, 
        subject: "Discrete Mathematics", 
        semester: "Semester I", 
        notesUrl: "https://tutorialspoint.com/discrete_mathematics/", 
        youtubeUrl: "https://www.youtube.com/watch?v=tyDKR4FG3Yw", 
        referenceUrl: ""
      },
      { 
        id: 4, 
        subject: "Descriptive Statistics", 
        semester: "Semester I", 
        notesUrl: "", 
        youtubeUrl: "https://www.youtube.com/watch?v=xxpc-HPKN28", 
        referenceUrl: "https://drive.google.com/drive/folders/stats"
      }
    ],
    "SY B.Sc. CS": [
      {
        id: 1,
        subject: "Data Structures",
        semester: "Semester III",
        notesUrl: "https://www.geeksforgeeks.org/data-structures/",
        youtubeUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
        referenceUrl: "https://github.com/topics/data-structures"
      }
    ]
  },

  admins: [
    { id: 1, name: "Super Admin", username: "superadmin", password: "superadmin123", role: "superadmin" }
  ],

  adminRequests: [],
};

// Keys used in localStorage
const STORAGE_KEY = 'cs_dept_data_v14';

export function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Ensure backwards compatibility for existing localStorage data
      if (!parsed.admins) parsed.admins = [...initialData.admins];
      if (!parsed.adminRequests) parsed.adminRequests = [];
      if (!parsed.trainings || parsed.trainings.length === 0) parsed.trainings = [...initialData.trainings];
      if (!parsed.studyMaterials) parsed.studyMaterials = { ...initialData.studyMaterials };
      return parsed;
    } catch {
      return { ...initialData };
    }
  }
  // First visit: seed localStorage with initial data
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return { ...initialData };
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return { ...initialData };
}
