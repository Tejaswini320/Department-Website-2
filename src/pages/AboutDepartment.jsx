import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, User, Users, GraduationCap, Award, Shield, Phone, X } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutDepartment() {
  const { data } = useData();
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const hod = data.faculty.find(f => f.designation.toLowerCase().includes('head'));
  const otherFaculty = data.faculty.filter(f => !f.designation.toLowerCase().includes('head'));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-8">About Department</h1>
      </motion.div>

      {/* History */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-section-bg rounded-xl p-6 border border-gray-100 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <History size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-bold text-navy">Department History</h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-3">
          The Department of Computer Science was <strong>established in 1986</strong> under the aegis of AJMVPS New Arts, Commerce and Science College, Ahmednagar. Starting with the B.Sc. Computer Science program, the department introduced the <strong>M.Sc. Computer Science</strong> program in <strong>2011</strong>. The department is affiliated to <strong>Savitribai Phule Pune University</strong>, Pune.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          The department offers <strong>B.Sc. Computer Science</strong> with an annual intake of 160 students each year and <strong>M.Sc. Computer Science</strong> with an annual intake of 60 students each year. The department aims to develop core competence in Computer Science and empower students to carry out development work and take challenges in research and technologies.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          The department has a state-of-the-art infrastructure of <strong>4 computer labs with 140 computers and computing equipments</strong> supported by a high-speed Ethernet and wireless network.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Many of our students are placed in well-known IT companies like <strong>TCS, Wipro, Retailware, Aloha Technology, and Medly Software</strong> through campus interviews.
        </p>
      </motion.div>

      {/* HOD */}
      {hod && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
            <User size={24} className="text-primary" />
            Head of Department
          </h2>
          <div 
            onClick={() => setSelectedFaculty(hod)}
            className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <PlaceholderImage src={hod.imageUrl} aspect="passport" label="HOD Photo" />
            <div>
              <h3 className="text-xl font-bold text-navy">{hod.name}</h3>
              <p className="text-primary font-medium mt-1">{hod.designation}</p>
              <p className="text-sm text-gray-500 mt-1">{hod.qualification}</p>
              {hod.specialization && (
                <p className="text-sm text-gray-500">Specialization: {hod.specialization}</p>
              )}
              <p className="text-gray-600 mt-3 leading-relaxed">
                Leading the department with a vision to integrate modern technology practices into the academic curriculum and foster a culture of research and innovation.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Faculty Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
          <Users size={24} className="text-primary" />
          Our Faculty
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherFaculty.map(faculty => (
            <div
              key={faculty.id}
              onClick={() => setSelectedFaculty(faculty)}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <PlaceholderImage src={faculty.imageUrl} aspect="passport" label="Faculty Photo" />
              <div className="p-4">
                <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{faculty.name}</h3>
                <p className="text-sm text-primary mt-0.5">{faculty.designation}</p>
                <p className="text-xs text-gray-500 mt-1">{faculty.qualification}</p>
                {faculty.specialization && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-section-bg text-xs text-gray-600 rounded-full">
                    {faculty.specialization}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Faculty Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedFaculty(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-section-bg flex items-center justify-center p-6 border-r border-gray-100">
                   <PlaceholderImage src={selectedFaculty.imageUrl} aspect="passport" label="Faculty Photo" height="320px" className="!border-none !bg-transparent !py-0 shadow-xl" />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{selectedFaculty.designation}</span>
                  <h2 className="text-2xl font-bold text-navy mb-4">{selectedFaculty.name}</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-primary shrink-0" size={18} />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Qualification</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedFaculty.qualification}</p>
                      </div>
                    </div>
                    
                    {selectedFaculty.experience && (
                      <div className="flex items-start gap-3">
                        <Award className="text-primary shrink-0" size={18} />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">Experience</p>
                          <p className="text-sm font-semibold text-gray-700">{selectedFaculty.experience}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedFaculty.eligibility && (
                      <div className="flex items-start gap-3">
                        <Shield className="text-primary shrink-0" size={18} />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">Eligibility</p>
                          <p className="text-sm font-semibold text-gray-700">{selectedFaculty.eligibility}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary shrink-0" size={18} />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Contact</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedFaculty.contact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                     <p className="text-xs text-gray-500 italic leading-relaxed">
                       {selectedFaculty.name} is a highly experienced {selectedFaculty.designation} with over {selectedFaculty.experience} of dedicated service in the field of Computer Science.
                     </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
