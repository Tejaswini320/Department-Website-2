import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ExternalLink } from 'lucide-react';
=======
import { ExternalLink, FileText, BarChart2, Calendar } from 'lucide-react';
>>>>>>> origin/main

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

<<<<<<< HEAD
=======
const resultAnalysisDocs = [
  { year: '2025', title: 'Classwise Result Analysis March 2025', path: '/Information/Result Analysis/Classwise Result Analysis March 2025.docx' },
  { year: '2024', title: 'Classwise Result Analysis March 2024', path: '/Information/Result Analysis/Classwise Result Analysis March 2024.docx' },
  { year: '2023', title: 'Classwise Result Analysis March 2023', path: '/Information/Result Analysis/Classwise Result Analysis March 2023.docx' },
  { year: '2022', title: 'Classwise Result Analysis March 2022', path: '/Information/Result Analysis/Classwise Result Analysis March 2022.docx' },
  { year: '2020-21', title: 'Result Analysis B.Sc. April 2020 & 2021', path: '/Information/Result Analysis/March 2020 and March 20221/Result Analysis B.Sc. April 2020 & April 2021.docx' },
  { year: '2019', title: 'Result Analysis April 2019', path: '/Information/Result Analysis/April%20%202019.docx' },
  { year: '2018', title: 'Result Analysis April 2018', path: '/Information/Result Analysis/Apri%20l2018.docx' },
  { year: '2017', title: 'Result Analysis April 2017', path: '/Information/Result Analysis/April2017.docx' },
  { year: '2016', title: 'Result Analysis April 2016', path: '/Information/Result Analysis/April2016new.docx' },
  { year: '2015', title: 'Result Analysis April 2015', path: '/Information/Result Analysis/April%202015%20(2).docx' },
];

>>>>>>> origin/main
export default function Results() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
<<<<<<< HEAD
        <h1 className="text-3xl font-bold text-navy mb-2">Results</h1>
        <p className="text-gray-500 mb-8">Check your semester examination results.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-lg mx-auto text-center bg-section-bg rounded-2xl p-10 border border-gray-100"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <ExternalLink size={28} className="text-primary" />
        </div>
        <h2 className="text-xl font-bold text-navy mb-3">University Results Portal</h2>
        <p className="text-gray-500 mb-6">
          Click the button below to be redirected to the official university results portal.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
        >
          <ExternalLink size={16} /> View Results
        </a>
      </motion.div>
=======
        <h1 className="text-3xl font-bold text-navy mb-2">Results & Analysis</h1>
        <p className="text-gray-500 mb-8 max-w-2xl">Check your semester examination results and review detailed year-wise departmental performance and academic analysis.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: University Results Portal (Original Functionality) */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           className="lg:col-span-1"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm sticky top-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <ExternalLink size={28} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-extrabold text-navy mb-3">University Results</h2>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Log into the official university portal to check individual academic performance for your specific semester.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all text-sm"
            >
              <ExternalLink size={16} strokeWidth={2.5} /> Check Portal
            </a>
          </div>
        </motion.div>

        {/* Right Column: Result Analysis Yearly Downloads */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-2 space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
             <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                <BarChart2 size={24} />
             </div>
             <div>
                <h2 className="text-xl font-bold text-navy">Annual Result Analysis</h2>
                <p className="text-xs text-gray-500 mt-0.5">Comprehensive departmental performance metrics (2015—Present)</p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resultAnalysisDocs.map((doc, idx) => (
              <a 
                key={idx} 
                href={doc.path} 
                download 
                className="group flex flex-col p-5 bg-white border border-gray-100 rounded-2xl hover:border-pink-200 hover:shadow-lg transition-all"
              >
                 <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-gray-100 text-gray-600 rounded-full group-hover:bg-pink-100 group-hover:text-pink-700 transition-colors">
                       <Calendar size={12} strokeWidth={3} /> {doc.year}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                       <FileText size={14} />
                    </div>
                 </div>
                 <h3 className="font-bold text-[15px] text-navy mb-1 leading-tight group-hover:text-primary transition-colors">{doc.title}</h3>
                 <p className="text-xs text-gray-400 mt-auto pt-2">Click to download report (.docx)</p>
              </a>
            ))}
          </div>

        </motion.div>
      </div>
>>>>>>> origin/main
    </div>
  );
}
