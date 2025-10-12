import React, { useState, useEffect, useRef } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('IntroScreen - Component mounted');
    // SessionStorage'a kaydet
    sessionStorage.setItem('introShown', 'true');
    
    const video = videoRef.current;
    if (video) {
      console.log('IntroScreen - Starting video');
      video.play().catch(err => {
        console.log('Video autoplay failed:', err);
        // If autoplay fails, skip intro after 2 seconds
        setTimeout(() => handleComplete(), 2000);
      });
    }
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 500); // Wait for fade out animation
  };

  const handleVideoEnd = () => {
    handleComplete();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-[9999] animate-in fade-in duration-300 ${!isVisible ? 'animate-out fade-out duration-500' : ''}`}>
      <div className="relative flex items-center justify-center max-w-[90%] max-h-[90vh]">
        <video
          ref={videoRef}
          className="max-w-[600px] md:max-w-[600px] sm:max-w-[400px] xs:max-w-[300px] w-full h-auto object-contain animate-in zoom-in duration-600"
          onEnded={handleVideoEnd}
          playsInline
          muted
          preload="auto"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default IntroScreen;

