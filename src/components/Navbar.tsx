import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Culture', href: '#culture' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Language', href: '#language' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled
          ? { background: 'rgba(13,28,20,0.88)', backdropFilter: 'blur(24px) saturate(1.6)', borderBottom: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }
          : { background: 'rgba(13,28,20,0.4)', backdropFilter: 'blur(12px)', borderBottom: '1px solid transparent' }
        }
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="Garhwalinfo home"
            >
              <div className="relative w-9 h-9 shrink-0">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="36" height="36" rx="10" fill="#1a3a2a"/>
                  <path d="M18 7L8 25Q9.5 26 11 25L14 20L18 24L22 20L25 25Q26.5 26 28 25L30 22L31 20H5L6 22L7 25Q8.5 26 10 25L11 25L14 20L18 24L22 20L25 25Q26.5 26 28 25L29 27L30 25Z" fill="#c9a84c"/>
                  <path d="M18 7L8 25" stroke="#e8cf7a" strokeWidth="0.75" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-[#c9a84c]/30 transition-all duration-300"/>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Garhwal<span className="text-[#c9a84c]">info</span>
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-white/40 mt-0.5">
                  Root of Garhwal
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"/>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#subscribe"
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                Sign In
              </a>
              <a
                href="#subscribe"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#c9a84c] text-[#0d1c14] hover:bg-[#d4b45c] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/35 hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 5.5 } : {}}
                  className="block h-[1.5px] bg-white/80 rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1.5px] bg-white/80 rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -5.5 } : {}}
                  className="block h-[1.5px] bg-white/80 rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#0d1c14] pt-16"
          >
            <nav className="px-5 pb-8" aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3.5 text-base text-white/70 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-4 gold-divider flex flex-col gap-3 px-4"/>
                <a
                  href="#subscribe"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary justify-center mt-2 w-full"
                >
                  Get Started Free
                </a>
                <a
                  href="#subscribe"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-ghost justify-center w-full"
                >
                  Sign In
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
