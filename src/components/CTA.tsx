import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    el.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="subscribe"
      className="relative section overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#0a1810] to-[#0d1c14]"/>
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 65%)] rounded-full pointer-events-none"/>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[radial-gradient(ellipse at center, rgba(45,212,160,0.05) 0%, transparent 60%)] rounded-full pointer-events-none"/>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-5 reveal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          शुरुआत · The Beginning
        </motion.p>

        {/* H2 */}
        <motion.h2
          id="cta-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tight mb-5 reveal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASING_IO }}
        >
          Your journey into{' '}
          <span className="gradient-text-warm">Garhwal's soul</span>{' '}
          starts here
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-white/45 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10 reveal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Join 45,000+ others who are reclaiming their roots. Start with our free plan, or go deep with a
          paid membership — every subscription directly funds village documentation work.
        </motion.p>

        {/* Email form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mb-8 reveal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          noValidate
        >
          {!submitted ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="your@email.com"
                  className={`input pl-11 ${error ? 'border-[#c9a84c]/40' : ''}`}
                  aria-label="Email address"
                  aria-describedby={error ? 'email-error' : undefined}
                  aria-invalid={!!error}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#c9a84c] text-[#0d1c14] hover:bg-[#d4b45c] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/35 hover:-translate-y-0.5 active:scale-[0.98] shrink-0"
              >
                Join Free
              </button>
            </div>
          ) : (
            <motion.div
              className="flex flex-col items-center gap-3 py-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASING_IO }}
            >
              <div className="w-12 h-12 rounded-full bg-[#2dd4a0]/15 border border-[#2dd4a0]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2dd4a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-base font-semibold">You're on the list!</p>
                <p className="text-white/40 text-sm">Check your inbox for a welcome message from the Garhwalinfo team.</p>
              </div>
            </motion.div>
          )}

          {error && (
            <p id="email-error" className="text-[#e8a060] text-xs mt-2 text-left" role="alert">
              {error}
            </p>
          )}
        </motion.form>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/[0.06] reveal">
          {[
            { label: 'No credit card required', icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            )},
            { label: 'Cancel anytime', icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/>
              </svg>
            )},
            { label: '7-day free trial', icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            )},
            { label: 'Secure checkout', icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75a4.5 4.5 0 009 0zM18.75 10.5a.75.75 0 01.75-.75h.008v.008a.75.75 0 01-1.124.937L18.75 10.5z"/>
              </svg>
            )},
          ].map((sig) => (
            <div key={sig.label} className="flex items-center gap-2 text-white/30 text-xs sm:text-sm">
              <span className="text-[#c9a84c]/50">{sig.icon}</span>
              <span>{sig.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
