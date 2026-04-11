import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, Library, MonitorPlay, FileText, Link as LinkIcon, X } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ELearning() {
  const { data } = useData();
  const [expandedYear, setExpandedYear] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const courseCategories = ['FY B.Sc. CS', 'SY B.Sc. CS', 'TY B.Sc. CS', 'M.Sc. CS - I', 'M.Sc. CS - II'];

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">E-Learning & Study Materials</h1>
        <p className="text-gray-500 mb-8">Access notes, question banks, and study materials for your enrolled courses.</p>
      </motion.div>

      <div className="space-y-4">
        {courseCategories.map(course => {
          const isExpanded = expandedYear === course;
          const materials = data.studyMaterials?.[course] || [];
          
          const bookCategoryMap = {
            'FY B.Sc. CS': 'FY',
            'SY B.Sc. CS': 'SY',
            'TY B.Sc. CS': 'TY',
            'M.Sc. CS - I': 'MSC-I',
            'M.Sc. CS - II': 'MSC-II'
          };
          const books = data.books?.[bookCategoryMap[course]] || [];

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
                      {materials.length} materials • {books.length} books available
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <AnimatePresence>
                {isExpanded && (materials.length > 0 || books.length > 0) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 px-2 pb-4 flex flex-col lg:flex-row gap-6 items-start">
                      {/* Left Side: Semester Tables */}
                      {materials.length > 0 && (
                        <div className="flex-1 space-y-6 w-full">
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
                                        <th className="text-center px-5 py-3 font-semibold text-navy w-48">Study Materials</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {semMaterials.map((mat, idx) => (
                                        <tr key={mat.id} className="border-t border-gray-50 hover:bg-section-bg/50 transition-colors">
                                          <td className="px-5 py-3 text-gray-400">{idx + 1}</td>
                                          <td className="px-5 py-3 font-medium text-navy">{mat.subject}</td>
                                          <td className="px-5 py-3 pt-4 text-center pb-4">
                                            <button
                                              onClick={() => setSelectedSubject({ ...mat, courseBooks: books })}
                                              className="inline-flex items-center justify-center gap-2 w-full max-w-[160px] px-4 py-2.5 bg-gradient-to-r from-primary to-[#9B2B34] text-white text-[13px] font-bold rounded-xl shadow-md hover:shadow-[0_8px_20px_rgba(155,43,52,0.3)] hover:-translate-y-0.5 transition-all mx-auto group"
                                            >
                                              <BookOpen size={16} className="group-hover:scale-110 transition-transform" /> View Materials
                                            </button>
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
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </div>

    {selectedSubject && <SubjectModal subject={selectedSubject} books={selectedSubject.courseBooks} onClose={() => setSelectedSubject(null)} />}
    </>
  );
}

function SubjectModal({ subject, books, onClose }) {
  // Filter books to only those conceptually similar to the subject name
  const subjectName = subject.subject.toLowerCase();
  const relevantBooks = books.filter(b => b.subject.toLowerCase().includes(subjectName) || subjectName.includes(b.subject.toLowerCase()));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.9, y: 20 }}
           transition={{ type: 'spring', damping: 25, stiffness: 300 }}
           className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col max-h-[85vh] border border-gray-100/50 relative"
           onClick={e => e.stopPropagation()}
        >
          {/* Stunning Header */}
          <div className="relative px-8 pt-10 pb-8 overflow-hidden bg-navy">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#9B2B34]/20 blur-3xl mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-500/20 blur-2xl mix-blend-screen pointer-events-none" />
            
            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white backdrop-blur-md">
              <X size={20} />
            </button>

            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-3">
                 <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                   {subject.semester}
                 </span>
               </div>
               <h3 className="font-extrabold text-white text-2xl leading-tight mb-2 drop-shadow-md">{subject.subject}</h3>
               <p className="text-sm text-gray-300 flex items-center gap-1.5"><BookOpen size={14}/> Complete digital learning suite</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 overflow-y-auto space-y-8 bg-gray-50/50">
             {/* General Resources */}
             <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-5 bg-blue-500 rounded-full" />
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Primary Resources</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {(subject.notesUrl || subject.pdfUrl) && (
                      <a href={subject.notesUrl || subject.pdfUrl} target="_blank" rel="noreferrer" className="flex flex-col p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all group relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 flex items-center justify-center mb-4 shadow-inner">
                            <FileText size={24} strokeWidth={2} />
                         </div>
                         <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider mb-1">Document</p>
                         <p className="text-base font-bold text-navy leading-tight">Lecture Notes & Guide</p>
                      </a>
                   )}
                   {subject.youtubeUrl && (
                      <a href={subject.youtubeUrl} target="_blank" rel="noreferrer" className="flex flex-col p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(239,68,68,0.1)] hover:shadow-[0_8px_30px_-5px_rgba(239,68,68,0.2)] hover:-translate-y-1 transition-all group relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 text-red-600 flex items-center justify-center mb-4 shadow-inner">
                            <MonitorPlay size={24} strokeWidth={2} />
                         </div>
                         <p className="text-[11px] text-red-600 font-bold uppercase tracking-wider mb-1">Media</p>
                         <p className="text-base font-bold text-navy leading-tight">Video Lecture</p>
                      </a>
                   )}
                   {subject.referenceUrl && (
                      <a href={subject.referenceUrl} target="_blank" rel="noreferrer" className="flex flex-col p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.1)] hover:shadow-[0_8px_30px_-5px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all group relative overflow-hidden sm:col-span-2 mt-1">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                         <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner shrink-0">
                               <LinkIcon size={26} strokeWidth={2.5} />
                            </div>
                            <div>
                               <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-wider mb-0.5">External Resource</p>
                               <p className="text-base font-bold text-navy">Shared Reference Links</p>
                            </div>
                            <div className="ml-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                               <ExternalLink size={14} />
                            </div>
                         </div>
                      </a>
                   )}
                </div>
                {!(subject.notesUrl || subject.pdfUrl) && !subject.youtubeUrl && !subject.referenceUrl && (
                   <div className="flex items-center justify-center px-6 py-12 bg-white border border-dashed border-gray-200 rounded-2xl text-gray-400 shadow-sm">
                      <p className="text-sm font-medium">No digital materials uploaded yet.</p>
                   </div>
                )}
             </div>

             {/* Matching Books */}
             {relevantBooks.length > 0 && (
                <div>
                   <div className="flex items-center gap-2 mb-4">
                     <div className="w-1 h-5 bg-pink-500 rounded-full" />
                     <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Recommended Library</h4>
                   </div>
                   <div className="space-y-3">
                      {relevantBooks.map(book => (
                         <div key={book.id} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-pink-200 hover:shadow-md transition-all group shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600 flex justify-center items-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                               <Library size={20} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                               <p className="font-bold text-[15px] text-navy truncate leading-tight mb-1">{book.subject}</p>
                               <p className="text-xs text-gray-500 truncate">{book.publication}</p>
                            </div>
                            {book.pdfUrl && book.pdfUrl !== '#' && (
                               <a href={book.pdfUrl} target="_blank" rel="noreferrer" title="Open Book" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gradient-to-r hover:from-primary hover:to-[#9B2B34] hover:text-white hover:shadow-lg rounded-xl transition-all shrink-0">
                                 <ExternalLink size={16} />
                               </a>
                            )}
                         </div>
                      ))}
                   </div>
                </div>
             )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
