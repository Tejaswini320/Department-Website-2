import { useState } from 'react';

/* ─── Inline CSS ──────────────────────────────────────────────── */
const css = `
  .fb-wrapper {
    max-width: 820px;
    margin: 0 auto;
    padding: 2rem 1rem 4rem;
    font-family: 'Inter', sans-serif;
  }

  /* Banner */
  .fb-banner {
    background: linear-gradient(135deg, #7b1113 0%, #9e1e22 60%, #c0392b 100%);
    border-radius: 16px;
    padding: 2.2rem 2rem;
    color: #fff;
    margin-bottom: 1.5rem;
    position: relative;
    overflow: hidden;
  }
  .fb-banner::before {
    content: '';
    position: absolute;
    top: -50px; right: -50px;
    width: 180px; height: 180px;
    background: rgba(255,255,255,0.07);
    border-radius: 50%;
  }
  .fb-banner-tag {
    display: inline-block;
    background: rgba(255,255,255,0.15);
    color: #ffd580;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.75rem;
  }
  .fb-banner h1 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
  }
  .fb-banner p {
    font-size: 0.875rem;
    opacity: 0.87;
    max-width: 540px;
    line-height: 1.6;
  }
  .fb-banner-college {
    font-size: 0.75rem;
    opacity: 0.65;
    margin-top: 0.75rem;
    font-weight: 500;
  }

  /* Required note */
  .fb-req-note {
    font-size: 0.78rem;
    color: #6b7280;
    margin-bottom: 1.25rem;
  }
  .fb-req-note .req { color: #c0392b; font-weight: 700; }

  /* Card */
  .fb-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 1.6rem 1.75rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  }
  .fb-card-title {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.97rem;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 1.2rem;
    padding-bottom: 0.7rem;
    border-bottom: 2px solid #f3f4f6;
  }
  .fb-card-icon {
    width: 30px; height: 30px;
    background: linear-gradient(135deg,#7b1113,#c0392b);
    color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  /* Grid */
  .fb-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    .fb-grid-2 { grid-template-columns: 1fr; }
    .fb-banner h1 { font-size: 1.3rem; }
    .fb-card { padding: 1.1rem; }
  }

  /* Fields */
  .fb-field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .fb-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
  }
  .req { color: #c0392b; }
  .fb-input, .fb-select, .fb-textarea {
    width: 100%;
    padding: 0.6rem 0.85rem;
    border: 1.5px solid #e5e7eb;
    border-radius: 9px;
    font-size: 0.875rem;
    color: #1f2937;
    background: #f9fafb;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    outline: none;
    font-family: inherit;
  }
  .fb-input:focus, .fb-select:focus, .fb-textarea:focus {
    border-color: #7b1113;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(123,17,19,0.09);
  }
  .fb-select {
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem center;
    background-size: 1rem;
    padding-right: 2.5rem;
    background-color: #f9fafb;
  }
  .fb-textarea { resize: vertical; min-height: 90px; }

  /* Section note */
  .fb-section-note {
    font-size: 0.76rem;
    color: #9ca3af;
    font-weight: 500;
    margin-bottom: 0.85rem;
  }

  /* Star ratings */
  .fb-rating-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .fb-rating-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.8rem;
    background: #f9fafb;
    border: 1px solid #f3f4f6;
    border-radius: 9px;
    gap: 0.75rem;
    transition: background 0.15s, border-color 0.15s;
  }
  .fb-rating-row:hover { background: #fdf2f2; border-color: #fcc8c8; }
  .fb-rating-label {
    font-size: 0.82rem;
    color: #374151;
    font-weight: 500;
    flex: 1;
  }
  .fb-stars-wrap {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .fb-star-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1;
    padding: 0 1px;
    color: #d1d5db;
    transition: color 0.12s, transform 0.1s;
  }
  .fb-star-btn.lit { color: #f59e0b; }
  .fb-star-btn:hover { transform: scale(1.2); color: #f59e0b; }
  .fb-star-count {
    font-size: 0.72rem;
    color: #9ca3af;
    font-weight: 600;
    min-width: 26px;
    text-align: right;
    margin-left: 4px;
  }

  /* Overall stars (bigger) */
  .fb-overall-wrap {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }
  .fb-overall-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1;
    padding: 0 2px;
    color: #d1d5db;
    transition: color 0.12s, transform 0.12s;
  }
  .fb-overall-btn.lit { color: #f59e0b; }
  .fb-overall-btn:hover { color: #f59e0b; transform: scale(1.15); }
  .fb-overall-score {
    font-size: 1rem;
    font-weight: 700;
    color: #f59e0b;
    margin-left: 6px;
  }

  /* Radio options */
  .fb-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 0.35rem;
  }
  .fb-radio-opt {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    font-size: 0.845rem;
    font-weight: 500;
    color: #374151;
    padding: 0.42rem 1rem;
    border-radius: 8px;
    border: 1.5px solid #e5e7eb;
    transition: border-color 0.15s, background 0.15s, color 0.15s;
  }
  .fb-radio-opt:hover { border-color: #7b1113; background: #fdf2f2; }
  .fb-radio-opt.sel { border-color: #7b1113; background: #fdf2f2; color: #7b1113; }
  .fb-radio-opt input { accent-color: #7b1113; }

  /* Divider */
  .fb-hr { border: none; border-top: 1px solid #f3f4f6; margin: 0.6rem 0 1rem; }

  /* Submit bar */
  .fb-submit-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .fb-note { font-size: 0.77rem; color: #9ca3af; }
  .fb-submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.72rem 2rem;
    background: linear-gradient(135deg,#7b1113,#c0392b);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(123,17,19,0.28);
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    font-family: inherit;
  }
  .fb-submit-btn:hover { opacity: 0.91; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(123,17,19,0.36); }
  .fb-submit-btn:active { transform: translateY(0); }

  /* Success */
  .fb-success-wrap {
    max-width: 480px;
    margin: 4rem auto;
    text-align: center;
    background: #fff;
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);
  }
  .fb-success-icon {
    width: 70px; height: 70px;
    background: linear-gradient(135deg,#16a34a,#22c55e);
    color: #fff;
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1.4rem;
    box-shadow: 0 4px 14px rgba(22,163,74,0.28);
  }
  .fb-success-wrap h2 { font-size: 1.45rem; color: #14532d; margin-bottom: 0.7rem; }
  .fb-success-wrap p { font-size: 0.865rem; color: #4b5563; line-height: 1.7; margin-bottom: 1.5rem; }
`;

