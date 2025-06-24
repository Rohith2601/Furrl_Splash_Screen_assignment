
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLogo(true), 200),
      setTimeout(() => setShowLetters(true), 600),
      setTimeout(() => setShowUnderline(true), 1000),
      setTimeout(() => setPulseEffect(true), 1200),
      setTimeout(() => onComplete(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex flex-col items-center justify-center overflow-hidden">
      {/* Black Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Logo Image - Top Right */}
      <div className={`absolute top-4 right-4 z-20 transition-all duration-1000 ease-out ${
        showLogo ? 'opacity-100 transform translate-x-0 scale-100' : 'opacity-0 transform translate-x-8 scale-75'
      }`}>
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
          <img
            src="/lovable-uploads/90866cca-fd9a-4b6f-a86f-139f70fead7f.png"
            alt="Furrl Logo"
            className="w-8 h-8 object-contain"
          />
        </div>
        {/* Furrl text below logo */}
        <div className={`text-white text-sm font-light tracking-wider mt-1 text-center transition-all duration-700 delay-300 ${
          showLogo ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <span className="text-yellow-300">F</span>urrl
        </div>
      </div>
      
      {/* Main Furrl Text Animation - Center */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`transition-all duration-1000 ease-out ${
          pulseEffect ? 'animate-pulse' : ''
        }`}>
          <h1 className="text-white text-5xl font-light tracking-wider relative">
            {"Furrl".split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out ${
                  showLetters 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-8 scale-75'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  color: index === 0 ? '#fde047' : 'white'
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Underline Animation */}
          <div className={`h-1 bg-gradient-to-r from-yellow-300 to-purple-300 mt-2 transition-all duration-800 ease-out ${
            showUnderline ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
