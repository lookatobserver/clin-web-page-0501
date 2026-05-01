'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-[#E2E8F0]' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <span
              className="text-2xl font-black tracking-tight"
              style={{ color: '#0B3D9B' }}
            >
              CLIN
            </span>
            <span
              className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded"
              style={{ background: '#0B3D9B', color: '#fff' }}
            >
              CLOUD
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0B3D9B';
                  (e.currentTarget as HTMLAnchorElement).style.background = '#EBF1FB';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-md text-white transition-colors"
              style={{ background: '#0B3D9B' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#072B72')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#0B3D9B')}
            >
              문의하기
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: '#0B3D9B' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E2E8F0] py-3 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium rounded-md transition-colors"
                style={{ color: '#475569' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 px-4">
              <a
                href="#contact"
                className="block text-center px-5 py-2.5 text-sm font-semibold rounded-md text-white"
                style={{ background: '#0B3D9B' }}
                onClick={() => setMobileOpen(false)}
              >
                문의하기
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
