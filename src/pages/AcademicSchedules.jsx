import { motion } from 'framer-motion';
import { Calendar, Clock, FileText, GraduationCap, BookOpen } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useMemo } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

/* Defines the display order for year groups */
const YEAR_ORDER = [
  'FY B.Sc. CS',
  'SY B.Sc. CS',
  'TY B.Sc. CS',
  'M.Sc. CS - I',
  'M.Sc. CS - II',
  'UG & PG Practical',
];

/* Color accents per year for visual distinction */
const YEAR_COLORS = {
  'FY B.Sc. CS':       { bg: 'bg-blue-50',   border: 'border-blue-200',   badge: 'bg-blue-600',   icon: 'text-blue-600',   iconBg: 'bg-blue-100' },
  'SY B.Sc. CS':       { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-600', icon: 'text-emerald-600', iconBg: 'bg-emerald-100' },
  'TY B.Sc. CS':       { bg: 'bg-purple-50',  border: 'border-purple-200',  badge: 'bg-purple-600',  icon: 'text-purple-600',  iconBg: 'bg-purple-100' },
  'M.Sc. CS - I':      { bg: 'bg-amber-50',   border: 'border-amber-200',   badge: 'bg-amber-600',   icon: 'text-amber-600',   iconBg: 'bg-amber-100' },
  'M.Sc. CS - II':     { bg: 'bg-rose-50',    border: 'border-rose-200',    badge: 'bg-rose-600',    icon: 'text-rose-600',    iconBg: 'bg-rose-100' },
  'UG & PG Practical': { bg: 'bg-teal-50',    border: 'border-teal-200',    badge: 'bg-teal-600',    icon: 'text-teal-600',    iconBg: 'bg-teal-100' },
};

const DEFAULT_COLORS = { bg: 'bg-gray-50', border: 'border-gray-200', badge: 'bg-gray-600', icon: 'text-gray-600', iconBg: 'bg-gray-100' };

/* Helper to sort semesters naturally: Semester I → II → III → IV … */
function semesterSort(a, b) {
  const numA = parseInt(a.semester.replace(/\D/g, '')) || 0;
  const numB = parseInt(b.semester.replace(/\D/g, '')) || 0;
  return numA - numB;
}

export default function AcademicSchedules() {
  const { data } = useData();

  /* Group timetables by year, preserving defined order */
  const groupedByYear = useMemo(() => {
    const map = {};
    data.timetables.forEach(tt => {
      if (!map[tt.year]) map[tt.year] = [];
      map[tt.year].push(tt);
    });

    // Sort semesters within each year
    Object.values(map).forEach(arr => arr.sort(semesterSort));

    // Build ordered array
    const ordered = [];
    YEAR_ORDER.forEach(y => {
      if (map[y]) {
        ordered.push({ year: y, semesters: map[y] });
        delete map[y];
      }
    });
    // Append any remaining years not in YEAR_ORDER
    Object.keys(map).forEach(y => {
      ordered.push({ year: y, semesters: map[y] });
    });

    return ordered;
  }, [data.timetables]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Academic Schedules</h1>
        <p className="text-gray-500 mb-8">View time tables and academic calendar for all programs.</p>
      </motion.div>

      {/* Time Tables – grouped by year */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <Calendar size={20} className="text-primary" /> Time Tables
        </h2>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
          {groupedByYear.map(({ year, semesters }) => {
            const colors = YEAR_COLORS[year] || DEFAULT_COLORS;
            const isUG = year.includes('B.Sc');
            const isPractical = year.includes('Practical');

            return (
              <motion.div
                key={year}
                variants={fadeUp}
                className={`rounded-2xl ${colors.bg} ${colors.border} border p-5 sm:p-6 transition-shadow hover:shadow-md`}
              >
                {/* Year header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                    {isPractical ? (
                      <BookOpen size={20} className={colors.icon} />
                    ) : (
                      <GraduationCap size={20} className={colors.icon} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{year}</h3>
                    <p className="text-xs text-gray-500">
                      {isUG ? 'Undergraduate' : isPractical ? 'Practical Schedule' : 'Postgraduate'} • {semesters.length} {semesters.length === 1 ? 'semester' : 'semesters'}
                    </p>
                  </div>
                </div>

                {/* Semester cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {semesters.map(tt => (
                    <div
                      key={tt.id}
                      className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-primary/30 transition-all duration-200 group flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Clock size={16} className="text-primary" />
                        </div>
                        <div>
                          <span className={`inline-block text-[10px] font-semibold text-white px-2 py-0.5 rounded-full ${colors.badge}`}>
                            {tt.semester}
                          </span>
                        </div>
                      </div>
                      <a
                        href={tt.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors w-full justify-center mt-auto"
                      >
                        <FileText size={14} /> View PDF
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Academic Calendar */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Calendar size={20} className="text-primary" /> Academic Calendar
        </h2>
        <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-section-bg flex items-center justify-center">
              <Calendar size={24} className="text-navy" />
            </div>
            <div>
              <h3 className="font-bold text-navy">Instruction (Semester)</h3>
              <p className="text-xs text-gray-500">Academic Year 2025-26</p>
            </div>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
          >
            <FileText size={14} /> Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
}
