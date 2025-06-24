
import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import WelcomeScreen from '@/components/WelcomeScreen';
import LoginPanel from '@/components/LoginPanel';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'welcome'>('splash');
  const [showLogin, setShowLogin] = useState(false);

  const handleSplashComplete = () => {
    setCurrentScreen('welcome');
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Frame Container - Reduced height to fit without scrolling */}
      <div className="relative w-full max-w-sm h-[600px] bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Mobile Screen Content */}
        <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 overflow-hidden">
          {currentScreen === 'splash' && (
            <SplashScreen onComplete={handleSplashComplete} />
          )}
          
          {currentScreen === 'welcome' && (
            <WelcomeScreen 
              showLogin={showLogin} 
              onShowLogin={handleShowLogin}
            />
          )}
          
          {currentScreen === 'welcome' && (
            <LoginPanel isVisible={showLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
