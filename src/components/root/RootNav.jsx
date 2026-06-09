import React, { useState, useEffect } from 'react';

export default function RootNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [['quien', 'Quiénes somos'], ['packs', 'Packs'], ['modelos', 'Modelos'], ['faq', 'Preguntas']];

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; gap: 2.2rem; align-items: center; }
        .nav-desktop-cta { display: inline-block; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: '44px', left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem', height: '64px',
        background: scrolled ? 'rgba(245,243,234,0.97)' : 'rgba(245,243,234,0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(38,53,42,0.08)',
        transition: 'background 0.3s',
        fontFamily: "'Figtree', sans-serif",
      }}>
        {/* Logo */}
        <img
          src="https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/be57ea5e6_Root_Logotipo-38.png"
          alt="ROOT"
          style={{ height: '36px', width: 'auto' }}
        />

        {/* Desktop links */}
        <div className="nav-desktop-links">
          {navLinks.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#5B7559'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#181818'; }}
              style={{
                fontSize: '1rem', fontWeight: 500, color: '#181818',
                background: 'none', border: 'none', cursor: 'pointer',
                letterSpacing: '0.01em', fontFamily: "'Figtree', sans-serif",
                transition: 'color 0.2s',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://www.flow.cl/btn.php?token=r51a815e240f5aee28626facdd340f7888aadb18"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-desktop-cta"
          onMouseEnter={(e) => { e.currentTarget.style.background = '#5B7559'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#26352A'; }}
          style={{
            fontFamily: "'Figtree', sans-serif",
            background: '#26352A', color: '#F5F3EA',
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.6rem 1.4rem', cursor: 'pointer',
            transition: 'background 0.2s', textDecoration: 'none',
          }}
        >
          Comprar Pack — $74.500
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label="Menú"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', alignItems: 'center' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#26352A" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        style={{
          position: 'fixed', top: '108px', left: 0, right: 0, zIndex: 199,
          background: '#F5F3EA',
          borderBottom: '1px solid rgba(38,53,42,0.12)',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: '1rem', fontWeight: 500, color: '#26352A',
                background: 'none', border: 'none', borderBottom: '1px solid rgba(38,53,42,0.07)',
                cursor: 'pointer', textAlign: 'left',
                fontFamily: "'Figtree', sans-serif",
                padding: '1rem 0',
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="https://www.flow.cl/btn.php?token=r51a815e240f5aee28626facdd340f7888aadb18"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Figtree', sans-serif",
              background: '#26352A', color: '#F5F3EA',
              fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '1rem 1.2rem', cursor: 'pointer',
              marginTop: '1rem',
              textDecoration: 'none', display: 'block', textAlign: 'center',
            }}
          >
            Comprar Pack — $74.500
          </a>
        </div>
      </div>
    </>
  );
}