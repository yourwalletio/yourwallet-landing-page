'use client';

import React, { useState, useEffect } from 'react';
import IntroScreen from './intro';

interface IntroWrapperProps {
  children: React.ReactNode;
}

const IntroWrapper: React.FC<IntroWrapperProps> = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true); // Başlangıçta true, kontrol edilene kadar
  const [isReady, setIsReady] = useState(false); // Intro kontrolü tamamlandı mı?

  useEffect(() => {
    // SessionStorage'dan kontrol et
    const introShown = sessionStorage.getItem('introShown');
    console.log('IntroWrapper - introShown:', introShown);
    const shouldShowIntro = !introShown;
    setShowIntro(shouldShowIntro);
    setIsReady(true); // Kontrol tamamlandı
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Kontrol tamamlanana kadar veya intro gösterilirken children'ı gizle
  const shouldHideChildren = !isReady || showIntro;

  return (
    <>
      {/* Intro gösterilecekse ve kontrol tamamlandıysa intro'yu göster */}
      {isReady && showIntro && (
        <IntroScreen onComplete={handleIntroComplete} />
      )}
      
      {/* Children'ı her zaman render et (SEO için) ama intro gösterilirken veya kontrol yapılırken gizle */}
      <div 
        style={{
          visibility: shouldHideChildren ? 'hidden' : 'visible',
          opacity: shouldHideChildren ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: shouldHideChildren ? 'none' : 'auto',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default IntroWrapper;
