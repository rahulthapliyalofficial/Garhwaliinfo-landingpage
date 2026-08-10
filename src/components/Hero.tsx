import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 60,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 3,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.6 + 0.2,
}));

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const hero = heroRef.current;
      if (!hero) return;
      const parallaxEls = hero.querySelectorAll('[data-parallax]');
      parallaxEls.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).getAttribute('data-parallax') || '0');
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Ambient sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06101a] via-[#0a1c14] to-[#0d1c14] z-0"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2030]/40 via-transparent to-[#1a1a0a]/20 z-[1]"/>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none" aria-hidden="true">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
            }}
            animate={{
              opacity: [s.opacity * 0.3, s.opacity, s.opacity * 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: EASING_IO,
            }}
          />
        ))}
      </div>

      {/* Aurora glow */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, rgba(45,212,160,0.07) 0%, transparent 70%)' }}
          animate={{
            x: [-30, 30, -30],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: EASING_IO }}
        />
        <motion.div
          className="absolute top-[20%] right-[10%] w-[40%] h-[20%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
          animate={{
            x: [20, -20, 20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: EASING_IO }}
        />
      </div>

      {/* Mountain layers - SVG */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-[55%] z-[2] w-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-parallax="-0.15"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1a2e" stopOpacity="0"/>
            <stop offset="100%" stopColor="#0a1a2e" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="mtnGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a3a2a"/>
            <stop offset="100%" stopColor="#0f2518"/>
          </linearGradient>
          <linearGradient id="mtnGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#143020"/>
            <stop offset="100%" stopColor="#0a1c12"/>
          </linearGradient>
        </defs>
        <rect width="1440" height="600" fill="url(#skyGrad)"/>
        <path
          d="M0 480 L120 380 L200 420 L320 300 L400 360 L500 260 L600 340 L720 220 L830 310 L940 200 L1050 290 L1150 240 L1260 330 L1360 260 L1440 340 L1440 600 L0 600Z"
          fill="url(#mtnGrad2)"
          opacity="0.7"
        />
        <path
          d="M0 520 L100 440 L220 480 L340 360 L450 420 L560 310 L680 400 L790 290 L900 370 L1020 270 L1130 350 L1240 280 L1360 380 L1440 320 L1440 600 L0 600Z"
          fill="url(#mtnGrad1)"
          opacity="0.85"
        />
        <motion.path
          d="M0 560 L80 500 L160 530 L250 420 L340 490 L430 380 L520 470 L610 360 L700 460 L790 400 L880 490 L970 370 L1060 470 L1150 410 L1240 500 L1330 440 L1440 510 L1440 600 L0 600Z"
          fill="#0d1c14"
          stroke="rgba(201,168,76,0.08)"
          strokeWidth="0.5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: EASING_IO }}
        />
        <path d="M325 420 L340 380 L355 420Z" fill="rgba(255,255,255,0.06)"/>
        <path d="M605 360 L620 320 L635 360Z" fill="rgba(255,255,255,0.08)"/>
        <path d="M965 370 L980 330 L995 370Z" fill="rgba(255,255,255,0.07)"/>
      </svg>

      {/* Foreground ground line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[8%] z-[3] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(13,28,20,0.6) 30%, #0d1c14 100%)',
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + (i * 8) % 90}%`,
              bottom: '30%',
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: i % 2 === 0
                ? 'rgba(201,168,76,0.25)'
                : 'rgba(45,212,160,0.2)',
              boxShadow: i % 2 === 0
                ? '0 0 6px rgba(201,168,76,0.3)'
                : '0 0 6px rgba(45,212,160,0.3)',
            }}
            animate={{
              y: [0, -40 - i * 5, 0],
              x: [0, i % 2 === 0 ? -15 : 15, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              delay: i * 0.7,
              repeat: Infinity,
              ease: EASING_IO,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dd4a0] opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4a0]"/>
            </span>
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
              Discovering Garhwal's Living Heritage
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/70 uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            अखंड मानचित्त · Unbroken Consciousness
          </motion.p>

          {/* H1 */}
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASING_IO }}
          >
            <span className="text-white">Explore the</span>
            <br />
            <span className="gradient-text-warm relative">
              Root of Garhwal
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent"/>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASING_IO }}
          >
            Garhwalinfo is your premium gateway to the culture, language, folklore, sacred geography,
            and ancestral wisdom of Uttarakhand's Garhwal region — preserved, celebrated, and shared with the world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#c9a84c] text-[#0d1c14] hover:bg-[#d4b45c] transition-all duration-200 shadow-xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/35 hover:-translate-y-0.5 group"
            >
              Begin the Journey
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
            <a
              href="#culture"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium text-white/70 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/[0.04] transition-all duration-200 group"
            >
              <svg className="w-4 h-4 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Watch the Story
            </a>
          </motion.div>

          {/* Trusted by counter */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/[0.06]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Trusted by <span className="text-white font-semibold">12,000+</span> Garhwali enthusiasts
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono">—</span>
              <span className="text-white/30 text-xs">सांस्कृतिक · संस्कृति · सभ्यता</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
          Scroll to explore
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-[#c9a84c]"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeIn' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
