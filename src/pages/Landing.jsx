import React from 'react';
import RootNav from '@/components/root/RootNav';
import RootAnnouncementBar from '@/components/root/RootAnnouncementBar';
import RootHero from '@/components/root/RootHero';
import RootQuien from '@/components/root/RootQuien';
import RootProceso from '@/components/root/RootProceso';
import RootTestimonios from '@/components/root/RootTestimonios';
import RootModelos from '@/components/root/RootModelos';
import RootPacks from '@/components/root/RootPacks';
import RootFaq from '@/components/root/RootFaq';
import RootCtaFinal from '@/components/root/RootCtaFinal';
import RootFooter from '@/components/root/RootFooter';

export default function Landing() {
  return (
    <div style={{ fontFamily: "'Figtree', sans-serif", background: '#F5F3EA', color: '#181818', overflowX: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          section {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          section h2 { margin-bottom: 1.2rem !important; }
          section > div { margin-bottom: 0 !important; }
        }
      `}</style>
      <RootAnnouncementBar />
      <RootNav />
      <RootHero />
      <RootQuien />
      <RootProceso />
      <RootModelos />
      <RootPacks />
      <RootTestimonios />
      <RootFaq />
      <RootCtaFinal />
      <RootFooter />
    </div>
  );
}