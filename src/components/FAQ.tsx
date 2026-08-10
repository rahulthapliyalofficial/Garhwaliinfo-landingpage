import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What exactly is Garhwalinfo?",
    a: "Garhwalinfo is a digital cultural platform dedicated to documenting, preserving, and sharing the language, folklore, geography, history, and living traditions of the Garhwal region in Uttarakhand, India. Think of it as a living digital archive built by, with, and for the Garhwali community.",
  },
  {
    q: "Is Garhwalinfo free to use?",
    a: "Yes — the Varsani (Free) plan gives you access to 50+ folklore stories, a basic Garhwali glossary, the sacred geography map, and our monthly newsletter. For deeper access to all 240+ narratives, full dictionary, audio recordings, and video profiles, you can upgrade to Kumaon (₹149/month) or Gurjar (₹499/month) for researchers.",
  },
  {
    q: "How is the content verified?",
    a: "Every piece of content goes through a two-stage verification process. First, it is reviewed by a native Garhwali speaker from the relevant region. Second, it is reviewed by a domain expert — a linguist, historian, or cultural practitioner. We cite our sources transparently wherever possible.",
  },
  {
    q: "Can I contribute my own stories or content?",
    a: "Absolutely. We encourage contributions from the community — stories, recordings, photographs, recipes, and any knowledge you'd like to share. Contributed content goes through the same verification process before publication. You'll be credited as a contributor and your contribution becomes part of the permanent archive.",
  },
  {
    q: "Do you cover the whole of Uttarakhand?",
    a: "Our primary focus is the Garhwal region of Uttarakhand — from the Yamuna valley in the west to the Kali Ganga in the east, and from the Shivalik foothills to the high Himalayas. We occasionally cover culturally connected areas in the Kumaon region when they share significant cultural overlap.",
  },
  {
    q: "What languages is the platform available in?",
    a: "Core content is available in Garhwali (in Devanagari and Roman script), Hindi, and English. As we grow, we plan to add more regional languages and dialects. Audio content is primarily in Garhwali with English and Hindi transcripts.",
  },
  {
    q: "How does my subscription support Garhwal's culture?",
    a: "20% of all subscription revenue goes directly to our village documentation teams — local researchers, storytellers, and craftspeople who travel to remote villages to collect and verify content. The remaining revenue covers technology, editorial staff, and platform maintenance. We are committed to financial transparency.",
  },
  {
    q: "Can schools or institutions use Garhwalinfo?",
    a: "Yes. Our Gurjar (Scholar) plan includes institutional access for up to 5 team members and is designed for schools, universities, cultural institutions, and research projects. We also offer custom institutional partnerships — reach out to us at hello@garhwalinfo.in for details.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
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
    el.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative section overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#0f1e16] to-[#0d1c14] z-0"/>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            Samasya · Samadhan
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            Questions,{' '}
            <span className="gradient-text-warm">answered</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know before beginning your journey with Garhwalinfo.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-0 stagger-children" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card overflow-hidden group"
              role="listitem"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors duration-200 hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]/40"
              >
                <span className="text-white text-sm sm:text-base font-medium leading-snug pr-4">
                  {faq.q}
                </span>
                <motion.span
                  className="shrink-0 text-[#c9a84c]/60 flex-shrink-0"
                  initial={false}
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: EASING_IO }}
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASING_IO }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-white/45 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Final CTA text */}
        <div className="text-center mt-10 reveal">
          <p className="text-white/30 text-xs font-mono">
            Still have questions?{' '}
            <a
              href="mailto:hello@garhwalinfo.in"
              className="text-[#c9a84c] hover:text-[#e8cf7a] transition-colors underline underline-offset-2 decoration-[#c9a84c]/30"
            >
              Write to us at hello@garhwalinfo.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
