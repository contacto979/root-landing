import React from 'react';

export default function RootAnnouncementBar() {
  return (
    <>
      <style>{`
        .ann-desktop { display: flex; }
        .ann-mobile { display: none; }
        @media (max-width: 768px) {
          .ann-desktop { display: none !important; }
          .ann-mobile { display: flex !important; }
        }
      `}</style>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        background: '#26352A',
        height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Figtree', sans-serif",
        color: '#F5F3EA',
        letterSpacing: '0.01em',
        padding: '0 1rem',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>
        {/* Desktop */}
        <span className="ann-desktop" style={{ fontSize: '0.78rem', fontWeight: 600, alignItems: 'center' }}>
          <span>🌿 Precio de lanzamiento — 50% off · Primeras 20 unidades ·&nbsp;</span>
          <span style={{ textDecoration: 'line-through', color: 'rgba(245,243,234,0.4)', marginRight: '0.3rem' }}>$149.000</span>
          <span style={{ color: '#F4C67C', fontWeight: 700 }}>→ $74.500</span>
        </span>
        {/* Mobile */}
        <span className="ann-mobile" style={{ fontSize: '0.72rem', fontWeight: 600, alignItems: 'center', gap: '0.3rem' }}>
          <span>🌿 50% off · Primeras 20 unidades ·&nbsp;</span>
          <span style={{ color: '#F4C67C', fontWeight: 700 }}>$74.500</span>
        </span>
      </div>
    </>
  );
}