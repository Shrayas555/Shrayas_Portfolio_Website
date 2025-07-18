import React, { useState, useRef } from 'react';

const ENTER_SOUND = 'https://cdn.freesound.org/previews/341/341695_6262466-lq.mp3'; // Short, widely compatible

const WelcomeOverlay = ({ onEnter }) => {
  const [exiting, setExiting] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.load();
      audioRef.current.play().catch(() => {
        // Optionally show a visual cue if sound fails
      });
    }
    setExiting(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 700); // Match fade-out duration
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-all duration-700 ${exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'} bg-[rgba(255,255,255,0.85)] backdrop-blur-lg`}
      style={{
        background: 'linear-gradient(135deg, #f7f9fb 60%, #e0e7ef 100%)',
      }}
      onClick={handleEnter}
      tabIndex={0}
      role="button"
      aria-label="Enter site"
    >
      {/* Animated blobs */}
      <div className="absolute w-[420px] h-[420px] left-[-120px] top-[-80px] rounded-full bg-[#4f8cff] opacity-20 blur-3xl animate-pulse" />
      <div className="absolute w-[340px] h-[340px] right-[-100px] top-[120px] rounded-full bg-[#00e6d8] opacity-20 blur-3xl animate-pulse delay-200" />
      <div className="absolute w-[300px] h-[300px] left-[40vw] bottom-[-120px] rounded-full bg-[#f9d923] opacity-20 blur-3xl animate-pulse delay-500" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#232a36] drop-shadow-lg" style={{letterSpacing: '0.01em'}}>Welcome!</h1>
        <p className="text-xl md:text-2xl font-medium text-[#4f8cff] mb-8 animate-bounce">Press anywhere to enter</p>
      </div>
      <audio ref={audioRef} src={ENTER_SOUND} preload="auto" />
    </div>
  );
};

export default WelcomeOverlay; 