import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Toppers() {
  const { data } = useData();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => (currentYear - i).toString());
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const classes = ['FY', 'SY', 'TY', 'M.Sc. I', 'M.Sc. II'];
  const [selectedClass, setSelectedClass] = useState(classes[2]); // Default to TY

  const filteredToppers = data.toppers.filter(t => {
    const yearMatch = t.year?.toString() === selectedYear;
    if (!yearMatch) return false;

    // Direct match if the new 'class' field exists (most reliable)
    if (t.class === selectedClass) return true;

    // Fallback normalization for older data or data without the 'class' field
    const program = (t.program || '').toUpperCase().replace(/\./g, ' ').trim();
    const targetClass = selectedClass.toUpperCase().replace(/\./g, ' ').trim();

    // Special cases for M.Sc. to avoid overlapping (e.g., 'MSC I' matching 'MSC II')
    if (targetClass.includes('MSC II')) {
      return program.includes('MSC') && (program.includes(' II') || program.includes('-II') || program.includes(' 2'));
    }
    if (targetClass.includes('MSC I')) {
      return program.includes('MSC') && 
             (program.includes(' I') || program.includes('-I') || program.includes(' 1')) && 
             !program.includes(' II') && !program.includes('-II');
    }

    return program.includes(targetClass);
  });
  const sortedToppers = [...filteredToppers].sort((a, b) => parseInt(a.rank) - parseInt(b.rank));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Year selector */}
      <div className="flex flex-wrap items-center gap-6 mb-8 bg-section-bg/50 p-4 rounded-xl border border-gray-100">
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-navy">Academic Year:</label>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none min-w-[120px]"
          >
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-navy">Class:</label>
          <select
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none min-w-[120px]"
          >
            {classes.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Merit List Table */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Medal size={20} className="text-primary" /> Merit List — {selectedClass} ({selectedYear})
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-section-bg">
                <th className="text-left px-4 py-3 font-semibold text-navy">Rank</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {sortedToppers.length > 0 ? (
                sortedToppers.map((row, idx) => (
                  <tr key={row.id || idx} className="border-t border-gray-50 hover:bg-section-bg/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${row.rank <= 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                        {row.rank || idx + 1}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-navy">{row.name}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                        {row.percentage || row.cgpa}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-8 text-center text-gray-500 italic">No merit list data available for {selectedClass} in {selectedYear}.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
