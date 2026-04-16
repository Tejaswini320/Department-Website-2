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
<<<<<<< HEAD
    { id: 1, name: "Prof. Arun D. Gangarde", designation: "Head of Department", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9422224440", experience: "15+ Years" },
    { id: 2, name: "Prof. M.B. Bhingare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9423176160", experience: "12+ Years" },
    { id: 3, name: "Prof. M.B. Gobare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9420011597", experience: "10+ Years" },
    { id: 4, name: "Prof. B.M. Danave", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9403710000", experience: "8+ Years" },
    { id: 5, name: "Dr. A.A. Takate", designation: "Assistant Professor", qualification: "Ph.D., M.Sc. Computer Science", imageUrl: "", contact: "9404276376", experience: "14+ Years" },
    { id: 6, name: "Prof. M.A. Karkhile", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9665814300", experience: "9+ Years" },
    { id: 7, name: "Prof. T.S. Thange", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9822393332", experience: "11+ Years" },
    { id: 8, name: "Prof. S.S. Kale", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9284278855", experience: "7+ Years" },
    { id: 9, name: "Prof. M.R. Choudhary", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", contact: "9049662964", experience: "8+ Years" },
    { id: 10, name: "Prof. S.B. Khalekar", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Khalekar_Mam.png", contact: "9834756544", experience: "10+ Years" },
    { id: 11, name: "Prof. M.J. Jasud", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Jasud_Mam.png", contact: "7218566416", experience: "6+ Years" },
    { id: 12, name: "Prof. K.S. Choure", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Chaure_Mamm_Zoomed.png", contact: "7498487397", experience: "7+ Years" },
=======
    { id: 1, name: "Prof. Arun Dhondiba Gangarde", designation: "Head of Department", qualification: "MCS, MCM, MBA", imageUrl: "/Information/teacher img/Prof. Arun D. Gangarde.jpeg", contact: "9422224440", email: "adgangarde@gmail.com", experience: "35+ Years" },
    { id: 2, name: "Prof. M.B. Bhingare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.B. Bhingare.jpeg", contact: "9423176160", email: "", experience: "20+ Years" },
    { id: 3, name: "Prof. Gobare Manohar Baburao", designation: "Assistant Professor", qualification: "M.Sc. (Computer Science), M.C.A. (Science), M.Phil.", imageUrl: "/Information/teacher img/Prof. M.B. Gobare.jpeg", contact: "9420011597", email: "mgobare@newartsdcs.ac.in", experience: "19+ Years" },
    { id: 4, name: "Prof. B.M. Danave", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. B.M. Danave.jpeg", contact: "9403710000", email: "", experience: "18+ Years" },
    { id: 5, name: "Dr. Takate Amit Anilkumar", designation: "Assistant Professor", qualification: "M.Sc. (Computer Science), Ph.D.", imageUrl: "/Information/teacher img/Dr. A.A. Takate.jpeg", contact: "9404276376", email: "atakate@newartsdcs.ac.in", experience: "13+ Years" },
    { id: 6, name: "Prof. Karkhile M.A", designation: "Assistant Professor", qualification: "M.Sc. (Computer Science)", imageUrl: "/Information/teacher img/Prof. M.A. Karkhile.jpeg", contact: "9665814300", email: "makarkhile@newartsdcs.ac.in", experience: "13+ Years" },
    { id: 7, name: "Prof. T.S. Thange", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. T.S. Thange.jpeg", contact: "9822393332", experience: "11+ Years" },
    { id: 8, name: "Prof. Kale Supriya Sukhdev", designation: "Assistant Professor", qualification: "M.Sc. (Computer Science), NET, SET", imageUrl: "/Information/teacher img/Prof. S.S. Kale.jpeg", contact: "9284278855", email: "supriya.kale740@gmail.com", experience: "15+ Years" },
    { id: 9, name: "Prof. Choudhary Manjushree Ramesh", designation: "Assistant Professor", qualification: "M.Sc. (Statistics), B.Ed.", imageUrl: "/Information/teacher img/Prof. M.R. Choudhary.jpeg", contact: "8530804747", email: "manjushriamale.1992@gmail.com", experience: "9+ Years" },
    { id: 10, name: "Prof. S.B. Khalekar", designation: "Assistant Professor", qualification: "M.Sc. Computer Science (NET, SET)", imageUrl: "/Information/teacher img/Prof. S.B. Khalekar.jpeg", contact: "9834756544", email: "", experience: "10+ Years" },
    { id: 11, name: "Prof. M.J. Jasud", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. M.J. Jasud.jpeg", contact: "7218566416", experience: "6+ Years" },
    { id: 12, name: "Prof. K.S. Choure", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/Information/teacher img/Prof. K.S. Choure.jpeg", contact: "7498487397", experience: "7+ Years" }
>>>>>>> origin/main
  ],

  timetables: [
    { id: 1, year: "FY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/FY Theory Time Table.docx", semester: "Semester I" },
    { id: 2, year: "SY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/SY THEORY TIMETABLE.docx", semester: "Semester I" },
    { id: 3, year: "TY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/TY Theory Timetable.docx", semester: "Semester I" },
    { id: 4, year: "M.Sc. CS - I", pdfUrl: "/Information/Time Table/Sem- I/M.Sc. - I Sem- I Theroy Time Table.docx", semester: "Semester I" },
    { id: 5, year: "M.Sc. CS - II", pdfUrl: "/Information/Time Table/Sem- I/M.Sc. - II Sem- III Theroy Time Table.docx", semester: "Semester III" },
<<<<<<< HEAD
=======
    { id: 12, year: "M.Sc. CS - II", pdfUrl: "/Information/Time Table/Sem- II/M.Sc. - II Sem- IV Theroy Time Table.docx", semester: "Semester IV" },
>>>>>>> origin/main
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

<<<<<<< HEAD
  toppers: [],

  placements: [],

  trainings: [],

  events: {
    alumni: [],
    extraCurricular: [],
    conferences: [],
    cultural: [
      { id: 1, title: "Tech Srujana 2025", date: "2025-02-14", description: "Annual technical and cultural festival of the Computer Science Department featuring project exhibitions, coding contests, and cultural performances.", imageUrl: "/Information/Dept Event Photh/DSC_3731.JPG" },
      { id: 2, title: "Prize Distribution", date: "2025-02-15", description: "Annual prize distribution ceremony for academics and sports events.", imageUrl: "/Information/Dept Event Photh/DSC_7997.JPG" },
      { id: 3, title: "Cultural Event Showcase", date: "2025-02-13", description: "Students showcasing traditional dances and programs.", imageUrl: "/Information/Dept Event Photh/DSC_8014.JPG" },
    ],
    awards: [],
=======
    toppers: [
      {
          "id": 1,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2015",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 2,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2015",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 3,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2015",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 4,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2016",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 5,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2016",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 6,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2016",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 7,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2017",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 8,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2017",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 9,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2017",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 10,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2018",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 11,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2018",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 12,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2018",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 13,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2019",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 14,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2019",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 15,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2019",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 16,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2020",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 17,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2020",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 18,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2020",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 19,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2021",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 20,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2021",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 21,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2021",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 22,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2022",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 23,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2022",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 24,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2022",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 25,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2023",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 26,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2023",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 27,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2023",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 28,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2024",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 29,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2024",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 30,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2024",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 31,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2025",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 32,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2025",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 33,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2025",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
      },
      {
          "id": 34,
          "name": "Thore Vaishnavi Vijay",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2026",
          "cgpa": "9.43",
          "rank": "1",
          "imageUrl": ""
      },
      {
          "id": 35,
          "name": "Kule Nikhil Pruthviraj",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2026",
          "cgpa": "9.45",
          "rank": "2",
          "imageUrl": ""
      },
      {
          "id": 36,
          "name": "Tokekar Himanshu Sudhir",
          "program": "T.Y. B.Sc. (Comp. Sci.)",
          "year": "2026",
          "cgpa": "9.49",
          "rank": "3",
          "imageUrl": ""
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
>>>>>>> origin/main
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

<<<<<<< HEAD
=======
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

>>>>>>> origin/main
  admins: [
    { id: 1, name: "Super Admin", username: "superadmin", password: "superadmin123", role: "superadmin" }
  ],

  adminRequests: [],
};

// Keys used in localStorage
<<<<<<< HEAD
const STORAGE_KEY = 'cs_dept_data_v5';
=======
const STORAGE_KEY = 'cs_dept_data_v12';
>>>>>>> origin/main

export function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Ensure backwards compatibility for existing localStorage data
      if (!parsed.admins) parsed.admins = [...initialData.admins];
      if (!parsed.adminRequests) parsed.adminRequests = [];
<<<<<<< HEAD
=======
      if (!parsed.trainings || parsed.trainings.length === 0) parsed.trainings = [...initialData.trainings];
      if (!parsed.studyMaterials) parsed.studyMaterials = { ...initialData.studyMaterials };
>>>>>>> origin/main
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