/* ─── Data ────────────────────────────────────────────────────── */
const CLASSES = ['FY B.Sc. CS', 'SY B.Sc. CS', 'TY B.Sc. CS', 'M.Sc.-I CS', 'M.Sc.-II CS'];

const ACADEMIC = [
  'Course Content & Syllabus',
  'Teaching Methodology',
  'Practical / Lab Sessions',
  'Study Material Provided',
  'Teacher Availability & Support',
];

const INFRA = [
  'Classroom Infrastructure',
  'Laboratory Equipment',
  'Library Facilities',
  'Internet / Wi-Fi Access',
  'Overall Campus Environment',
];

/* ─── StarRating component ────────────────────────────────────── */
function StarRating({ label, value, onChange }) {
  return (
    <div className="fb-rating-row">
      <span className="fb-rating-label">{label}</span>
      <div className="fb-stars-wrap">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            type="button"
            className={'fb-star-btn' + (value >= s ? ' lit' : '')}
            onClick={() => onChange(s)}
            aria-label={`Rate "${label}" ${s} out of 5`}
          >★</button>
        ))}
        <span className="fb-star-count">{value ? `${value}/5` : '—'}</span>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────── */
export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    studentName: '', rollNo: '', className: '', email: '',
    academicRatings: {}, infraRatings: {},
    bestAspect: '', improvement: '',
    overallRating: 0, recommend: '',
  });

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const setAcademic = (label, val) => setForm(f => ({ ...f, academicRatings: { ...f.academicRatings, [label]: val } }));
  const setInfra = (label, val) => setForm(f => ({ ...f, infraRatings: { ...f.infraRatings, [label]: val } }));
  const handleChange = e => set(e.target.name, e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ studentName: '', rollNo: '', className: '', email: '', academicRatings: {}, infraRatings: {}, bestAspect: '', improvement: '', overallRating: 0, recommend: '' });
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="fb-wrapper">
        <style>{css}</style>
        <div className="fb-success-wrap">
          <div className="fb-success-icon">✓</div>
          <h2>Thank You for Your Feedback!</h2>
          <p>Your response has been recorded. We appreciate your valuable input in helping us improve the Department of Computer Science.</p>
          <button className="fb-submit-btn" onClick={reset}>Submit Another Response</button>
        </div>
      </div>
    );
  }

  /* ── Form screen ── */
  return (
    <div className="fb-wrapper">
      <style>{css}</style>

      {/* Banner */}
      <div className="fb-banner">
        <div className="fb-banner-tag">📋 Online Student Feedback</div>
        <h1>Student Feedback Form</h1>
        <p>Your feedback helps us improve teaching quality, infrastructure, and the overall learning experience for every student.</p>
        <p className="fb-banner-college">Department of Computer Science — New Arts, Commerce and Science College, Ahmednagar</p>
      </div>

      <p className="fb-req-note"><span className="req">*</span> Starred fields are mandatory.</p>

      <form onSubmit={handleSubmit}>

        {/* ── 1. Student Information ── */}
        <div className="fb-card">
          <div className="fb-card-title">
            <div className="fb-card-icon">👤</div>
            Student Information
          </div>
          <div className="fb-grid-2">
            <div className="fb-field">
              <label className="fb-label">Full Name <span className="req">*</span></label>
              <input className="fb-input" type="text" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Enter your full name" required />
            </div>
            <div className="fb-field">
              <label className="fb-label">Roll Number <span className="req">*</span></label>
              <input className="fb-input" type="text" name="rollNo" value={form.rollNo} onChange={handleChange} placeholder="e.g. 2301" required />
            </div>
            <div className="fb-field">
              <label className="fb-label">Class / Year <span className="req">*</span></label>
              <select className="fb-select" name="className" value={form.className} onChange={handleChange} required>
                <option value="">— Select your class —</option>
                {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="fb-field">
              <label className="fb-label">Email Address</label>
              <input className="fb-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="student@example.com" />
            </div>
          </div>
        </div>

        {/* ── 2. Academic Feedback ── */}
        <div className="fb-card">
          <div className="fb-card-title">
            <div className="fb-card-icon">📚</div>
            Academic Feedback
          </div>
          <p className="fb-section-note">Rate each aspect from 1 (Poor) to 5 (Excellent)</p>
          <div className="fb-rating-list">
            {ACADEMIC.map(f => (
              <StarRating key={f} label={f} value={form.academicRatings[f] || 0} onChange={v => setAcademic(f, v)} />
            ))}
          </div>
        </div>

        {/* ── 3. Infrastructure Feedback ── */}
        <div className="fb-card">
          <div className="fb-card-title">
            <div className="fb-card-icon">🏫</div>
            Infrastructure Feedback
          </div>
          <p className="fb-section-note">Rate each aspect from 1 (Poor) to 5 (Excellent)</p>
          <div className="fb-rating-list">
            {INFRA.map(f => (
              <StarRating key={f} label={f} value={form.infraRatings[f] || 0} onChange={v => setInfra(f, v)} />
            ))}
          </div>
        </div>

        {/* ── 4. Your Thoughts ── */}
        <div className="fb-card">
          <div className="fb-card-title">
            <div className="fb-card-icon">💬</div>
            Your Thoughts
          </div>
          <div className="fb-field" style={{ marginBottom: '1rem' }}>
            <label className="fb-label">What do you like most about the department?</label>
            <textarea className="fb-textarea" name="bestAspect" value={form.bestAspect} onChange={handleChange} placeholder="Share what you appreciate the most..." rows={3} />
          </div>
          <hr className="fb-hr" />
          <div className="fb-field">
            <label className="fb-label">What areas need improvement?</label>
            <textarea className="fb-textarea" name="improvement" value={form.improvement} onChange={handleChange} placeholder="Your suggestions for improvement..." rows={3} />
          </div>
        </div>

        {/* ── 5. Overall Experience ── */}
        <div className="fb-card">
          <div className="fb-card-title">
            <div className="fb-card-icon">⭐</div>
            Overall Experience
          </div>

          <div className="fb-field" style={{ marginBottom: '1.2rem' }}>
            <label className="fb-label" style={{ marginBottom: '0.5rem' }}>
              Overall Rating <span className="req">*</span>
            </label>
            <div className="fb-overall-wrap">
              {[1, 2, 3, 4, 5].map(s => (
                <button
                  key={s}
                  type="button"
                  className={'fb-overall-btn' + (form.overallRating >= s ? ' lit' : '')}
                  onClick={() => set('overallRating', s)}
                  aria-label={`Overall rating ${s} out of 5`}
                >★</button>
              ))}
              {form.overallRating > 0 && <span className="fb-overall-score">{form.overallRating}/5</span>}
            </div>
          </div>

          <div className="fb-field">
            <label className="fb-label" style={{ marginBottom: '0.4rem' }}>
              Would you recommend this department to others? <span className="req">*</span>
            </label>
            <div className="fb-radio-group">
              {['Yes, definitely', 'Yes, maybe', 'Not sure', 'No'].map(opt => (
                <label key={opt} className={'fb-radio-opt' + (form.recommend === opt ? ' sel' : '')}>
                  <input type="radio" name="recommend" value={opt} checked={form.recommend === opt} onChange={handleChange} required />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ── Submit ── */}
        <div className="fb-submit-bar">
          <p className="fb-note">🔒 Your response is confidential and used only for department improvement.</p>
          <button type="submit" className="fb-submit-btn">✉ Submit Feedback</button>
        </div>

      </form>
    </div>
  );
}
