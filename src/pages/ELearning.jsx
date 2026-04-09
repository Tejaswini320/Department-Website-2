import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ELearning() {
  const { data } = useData();
  const [expandedYear, setExpandedYear] = useState(null);

  const courseCategories = ['FY B.Sc. CS', 'SY B.Sc. CS', 'TY B.Sc. CS', 'M.Sc. CS - I', 'M.Sc. CS - II'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">E-Learning & Study Materials</h1>
        <p className="text-gray-500 mb-8">Access notes, question banks, and study materials for your enrolled courses.</p>
      </motion.div>

      <div className="space-y-4">
        {courseCategories.map(course => {
          const isExpanded = expandedYear === course;
          // Fallback to empty array if no materials for a course
          const materials = data.studyMaterials?.[course] || [];

          return (
            <motion.div
              key={course}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <button
                onClick={() => setExpandedYear(isExpanded ? null : course)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-200 ${
                  isExpanded
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                    : 'bg-white text-navy border-gray-100 hover:border-primary/30 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isExpanded ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <BookOpen size={18} className={isExpanded ? 'text-white' : 'text-primary'} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold">{course}</h3>
                    <p className={`text-xs ${isExpanded ? 'text-white/70' : 'text-gray-500'}`}>
                      {materials.length} materials available
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <AnimatePresence>
                {isExpanded && materials.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 px-2 space-y-6 pb-4">
                      {Array.from(new Set(materials.map(m => m.semester))).map(sem => {
                        const semMaterials = materials.filter(m => m.semester === sem);
                        return (
                          <div key={sem} className="rounded-xl border border-gray-100 overflow-hidden shadow-sm bg-white">
                            <div className="bg-gradient-to-r from-section-bg to-white px-5 py-3 border-b border-gray-100">
                              <h4 className="font-bold text-navy text-sm">{sem}</h4>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50/50">
                                    <th className="text-left px-5 py-3 font-semibold text-navy w-12">#</th>
                                    <th className="text-left px-5 py-3 font-semibold text-navy">Subject / Topic</th>
                                    <th className="text-left px-5 py-3 font-semibold text-navy w-36">Material Type</th>
                                    <th className="text-left px-5 py-3 font-semibold text-navy w-36">Download</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semMaterials.map((mat, idx) => (
                                    <tr key={mat.id} className="border-t border-gray-50 hover:bg-section-bg/50 transition-colors">
                                      <td className="px-5 py-3 text-gray-400">{idx + 1}</td>
                                      <td className="px-5 py-3 font-medium text-navy">{mat.subject}</td>
                                      <td className="px-5 py-3">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                                          mat.type === 'Notes' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                                          mat.type === 'Guidelines' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                                          'bg-amber-50 text-amber-600 border border-amber-100'
                                        }`}>
                                          {mat.type}
                                        </span>
                                      </td>
                                      <td className="px-5 py-3">
                                        <a
                                          href={mat.pdfUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-[#9B2B34] text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                                        >
                                          <ExternalLink size={14} /> Notes
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
