
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
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 overflow-hidden">
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
        showLogo ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
      }`}>
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
          <img
            src="/lovable-uploads/90866cca-fd9a-4b6f-a86f-139f70fead7f.png"
            alt="Furrl Logo"
            className="w-8 h-8 object-contain"
          />
        </div>
        {/* Furrl text below logo */}
        <div className="text-white text-sm font-light tracking-wider mt-1 text-center">
          <span className="text-yellow-300">F</span>urrl
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        
        {/* Welcome Text */}
        <div className={`transition-all duration-1000 ease-out mb-1 ${
          showWelcome ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h1 className="text-white text-3xl font-bold tracking-wide">Welcome</h1>
        </div>

        {/* Subtext */}
        <div className={`transition-all duration-1000 ease-out mb-1 ${
          showSubtext ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
        }`}>
          <p className="text-purple-100 text-lg font-light italic font-serif">to a world of</p>
        </div>

        {/* Fashion Text */}
        <div className={`transition-all duration-1000 ease-out mb-4 ${
          showFashion ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="text-white text-2xl font-bold tracking-wide">Fashion</h2>
        </div>

        {/* Fashion Model Image - Reduced size to fit better */}
        <div className={`transition-all duration-1200 ease-out ${
          showImage ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
        }`}>
          <div className="relative w-32 h-40 mb-8">
            <img
              src="/lovable-uploads/d00054d3-b496-4bf0-bfb7-e63951b7d873.png"
              alt="Fashion Model"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
