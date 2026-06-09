import React, { useState } from 'react';

const packPrincipal = {
  badge: 'Recomendado para partir', badgeType: 'hot',
  name: 'Pack Planificación',
  tagline: 'Todo lo que necesitas para evaluar si tu proyecto es viable — antes de comprometer un peso en diseño o construcción.',
  price: '$74.500',
  originalPrice: '$149.000',
  priceUrgency: 'Primeras 20 unidades · precio sube a $149.000',
  priceNote: 'CLP · incluye IVA · pago único',
  items: [
  'Videollamada 1:1 con arquitecto (60 min)',
  'Planilla de costos reales del proyecto',
  'Planilla de ROI para arriendo vacacional',
  'Modelo 3D SketchUp del modelo que elijas',
  'Presupuesto estimativo de obra',
  'Acceso al catálogo completo de modelos',
  'Valor abonado para un pack más avanzado'],

  cta: 'Comprar Pack Planificación →',
  featured: true
};

const packSecundario = {
  badge: 'Si quieres personalizar tu refugio', badgeType: 'next',
  name: 'Pack Diseño',
  tagline: 'Diseña y personaliza tu refugio con un modelo hecho a la medida de tu terreno.',
  price: 'desde $990.000',
  priceNote: 'CLP · incluye IVA · incluye visita al terreno',
  items: [
  '1 visita al terreno con arquitecto',
  'Anteproyecto de arquitectura personalizado',
  'Plan maestro de obras en el terreno',
  'Planos PDF licenciados por arquitecto',
  'Archivos CAD/SKP (planos y 3D)',
  '5 videollamadas de consulta (60 min c/u)'],

  cta: 'Consultar Pack Diseño →',
  featured: false
};

function PackCard({ pack }) {
  const { badge, badgeType, name, tagline, price, originalPrice, priceNote, priceUrgency, items, cta, featured } = pack;
  const [hovered, setHovered] = React.useState(false);
  const [ctaHovered, setCtaHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: featured ?
        hovered ? 'rgba(245,243,234,0.96)' : '#F5F3EA' :
        hovered ? 'rgba(245,243,234,0.03)' : '#181818',
        padding: '2.5rem 2rem',
        transition: 'background 0.3s',
        display: 'flex', flexDirection: 'column'
      }}>
      
      <span style={{
        display: 'inline-block',
        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
        padding: '0.3rem 0.85rem', marginBottom: '1.5rem',
        background: badgeType === 'hot' ? '#F4C67C' : 'rgba(245,243,234,0.08)',
        color: badgeType === 'hot' ? '#26352A' : 'rgba(245,243,234,0.35)'
      }}>{badge}</span>

      <p style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.5rem', color: featured ? '#26352A' : '#F5F3EA' }}>{name}</p>
      <p style={{ fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.65, marginBottom: '2rem', color: featured ? '#5B7559' : 'rgba(245,243,234,0.38)' }}>{tagline}</p>

      {featured && originalPrice && (
        <p style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: 'rgba(38,53,42,0.35)', marginBottom: '0.2rem' }}>{originalPrice}</p>
      )}
      <p style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.3rem', color: featured ? '#26352A' : '#F4C67C' }}>
        {!featured && price.startsWith('desde') ? (
          <><em style={{ fontSize: '1rem', fontStyle: 'italic', fontWeight: 400 }}>desde </em>{price.replace('desde ', '')}</>
        ) : price}
      </p>
      {!featured && <p style={{ fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '0.3rem', color: 'rgba(245,243,234,0.35)' }}>consultar disponibilidad</p>}
      <p style={{ fontSize: '0.72rem', marginBottom: featured && priceUrgency ? '0.5rem' : '2rem', color: featured ? 'rgba(38,53,42,0.4)' : 'rgba(245,243,234,0.25)' }}>{priceNote}</p>
      {featured && priceUrgency && (
        <p style={{ fontSize: '0.72rem', color: '#E68C58', fontWeight: 600, marginBottom: '2rem' }}>{priceUrgency}</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem', flexGrow: 1 }}>
        {items.map((item, i) =>
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '0.8rem', color: featured ? '#26352A' : 'rgba(245,243,234,0.5)' }}>
            <span style={{ fontWeight: 700, flexShrink: 0, color: featured ? '#5B7559' : 'rgba(244,198,124,0.4)', marginTop: '0.05rem' }}>→</span>
            {item}
          </li>
        )}
      </ul>

      {!featured ? (
        <a
          href="https://calendly.com/felipe-refugiooutdoor/30min"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{
            display: 'block', width: '100%',
            fontFamily: "'Figtree', sans-serif",
            fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '1rem', textAlign: 'center',
            border: ctaHovered ? '1px solid rgba(245,243,234,0.3)' : '1px solid rgba(245,243,234,0.1)',
            cursor: 'pointer', transition: 'all 0.2s',
            background: 'transparent', textDecoration: 'none',
            color: ctaHovered ? 'rgba(245,243,234,0.85)' : 'rgba(245,243,234,0.35)'
          }}>
          {cta}
        </a>
      ) : (
        <a
          href="https://www.flow.cl/btn.php?token=r51a815e240f5aee28626facdd340f7888aadb18"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{
            display: 'block', width: '100%',
            fontFamily: "'Figtree', sans-serif",
            fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '1rem', textAlign: 'center',
            border: 'none', textDecoration: 'none',
            cursor: 'pointer', transition: 'all 0.2s',
            background: ctaHovered ? '#5B7559' : '#26352A',
            color: '#F5F3EA'
          }}>
          {cta}
        </a>
      )}
    </div>);

}

export default function RootPacks() {
  return (
    <section id="packs" style={{ background: '#181818', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,4rem)' }}>
      <style>{`
        @media (max-width: 768px) {
          #packs { padding: 2.5rem 1.25rem !important; }
          #packs > div:first-of-type { margin-bottom: 1.5rem !important; }
          #packs > div:last-of-type { grid-template-columns: 1fr !important; gap: 1.5px !important; }
        }
      `}</style>
      <div style={{ marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F4C67C', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ width: '20px', height: '1px', background: '#F4C67C', display: 'block' }} />
          Nuestros packs
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#F5F3EA', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '0.8rem' }}>
          El plan correcto para cada etapa.
        </h2>
        <p style={{ fontSize: '0.88rem', fontWeight: 300, color: 'rgba(245,243,234,0.4)', maxWidth: '500px' }}>
          Empieza por donde tu proyecto lo necesita. Cada pack funciona solo o como parte del proceso completo.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', background: 'rgba(245,243,234,0.06)' }}>
        <PackCard pack={packPrincipal} />
        <PackCard pack={packSecundario} />
      </div>

      

      
    </section>);

}