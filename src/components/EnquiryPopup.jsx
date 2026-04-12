import { useState, useEffect, useRef } from 'react';
import { GraduationCap, X, User, Mail, Phone, BookOpen, Send, CheckCircle, MessageSquare } from 'lucide-react';


export default function EnquiryPopup() {
  const SESSION_KEY = 'enq_shown_v1';
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [closing, setClosing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', course: '', comments: '' });

  const [errors, setErrors] = useState({});
  const cardRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setAnimate(true));
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) dismiss();
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required.';
    if (!form.email.trim()) e.email = 'Required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email.';
    if (!form.mobile.trim()) e.mobile = 'Required.';
    else if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) e.mobile = 'Invalid number.';
    if (!form.course) e.course = 'Please select.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    setTimeout(dismiss, 3000);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOverlayClick}
      role="dialog" aria-modal="true" aria-label="Enquiry Form"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(30,10,10,0.52)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        opacity: animate && !closing ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        ref={cardRef}
        style={{
          width: '100%', maxWidth: '460px',
          background: '#fff',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(123,29,36,0.22), 0 4px 16px rgba(0,0,0,0.10)',
          transform: animate && !closing ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)',
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Gold top accent strip */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg,#C9973A,#f0c060,#C9973A)' }} />

        {/* ── Compact Maroon Header ── */}
        <div style={{
          background: 'linear-gradient(135deg,#7B1D24 0%,#9B2B34 100%)',
          padding: '1rem 1.25rem 0.9rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative orbs */}
          <div style={{
            position: 'absolute', top: '-30px', right: '-30px',
            width: '100px', height: '100px', borderRadius: '50%',
            background: 'rgba(201,151,58,0.18)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-25px', left: '-20px',
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)', pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
            {/* Icon badge */}
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
              background: 'rgba(201,151,58,0.25)',
              border: '1px solid rgba(201,151,58,0.45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <GraduationCap size={20} color="#FEF3DC" />
            </div>
            <div>
              <p style={{
                fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
                color: 'rgba(254,243,220,0.75)', textTransform: 'uppercase', marginBottom: '1px',
              }}>Admissions 2025–26</p>
              <h2 style={{
                fontSize: '1.15rem', fontWeight: 800, color: '#fff',
                lineHeight: 1.2, margin: 0,
              }}>Interested in Joining Us?</h2>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={dismiss} aria-label="Close"
            style={{
              position: 'absolute', top: '10px', right: '12px',
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s, transform 0.2s', padding: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.transform = 'rotate(0)'; }}
          >
            <X size={14} />
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: '1.1rem 1.25rem 1.25rem' }}>
          {!success ? (
            <form onSubmit={handleSubmit} noValidate>

              {/* Full Name */}
              <Field
                id="enq-name" name="name" type="text"
                label="Full Name" icon={<User size={13} />}
                placeholder="e.g. Priya Sharma"
                value={form.name} onChange={handleChange} error={errors.name}
                autoComplete="name"
              />

              {/* Email + Mobile — 2 columns */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                <Field
                  id="enq-email" name="email" type="email"
                  label="Email" icon={<Mail size={13} />}
                  placeholder="you@email.com"
                  value={form.email} onChange={handleChange} error={errors.email}
                  autoComplete="email"
                />
                <Field
                  id="enq-mobile" name="mobile" type="tel"
                  label="Mobile No." icon={<Phone size={13} />}
                  placeholder="9876543210"
                  value={form.mobile} onChange={handleChange} error={errors.mobile}
                  autoComplete="tel" maxLength={10}
                />
              </div>

              {/* Course */}
              <SelectField
                id="enq-course" name="course"
                label="Select Course" icon={<BookOpen size={13} />}
                value={form.course} onChange={handleChange} error={errors.course}
              />

              {/* Comments */}
              <TextAreaField
                id="enq-comments" name="comments"
                label="Your Thoughts / Questions" icon={<MessageSquare size={13} />}
                placeholder="How can we help you? Feel free to share your thoughts..."
                value={form.comments} onChange={handleChange}
              />


              {/* Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.85rem' }}>
                <button
                  type="submit"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    padding: '0.6rem 1rem',
                    background: 'linear-gradient(135deg,#7B1D24,#9B2B34)',
                    border: 'none', borderRadius: '10px',
                    color: '#fff', fontSize: '0.84rem', fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                    boxShadow: '0 4px 12px rgba(123,29,36,0.35)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(123,29,36,0.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(123,29,36,0.35)'; }}
                >
                  <Send size={14} /> Submit Enquiry
                </button>
                <button
                  type="button" onClick={dismiss}
                  style={{
                    padding: '0.6rem 1rem',
                    background: '#FDF5F0', border: '1.5px solid #e5e7eb',
                    borderRadius: '10px', color: '#9ca3af',
                    fontSize: '0.84rem', fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'all 0.2s', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9973A'; e.currentTarget.style.color = '#7B1D24'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#9ca3af'; }}
                >
                  Skip
                </button>
              </div>
            </form>
          ) : (
            /* ── Success ── */
            <div style={{ textAlign: 'center', padding: '0.75rem 0' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'linear-gradient(135deg,#7B1D24,#9B2B34)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 0.75rem',
                boxShadow: '0 4px 18px rgba(123,29,36,0.35)',
              }}>
                <CheckCircle size={26} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#7B1D24', marginBottom: '0.4rem' }}>
                Enquiry Submitted!
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.6 }}>
                Thank you, <strong style={{ color: '#7B1D24' }}>{form.name}</strong>!<br />
                We'll reach you on <strong style={{ color: '#C9973A' }}>{form.mobile}</strong> shortly.
              </p>
              <div style={{
                width: '40px', height: '3px', borderRadius: '99px',
                background: 'linear-gradient(90deg,#C9973A,#FEF3DC)',
                margin: '0.85rem auto 0',
              }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Text / Email / Tel Field ── */
function Field({ id, name, type, label, icon, placeholder, value, onChange, error, autoComplete, maxLength }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '0.65rem' }}>
      <label htmlFor={id} style={{
        display: 'flex', alignItems: 'center', gap: '4px',
        fontSize: '0.72rem', fontWeight: 600, color: '#374151', marginBottom: '0.25rem',
      }}>
        <span style={{ color: '#C9973A' }}>{icon}</span>
        {label} <span style={{ color: '#ef4444' }}>*</span>
      </label>
      <input
        id={id} name={name} type={type}
        placeholder={placeholder} value={value}
        onChange={onChange} autoComplete={autoComplete} maxLength={maxLength}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '0.5rem 0.75rem',
          border: `1.5px solid ${error ? '#ef4444' : focused ? '#C9973A' : '#e5e7eb'}`,
          borderRadius: '9px', fontSize: '0.82rem', color: '#111827',
          background: '#fff', outline: 'none', fontFamily: 'inherit',
          boxShadow: error ? '0 0 0 3px rgba(239,68,68,0.10)' : focused ? '0 0 0 3px rgba(201,151,58,0.12)' : 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      />
      {error && <p style={{ fontSize: '0.68rem', color: '#ef4444', marginTop: '2px' }}>{error}</p>}
    </div>
  );
}

/* ── Select Field ── */
function SelectField({ id, name, label, icon, value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '0.65rem' }}>
      <label htmlFor={id} style={{
        display: 'flex', alignItems: 'center', gap: '4px',
        fontSize: '0.72rem', fontWeight: 600, color: '#374151', marginBottom: '0.25rem',
      }}>
        <span style={{ color: '#C9973A' }}>{icon}</span>
        {label} <span style={{ color: '#ef4444' }}>*</span>
      </label>
      <select
        id={id} name={name} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '0.5rem 0.75rem',
          border: `1.5px solid ${error ? '#ef4444' : focused ? '#C9973A' : '#e5e7eb'}`,
          borderRadius: '9px', fontSize: '0.82rem',
          color: value ? '#111827' : '#9ca3af',
          background: '#fff', outline: 'none', fontFamily: 'inherit',
          appearance: 'none', cursor: 'pointer',
          boxShadow: error ? '0 0 0 3px rgba(239,68,68,0.10)' : focused ? '0 0 0 3px rgba(201,151,58,0.12)' : 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        <option value="">— Choose a program —</option>
        <option value="bsc-cs">B.Sc. Computer Science</option>
        <option value="msc-cs">M.Sc. Computer Science</option>

      </select>
      {error && <p style={{ fontSize: '0.68rem', color: '#ef4444', marginTop: '2px' }}>{error}</p>}
    </div>
  );
}

/* ── Text Area Field ── */
function TextAreaField({ id, name, label, icon, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '0.65rem' }}>
      <label htmlFor={id} style={{
        display: 'flex', alignItems: 'center', gap: '4px',
        fontSize: '0.72rem', fontWeight: 600, color: '#374151', marginBottom: '0.25rem',
      }}>
        <span style={{ color: '#C9973A' }}>{icon}</span>
        {label}
      </label>
      <textarea
        id={id} name={name}
        placeholder={placeholder} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '0.6rem 0.75rem', minHeight: '80px',
          border: `1.5px solid ${focused ? '#C9973A' : '#e5e7eb'}`,
          borderRadius: '9px', fontSize: '0.82rem', color: '#111827',
          background: '#fff', outline: 'none', fontFamily: 'inherit',
          resize: 'none',
          boxShadow: focused ? '0 0 0 3px rgba(201,151,58,0.12)' : 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      />
    </div>
  );
}

