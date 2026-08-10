import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Garhwalinfo is more than a website — it's a feeling. When I read the old folklore stories in my grandmother's voice (through the audio recordings), I cried. This is what keeping our culture alive looks like.",
    author: "Meena Joshi",
    role: "Retired Teacher",
    location: "Kotdwar, Garhwal",
    avatar: "MJ",
    color: "#2dd4a0",
  },
  {
    id: 2,
    quote:
      "As someone researching Garhwali folklore for my PhD, Garhwalinfo has been an invaluable resource. The annotated transcripts and source attributions set a new standard for digital cultural archives.",
    author: "Siddharth Uniyal",
    role: "PhD Researcher, folklore",
    location: "University of Delhi",
    avatar: "SU",
    color: "#c9a84c",
  },
  {
    id: 3,
    quote:
      "I moved to Bangalore for work and felt completely disconnected from home. Garhwalinfo's podcast series and festival updates make me feel like I'm still part of my village's life.",
    author: "Priyanka Pant",
    role: "Software Engineer",
    location: "Bangalore (originally from Pauri)",
    avatar: "PP",
    color: "#e8cf7a",
  },
  {
    id: 4,
    quote:
      "The Garhwali dictionary is incredible. I use it to teach my kids words their grandparents used to say all the time. Words that were disappearing. Now they're here forever.",
    author: "Himanshu Dobhal",
    role: "Father of two, content contributor",
    location: "Rishikesh, Uttarakhand",
    avatar: "HD",
    color: "#a78bfa",
  },
  {
    id: 5,
    quote:
      "What sets Garhwalinfo apart is the warmth. It doesn't feel like a database — it feels like a conversation with an elder who loves to tell you stories. That's the Garhwali way.",
    author: "Ankita Semwal",
    role: "Cultural Blogger",
    location: "Mumbai (originally from Tehri)",
    avatar: "AS",
    color: "#f472b6",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    autoplayRef.current = setInterval(next, 6000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, []);

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

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative section overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1e16] via-[#0d1c14] to-[#0f1e16] z-0"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c9a84c]/[0.015] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            Voices of Garhwal
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            What our{' '}
            <span className="gradient-text-warm">community</span> says
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
            Real stories from real people — Garhwalis from every corner of the region and around the world.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="card p-8 sm:p-10 md:p-12 text-center relative"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASING_IO }}
            >
              <div className="absolute top-4 left-8 text-7xl leading-none text-[#c9a84c]/10 font-serif select-none" aria-hidden="true">
                "
              </div>

              <div className="flex justify-center gap-1 mb-6" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed font-light italic mb-8 max-w-2xl mx-auto">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{
                    background: testimonials[activeIndex].color,
                    boxShadow: `0 0 20px ${testimonials[activeIndex].color}30`,
                  }}
                >
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <p className="text-white text-base font-semibold">{testimonials[activeIndex].author}</p>
                  <p className="text-white/40 text-xs sm:text-sm">
                    {testimonials[activeIndex].role} · {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-selected={i === activeIndex}
                    role="tab"
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-6 bg-[#c9a84c] shadow-md shadow-[#c9a84c]/40'
                        : 'bg-white/15 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4 mb-16 reveal">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
            <span>{testimonials.length}</span>
            <span className="text-white/10">·</span>
            <span className="text-white/50">{activeIndex + 1}</span>
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 group"
          >
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          </button>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="card p-5 sm:p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASING_IO }}
              whileHover={{ y: -2 }}
              role="article"
              aria-label={`Testimonial by ${t.author}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                  style={{ background: t.color, boxShadow: `0 0 10px ${t.color}25` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{t.author}</p>
                  <p className="text-white/35 text-xs">{t.location}</p>
                </div>
              </div>

              <p className="text-white/55 text-xs sm:text-sm leading-relaxed line-clamp-3 italic">
                "{t.quote.slice(0, 120)}..."
              </p>

              <div
                className="mt-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)`, width: '100%' }}
                aria-hidden="true"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
