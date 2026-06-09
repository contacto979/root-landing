import React from 'react';

const stats = [
  { num: '10', label: 'refugios construidos en el sur' },
  { num: '4', label: 'en arriendo activo en Airbnb' },
  { num: '4.9★', label: 'promedio en reseñas Airbnb' },
  { num: 'Superhost', label: 'verificado desde 2023' },
];

const zones = ['Coquimbo', 'Valparaíso', "O'Higgins", 'Maule', 'Ñuble', 'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'];

export default function RootQuien() {
  return (
    <section id="quien" style={{ background: '#181818', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <style>{`
        @media (max-width: 768px) {
          #quien { grid-template-columns: 1fr !important; }
          #quien > div { padding: 2.5rem 1.5rem !important; }
        }
      `}</style>
      {/* LEFT */}
      <div style={{ padding: 'clamp(4rem,8vw,6rem) clamp(2rem,4vw,4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F4C67C', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ width: '20px', height: '1px', background: '#F4C67C', display: 'block' }} />
          Quiénes somos
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, color: '#F5F3EA', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '2rem' }}>
          Diseñamos refugios para disfrutar al aire libre y generar ingresos cuando no estás ahí.
        </h2>
        <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,243,234,0.6)', marginBottom: '1.4rem' }}>
          Nacemos del deseo de acercar el diseño arquitectónico de calidad a quienes sueñan con construir su propio lugar al aire libre — ya sea como escape personal o como inversión.
        </p>
        <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,243,234,0.6)', marginBottom: '1.4rem' }}>
          Nuestro propósito es facilitar la construcción de refugios que conecten a las personas con la naturaleza, ofreciendo un catálogo de diseños y herramientas claves que hacen posible transformar una idea en un hogar real y alcanzable.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', marginTop: '2.5rem', background: 'rgba(245,243,234,0.06)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: '#181818', padding: '1.4rem 1.2rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#F4C67C', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.3rem' }}>{s.num}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 400, color: 'rgba(245,243,234,0.4)', lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{
        background: '#26352A',
        padding: 'clamp(4rem,8vw,6rem) clamp(2rem,4vw,4rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>


        <div style={{ position: 'relative', zIndex: 1, background: 'rgba(245,243,234,0.07)', padding: '2rem', marginBottom: '1.5rem' }}>
          {/* Portrait circle */}
          <div style={{
            width: '120px', height: '120px', borderRadius: '50%',
            overflow: 'hidden', marginBottom: '1.2rem',
            border: '2px solid rgba(244,198,124,0.8)',
            background: 'rgba(91,117,89,0.3)',
          }}>
            <img
              src="https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/3c75ea4e2_02240015.jpg"
              alt="Felipe Valdivia"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#F5F3EA', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>Felipe Valdivia</div>
          <div style={{ fontSize: '0.8rem', fontWeight: 400, color: '#F4C67C', letterSpacing: '0.06em', marginBottom: '1.5rem' }}>Arquitecto · Fundador ROOT</div>
          <p style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,243,234,0.65)' }}>
            Magíster en Arquitectura PUC, amante de la vida al aire libre, la escalada de grandes paredes y el diseño sustentable. Me mueve la búsqueda permanente de nuevos materiales, técnicas constructivas y tecnologías para crear espacios y experiencias singulares.
            <br /><br />
            Superhost verificado en Airbnb desde 2023. Vivo y trabajo en Puerto Varas, Chile.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,243,234,0.3)', marginBottom: '0.8rem' }}>
          Zonas donde trabajamos
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {zones.map(z => (
            <span key={z} style={{ fontSize: '0.75rem', fontWeight: 500, padding: '0.35rem 0.9rem', border: '1px solid rgba(245,243,234,0.15)', color: 'rgba(245,243,234,0.55)' }}>
              {z}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}