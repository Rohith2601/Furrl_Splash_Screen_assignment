
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showLetters, setShowLetters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLetters(true);
    }, 300);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 gap-px h-full w-full">
          {Array.from({ length: 800 }).map((_, i) => (
            <div key={i} className="bg-purple-400 rounded-sm"></div>
          ))}
        </div>
      </div>
      
      {/* Furrl Text Animation */}
      <div className="relative z-10">
        <h1 className="text-white text-6xl font-light tracking-wider">
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
                color: index === 0 ? '#a855f7' : 'white'
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
