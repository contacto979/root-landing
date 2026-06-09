import React from 'react';

const testimonios = [
  {
    initials: 'MR', name: 'Miguel R.', location: 'Pucón, La Araucanía',
    text: <>Tenía un terreno en pendiente en Pucón y no sabía si era construible. <strong style={{ fontWeight: 600, color: '#F5F3EA' }}>Felipe llegó al terreno, resolvió el acceso y la orientación antes de empezar un solo plano.</strong> El proceso fue mucho más ordenado de lo que esperaba.</>,
  },
  {
    initials: 'CP', name: 'Catalina P.', location: 'Lago Ranco, Los Ríos',
    text: <>Lo que más me sorprendió fue que <strong style={{ fontWeight: 600, color: '#F5F3EA' }}>los huéspedes siempre mencionan el diseño y la vista en las reseñas</strong>. No es casualidad — Felipe diseñó cada detalle pensando en la experiencia del arriendo.</>,
  },
];

export default function RootTestimonios() {
  return (
    <section style={{ background: '#26352A', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,4rem)' }}>
      <style>{`
        @media (max-width: 768px) {
          .testimonios-section { padding: 2.5rem 1.25rem !important; }
          .testimonios-header { margin-bottom: 1.5rem !important; }
          .testimonios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="testimonios-header" style={{ marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F4C67C', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ width: '20px', height: '1px', background: '#F4C67C', display: 'block' }} />
          Lo que dicen
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#F5F3EA', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '0.8rem' }}>
          Clientes que ya tienen<br />su refugio funcionando.
        </h2>
        <p style={{ fontSize: '0.88rem', fontWeight: 300, color: 'rgba(245,243,234,0.45)' }}>Proyectos reales en el sur de Chile.</p>
      </div>

      <div className="testimonios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px' }}>
        {testimonios.map((t, i) => (
          <div key={i} style={{ background: 'rgba(245,243,234,0.05)', padding: '2.5rem 2rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#F4C67C', lineHeight: 1, marginBottom: '1.2rem', opacity: 0.6 }}>"</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,243,234,0.75)', marginBottom: '1.5rem' }}>{t.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#5B7559', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#F5F3EA', flexShrink: 0 }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F5F3EA' }}>{t.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(245,243,234,0.35)' }}>{t.location}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: '#F4C67C', fontSize: '0.75rem' }}>★★★★★</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', padding: '1.2rem 1.5rem', background: 'rgba(245,243,234,0.04)', borderLeft: '2px solid #F4C67C' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(244,198,124,0.5)" strokeWidth="1.5">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'rgba(245,243,234,0.5)', lineHeight: 1.55 }}>
          <strong style={{ fontWeight: 600, color: 'rgba(245,243,234,0.75)' }}>¿Tu cabaña ya tiene reseñas en Airbnb?</strong>{' '}
          Si tus huéspedes mencionan el diseño, la vista o la calidez del espacio — esas reseñas son el testimonio más poderoso que existe. Escríbenos y la incorporamos.
        </p>
      </div>
    </section>
  );
}