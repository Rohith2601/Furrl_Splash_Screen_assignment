
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
    <div className="min-h-screen bg-black relative overflow-hidden">
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
  );
};

export default Index;
