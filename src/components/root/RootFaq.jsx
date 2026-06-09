import React, { useState } from 'react';

const faqs = [
  {
    q: '¿Necesito tener terreno para comprar el pack?',
    a: 'No es obligatorio. El pack es útil tanto si ya tienes un terreno como si estás evaluando opciones. La videollamada es el espacio ideal para resolver esa duda con criterio.',
  },
  {
    q: '¿Cuánto demora en llegar el pack después de comprar?',
    a: 'El acceso es inmediato. En cuanto confirmas el pago recibes todo por email — las planillas, el catálogo de modelos y el link para agendar tu videollamada.',
  },
  {
    q: '¿Cuándo y cómo se coordina la videollamada?',
    a: 'Luego de confirmar tu compra recibes un link para agendar tu sesión de 60 minutos. La realizamos por Google Meet en el horario que mejor te acomode.',
  },
  {
    q: '¿Cuál es la diferencia entre el Pack Planificación y el Pack Diseño?',
    a: 'El Pack Planificación te ayuda a evaluar si tu proyecto tiene sentido antes de comprometer presupuesto. Con el Pack Diseño personalizas tu refugio definiendo desde la ubicación en el terreno hasta los materiales y terminaciones — visualizas cómo quedará tu proyecto terminado y defines la hoja de ruta para construirlo.',
  },
  {
    q: '¿Qué pasa si el pack no me sirve?',
    a: 'Si después de la videollamada y revisar los materiales sientes que el pack no respondió lo que necesitabas, escríbenos dentro de los primeros 7 días y lo conversamos.',
  },
  {
    q: '¿Puedo avanzar al Pack Diseño o Construcción después?',
    a: 'Sí. Cada pack funciona de forma independiente. Si decides continuar, el proceso fluye desde donde quedaste sin repetir trabajo ni etapas. Además, el valor del Pack Planificación queda abonado si luego decides adquirir un pack más avanzado.',
  },
  {
    q: '¿En qué zonas trabajan?',
    a: 'Trabajamos en todo el centro y sur de Chile, desde la Región de Coquimbo hasta Magallanes.',
  },
];

export default function RootFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" style={{ background: '#F5F3EA', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,4rem)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5B7559', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ width: '20px', height: '1px', background: '#5B7559', display: 'block' }} />
          Preguntas frecuentes
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#26352A', letterSpacing: '-0.03em', marginBottom: '3rem' }}>
          Resolvemos tus dudas.
        </h2>

        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(38,53,42,0.12)' }}>
            <button
              onClick={() => toggle(i)}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.3rem 0', cursor: 'pointer', gap: '1rem', width: '100%',
                background: 'none', border: 'none', fontFamily: "'Figtree', sans-serif",
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#26352A' }}>{faq.q}</span>
              <svg
                viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#5B7559" strokeWidth="2"
                style={{ flexShrink: 0, transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'none' }}
              >
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
            <div style={{
              fontSize: '0.85rem', fontWeight: 300, color: '#5B7559', lineHeight: 1.8,
              maxHeight: openIndex === i ? '300px' : '0', overflow: 'hidden',
              transition: 'max-height 0.35s ease, padding 0.3s',
              paddingBottom: openIndex === i ? '1.3rem' : '0',
            }}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}