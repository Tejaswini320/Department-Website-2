import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

// ── Knowledge Base ──────────────────────────────────────────────────────────
const KB = [
  {
    keywords: ['admission', 'apply', 'join', 'enroll', 'seat', 'application'],
    answer: `📋 **Admissions 2025-26**\n\nPrograms offered:\n• B.Sc. Computer Science (120 seats)\n• B.Sc. Data Science (60 seats)\n• B.Sc. Cloud Computing (60 seats)\n\nEligibility: 10+2 with Science / any stream (varies by program).\nAdmission via MHT-CET / Merit basis.\n\n🔗 Visit /admission for full details & forms.`,
  },
  {
    keywords: ['syllabus', 'curriculum', 'subjects', 'course', 'semester'],
    answer: `📚 **Syllabus & Curriculum**\n\nB.Sc. Computer Science covers:\n• Programming (C, C++, Java, Python)\n• Data Structures & Algorithms\n• DBMS, OS, Computer Networks\n• Web Technology, Cloud Computing\n• AI / ML (advanced semesters)\n\nAll syllabi follow Savitribai Phule Pune University guidelines.\n🔗 Visit /student-corner/curriculum for full syllabus PDFs.`,
  },
  {
    keywords: ['result', 'result', 'marks', 'exam', 'score', 'grade'],
    answer: `📊 **Exam Results**\n\nSemester results are published on:\n• Official SPPU portal: unipune.ac.in\n• College notice board\n\nFor department-level results & merit lists:\n🔗 Visit /student-corner/results`,
  },
  {
    keywords: ['contact', 'phone', 'email', 'address', 'location', 'reach', 'office'],
    answer: `📞 **Contact Department of Computer Science**\n\n📍 Lal Taki Road, Tarakpur, Ahmednagar – 414001, Maharashtra\n\n📱 0241-2324024 / 0241-2324715\n\n✉️ computerscience@newartsdcs.ac.in\n\n🕐 Mon – Sat: 9:00 AM – 5:00 PM\n\n🔗 Visit /contact for the full contact page.`,
  },
  {
    keywords: ['faculty', 'teacher', 'professor', 'staff', 'hod', 'head'],
    answer: `👩‍🏫 **Faculty & Staff**\n\nThe department has highly qualified faculty members with expertise in:\n• Artificial Intelligence & ML\n• Data Science & Analytics\n• Cloud Computing & DevOps\n• Cybersecurity\n• Full-Stack Web Development\n\n🔗 Visit /about/department for the full faculty list.`,
  },
  {
    keywords: ['placement', 'job', 'career', 'company', 'recruit', 'hired', 'internship', 'training'],
    answer: `💼 **Training & Placement**\n\nOur placement cell actively connects students with top companies.\n\n🏢 Companies that have recruited our students:\nTCS, Infosys, Wipro, Cognizant, Capgemini, and many more.\n\n📈 Placement rate: 85%+\n\n🔧 We offer:\n• Resume workshops\n• Mock interviews\n• Industry certifications\n\n🔗 Visit /training-placement for full details.`,
  },
  {
    keywords: ['elearning', 'e-learning', 'online', 'material', 'notes', 'study', 'resource'],
    answer: `💻 **E-Learning Resources**\n\nStudents can access:\n• Lecture notes & PPTs\n• Video tutorials\n• Previous year question papers\n• Online quiz / practice tests\n\n🔗 Visit /e-learning to access all materials (login required).`,
  },
  {
    keywords: ['event', 'fest', 'seminar', 'workshop', 'hackathon', 'competition', 'activity'],
    answer: `🎉 **Events & Activities**\n\nUpcoming & recent events:\n• Tech Fest (Annual)\n• Hackathons & Coding Contests\n• Industry Expert Seminars\n• CASAS Research Symposium\n• Sports & Cultural Week\n\n🔗 Visit /events to see all upcoming events.`,
  },
  {
    keywords: ['fee', 'fees', 'charges', 'cost', 'scholarship', 'stipend'],
    answer: `💰 **Fees & Scholarships**\n\nApproximate annual fees:\n• B.Sc. Computer Science: ₹15,000 – ₹25,000\n• Data Science / Cloud Computing: ₹18,000 – ₹28,000\n\n🎓 Scholarships available:\n• Government (EBC, OBC, SC/ST)\n• Minority scholarships\n• Merit-based awards\n\nContact the office for exact fee structure.`,
  },
  {
    keywords: ['college', 'about', 'history', 'naac', 'accreditation', 'autonomous'],
    answer: `🏛️ **About the College**\n\nNew Arts, Commerce & Science College, Ahmednagar is run by AJMVPS and is affiliated to Savitribai Phule Pune University.\n\n✅ NAAC Accredited: A++ (CGPA 3.79)\n✅ Autonomous Status granted\n✅ Established: 1955\n\nThe Department of Computer Science is part of **CASAS – Center for Advanced Studies in Applied Sciences**.\n\n🔗 Visit /about/college for more.`,
  },
  {
    keywords: ['casas', 'center', 'applied sciences', 'advanced studies'],
    answer: `🔬 **CASAS – Center for Advanced Studies in Applied Sciences**\n\nCASAS is the dedicated center within New Arts College that focuses on:\n• Advanced research in Computer Science & IT\n• Industry-Academia collaboration\n• Skill development programs\n• Interdisciplinary applied sciences\n\nThe Department of Computer Science is a proud part of CASAS.`,
  },
  {
    keywords: ['timetable', 'schedule', 'time table', 'class', 'lecture'],
    answer: `🗓️ **Academic Schedules & Timetables**\n\nSemester-wise timetables are uploaded regularly.\n\n🔗 Visit /student-corner/schedules to download the latest timetable for your class.`,
  },
  {
    keywords: ['feedback', 'suggestion', 'complaint', 'opinion'],
    answer: `💬 **Feedback & Suggestions**\n\nWe value your opinion!\n\n• Student Feedback Form: /student-corner/feedback\n• Suggestion Box: /student-corner/suggestions\n\nYour feedback helps us improve the department continuously.`,
  },
  {
    keywords: ['topper', 'merit', 'rank', 'best student', 'award'],
    answer: `🏆 **Merit List & Toppers**\n\nSemester-wise merit lists and topper recognitions are published here:\n\n🔗 Visit /student-corner/toppers\n\nOur students consistently rank at the university level!`,
  },
  {
    keywords: ['msc', 'pg', 'postgraduate', 'masters', 'higher study'],
    answer: `🎓 **Higher Studies (PG)**\n\nAfter B.Sc., students can pursue:\n• M.Sc. Computer Science (SPPU)\n• MCA (various universities)\n• M.Tech / ME (GATE-based admission)\n• MBA (IT Management)\n\nThe department also guides students for GATE, GRE, TOEFL prep.`,
  },
  {
    keywords: ['skill', 'certificate', 'programming', 'python', 'java', 'develop'],
    answer: `🛠️ **Skill Development Programs**\n\nThe department offers additional skill programs:\n• Python Programming\n• Web Development (React, Node.js)\n• Data Analytics\n• Cloud Computing (AWS, Azure)\n• Ethical Hacking & Cybersecurity\n\n🔗 Visit /skill-development for enrollment details.`,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'hii', 'good morning', 'good afternoon', 'good evening', 'namaste'],
    answer: `👋 **Hello! Welcome to the Department of Computer Science Virtual Assistant!**\n\nI can help you with:\n• 📋 Admissions & eligibility\n• 📚 Syllabus & courses\n• 💼 Placements & internships\n• 📞 Contact details\n• 🎉 Events & activities\n• 💰 Fees & scholarships\n• And much more!\n\nJust type your question below! 😊`,
  },
  {
    keywords: ['thank', 'thanks', 'thankyou', 'thank you', 'great', 'awesome', 'good'],
    answer: `😊 You're welcome! Feel free to ask anything else about the Department of Computer Science. I'm always here to help!`,
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'exit', 'quit'],
    answer: `👋 Goodbye! Have a great day! If you have more questions, feel free to chat again. 😊`,
  },
];

