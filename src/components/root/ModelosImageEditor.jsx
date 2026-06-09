import React, { useState, useRef } from 'react';
import { base44 } from '@/api/base44Client';

export default function ModelosImageEditor({ modelos, onChange, onSave, onClose }) {
  const [uploading, setUploading] = useState({});
  const [saving, setSaving] = useState(false);

  const handleUpload = async (index, field, file) => {
    const key = `${index}-${field}`;
    setUploading(prev => ({ ...prev, [key]: true }));
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    const updated = modelos.map((m, i) => i === index ? { ...m, [field]: file_url } : m);
    onChange(updated);
    setUploading(prev => ({ ...prev, [key]: false }));
  };

  const handleClear = (index, field) => {
    const updated = modelos.map((m, i) => i === index ? { ...m, [field]: null } : m);
    onChange(updated);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(20,30,25,0.7)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: '#F5F3EA', maxWidth: '720px', width: '100%',
        maxHeight: '90vh', overflowY: 'auto',
        padding: '2.5rem',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5B7559', marginBottom: '0.4rem' }}>
              Catálogo ROOT
            </p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#26352A', letterSpacing: '-0.02em' }}>
              Editar imágenes de modelos
            </h2>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: '1px solid rgba(38,53,42,0.2)',
            cursor: 'pointer', width: '36px', height: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#26352A', fontSize: '1.2rem', flexShrink: 0,
          }}>×</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {modelos.map((m, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(38,53,42,0.1)', paddingTop: '2rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E68C58', marginBottom: '0.3rem' }}>{m.n}</p>
              <p style={{ fontSize: '1rem', fontWeight: 900, color: '#26352A', marginBottom: '1.2rem' }}>{m.name}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {/* Primary image */}
                <ImageSlot
                  label="Imagen principal"
                  url={m.img}
                  loading={uploading[`${i}-img`]}
                  onUpload={(file) => handleUpload(i, 'img', file)}
                  onClear={() => handleClear(i, 'img')}
                />
                {/* Hover image */}
                <ImageSlot
                  label="Imagen al hover"
                  url={m.imgHover}
                  loading={uploading[`${i}-imgHover`]}
                  onUpload={(file) => handleUpload(i, 'imgHover', file)}
                  onClear={() => handleClear(i, 'imgHover')}
                  optional
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={async () => { setSaving(true); await onSave(modelos); setSaving(false); onClose(); }}
          disabled={saving}
          style={{
            marginTop: '2.5rem', width: '100%',
            background: saving ? '#5B7559' : '#26352A', color: '#F5F3EA',
            border: 'none', padding: '0.9rem',
            fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', cursor: saving ? 'wait' : 'pointer',
            fontFamily: "'Figtree', sans-serif",
            transition: 'background 0.2s',
          }}
        >
          {saving ? 'Guardando…' : 'Guardar y cerrar'}
        </button>
      </div>
    </div>
  );
}

function ImageSlot({ label, url, loading, onUpload, onClear, optional }) {
  const inputRef = React.useRef();

  return (
    <div>
      <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5B7559', marginBottom: '0.6rem' }}>
        {label}{optional && <span style={{ color: 'rgba(38,53,42,0.35)', fontWeight: 400, marginLeft: '0.4rem' }}>(opcional)</span>}
      </p>

      <div
        onClick={() => !loading && inputRef.current?.click()}
        style={{
          aspectRatio: '3/4', width: '100%',
          border: '1.5px dashed rgba(38,53,42,0.2)',
          background: url ? 'transparent' : 'rgba(38,53,42,0.03)',
          position: 'relative', overflow: 'hidden',
          cursor: loading ? 'wait' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {url ? (
          <img src={url} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ textAlign: 'center', color: 'rgba(38,53,42,0.35)' }}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontSize: '0.7rem' }}>{loading ? 'Subiendo…' : 'Clic para subir'}</span>
          </div>
        )}

        {/* Loading overlay */}
        {loading && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(245,243,234,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '24px', height: '24px', border: '2px solid #26352A', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
          </div>
        )}

        {/* Change overlay on hover when image exists */}
        {url && !loading && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,40,30,0.55)', opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0}>
            <span style={{ color: '#F5F3EA', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em' }}>CAMBIAR</span>
          </div>
        )}
      </div>

      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => e.target.files[0] && onUpload(e.target.files[0])} />

      {url && (
        <button onClick={onClear} style={{
          marginTop: '0.4rem', background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.65rem', color: 'rgba(38,53,42,0.4)', padding: 0,
          textDecoration: 'underline', textUnderlineOffset: '2px',
        }}>
          Quitar imagen
        </button>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}