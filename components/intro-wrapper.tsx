'use client';

import React, { useState, useEffect } from 'react';
import IntroScreen from './intro';

interface IntroWrapperProps {
  children: React.ReactNode;
}

const IntroWrapper: React.FC<IntroWrapperProps> = ({ children }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // SessionStorage'dan kontrol et
    const introShown = sessionStorage.getItem('introShown');
    console.log('IntroWrapper - introShown:', introShown);
    setShowIntro(!introShown);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Server-side rendering sırasında children'ı göster
  if (!isClient) {
    return <>{children}</>;
  }

  // Client-side rendering
  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return <>{children}</>;
};

export default IntroWrapper;
