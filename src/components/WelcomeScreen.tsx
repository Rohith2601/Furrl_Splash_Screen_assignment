
import { useEffect, useState } from 'react';

interface WelcomeScreenProps {
  showLogin: boolean;
  onShowLogin: () => void;
}

const WelcomeScreen = ({ showLogin, onShowLogin }: WelcomeScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showFashion, setShowFashion] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLogo(true), 100),
      setTimeout(() => setShowWelcome(true), 400),
      setTimeout(() => setShowSubtext(true), 700),
      setTimeout(() => setShowFashion(true), 1000),
      setTimeout(() => setShowImage(true), 1300),
      setTimeout(() => onShowLogin(), 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onShowLogin]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 gap-px h-full w-full">
          {Array.from({ length: 800 }).map((_, i) => (
            <div key={i} className="bg-purple-400 rounded-sm"></div>
          ))}
        </div>
      </div>

      {/* Furrl Logo - Top Right */}
      <div className={`absolute top-6 right-6 z-20 transition-all duration-1000 ease-out ${
        showLogo ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
      }`}>
        <div className="text-white text-2xl font-light tracking-wider">
          <span className="text-purple-400">F</span>urrl
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        
        {/* Welcome Text */}
        <div className={`transition-all duration-1000 ease-out mb-2 ${
          showWelcome ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h1 className="text-white text-5xl font-bold tracking-wide">Welcome</h1>
        </div>

        {/* Subtext */}
        <div className={`transition-all duration-1000 ease-out mb-2 ${
          showSubtext ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
        }`}>
          <p className="text-purple-300 text-xl font-light italic font-serif">to a world of</p>
        </div>

        {/* Fashion Text */}
        <div className={`transition-all duration-1000 ease-out mb-8 ${
          showFashion ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="text-white text-4xl font-bold tracking-wide">Fashion</h2>
        </div>

        {/* Fashion Model Image */}
        <div className={`transition-all duration-1200 ease-out ${
          showImage ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
        }`}>
          <div className="relative w-64 h-80 mb-24">
            <img
              src="/lovable-uploads/d00054d3-b496-4bf0-bfb7-e63951b7d873.png"
              alt="Fashion Model"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
