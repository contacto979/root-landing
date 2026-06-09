import React, { useState } from 'react';

export default function RootCtaFinal() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const [hovered, setHovered] = React.useState(false);

  return (
    <section style={{
      padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,4rem)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
      backgroundImage: 'url(https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/febe2c0a6_IMG_8853.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(38,53,42,0.85) 0%, rgba(20,35,25,0.8) 100%)',
        pointerEvents: 'none',
      }} />
      
      {/* Ghost background text */}
      <div style={{
        position: 'absolute', fontSize: 'clamp(8rem,20vw,20rem)', fontWeight: 900,
        color: 'rgba(245,243,234,0.03)', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        letterSpacing: '-0.04em', pointerEvents: 'none', whiteSpace: 'nowrap',
        fontFamily: "'Figtree', sans-serif",
        zIndex: 0,
      }}>ROOT</div>

      <p style={{
        fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: '#F4C67C',
        marginBottom: '1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ width: '30px', height: '1px', background: 'rgba(244,198,124,0.4)', display: 'block' }} />
        ¿Listo para partir?
        <span style={{ width: '30px', height: '1px', background: 'rgba(244,198,124,0.4)', display: 'block' }} />
      </p>

      <h2 className="cta-title" style={{
        fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900,
        color: '#F5F3EA', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '1.5rem',
        position: 'relative', zIndex: 1,
      }}>
        Toma la decisión<br />con los datos <span style={{ color: '#F4C67C' }}>correctos.</span>
      </h2>

      <p style={{ fontSize: '1rem', fontWeight: 300, color: 'rgba(245,243,234,0.55)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
        Por $74.500 sabes exactamente si tu refugio es viable, cuánto cuesta construirlo y cuánto puede rentar. Sin sorpresas.
      </p>

      <style>{`
        @media (max-width: 768px) {
          .cta-title { font-size: 2rem !important; }
          .cta-price { font-size: 2rem !important; }
        }
      `}</style>
      <p style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'rgba(245,243,234,0.3)', marginBottom: '0.3rem', position: 'relative', zIndex: 1 }}>$149.000</p>
      <p className="cta-price" style={{ fontSize: '2.8rem', fontWeight: 900, color: '#F4C67C', letterSpacing: '-0.03em', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>$74.500</p>
      <p style={{ fontSize: '0.75rem', color: 'rgba(245,243,234,0.3)', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>incluye IVA · pago único · primeras 20 unidades</p>

      <a
        href="https://www.flow.cl/btn.php?token=r51a815e240f5aee28626facdd340f7888aadb18"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'Figtree', sans-serif",
          background: hovered ? '#E68C58' : '#F4C67C',
          color: '#26352A',
          fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
          border: 'none', padding: '1.2rem 3rem', cursor: 'pointer',
          transition: 'all 0.2s',
          transform: hovered ? 'translateY(-1px)' : 'none',
          position: 'relative', zIndex: 1,
          textDecoration: 'none', display: 'inline-block',
        }}
      >
        Comprar Pack Planificación →
      </a>
    </section>
  );
}