import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EASING_IO = [0.16, 1, 0.3, 1] as const;

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  description: string;
  features: { text: string; included: boolean }[];
  highlight?: boolean;
  badge?: string;
  cta: string;
  ctaSecondary?: string;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Varsani',
    price: 'Free',
    period: 'Forever',
    tagline: 'For curious beginnings',
    description: 'Perfect for anyone discovering Garhwal for the first time. Access foundational content across all pillars.',
    badge: 'Most Accessible',
    features: [
      { text: 'Access to 50+ folklore stories (text)', included: true },
      { text: 'Garhwali basic glossary (500 words)', included: true },
      { text: 'Sacred geography map (basic view)', included: true },
      { text: 'Monthly newsletter with cultural insights', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Audio recordings (selected)', included: false },
      { text: 'Full dialect archive access', included: false },
      { text: 'Offline mobile access', included: false },
      { text: 'Ad-free experience', included: false },
    ],
    cta: 'Start Free',
    ctaSecondary: 'Current plan',
  },
  {
    id: 'pro',
    name: 'Kumaon',
    price: '₹149',
    period: '/month',
    tagline: 'For deep explorers',
    description: 'For students, researchers, and culture-enthusiasts who want to go deep into Garhwal\'s living heritage.',
    badge: 'Most Popular',
    highlight: true,
    features: [
      { text: 'Everything in Varsani, plus:', included: true },
      { text: 'All 240+ folklore narratives with audio', included: true },
      { text: 'Complete Garhwali dictionary (12,000+ words)', included: true },
      { text: 'Interactive pilgrimage map (full)', included: true },
      { text: 'Festival documentation (36 festivals)', included: true },
      { text: 'Artisan video profiles (58 families)', included: true },
      { text: 'Ad-free experience', included: true },
      { text: 'Downloadable research PDFs', included: false },
      { text: 'Priority community Q&A', included: false },
    ],
    cta: 'Go Pro',
    ctaSecondary: '7-day free trial',
  },
  {
    id: 'scholar',
    name: 'Gurjar',
    price: '₹499',
    period: '/month',
    tagline: 'For researchers & institutions',
    description: 'Full access for academics, journalists, cultural institutions, and serious students of Garhwali studies.',
    badge: 'For Researchers',
    features: [
      { text: 'Everything in Kumaon, plus:', included: true },
      { text: 'Downloadable archives & research PDFs', included: true },
      { text: 'Oral history raw recordings (unfiltered)', included: true },
      { text: 'Dialect comparison tools', included: true },
      { text: 'Citation-ready references & sourcing', included: true },
      { text: 'Priority community Q&A with scholars', included: true },
      { text: 'Institutional team access (up to 5 seats)', included: true },
      { text: 'API access for research projects', included: false },
      { text: 'Custom content requests', included: false },
    ],
    cta: 'Become a Scholar',
    ctaSecondary: 'Annual billing saves 20%',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
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
      id="pricing"
      className="relative section overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c14] via-[#0f1e16] to-[#0d1c14] z-0"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c9a84c]/[0.015] rounded-full blur-3xl pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c9a84c]/60 uppercase mb-4">
            Investment in Heritage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-4">
            Choose your{' '}
            <span className="gradient-text-warm">depth of connection</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            From free access to full scholarly archives — every plan supports the work of documentation and preservation.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] reveal">
            <span className={`text-xs font-medium transition-colors ${!annual ? 'text-white' : 'text-white/40'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="pricing-toggle relative w-11 h-6 rounded-full transition-colors duration-300"
              style={{
                background: annual ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.08)',
                border: annual ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.1)',
              }}
              aria-label={annual ? 'Switch to monthly billing' : 'Switch to annual billing'}
              aria-pressed={annual}
              role="switch"
            >
              <div
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300"
                style={{
                  background: annual ? '#c9a84c' : 'rgba(255,255,255,0.4)',
                  transform: annual ? 'translateX(20px)' : 'translateX(0)',
                  boxShadow: annual ? '0 2px 8px rgba(201,168,76,0.5)' : 'none',
                }}
              />
            </button>
            <span className={`text-xs font-medium transition-colors ${annual ? 'text-white' : 'text-white/40'}`}>
              Annual
            </span>
            {annual && (
              <span className="ml-1 px-2 py-0.5 text-[10px] font-semibold bg-[#c9a84c]/15 text-[#c9a84c] border border-[#c9a84c]/20 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto stagger-children">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#c9a84c]/[0.07] to-[#c9a84c]/[0.02] border-[#c9a84c]/20 shadow-xl shadow-[#c9a84c]/5'
                  : 'bg-white/[0.02] border-white/[0.07]'
              } transition-all duration-300`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: EASING_IO }}
              role="article"
              aria-label={`${plan.name} plan`}
            >
              {/* Highlight glow */}
              {plan.highlight && (
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#c9a84c]/15 to-transparent opacity-70 pointer-events-none"/>
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full"
                    style={{
                      background: plan.highlight ? '#c9a84c' : 'rgba(201,168,76,0.1)',
                      color: plan.highlight ? '#0d1c14' : '#c9a84c',
                      border: `1px solid ${plan.highlight ? '#c9a84c' : 'rgba(201,168,76,0.2)'}`,
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-5">
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-1">
                  {plan.name} Plan
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl sm:text-5xl text-white font-bold">
                    {plan.price}
                  </span>
                  <span className="text-white/35 text-sm">{plan.period}</span>
                </div>
                <p className="text-white/45 text-sm mt-2 font-medium">{plan.tagline}</p>
              </div>

              <p className="text-white/40 text-sm leading-relaxed mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8" role="list">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2.5">
                    <span
                      className="shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {feature.included ? (
                        <svg className="w-4 h-4 text-[#2dd4a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      )}
                    </span>
                    <span className={`text-sm ${feature.included ? 'text-white/70' : 'text-white/25'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <button
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-[#c9a84c] text-[#0d1c14] hover:bg-[#d4b45c] shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30 active:scale-[0.98]'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98]'
                  }`}
                  aria-label={`Subscribe to ${plan.name} plan`}
                >
                  {plan.cta}
                </button>
                <button
                  className="w-full py-2.5 rounded-full text-xs text-white/30 border border-white/[0.06] hover:border-white/10 hover:text-white/50 transition-all duration-200"
                  aria-label={plan.ctaSecondary || 'Learn more about this plan'}
                >
                  {plan.ctaSecondary}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Savings note */}
        <p className="text-center text-white/25 text-xs mt-8 reveal">
          All plans include a 7-day free trial. No credit card required to start.
          <br />
          Revenue directly supports village documentation teams across Garhwal.
        </p>
      </div>
    </section>
  );
}
