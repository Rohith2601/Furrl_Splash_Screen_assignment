
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
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center overflow-hidden">
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
      
      {/* Furrl Text Animation */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl font-light tracking-wider">
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
      </div>
    </div>
  );
};

export default SplashScreen;
