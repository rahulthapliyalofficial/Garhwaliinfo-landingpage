import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

interface Feature {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    num: '01',
    title: 'Garhwali Language Archive',
    description:
      'A comprehensive repository of Garhwali dialects, vocabulary, grammar, proverbs, and oral histories — documented by native speakers and linguists.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h12" strokeLinecap="round"/>
        <circle cx="19" cy="6" r="1" fill="currentColor" stroke="none"/>
        <circle cx="19" cy="18" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    highlight: true,
  },
  {
    num: '02',
    title: 'Sacred Geography of Garhwal',
    description:
      'Explore the rivers, temples, peaks, and pilgrimage routes that define the spiritual landscape of the region — from Gangotri to Kedarnath and beyond.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21l9-9 9 9M5 19l5-5 4 4 3-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Living Folklore & Oral Traditions',
    description:
      'Jagar, folk songs (Chhanny, Bair, Ghatu), mountain legends, and mythological narratives — recordings, transcripts, and translations of Garhwal\'s rich oral heritage.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3M12 2a10 10 0 010 20" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Garhwali Cuisine & Daily Life',
    description:
      'Recipes, food rituals, seasonal festivals, agricultural practices, and the rhythm of daily life in Garhwali villages — an immersive cultural guide.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v8m0 0a4 4 0 014 4v0a4 4 0 01-8 0v0a4 4 0 014-4zM8 22h8M10 22v-4h4v4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'History & Dynastic Legacy',
    description:
      'The Katyuri, Chand, and Panwar dynasties — kingdom histories, battles, architecture, administrative systems, and the evolution of Garhwal as a political and cultural entity.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Art, Craft & Textile Heritage',
    description:
      'Ringal bamboo craft, Garhwali wool weaving, wood carving, folk painting traditions, and the artisan communities keeping these skills alive across generations.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v12M8 10c0 2 2 3 4 3s4-1 4-3M8 14c0 2 2 3 4 3s4-1 4-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Features() {
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
    el.querySelectorAll('.reveal, .reveal-left, .stagger-children').forEach((node) => {
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="culture"
      className="relative section overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#0f1e16] to-[#0d1c14] z-0"/>

      {/* Side decoration */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#c9a84c]/[0.015] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            Our Offerings
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            Everything you need to{' '}
            <span className="gradient-text-warm">understand Garhwal</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From language archives to sacred geography — six pillars of content that bring the soul of Garhwal to your screen.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 stagger-children">
          {features.map((feature) => (
            <motion.div
              key={feature.num}
              className={`card p-6 sm:p-7 relative group ${
                feature.highlight ? 'md:col-span-2 md:row-span-1' : ''
              } ${feature.highlight ? 'md:row-span-1' : ''}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: EASING_IO }}
              style={feature.highlight ? { gridRow: 'span 1' } : undefined}
            >
              {/* Number */}
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c]/40 mb-4 block">
                {feature.num}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/[0.07] border border-[#c9a84c]/[0.12] flex items-center justify-center text-[#c9a84c]/60 group-hover:bg-[#c9a84c]/[0.12] group-hover:text-[#c9a84c] group-hover:border-[#c9a84c]/30 transition-all duration-300 mb-5 shrink-0">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2.5">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient overlay */}
              {feature.highlight && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#c9a84c]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"/>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA text link */}
        <div className="text-center mt-12 reveal">
          <a
            href="#subscribe"
            className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-medium hover:text-[#e8cf7a] transition-colors group"
          >
            Explore all 240+ narratives
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