const DEFAULT_ANSWER = `🤔 I'm not sure about that specific query. Here are some things I can help with:\n\n• **Admissions** – seats, eligibility, process\n• **Syllabus** – subjects, curriculum, PDFs\n• **Results** – exam results, merit lists\n• **Placements** – companies, career support\n• **Contact** – phone, email, address\n• **Events** – workshops, seminars, fests\n• **Fees & Scholarships** – cost, financial aid\n• **E-Learning** – notes, study materials\n\nTry asking me about any of these topics! 😊`;

const QUICK_ACTIONS = [
  { label: '📋 Admissions', query: 'admission' },
  { label: '📚 Syllabus', query: 'syllabus' },
  { label: '💼 Placements', query: 'placement' },
  { label: '📞 Contact', query: 'contact' },
  { label: '🎉 Events', query: 'events' },
  { label: '💰 Fees', query: 'fees' },
];

function getBotReply(text) {
  const lower = text.toLowerCase().trim();
  for (const item of KB) {
    if (item.keywords.some(k => lower.includes(k))) {
      return item.answer;
    }
  }
  return DEFAULT_ANSWER;
}

function BotAvatar() {
  return (
    <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
      <img
        src="/Information/Logo/Department logo.png"
        className="w-[18px] h-[18px] object-contain"
        alt="Bot"
        onError={e => (e.target.src = '/Information/Logo/College logo.png')}
      />
    </div>
  );
}

