import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, BookOpen, GraduationCap, Users, Award, Trophy,
  FileText, Clock, BarChart2, Lightbulb, MonitorSmartphone,
  MessageSquare, FlaskConical, ExternalLink, Calendar,
<<<<<<< HEAD
  Code2, Database, Globe, ShieldCheck, Bot, Server, Landmark
=======
  Code2, Database, Globe, ShieldCheck, Bot, Server, Landmark, Linkedin
>>>>>>> origin/main
} from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

/* ── Animated counter hook ── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ── Single animated stat ── */
function StatCard({ icon: Icon, value, label, suffix = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(parseInt(value), 1600, visible);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon size={22} className="text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-navy">
        {visible ? count : 0}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

/* ── Career Path Data — Website-matched palette (Maroon + Gold) ── */
const careerPaths = [
  {
    id: 1,
    title: 'Software Development',
    icon: Code2,
    dot: '#7B1D24',
    accent: '#C9973A',
    description: 'Software Development is the backbone of the tech industry. Developers design, build, test, and maintain applications ranging from mobile apps to enterprise systems. It is one of the highest-demand fields in CS.',
    langs: ['Python', 'C', 'C++', 'Java'],
    roles: ['Software Developer', 'Software Engineer', 'Application Developer', 'Backend Developer'],
    skills: ['Problem Solving', 'Data Structures', 'Algorithms', 'OOP', 'Version Control (Git)', 'Unit Testing'],
    companies: ['TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft', 'Amazon'],
    salary: '₹3.5 – ₹25 LPA',
    demand: 'Very High',
  },
  {
    id: 2,
    title: 'Database',
    icon: Database,
    dot: '#9B2B34',
    accent: '#C9973A',
    description: 'Database professionals manage the storage, retrieval, and integrity of data. They design schemas, optimize queries, and ensure data security for organizations of all sizes.',
    langs: ['SQL', 'PL/SQL', 'NoSQL', 'MongoDB'],
    roles: ['Database Administrator', 'Data Engineer', 'Database Developer', 'ETL Developer'],
    skills: ['Query Optimization', 'Database Design', 'Backup & Recovery', 'Data Modeling', 'Indexing', 'Normalization'],
    companies: ['Oracle', 'IBM', 'SAP', 'TCS', 'HCL', 'Capgemini'],
    salary: '₹3 – ₹18 LPA',
    demand: 'High',
  },
  {
    id: 3,
    title: 'Web & App Development',
    icon: Globe,
    dot: '#A87A28',
    accent: '#7B1D24',
    description: 'Web & App developers create the digital interfaces we interact with daily. From responsive websites to cross-platform mobile apps, this domain blends creativity with engineering.',
    langs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Java'],
    roles: ['Web Developer', 'App Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
    skills: ['React / Angular / Vue', 'REST APIs', 'Responsive Design', 'React Native / Flutter', 'DevOps Basics', 'UI/UX Principles'],
    companies: ['Flipkart', 'Zomato', 'Swiggy', 'Accenture', 'Cognizant', 'Persistent'],
    salary: '₹4 – ₹30 LPA',
    demand: 'Very High',
  },
  {
    id: 4,
    title: 'Cyber Security',
    icon: ShieldCheck,
    dot: '#5C1219',
    accent: '#C9973A',
    description: 'Cyber Security professionals protect digital infrastructure from attacks and breaches. With rising cyber threats globally, this is one of the fastest-growing and highest-paying fields in IT.',
    langs: ['Networking Protocols', 'Linux', 'Python', 'Bash'],
    roles: ['Cyber Security Analyst', 'Ethical Hacker', 'Penetration Tester', 'Security Engineer', 'SOC Analyst'],
    skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Firewalls & IDS', 'SIEM Tools', 'Cryptography', 'Incident Response'],
    companies: ['DRDO', 'ISRO', 'Palo Alto', 'CrowdStrike', 'Wipro CyberSec', 'IBM Security'],
    salary: '₹5 – ₹35 LPA',
    demand: 'Very High',
  },
  {
    id: 5,
    title: 'Data Science & AI',
    icon: Bot,
    dot: '#C9973A',
    accent: '#7B1D24',
    description: 'Data Science and AI professionals extract insights from massive datasets and build intelligent systems. Machine Learning, Deep Learning, and AI are transforming every industry.',
    langs: ['Python', 'R', 'SQL', 'Julia'],
    roles: ['Data Analyst', 'Data Scientist', 'AI Engineer', 'ML Engineer', 'Research Scientist'],
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow / PyTorch', 'Data Visualization', 'Statistics', 'NLP'],
    companies: ['Google', 'Meta', 'OpenAI', 'Fractal Analytics', 'Mu Sigma', 'Nvidia'],
    salary: '₹6 – ₹40 LPA',
    demand: 'Extremely High',
  },
  {
    id: 6,
    title: 'IT & Networking',
    icon: Server,
    dot: '#8B3A12',
    accent: '#C9973A',
    description: 'IT & Networking specialists keep digital systems running. From managing cloud infrastructure to configuring enterprise networks, these roles are essential in every organization.',
    langs: ['Bash / Shell', 'Python', 'YAML', 'Terraform'],
    roles: ['Network Engineer', 'System Admin', 'Cloud Engineer', 'DevOps Engineer', 'IT Support Specialist'],
    skills: ['AWS / Azure / GCP', 'Cisco Networking', 'Linux Administration', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring Tools'],
    companies: ['AWS', 'Cisco', 'Microsoft Azure', 'Reliance Jio', 'BSNL', 'Tech Mahindra'],
    salary: '₹3.5 – ₹22 LPA',
    demand: 'High',
  },
  {
    id: 7,
    title: 'Government & PSU Jobs',
    icon: Landmark,
    dot: '#A87A28',
    accent: '#5C1219',
    description: 'Government and PSU jobs offer job security, pension benefits, and prestige. CS graduates can qualify for prestigious exams like GATE to join research organizations and public sector units.',
    langs: ['C', 'C++', 'Java', 'Python (GATE syllabus)'],
    roles: ['IT Officer', 'Scientist', 'Junior Engineer (IT)', 'Programmer', 'Assistant Engineer'],
    skills: ['GATE Preparation', 'Aptitude & Reasoning', 'Technical CS Fundamentals', 'GK & Current Affairs', 'Interview Skills'],
    companies: ['ISRO', 'DRDO', 'ONGC', 'BHEL', 'SBI', 'NIC (National Informatics Centre)'],
    salary: '₹4 – ₹15 LPA + Allowances',
    demand: 'Stable',
  },
];

/* ── Modal Tab Definitions ── */
const modalTabs = [
  { key: 'overview', label: 'Overview', icon: '📋' },
  { key: 'skills',   label: 'Skills',   icon: '🛠️' },
  { key: 'careers',  label: 'Careers',  icon: '💼' },
  { key: 'recruit',  label: 'Recruiters', icon: '🏢' },
];

/* ── Career Modal ── */
function CareerModal({ path, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  const demandBadge = {
    'Very High':     { bg: '#FEF3DC', color: '#A87A28', label: '⬆️ Very High Demand', pct: 80 },
    'Extremely High':{ bg: '#FDE8EA', color: '#7B1D24', label: '🔥 Extremely High Demand', pct: 95 },
    'High':          { bg: '#FEF3DC', color: '#8B3A12', label: '📈 High Demand', pct: 60 },
    'Stable':        { bg: '#FDE8EA', color: '#9B2B34', label: '✔️ Stable Demand', pct: 40 },
  }[path.demand] || { bg: '#f5f5f5', color: '#555', label: path.demand, pct: 50 };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(12px)', background: 'rgba(91,18,25,0.5)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: '0 30px 80px rgba(123,29,36,0.3)' }}
      >
        {/* ── Header ── */}
        <div
          className="p-7 rounded-t-3xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #5C1219 0%, #7B1D24 50%, #A87A28 100%)' }}
        >
          {/* Decorative blobs */}
          <motion.div
            className="absolute -top-8 -right-8 w-44 h-44 bg-white/10 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full" />
          <div className="absolute top-0 right-0 w-full h-full" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(201,151,58,0.25) 0%, transparent 60%)' }} />

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <motion.div
                className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.15 }}
              >
                <path.icon size={32} className="text-white drop-shadow-md" />
              </motion.div>
              <h2 className="text-2xl font-extrabold text-white mb-1 drop-shadow">{path.title}</h2>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: demandBadge.bg, color: demandBadge.color }}>
                  {demandBadge.label}
                </span>
                <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full border border-white/30">
                  💰 {path.salary}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white text-base font-bold transition-colors flex-shrink-0 border border-white/25"
            >✕</button>
          </div>

          {/* Demand progress bar */}
          <div className="relative z-10 mt-5">
            <div className="flex justify-between text-[10px] text-white/60 font-semibold mb-1">
              <span>Market Demand</span>
              <span>{demandBadge.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/15 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #FEF3DC, #C9973A)' }}
                initial={{ width: 0 }}
                animate={{ width: `${demandBadge.pct}%` }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex border-b border-gray-100 px-7 pt-1 bg-gray-50/50">
          {modalTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="relative px-4 py-3 text-xs font-bold transition-colors"
              style={{ color: activeTab === tab.key ? '#7B1D24' : '#9ca3af' }}
            >
              <span className="flex items-center gap-1.5">
                <span>{tab.icon}</span>
                {tab.label}
              </span>
              {activeTab === tab.key && (
                <motion.div
                  layoutId="modal-tab-indicator"
                  className="absolute bottom-0 left-2 right-2 h-[3px] rounded-t-full"
                  style={{ background: 'linear-gradient(90deg, #7B1D24, #C9973A)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="p-7 min-h-[240px]">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={staggerItems}
          >
            {activeTab === 'overview' && (
              <>
                <motion.div variants={fadeItem}>
                  <div className="w-10 h-1 rounded-full mb-4" style={{ background: '#C9973A' }} />
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#7B1D24' }}>About This Path</h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-5">{path.description}</p>
                </motion.div>
                <motion.div variants={fadeItem}>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#7B1D24' }}>Languages &amp; Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {path.langs.map((l, i) => (
                      <motion.span
                        key={l}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07 }}
                        className="px-3 py-1.5 text-sm font-semibold rounded-xl text-white cursor-default hover:scale-105 transition-transform"
                        style={{ background: '#7B1D24' }}
                      >{l}</motion.span>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {activeTab === 'skills' && (
              <motion.div variants={fadeItem}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#7B1D24' }}>Key Skills to Learn</h3>
                <div className="grid grid-cols-2 gap-3">
                  {path.skills.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#C9973A]/40 hover:shadow-sm transition-all group cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: 'linear-gradient(135deg, #7B1D24, #C9973A)' }}>
                        {i + 1}
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{s}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'careers' && (
              <motion.div variants={fadeItem}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#7B1D24' }}>Career Roles</h3>
                <div className="space-y-2">
                  {path.roles.map((r, i) => (
                    <motion.div
                      key={r}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl border cursor-default hover:shadow-md transition-all"
                      style={{ background: '#FEF3DC', borderColor: '#C9973A33' }}
                    >
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#C9973A' }} />
                      <span className="text-sm font-semibold" style={{ color: '#7B1D24' }}>{r}</span>
                      <ArrowRight size={12} className="ml-auto text-[#C9973A] opacity-50" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'recruit' && (
              <motion.div variants={fadeItem}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#7B1D24' }}>Top Recruiters</h3>
                <div className="grid grid-cols-2 gap-3">
                  {path.companies.map((c, i) => (
                    <motion.div
                      key={c}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 p-3 rounded-xl border cursor-default hover:shadow-md hover:scale-[1.02] transition-all"
                      style={{ background: '#FDE8EA', borderColor: '#9B2B3430' }}
                    >
                      <span className="text-lg">🏢</span>
                      <span className="text-sm font-semibold" style={{ color: '#5C1219' }}>{c}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-5 mt-5 border-t"
            style={{ borderColor: '#C9973A28' }}
          >
            <Link
              to="/student-corner/curriculum"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02] shadow-md"
              style={{ background: 'linear-gradient(135deg, #7B1D24, #C9973A)' }}
            >
              Explore Curriculum <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}


function CareerPathTree({ onSelect }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative">
      {/* Animated background mesh - subtle */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #7B1D24 1px, transparent 1px),
            linear-gradient(225deg, #C9973A 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Central hub ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="flex items-center justify-center mb-10"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border border-dashed"
            style={{ borderColor: '#C9973A30' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-7 rounded-full border border-dotted"
            style={{ borderColor: '#7B1D2415' }}
          />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B1D24] to-[#C9973A] flex items-center justify-center shadow-[0_0_20px_rgba(201,151,58,0.5)] relative z-10">
            <span className="text-2xl">🎓</span>
          </div>
          <motion.div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#7B1D24] to-[#C9973A]"
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ filter: 'blur(10px)' }}
          />
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-bold text-white/80 whitespace-nowrap uppercase tracking-widest drop-shadow-md">
            Computer Science Careers
          </p>
        </div>
      </motion.div>

      {/* ── Career cards grid ── */}
<<<<<<< HEAD
      <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 relative z-10">
>>>>>>> origin/main
        {careerPaths.map((path, i) => {
          const active = hoveredId === path.id;
          return (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.3, type: 'spring', stiffness: 250 }}
            >
              <button
                onClick={() => onSelect(path)}
                onMouseEnter={() => setHoveredId(path.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full text-left group relative h-full block"
              >
                {/* Outer glow */}
                <motion.div
<<<<<<< HEAD
                  className="absolute -inset-[2px] rounded-2xl"
                  animate={{
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: `linear-gradient(135deg, ${path.dot}55, ${path.accent}55)`,
                    filter: 'blur(5px)',
=======
                  className="absolute -inset-[3px] rounded-[18px]"
                  animate={{
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(135deg, ${path.dot}60, ${path.accent}60)`,
                    filter: 'blur(8px)',
>>>>>>> origin/main
                  }}
                />

                {/* Card body */}
                <motion.div
                  className="relative rounded-2xl p-4 border h-full flex flex-col justify-center bg-white/10"
                  animate={{
                    borderColor: active ? `${path.dot}60` : 'rgba(255,255,255,0.15)',
                    y: active ? -3 : 0,
                    boxShadow: active
                      ? `0 12px 24px ${path.dot}30, 0 4px 10px rgba(0,0,0,0.2)`
                      : '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 pointer-events-none rounded-tr-2xl"
                    style={{
                      background: `radial-gradient(circle at top right, ${path.dot}${active ? '15' : '05'}, transparent 70%)`,
=======
                  className="relative rounded-2xl p-5 border h-full flex flex-col justify-center bg-white/10 overflow-hidden"
                  animate={{
                    borderColor: active ? `${path.dot}80` : 'rgba(255,255,255,0.15)',
                    y: active ? -4 : 0,
                    boxShadow: active
                      ? `0 20px 30px ${path.dot}40, 0 8px 15px rgba(0,0,0,0.3)`
                      : '0 4px 10px rgba(0,0,0,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Subtle shine effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 -translate-x-[150%]"
                    animate={{ left: active ? '150%' : '-150%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 transition-opacity duration-500 pointer-events-none rounded-tr-2xl z-0"
                    style={{
                      background: `radial-gradient(circle at top right, ${path.dot}${active ? '30' : '10'}, transparent 70%)`,
>>>>>>> origin/main
                    }}
                  />

                  {/* Icon + Title */}
<<<<<<< HEAD
                  <div className="flex items-center gap-3 relative z-10 w-full">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      animate={{
                        background: active
                          ? `linear-gradient(135deg, ${path.dot}, ${path.accent})`
                          : `${path.dot}10`,
                        boxShadow: active ? `0 4px 12px ${path.dot}30` : '0 0 0 transparent',
=======
                  <div className="flex items-start gap-4 relative z-10 w-full mb-1">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      animate={{
                        background: active
                          ? `linear-gradient(135deg, ${path.dot}, ${path.accent})`
                          : `${path.dot}20`,
                        boxShadow: active ? `0 4px 15px ${path.dot}50` : '0 2px 5px transparent',
>>>>>>> origin/main
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ 
                          color: active ? '#ffffff' : path.dot,
<<<<<<< HEAD
                          scale: active ? 1.1 : 1 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <path.icon size={24} />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1 min-w-0 pr-4">
                      <motion.span
                        className="text-[15px] font-bold leading-tight block truncate drop-shadow-md"
                        animate={{ color: active ? path.dot : '#ffffff' }}
                        transition={{ duration: 0.2 }}
                      >
                        {path.title}
                      </motion.span>
                      <span className="text-[12px] text-white/70 font-medium truncate block mt-0.5">
                        {path.roles[0]}
                      </span>
                    </div>
                  </div>

                  {/* Resting arrow */}
                  <motion.div
                    animate={{ 
<<<<<<< HEAD
                      x: active ? 3 : 0,
                      color: active ? path.dot : 'rgba(255,255,255,0.4)'
                    }}
                    className="absolute top-1/2 -translate-y-1/2 right-3"
                  >
                    <ArrowRight size={14} strokeWidth={2.5} />
=======
                      x: active ? 4 : 0,
                      scale: active ? 1.2 : 1,
                      color: active ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      opacity: active ? 1 : 0.6
                    }}
                    className="absolute top-1/2 -translate-y-1/2 right-4 drop-shadow-md z-10"
                  >
                    <ArrowRight size={16} strokeWidth={3} />
>>>>>>> origin/main
                  </motion.div>

                  {/* Animated bottom gradient bar */}
                  <motion.div
<<<<<<< HEAD
                    className="absolute bottom-0 left-0 h-[2px]"
=======
                    className="absolute bottom-0 left-0 h-[3px]"
>>>>>>> origin/main
                    animate={{ width: active ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{
                      background: `linear-gradient(90deg, ${path.dot}, ${path.accent})`,
<<<<<<< HEAD
                      borderRadius: '0 0 16px 16px',
=======
>>>>>>> origin/main
                    }}
                  />
                </motion.div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom flair */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-6 flex justify-center"
      >
<<<<<<< HEAD
        <p className="text-[10px] text-gray-400 font-medium px-3 py-1 rounded-full bg-white/50 border border-gray-100 shadow-sm">
          <motion.span
            className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-1.5 align-middle"
=======
        <p className="text-[11px] text-white/90 font-semibold px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm backdrop-blur-md">
          <motion.span
            className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 align-middle shadow-[0_0_8px_rgba(250,204,21,0.8)]"
>>>>>>> origin/main
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {careerPaths.length} career tracks — click any to explore
        </p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const { data } = useData();
  const recentEvents = (data?.events?.cultural || []).slice(0, 3);
  const [selectedPath, setSelectedPath] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <div>
      {/* ══════════════════════ CAREER MODAL ══════════════════════ */}
      {selectedPath && (
        <CareerModal path={selectedPath} onClose={() => setSelectedPath(null)} />
      )}

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative overflow-hidden border-b border-gray-200">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          style={{ zIndex: 0 }}
        >
          <source src="/Information/clgvideo.mp4" type="video/mp4" />
        </video>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 z-[1]">
          {/* Base color tint blending navy and primary */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-[#0a0a0a]/60 to-primary/50 mix-blend-multiply" />
          {/* Cinematic Vignette to focus attention to center and ensure text readability at edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
          {/* Subtle noise/texture pattern for premium feel */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          {/* Extra dark tint at the bottom to smoothly transition into the next valid white section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20" style={{ zIndex: 2 }}>
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* ── Left: Career Path Tree ── */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-4 border border-white/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                CS Career Pathways — Click to Explore
              </span>

              <div className="mb-5">
                <h2 className="text-3xl font-extrabold text-white drop-shadow-md">Computer Science</h2>
                <p className="text-sm text-white/80 mt-1">Tap any path to discover languages &amp; career roles</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-5">
                <CareerPathTree onSelect={setSelectedPath} />
              </div>
            </motion.div>

            {/* ── Right: Department Info ── */}
            <motion.div variants={fadeUp} className="lg:pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-white/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                NAAC A++ Accredited · CGPA 3.79
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
                <span className="text-3xl md:text-4xl text-white/90 font-bold opacity-90">Department of</span><br />
                <span className="text-yellow-400">
                  Computer Science
                </span>
              </h1>

              <p className="text-white/90 text-base md:text-lg mb-8 max-w-lg leading-relaxed drop-shadow-md">
                Shaping future technology leaders through quality education, hands-on training, and industry-aligned programs at <strong className="text-white">AJMVPS College, Ahilyanagar</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about/department"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 border border-white/30 transition-all duration-200 backdrop-blur-sm"
                >
                  Know More
                </Link>
=======
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-lg leading-relaxed drop-shadow-md">
                Shaping future technology leaders through quality education, hands-on training, and industry-aligned programs at <strong className="text-white">AJMVPS College, Ahilyanagar</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://nacsc-alumni.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                >
                  Join Alumni Network <ExternalLink size={16} />
                </a>
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 border border-white/30 transition-all duration-200 backdrop-blur-sm"
                >
                  Sign In
                </Link>
                <a
                  href="https://www.linkedin.com/search/results/people/?keywords=Computer%20Science%20New%20Arts%20Commerce%20and%20Science%20College%20Ahmednagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-xl hover:opacity-90 border border-white/30 transition-all duration-200 backdrop-blur-sm shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#0A66C2' }}
                >
                  LinkedIn <Linkedin size={16} />
                </a>
>>>>>>> origin/main
              </div>

              {/* quick badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['B.Sc. Computer Science', 'M.Sc. Computer Science', 'Est. 1986'].map(b => (
                  <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-xs text-white rounded-full backdrop-blur-sm">{b}</span>
                ))}
              </div>

              {/* Career paths legend */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-3">Career Tracks at a Glance</p>
                <div className="flex flex-wrap gap-2">
                  {careerPaths.map(p => (
                    <span key={p.id} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/20 border border-white/30 rounded-full text-[11px] font-medium text-white shadow-sm">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                      {p.title}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ QUICK LINKS ══════════════════════ */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-3 md:grid-cols-6 divide-x divide-gray-100"
          >
            {[
              { icon: BookOpen,          label: 'Syllabus',     path: '/student-corner/curriculum' },
              { icon: Clock,             label: 'Timetable',    path: '/student-corner/schedules' },
              { icon: BarChart2,         label: 'Results',      path: '/student-corner/results' },
              { icon: GraduationCap,     label: 'Admission',    path: '/admission' },
              { icon: MonitorSmartphone, label: 'E-Learning',   path: '/e-learning' },
              { icon: MessageSquare,     label: 'Feedback',     path: '/student-corner/feedback' },
            ].map(({ icon: Icon, label, path }) => (
              <motion.div key={label} variants={fadeUp}>
                <Link
                  to={path}
                  className="flex flex-col items-center gap-2 py-5 px-2 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                    <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-primary transition-colors text-center">{label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ HOD MESSAGE ══════════════════════ */}
      <section className="bg-section-bg py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-10 items-center"
          >
            {/* Photo */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-xl shadow-navy/20 border-4 border-primary/20">
                <img src="/Information/teacher img/Prof. Arun D. Gangarde.jpeg" alt="Prof. A.D. Gangarde" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-navy text-lg">Prof. A.D. Gangarde</h3>
              <p className="text-primary text-sm font-medium">Head of Department</p>
              <p className="text-gray-500 text-sm mt-1">M.Sc. Computer Science</p>
              <p className="text-gray-400 text-xs mt-1">Contact: 9422224440</p>
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} className="md:col-span-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                Message from HOD
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">
                Welcome to the Department of Computer Science
              </h2>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-7xl text-primary/10 font-serif leading-none select-none">"</span>
                <p className="text-gray-600 leading-relaxed mb-4 relative z-10">
                  It gives me immense pleasure to welcome you to the Department of Computer Science at AJMVPS New Arts, Commerce and Science College, Ahilyanagar. Our department has been at the forefront of providing quality education in computing since its inception.
                </p>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  We are committed to nurturing students with both theoretical knowledge and practical skills, preparing them to meet the challenges of the rapidly evolving technology landscape. With NAAC A++ accreditation and a dedicated team of faculty, we ensure every student receives the best education possible.
                </p>
              </div>
              <Link
                to="/about/department"
                className="inline-flex items-center gap-1.5 text-primary font-semibold mt-5 hover:gap-3 transition-all duration-200"
              >
                Know More About Department <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ ANIMATED STATS ══════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-5 gap-5"
          >
            <StatCard icon={Users}         value="180"  suffix="+"  label="UG Intake" />
            <StatCard icon={Users}         value="60"               label="PG Intake" />
            <StatCard icon={GraduationCap} value="12"              label="Expert Faculty" />
            <StatCard icon={FlaskConical}  value="4"               label="Modern Labs" />
            <StatCard icon={Trophy}        value="100"  suffix="%"  label="Pass Rate (UG)" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ PROGRAMS OFFERED ══════════════════════ */}
      <section className="bg-section-bg py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Academics</span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">Programs Offered</h2>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'B.Sc. CS', full: 'Bachelor of Science (Computer Science)',  seats: '180+', duration: '3 Years', level: 'UG', color: 'from-navy to-navy-light' },
                { title: 'M.Sc. CS', full: 'Master of Science (Computer Science)',    seats: 60,  duration: '2 Years', level: 'PG', color: 'from-[#5C1219] to-[#7B1D24]' },
              ].map((prog) => (
                <motion.div
                  key={prog.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${prog.color} p-6 text-white`}>
                    <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{prog.level}</span>
                    <h3 className="text-xl font-bold mt-3">{prog.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{prog.full}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Users size={12} /> {prog.seats} Seats</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {prog.duration}</span>
                    </div>
                    <Link
                      to="/student-corner/curriculum"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                    >
                      View Curriculum <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ ABOUT COLLEGE ══════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Est. 1986</span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Our College</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AJMVPS New Arts, Commerce &amp; Science College, Ahilyanagar, is a premier institution committed to academic excellence for over a century. With a prestigious <strong>NAAC 'A++' accreditation (CGPA 3.79)</strong>, we stand among the leading colleges in Maharashtra.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated faculty, modern infrastructure, and industry partnerships ensure students receive a holistic education that prepares them for global opportunities.
              </p>
              <Link to="/about/college" className="inline-flex items-center gap-1.5 text-primary font-semibold mt-5 hover:gap-3 transition-all duration-200">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative" style={{ height: '340px' }}>
              <img src="/Information/Dept Event Photh/clg.jpeg" alt="College Campus" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ LATEST EVENTS ══════════════════════ */}
      <section className="bg-section-bg py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Latest</span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">Recent Events</h2>
              </div>
              <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                View All Events <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                onClick={() => setShowEventModal(true)}
                className="w-full max-w-2xl mx-auto block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group text-left"
              >
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <img src="/Information/Dept Event Photh/DSC_3731.JPG" alt="Tech Srujana 2025" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">🎉 Annual Fest</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/80 text-xs font-medium flex items-center gap-1 mb-2">
                      <Calendar size={12} /> February 14, 2025
                    </span>
                    <h3 className="text-2xl font-extrabold text-white drop-shadow-lg">Tech Srujana 2025</h3>
                    <p className="text-white/80 text-sm mt-1">Annual Technical & Cultural Festival</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    The flagship annual technical and cultural festival of the Computer Science Department featuring project exhibitions, coding competitions, tech talks, and cultural performances.
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-primary text-xs font-bold">
                    <span className="group-hover:gap-2 flex items-center gap-1 transition-all">Click to view details <ArrowRight size={12} /></span>
                  </div>
                </div>
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-8 md:hidden">
              <Link to="/events" className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                View All Events <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Srujana Event Modal */}
      <AnimatePresence>
        {showEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowEventModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEventModal(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white text-base font-bold transition-colors backdrop-blur-sm"
              >✕</button>

              {/* Hero Image */}
              <div className="relative" style={{ height: '300px' }}>
                <img src="/Information/Dept Event Photh/DSC_3731.JPG" alt="Tech Srujana 2025" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">🎉 Annual Fest</span>
                  <h2 className="text-3xl font-extrabold text-white mt-3 drop-shadow-lg">Tech Srujana 2025</h2>
                  <p className="text-white/80 text-sm mt-1">Annual Technical & Cultural Festival — February 14, 2025</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">About the Event</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tech Srujana is the flagship annual technical and cultural festival organized by the Department of Computer Science at AJMVPS New Arts, Commerce and Science College, Ahilyanagar. The event brings together students, faculty, and industry professionals for a day filled with innovation, creativity, and celebration.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Event Highlights</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Project Exhibition', 'Coding Competition', 'Tech Talks', 'Cultural Performances', 'Quiz Contest', 'Prize Distribution'].map(h => (
                      <div key={h} className="flex items-center gap-2 p-3 bg-section-bg rounded-xl border border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>




                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    📍 AJMVPS College Campus, Ahilyanagar
                  </div>
                  <Link
                    to="/events"
                    onClick={() => setShowEventModal(false)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-hover transition-colors shadow-md"
                  >
                    View All Events <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ══════════════════════ GALLERY ══════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Campus Life</span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">Gallery</h2>
              </div>
              <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Masonry-style Gallery */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
              {/* Large feature image */}
              <div className="md:col-span-2 md:row-span-2 group overflow-hidden rounded-2xl relative cursor-pointer">
                <img src="/Information/Dept Event Photh/DSC_3731.JPG" alt="Tech Srujana Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Tech Srujana Event</span>
                  <p className="text-white/70 text-xs mt-1">Annual Department Festival</p>
                </div>
              </div>

              {[
                { label: 'Faculty Interaction', src: '/Information/Dept Event Photh/IMG_0644.JPG' },
                { label: 'Seminar Session', src: '/Information/Dept Event Photh/DSC_5039.JPG' },
                { label: 'Prize Distribution', src: '/Information/Dept Event Photh/20220502114007_IMG_0728.JPG' },
                { label: 'Lab Practicals', src: '/Information/Dept Event Photh/DSC_8014.JPG' },
                { label: 'Workshop Session', src: '/Information/Dept Event Photh/DSC_5086.JPG' },
              ].map((img, i) => (
                <div key={img.label} className="group overflow-hidden rounded-2xl relative cursor-pointer">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-semibold text-sm">{img.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-8 md:hidden">
              <Link to="/events" className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="bg-gradient-to-r from-navy to-primary py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Join Our Department?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 mb-8">
              Applications are open for the 2026–27 academic year. Limited seats available.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-navy font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              >
                Apply for Admission <ArrowRight size={16} />
              </Link>
              <Link
                to="/student-corner/curriculum"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 border border-white/20 transition-all"
              >
                <FileText size={16} /> View Curriculum
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
