import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

const showcaseItems = [
  {
    tag: 'Language',
    title: 'Garhwali Dictionary',
    subtitle: '12,000+ entries with audio pronunciation',
    desc: 'Search through a living dictionary of Garhwali words, phrases, and idioms — each with voice recordings from native speakers across different valleys.',
    color: '#2dd4a0',
    bgColor: 'rgba(45,212,160,0.06)',
    borderColor: 'rgba(45,212,160,0.15)',
  },
  {
    tag: 'Heritage',
    title: 'Digital Pilgrimage Map',
    subtitle: '1,200+ sacred sites across Garhwal',
    desc: 'An interactive map marking temples, river confluences (sangam), sacred lakes (Naulan), cave shrines, and mythological sites — with historical context for each.',
    color: '#c9a84c',
    bgColor: 'rgba(201,168,76,0.06)',
    borderColor: 'rgba(201,168,76,0.15)',
  },
  {
    tag: 'Culture',
    title: 'Festival Calendar & Archives',
    subtitle: '36 festivals with full documentation',
    desc: 'Deep-dive documentation of every major Garhwali festival — from Kaprkagans to Nanda Devi Raj Jat — including rituals, songs, food, attire, and community significance.',
    color: '#e8cf7a',
    bgColor: 'rgba(232,207,122,0.06)',
    borderColor: 'rgba(232,207,122,0.15)',
  },
  {
    tag: 'Art',
    title: 'Artisan Profiles & Craft Library',
    subtitle: '58 artisan families documented',
    desc: 'Video profiles and technique documentation of master craftspeople keeping ringal, wool weaving, wood carving, and metal craft traditions alive in their villages.',
    color: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.06)',
    borderColor: 'rgba(167,139,250,0.15)',
  },
];

export default function Showcase() {
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
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children').forEach((node) => {
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="heritage"
      className="relative section overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#0d1c14] to-[#0f1e16] z-0"/>
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#2dd4a0]/[0.02] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#c9a84c]/[0.02] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            The Platform
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            A window into{' '}
            <span className="gradient-text-warm">living Garhwal</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Four core experiences that make Garhwalinfo the most comprehensive digital portal for Garhwali culture and heritage.
          </p>
        </div>

        {/* Showcase cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 stagger-children">
          {showcaseItems.map((item) => (
            <motion.div
              key={item.title}
              className="relative rounded-2xl overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: EASING_IO }}
            >
              {/* Card background */}
              <div
                className="p-6 sm:p-8 min-h-[200px] flex flex-col"
                style={{
                  background: `linear-gradient(160deg, ${item.bgColor} 0%, rgba(13,28,20,0.8) 100%)`,
                  border: `1px solid ${item.borderColor}`,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  aria-hidden="true"
                />

                {/* Tag */}
                <span
                  className="text-[10px] font-mono tracking-[0.2em] uppercase mb-4 inline-block px-3 py-1 rounded-full"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  {item.tag}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl sm:text-2xl font-serif text-white font-semibold mb-1.5"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium mb-3" style={{ color: item.color, opacity: 0.7 }}>
                    {item.subtitle}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-xs text-white/30 font-mono">Explore feature</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={item.color}
                    strokeWidth={2}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: EASING_IO }}
                    style={{ opacity: 0.6 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </motion.svg>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute -inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${item.color}15 0%, transparent 60%)`,
                  filter: 'blur(12px)',
                }}
                aria-hidden="true"/>
            </motion.div>
          ))}
        </div>

        {/* Highlight strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[#c9a84c]/12 bg-[#c9a84c]/[0.03] reveal">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#c9a84c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-white/70 text-sm sm:text-base font-medium mb-1">
                All content is community-verified and academically reviewed
              </p>
              <p className="text-white/35 text-xs sm:text-sm">
                Every article, recording, and map entry passes through a two-stage verification process before publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
