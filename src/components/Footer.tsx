const footerLinks = {
  'Explore': [
    { label: 'Folklore Archive', href: '#culture' },
    { label: 'Language Library', href: '#culture' },
    { label: 'Sacred Geography', href: '#heritage' },
    { label: 'Festival Calendar', href: '#heritage' },
    { label: 'Artisan Profiles', href: '#heritage' },
    { label: 'History & Dynasties', href: '#culture' },
  ],
  'Community': [
    { label: 'Contribute Content', href: '#subscribe' },
    { label: 'Community Forum', href: '#subscribe' },
    { label: 'Language Exchange', href: '#subscribe' },
    { label: 'Research Partners', href: '#subscribe' },
    { label: 'School Program', href: '#subscribe' },
  ],
  'Company': [
    { label: 'About Garhwalinfo', href: '#' },
    { label: 'Our Methodology', href: '#' },
    { label: 'Team & Contributors', href: '#' },
    { label: 'Financial Transparency', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.522 13.31c-.25.365-.886.36-1.136.07A19.5 19.5 0 0017.5 12c0-.59-.154-1.14-.434-1.614.38-.086.746-.326.966-.65.224.324.494.54.884.54.495 0 .805-.33 1.034-.634-.48-.394-1.004-.394-1.564 0-.44.44-1.126.44-1.46 0 .266-.574.81-1.043 1.236-1.316A17.895 17.895 0 0112 4.75c.386 0 .764.06 1.12.178.364-.826.944-1.48 1.598-1.768.24-.094.574-.287.724-.287.15 0 .44.193.67.287.654.288 1.234.94 1.234 1.768 0 .29-.06.57-.178.824.296.224.468.52.468.874a2.18 2.18 0 01-.538 1.43c-.29.395-.936.395-1.226 0a2.18 2.18 0 01-.538-1.43c0-.354.172-.65.468-.874.118-.254.178-.534.178-.824 0-.828.58-1.48 1.234-1.768.23-.094.52-.287.67-.287.15 0 .46.098.72.287.654.287 1.234.94 1.234 1.768 0 .29-.06.57-.178.824.296.224.468.52.468.874a2.18 2.18 0 01-.538 1.43c-.29.395-.936.395-1.226 0a2.18 2.18 0 01-.538-1.43c0-.354.172-.65.468-.874.118-.254.178-.534.178-.824 0-.828.58-1.48 1.234-1.768.23-.094.52-.286.67-.286.15 0 .46.097.72.286.654.286 1.234.94 1.234 1.768 0 .29-.06.57-.178.824.296.224.468.52.468.874a2.18 2.18 0 01-.538 1.43c-.29.395-.936.395-1.226 0-.29-.395-.51-.79-.51-1.43a2.18 2.18 0 01.538-1.43c.296-.224.468-.52.468-.874a2.18 2.18 0 01.538-1.43c.29-.395.936-.395 1.226 0a2.18 2.18 0 01.538 1.43c0 .354-.172.65-.468.874-.118.254-.178.534-.178.824 0 .828-.58 1.48-1.234 1.768-.23.094-.52.287-.67.287-.15 0-.44-.193-.67-.287-.654-.287-1.234-.94-1.234-1.768 0-.29.06-.57.178-.824-.296-.224-.468-.52-.468-.874a2.18 2.18 0 01.538-1.43c.29-.395.936-.395 1.226 0a2.18 2.18 0 01.538 1.43c0 .354-.172.65-.468.874-.118.254-.178.534-.178.824 0 .828-.58 1.48-1.234 1.768-.23.094-.52.287-.67.287z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] bg-[#0a1810]/80"
      style={{ backdropFilter: 'blur(16px)' }}
      aria-label="Site footer"
    >
      {/* Top accent bar */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" aria-hidden="true"/>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 group mb-4" aria-label="Garhwalinfo home">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="36" height="36" rx="10" fill="#1a3a2a"/>
                  <path d="M18 7L8 25Q9.5 26 11 25L14 20L18 24L22 20L25 25Q26.5 26 28 25L30 22L31 20H5L6 22L7 25Q8.5 26 10 25L11 25L14 20L18 24L22 20L25 25Q26.5 26 28 25L29 27L30 25Z" fill="#c9a84c"/>
                </svg>
              </div>
              <span className="text-base font-bold text-white">
                Garhwal<span className="text-[#c9a84c]">info</span>
              </span>
            </a>
            <p className="text-white/35 text-xs leading-relaxed mb-5 max-w-xs">
              Explore the root of Garhwal — the culture, language, and living heritage of Uttarakhand's Garhwal region, preserved for future generations.
            </p>
            {/* Newsletter mini */}
            <p className="text-white/50 text-xs font-medium mb-2">Stay connected</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-3 py-2 text-xs bg-white/[0.04] border border-white/[0.08] rounded-lg text-white/70 placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/30 transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                className="px-3 py-2 text-xs font-semibold bg-[#c9a84c] text-[#0d1c14] rounded-lg hover:bg-[#d4b45c] transition-colors shrink-0"
                aria-label="Subscribe to newsletter"
              >
                Go
              </button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4 font-mono">
                {category}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/35 text-xs hover:text-white/70 transition-colors duration-200 group inline-block"
                    >
                      {link.label}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 text-[#c9a84c]/40 ml-0.5"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-white/20 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Garhwalinfo. All rights reserved. Built with{' '}
            <span className="text-[#c9a84c]/60">❤</span> for the Garhwali community.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/25 hover:text-white/70 hover:bg-white/[0.05] transition-all duration-200 border border-transparent hover:border-white/10"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-white/15 text-[10px] font-mono tracking-wider hidden sm:block">
            अखंड मानचित्त · अटूट संस्कृति
          </p>
        </div>
      </div>
    </footer>
  );
}
