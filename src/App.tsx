import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

/* ── Scroll reveal: Intersection Observer API ─────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-scale, .stagger-children'
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Smooth anchor scroll ──────────────────────────────────────────────── */
function useSmoothScroll() {
  useEffect(() => {
    const onNavigate = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', onNavigate);
    return () => document.removeEventListener('click', onNavigate);
  }, []);
}

export default function App() {
  useScrollReveal();
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#0d1c14] text-white selection:bg-[#c9a84c]/30 selection:text-[#e8cf7a]">
      {/* Noise texture overlay (subtle film grain) */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.018]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      {/* Ambient floating elements - bottom right */}
      <div
        aria-hidden="true"
        className="fixed bottom-8 right-6 z-0 opacity-[0.04] pointer-events-none"
        style={{ transform: 'translateY(0)' }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 5L15 50L30 50L60 25L90 50L105 50L60 5Z" fill="#c9a84c"/>
          <path d="M60 30L25 65L40 65L60 45L80 65L95 65L60 30Z" fill="#c9a84c" opacity="0.6"/>
          <path d="M60 50L35 72L47 72L60 60L73 72L85 72L60 50Z" fill="#c9a84c" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
}
