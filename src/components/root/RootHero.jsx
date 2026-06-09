import React from 'react';

const icons = {
  video: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F4C67C" strokeWidth="1.8"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>,
  dollar: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F4C67C" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
  chart: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F4C67C" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  cube: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F4C67C" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  home: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F4C67C" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
};

const packItems = [
  { icon: 'video', label: 'Videollamada 1:1 con arquitecto (60 min)', desc: 'Para resolver tus dudas específicas antes de comprometerte.' },
  { icon: 'home', label: 'Acceso al catálogo completo de modelos', desc: 'A-Frame 16m², Atalaya 36m² y Montaña 45m².' },
  { icon: 'dollar', label: 'Estimación de costos reales', desc: 'Para saber cuánto cuesta construir antes de comprometerte.' },
  { icon: 'chart', label: 'Simulador de ROI para arriendo vacacional', desc: 'Para calcular cuánto puede rentar tu cabaña en Airbnb.' },
  { icon: 'cube', label: 'Modelo 3D del refugio que elijas', desc: 'Para visualizarlo antes de tomar cualquier decisión.' },
];

export default function RootHero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{
      minHeight: '100vh', paddingTop: '108px',
      display: 'flex', flexDirection: 'row',
      fontFamily: "'Figtree', sans-serif",
    }}>

      {/* LEFT COLUMN — 2/3 — dark with background image */}
      <div style={{
        flex: '2', position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(3rem,6vw,5rem) clamp(2rem,5vw,6rem)',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <img
          src="https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/699c84dbd_IMG_0620.jpg"
          alt="Refugio ROOT"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            pointerEvents: 'none',
          }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(20,35,25,0.88) 0%, rgba(20,35,25,0.75) 70%, rgba(20,35,25,0.6) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '580px' }}>
          <p style={{
            fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#F4C67C', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.8rem',
          }}>
            <span style={{ width: '24px', height: '1px', background: '#F4C67C', display: 'block', flexShrink: 0 }} />
            Refugio Outdoor · Pack Planificación
          </p>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.0,
            color: '#F5F3EA', letterSpacing: '-0.04em', marginBottom: '1rem',
          }}>
            Tu refugio en la naturaleza ya existe.<br /><span style={{ color: '#F4C67C' }}>Solo falta el plan correcto.</span>
          </h1>

          <p style={{
            fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.65,
            color: 'rgba(245,243,234,0.65)', marginBottom: '1.4rem', maxWidth: '440px',
          }}>
            Con el Pack Planificación sabes exactamente cuánto cuesta construir y cuánto puede rentar tu refugio en Airbnb — antes de gastar un peso en obra.
          </p>

          <div style={{ marginBottom: '1.2rem' }}>
            <p style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: 'rgba(245,243,234,0.35)', marginBottom: '0.2rem' }}>$149.000</p>
            <p style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 900,
              color: '#F4C67C', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.2rem',
            }}>$74.500</p>
            <p style={{ fontSize: '0.68rem', color: 'rgba(245,243,234,0.35)', letterSpacing: '0.05em' }}>
              CLP · incluye IVA · pago único · primeras 20 unidades
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
            <a href="https://www.flow.cl/btn.php?token=r51a815e240f5aee28626facdd340f7888aadb18" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Figtree', sans-serif", background: '#F4C67C', color: '#26352A',
              fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
              border: 'none', padding: '1rem 2.2rem', cursor: 'pointer', transition: 'all 0.2s',
              textDecoration: 'none', display: 'inline-block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#E68C58'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F4C67C'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Quiero este pack →
            </a>
            <button onClick={() => scrollTo('quien')} style={{
              fontFamily: "'Figtree', sans-serif", background: 'transparent',
              color: 'rgba(245,243,234,0.6)', fontSize: '0.82rem', fontWeight: 400,
              letterSpacing: '0.04em', border: 'none', padding: '1rem 0', cursor: 'pointer',
              transition: 'color 0.2s', textDecoration: 'underline', textUnderlineOffset: '4px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F5F3EA'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,243,234,0.6)'; }}>
              ↓ Conoce el proyecto
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — 1/3 — light panel */}
      <div style={{
        flex: '1', background: '#F5F3EA',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(2.5rem,4vw,4rem) clamp(1.5rem,3vw,3rem)',
        borderLeft: '1px solid rgba(38,53,42,0.08)',
      }}>



        <p style={{
          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#26352A', marginBottom: '1.4rem', opacity: 0.5,
        }}>
          Qué incluye el pack
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {packItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
              <div style={{
                width: '44px', height: '44px', background: '#26352A', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
              }}>
                {icons[item.icon]}
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#26352A', lineHeight: 1.25 }}>{item.label}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 300, color: 'rgba(38,53,42,0.5)', marginTop: '0.25rem', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { flex-direction: column !important; min-height: unset !important; }
          section > div:first-child {
            flex: unset !important; width: 100% !important;
            min-height: 56vh !important;
            padding: 2rem 1.25rem !important;
          }
          section > div:first-child h1 {
            font-size: 1.9rem !important;
            line-height: 1.05 !important;
            margin-bottom: 0.8rem !important;
          }
          section > div:first-child p { font-size: 0.8rem !important; margin-bottom: 1rem !important; }
          section > div:last-child {
            flex: unset !important; width: 100% !important;
            padding: 1.5rem 1.25rem !important;
          }
          section > div:last-child > div { gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
}