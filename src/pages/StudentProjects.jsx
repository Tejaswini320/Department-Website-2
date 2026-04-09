import { motion } from 'framer-motion';
import { Lightbulb, Code, Database, Monitor, Globe } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const projects = [
  {
    id: 1,
    title: 'Smart Agricultural Dashboard',
    students: 'John Doe, Jane Smith',
    category: 'Web Development',
    description: 'A comprehensive web application to help local farmers track market prices, weather conditions, and manage their crops efficiently.',
    icon: <Globe size={24} className="text-blue-500" />,
  },
  {
    id: 2,
    title: 'Hospital Management API',
    students: 'Alice Johnson, Bob Williams',
    category: 'Backend Architecture',
    description: 'A robust Node.js and Express backend API designed to handle patient records, appointment scheduling, and doctor availability management secure.',
    icon: <Database size={24} className="text-green-500" />,
  },
  {
    id: 3,
    title: 'AI Based Attendance System',
    students: 'Priya Patel, Rahul Sharma',
    category: 'Machine Learning',
    description: 'An automated attendance tracking system leveraging facial recognition technology integrated with campus CCTV cameras to mark students dynamically.',
    icon: <Monitor size={24} className="text-purple-500" />,
  },
  {
    id: 4,
    title: 'College Route Planner',
    students: 'Rohan Gupta, Aisha Khan',
    category: 'Mobile Application',
    description: 'An Android application designed to map and guide students to different departments, labs, and utility areas within the college campus.',
    icon: <Code size={24} className="text-orange-500" />,
  }
];

export default function StudentProjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Student Projects</h1>
        <p className="text-gray-500 mb-8">Showcasing the innovative and practical applications built by our outstanding students.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <div key={project.id} className="bg-white border text-left border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
              <Lightbulb size={120} />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                {project.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-navy leading-tight">{project.title}</h3>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase">Built By</p>
                <p className="text-sm font-medium text-gray-800">{project.students}</p>
              </div>
              <button className="px-4 py-1.5 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-12 bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-center text-white"
      >
        <Lightbulb size={40} className="mx-auto mb-4 text-yellow-400" />
        <h2 className="text-2xl font-bold mb-2">Have a project idea?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Submit your innovative ideas and projects to the department head to get them featured on our platform. Let's build the future together!
        </p>
        <button className="px-6 py-2 bg-primary hover:bg-primary-hover font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
          Submit Your Project
        </button>  
      </motion.div>
    </div>
  );
}