function MessageBubble({ msg }) {
  const isBot = msg.role === 'bot';
  const lines = msg.text.split('\n');

  return (
    <div className={`flex items-start gap-2.5 ${isBot ? '' : 'flex-row-reverse'}`}>
      {isBot && <BotAvatar />}
      <div
        className={`text-sm p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-wrap shadow-sm ${
          isBot
            ? 'bg-white border border-gray-100 text-gray-700 rounded-tl-sm'
            : 'bg-[#B11226] text-white rounded-tr-sm'
        }`}
      >
        {lines.map((line, i) => {
          // Bold text between **...**
          const parts = line.split(/\*\*(.*?)\*\*/g);
          return (
            <span key={i}>
              {parts.map((p, j) =>
                j % 2 === 1 ? <strong key={j}>{p}</strong> : p
              )}
              {i < lines.length - 1 && <br />}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2.5">
      <BotAvatar />
      <div className="bg-white border border-gray-100 shadow-sm p-3.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '👋 Hello! Welcome to the **Department of Computer Science** Virtual Assistant!\n\nI can answer questions about admissions, syllabus, placements, events, fees, contact info and much more.\n\nHow can I help you today? 😊' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 800 + Math.random() * 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-105 flex items-center justify-center ${isOpen ? 'scale-0 pointer-events-none' : 'scale-100'}`}
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '50%',
          backgroundColor: '#B11226',
          boxShadow: '0 10px 25px rgba(177, 18, 38, 0.4)',
        }}
        title="Chat with Virtual Assistant"
      >
        <div
          className="absolute"
          style={{
            bottom: '-4px',
            right: '12px',
            width: '0',
            height: '0',
            borderLeft: '14px solid transparent',
            borderTop: '22px solid #B11226',
            transform: 'rotate(-25deg)',
            zIndex: -1,
          }}
        />
        <div className="w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center relative z-10 shadow-inner">
          <img
            src="/Information/Logo/Department logo.png"
            alt="Chatbot"
            className="w-11 h-11 object-contain"
            onError={e => (e.target.src = '/Information/Logo/College logo.png')}
          />
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[100] w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 border border-gray-100 flex flex-col ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ height: '560px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8B101D] to-[#B11226] text-white p-4 flex items-center justify-between shadow-md flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/30 p-1">
              <img
                src="/Information/Logo/Department logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
                onError={e => (e.target.src = '/Information/Logo/College logo.png')}
              />
            </div>
            <div>
              <h3 className="font-bold text-[15px] leading-tight">Virtual Assistant</h3>
              <p className="text-[11px] text-white/90 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_5px_#4ade80]" />
                Online
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 bg-[#f8fafc] p-4 overflow-y-auto flex flex-col gap-4">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-3 py-2.5 bg-[#f8fafc] border-t border-gray-100 flex gap-2 overflow-x-auto flex-shrink-0 scrollbar-none">
          {QUICK_ACTIONS.map(({ label, query }) => (
            <button
              key={label}
              onClick={() => sendMessage(query)}
              className="text-[11px] whitespace-nowrap bg-red-50 text-[#B11226] border border-red-100 font-semibold px-3 py-1.5 rounded-full hover:bg-[#B11226] hover:text-white transition-colors flex-shrink-0"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-3.5 bg-white border-t border-gray-100 flex items-center gap-2.5 flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 bg-gray-50 text-sm px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B11226]/20 transition-all font-medium"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-11 h-11 rounded-full bg-[#B11226] text-white flex items-center justify-center shadow-lg hover:bg-[#8B101D] hover:scale-105 transition-all flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send size={18} className="translate-x-[1px]" />
          </button>
        </form>
      </div>
    </>
  );
}
