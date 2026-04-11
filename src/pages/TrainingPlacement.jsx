import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, TrendingUp, Building2, X, Info } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TrainingPlacement() {
  const { data } = useData();
  const [selectedTraining, setSelectedTraining] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Training & Placement</h1>
        <p className="text-gray-500 mb-8">Explore our students' achievements and training opportunities.</p>
      </motion.div>

      {/* Top Placements */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
        <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <Briefcase size={20} className="text-primary" /> Top Placements
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.placements.map(p => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <PlaceholderImage src={p.imageUrl} aspect="passport" label="Student Photo" />
              <div className="p-4">
                <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{p.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Building2 size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{p.company}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp size={14} className="text-green-500" />
                  <span className="text-sm font-semibold text-green-600">{p.package}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Training */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" /> Training Programs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.trainings.map(t => (
            <div
              key={t.id}
              className="bg-white flex flex-col rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <PlaceholderImage src={t.imageUrl} label="Training Photo" height="auto" aspect="video" className="!rounded-none w-full shrink-0" />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-navy mb-2 line-clamp-2">{t.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">{t.overview}</p>
                <button
                  onClick={() => setSelectedTraining(t)}
                  className="mt-auto text-sm text-primary font-medium hover:underline flex items-center gap-1"
                >
                  <Info size={14} /> Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Training Details */}
      <AnimatePresence>
        {selectedTraining && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTraining(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="relative h-48 bg-gray-100 shrink-0">
                <PlaceholderImage src={selectedTraining.imageUrl} label="Training Banner" height="100%" className="!rounded-none" />
                <button
                  onClick={() => setSelectedTraining(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors backdrop-blur-md"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl font-bold text-navy mb-4">{selectedTraining.name}</h2>
                <div className="prose prose-sm md:prose-base text-gray-600">
                  <p>{selectedTraining.overview}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
