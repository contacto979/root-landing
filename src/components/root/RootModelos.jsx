import React, { useState, useEffect } from 'react';
import ModelosImageEditor from './ModelosImageEditor';
import { base44 } from '@/api/base44Client';

const defaultModelos = [
{ n: 'Modelo 01', name: 'A-Frame', m2: '16 m²', desc: 'Ideal como escape personal o arriendo compacto. Diseño icónico que destaca en cualquier entorno natural.', img: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/dc5940995_AFRAME-1.jpg', imgHover: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/907ecca56_AFRAME2.jpg', pdf: 'https://media.base44.com/files/public/6a0f51f4f53e265992439f5f/f74fba066_CatalogoROOT_2026.pdf' },
{ n: 'Modelo 02', name: 'Atalaya', m2: '36 m²', desc: 'Doble nivel con ventanales de piso a techo y deck exterior. Pensado para maximizar la vista y el rating en Airbnb.', img: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/bd206f0eb_MIRADOR1.jpg', imgHover: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/efb592d0f_MIRADOR2.jpg', pdf: 'https://media.base44.com/files/public/6a0f51f4f53e265992439f5f/f74fba066_CatalogoROOT_2026.pdf' },
{ n: 'Modelo 03', name: 'Montaña', m2: '45 m²', desc: 'Mayor superficie y versatilidad. Diseñado para temporada extendida y huéspedes que buscan más comodidad.', img: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/e5660d2e8_MONTANA1.jpg', imgHover: 'https://media.base44.com/images/public/6a0f51f4f53e265992439f5f/04f93ce80_MONTANA2.jpg', pdf: 'https://media.base44.com/files/public/6a0f51f4f53e265992439f5f/f74fba066_CatalogoROOT_2026.pdf' }];


function ModeloCard({ n, name, m2, desc, img, imgHover, pdf }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(38,53,42,0.03)' : '#F5F3EA',
        position: 'relative', cursor: 'pointer',
        transition: 'background 0.3s', display: 'flex', flexDirection: 'column'
      }}>

      {/* Vertical image */}
      <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', position: 'relative' }}>
        <img
          src={img}
          alt={name}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center',
            opacity: imgHover && hovered ? 0 : 1,
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.5s ease, opacity 0.3s ease'
          }} />
        
        <img src={imgHover}
        alt={`${name} hover`}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.5s ease, opacity 0.3s ease'
        }} />
      </div>

      {/* Text content */}
      <div style={{ padding: '2rem 2rem 3rem' }}>
        <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E68C58', marginBottom: '0.6rem' }}>{n}</p>
        <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#26352A', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{name}</p>
        <p style={{ fontSize: '0.82rem', fontWeight: 400, color: '#5B7559', marginBottom: '1.2rem' }}>{m2}</p>
        <p style={{ fontSize: '0.8rem', fontWeight: 300, color: 'rgba(38,53,42,0.6)', lineHeight: 1.6 }}>{desc}</p>
      </div>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute', bottom: '2rem', right: '2rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          textDecoration: 'none'
        }}>
        
        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#E68C58' }}>Ver dossier</span>
        <div style={{
          width: '30px', height: '30px',
          border: hovered ? 'none' : '1px solid rgba(38,53,42,0.15)',
          background: hovered ? '#26352A' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s', flexShrink: 0
        }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={hovered ? '#F4C67C' : 'rgba(38,53,42,0.4)'} strokeWidth="2" style={{ transition: 'stroke 0.2s' }}>
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </a>
    </div>);

}

export default function RootModelos() {
  const [modelos, setModelos] = useState(defaultModelos);
  const [editorOpen, setEditorOpen] = useState(false);

  // Load saved images from DB on mount
  useEffect(() => {
    base44.entities.ModeloImagen.list().then((records) => {
      if (!records.length) return;
      setModelos((prev) => prev.map((m) => {
        const record = records.find((r) => r.modelo_key === m.name);
        if (!record) return m;
        return { ...m, img: record.img || m.img, imgHover: record.img_hover || null };
      }));
    });
  }, []);

  const handleChange = async (updated) => {
    setModelos(updated);
  };

  const handleSave = async (updated) => {
    setModelos(updated);
    const existing = await base44.entities.ModeloImagen.list();
    for (const m of updated) {
      const record = existing.find((r) => r.modelo_key === m.name);
      const data = { modelo_key: m.name, img: m.img || '', img_hover: m.imgHover || '' };
      if (record) {
        await base44.entities.ModeloImagen.update(record.id, data);
      } else {
        await base44.entities.ModeloImagen.create(data);
      }
    }
  };

  return (
    <section id="modelos" style={{ background: '#F5F3EA', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,4rem)' }}>
      <style>{`
        @media (max-width: 768px) {
          #modelos { padding: 2.5rem 1.25rem !important; }
          #modelos .modelos-header { margin-bottom: 1.5rem !important; }
          #modelos .modelos-grid { grid-template-columns: 1fr !important; }
          #modelos .modelos-grid > div > div:first-child { aspect-ratio: 4/3 !important; }
        }
      `}</style>
      <div className="modelos-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5B7559', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ width: '20px', height: '1px', background: '#5B7559', display: 'block' }} />
            Catálogo ROOT
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#26352A', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Refugios singulares.<br />Un solo estándar.
          </h2>
        </div>

        {/* Edit images button */}
        


















        
      </div>

      <div className="modelos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5px', background: 'rgba(38,53,42,0.08)' }}>
        {modelos.map((m) => <ModeloCard key={m.name} {...m} />)}
      </div>

      {editorOpen &&
      <ModelosImageEditor
        modelos={modelos}
        onChange={handleChange}
        onSave={handleSave}
        onClose={() => setEditorOpen(false)} />

      }
    </section>);

}