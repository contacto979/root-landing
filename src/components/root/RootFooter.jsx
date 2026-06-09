import React from 'react';

export default function RootFooter() {
  return (
    <footer style={{
      background: '#181818', padding: '2.5rem clamp(1.5rem,4vw,4rem)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#F5F3EA', fontFamily: "'Figtree', sans-serif" }}>ROOT · Refugio Outdoor</span>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {['@valdiviarq', 'Contacto', 'Términos'].map(link => (
          <a key={link} href="#" style={{ fontSize: '0.72rem', color: 'rgba(245,243,234,0.3)', textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'Figtree', sans-serif" }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,243,234,0.6)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,243,234,0.3)'}
          >{link}</a>
        ))}
      </div>
      <span style={{ fontSize: '0.68rem', color: 'rgba(245,243,234,0.2)', fontFamily: "'Figtree', sans-serif" }}>© 2026 Root. Todos los derechos reservados.</span>
    </footer>
  );
}