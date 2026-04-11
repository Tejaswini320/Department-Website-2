import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Student Feedback</h1>
        <p className="text-gray-500 mb-8">We value your feedback. Help us improve our teaching quality and infrastructure.</p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {/* Google Form Embed */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-primary" /> Feedback Form
          </h2>
          <div className="bg-section-bg rounded-xl border border-gray-100 p-2 min-h-[1200px] flex items-start justify-center overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSckJwv-SMgNgg_2Au1dIQWpk_eJVI6ghkn8q061n6EXR646AA/viewform?embedded=true"
              width="100%"
              height="1300"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-[1300px] border-0"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>

        {/* Quick Suggestions */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <Send size={20} className="text-primary" /> Quick Suggestions
          </h2>
          {submitted ? (
            <div className="bg-green-50 rounded-xl border border-green-200 p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-700">Thank You!</h3>
              <p className="text-sm text-green-600 mt-2">Your suggestion has been submitted successfully.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <textarea
                required
                rows={8}
                placeholder="Write your suggestion here..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                <Send size={16} /> Submit
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
