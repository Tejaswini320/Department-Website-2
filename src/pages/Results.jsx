import { motion } from 'framer-motion';
import { ExternalLink, FileText, BarChart2, Calendar } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const resultAnalysisDocs = [
  { year: '2025', title: 'Result Analysis 2025', path: '/Information/Result Analysis/2025.pdf' },
  { year: '2024', title: 'Result Analysis 2024', path: '/Information/Result Analysis/2024.pdf' },
  { year: '2023', title: 'Result Analysis 2023', path: '/Information/Result Analysis/2023.pdf' },
  { year: '2022', title: 'Result Analysis 2022', path: '/Information/Result Analysis/2022.pdf' },
  { year: '2021', title: 'Result Analysis 2021', path: '/Information/Result Analysis/2021.pdf' },
];

export default function Results() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
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
    </div>
  );
}
