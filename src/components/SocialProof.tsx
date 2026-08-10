import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    value: '240+',
    label: 'Garhwali Folklore Narratives',
    sub: 'Preserved and documented',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: '38',
    label: 'Garhwali Dialects and Varieties',
    sub: 'Linguistic documentation',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v12M8 10v4M16 10v4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: '1,200+',
    label: 'Sacred Geography Sites',
    sub: 'Temples, rivers and landmarks',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 2"/>
      </svg>
    ),
  },
  {
    value: '45K+',
    label: 'Community Members',
    sub: 'Garhwal lovers worldwide',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "Garhwalinfo brought our grandmother's folklore stories to life for my children. They finally understand where we come from.",
    author: 'Rohini Bisht',
    role: 'Garhwali Educator, Dehradun',
    avatar: 'RB',
    color: '#2dd4a0',
  },
  {
    quote: "The depth of research on Garhwali dialects is extraordinary. This is the resource I wished existed when I started documenting my village's language.",
    author: 'Dr. Anil Nautiyal',
    role: 'Linguist, Kumaun University',
    avatar: 'AN',
    color: '#c9a84c',
  },
  {
    quote: 'I live in London now but Garhwalinfo keeps my heart connected to my roots. The cultural archives are a treasure I share with everyone I know.',
    author: 'Pooja Rawat',
    role: 'Diaspora Member, United Kingdom',
    avatar: 'PR',
    color: '#e8cf7a',
  },
];

export default function SocialProof() {
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
      { threshold: 0.15 }
    );
    el.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children').forEach((node) => {
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative section overflow-hidden"
      aria-labelledby="social-proof-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#102018] to-[#0d1c14] z-0"/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9a84c]/[0.02] rounded-full blur-3xl" aria-hidden="true"/>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            Infinite Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            The voice of{' '}
            <span className="gradient-text-warm">a thousand villages</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Join thousands of Garhwalis, scholars, and culture-keepers who are reclaiming their heritage through Garhwalinfo.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-20 stagger-children">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="card p-5 sm:p-6 md:p-7 relative overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: EASING_IO }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#c9a84c]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"/>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/[0.08] border border-[#c9a84c]/[0.15] flex items-center justify-center text-[#c9a84c]/70 group-hover:text-[#c9a84c] group-hover:bg-[#c9a84c]/10 transition-all duration-300 shrink-0">
                  {stat.icon}
                </div>
                <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
                  {stat.label.split(' ')[0]}
                </span>
              </div>

              <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm sm:text-base font-medium mb-1">{stat.label}</p>
              <p className="text-white/35 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-6">
          <p className="text-center font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase mb-10 reveal-left">
            What the community says
          </p>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                className="card p-6 sm:p-7 md:p-8 relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASING_IO }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute top-4 left-5 text-5xl leading-none text-[#c9a84c]/15 font-serif select-none" aria-hidden="true">
                  "
                </div>

                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: t.color, boxShadow: `0 0 12px ${t.color}40` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.author}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
