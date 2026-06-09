import React, { useState } from 'react';

const steps = [
{
  n: '01', title: 'Planificas',
  tagLabel: '→ Ver Pack Planificación', tagHref: '#packs', tagExternal: false,
  desc: 'Evalúas la viabilidad de tu proyecto con herramientas reales: costos de construcción, ROI y modelos prediseñados. Sabes si tiene sentido antes de gastar en diseño o construcción.',
  icon: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/401e21bbd_Root_Iconos-52.png',
},
{
  n: '02', title: 'Diseñas',
  tagLabel: '→ Ver Pack Diseño', tagHref: '#packs', tagExternal: false,
  desc: 'Personalizas tu refugio definiendo desde la ubicación en el terreno hasta los materiales y terminaciones. Visualizas cómo quedará tu proyecto terminado y defines la hoja de ruta.',
  icon: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/421714234_Root_Iconos-53.png',
},
{
  n: '03', title: 'Construyes',
  tagLabel: '→ Agenda una llamada de 30 min', tagHref: 'https://calendly.com/felipe-refugiooutdoor/30min', tagExternal: true,
  desc: 'Ejecutas la obra con constructores locales o nuestra metodología PREFAB, con seguimiento de arquitecto durante todo el proceso.',
  icon: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/2f40bd7dc_Root_Iconos-50.png',
}];


export default function RootProceso() {
  return (
    <section style={{ background: '#F5F3EA', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,4rem)' }}>
      <style>{`
        @media (max-width: 768px) {
          .proceso-header { margin-bottom: 2rem !important; }
          .proceso-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="proceso-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5B7559', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ width: '20px', height: '1px', background: '#5B7559', display: 'block' }} />
            Cómo funciona
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#26352A', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Disfruta y rentabiliza<br />con tu refugio, paso a paso.
          </h2>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#5B7559', maxWidth: '200px', textAlign: 'right', lineHeight: 1.6 }} className="hidden">
          Cada etapa se contrata de forma independiente. Empieza donde tiene sentido para ti.
        </p>
      </div>

      <div className="proceso-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5px', background: 'rgba(38,53,42,0.08)' }}>
        {steps.map((s) =>
        <StepCard key={s.n} {...s} />
        )}
      </div>
    </section>);

}

function StepCard({ n, title, desc, tagLabel, tagHref, tagExternal, icon }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(38,53,42,0.02)' : '#F5F3EA',
        padding: '2.5rem 2rem',
        borderTop: hovered ? '2px solid #F4C67C' : '2px solid transparent',
        transition: 'border-color 0.3s, background 0.3s',
        display: 'flex', flexDirection: 'column',
      }}>
      
      {/* Header: número grande + ícono a la derecha */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.8rem' }}>
        <span style={{ fontSize: '4.5rem', fontWeight: 900, color: 'rgba(38,53,42,0.08)', lineHeight: 1, letterSpacing: '-0.05em' }}>{n}</span>
        <img src={icon} alt={title} style={{ width: '160px', height: '160px', objectFit: 'contain', opacity: 0.85, marginTop: '0.3rem' }} />
      </div>
      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#26352A', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{title}</div>
      <p style={{ fontSize: '0.82rem', fontWeight: 300, color: '#5B7559', lineHeight: 1.7 }}>{desc}</p>
      <a
        href={tagHref}
        target={tagExternal ? '_blank' : '_self'}
        rel={tagExternal ? 'noopener noreferrer' : undefined}
        onClick={!tagExternal ? (e) => { e.preventDefault(); document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' }); } : undefined}
        style={{ display: 'block', marginTop: 'auto', paddingTop: '1.2rem', fontSize: '0.72rem', fontWeight: 700, color: '#E68C58', textDecoration: 'none' }}
      >{tagLabel}</a>
    </div>);

}