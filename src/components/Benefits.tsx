import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const EASING = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Authentic & Verified',
    desc: 'Every piece of content is reviewed by native Garhwalis, scholars, and cultural practitioners before it reaches you.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Deeply Researched',
    desc: 'Our content is built on years of field research, archival work, and conversations with elders across 60+ Garhwali villages.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Community-Driven',
    desc: 'Contributions from over 45,000 community members keep our knowledge base growing — and our understanding of Garhwal evolving.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l4.5-4.5M20 8l-4.5 4.5M16 4l-4 16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Mobile-First Design',
    desc: 'Built for the way India actually uses the internet — fast, offline-capable, and beautiful on any screen, even in low connectivity.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15h4l2-7 4 11 2-7 4 4V2H3v13z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Audio & Video Rich',
    desc: 'Listen to native speakers, watch artisans at work, and experience Garhwali culture in its most immersive form.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Always Up-to-Date',
    desc: 'Our team continuously reviews and updates content — adding new stories, correcting information, and responding to community feedback.',
  },
];

export default function Benefits() {
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
    el.querySelectorAll('.reveal, .stagger-children').forEach((node) => {
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="language"
      className="relative section overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#0f1e16] to-[#0d1c14] z-0"/>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#c9a84c]/[0.015] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#2dd4a0]/[0.015] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            Why Garhwalinfo
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            Built with{' '}
            <span className="gradient-text-warm">respect, rigour, and love</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every feature, every article, every recording is a labour of love — created by people who belong to Garhwal.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="card p-6 sm:p-7 group relative"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: EASING }}
            >
              {/* Icon container */}
              <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/[0.06] border border-[#c9a84c]/[0.1] flex items-center justify-center text-[#c9a84c]/60 group-hover:bg-[#c9a84c]/10 group-hover:text-[#c9a84c] group-hover:border-[#c9a84c]/25 transition-all duration-300 mb-4 shrink-0">
                {benefit.icon}
              </div>

              <h3 className="text-white text-base sm:text-lg font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {benefit.desc}
              </p>

              {/* Bottom border glow on hover */}
              <div className="absolute inset-x-0 -bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
