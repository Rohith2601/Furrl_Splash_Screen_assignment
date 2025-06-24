
import { useState } from 'react';

interface LoginPanelProps {
  isVisible: boolean;
}

const LoginPanel = ({ isVisible }: LoginPanelProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className={`absolute bottom-0 left-0 right-0 z-30 transition-all duration-800 ease-out ${
      isVisible ? 'transform translate-y-0' : 'transform translate-y-full'
    }`}>
      <div className="bg-white rounded-t-3xl px-4 py-4 mx-2 shadow-2xl">
        <div className="grid gap-3">
          {/* Header Text */}
          <div className="text-center">
            <h3 className="text-gray-800 text-sm font-medium mb-1">
              Personalize your experience
            </h3>
            <p className="text-purple-600 text-xs font-medium flex items-center justify-center gap-1">
              Let's Go
              <span className="text-purple-400">→</span>
            </p>
          </div>

          {/* Phone Input */}
          <div className="space-y-3">
            <div className="relative">
              <input
                type="tel"
                placeholder="+91 Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 text-sm"
              />
            </div>

            {/* Continue Button */}
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
              Continue
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center leading-relaxed px-1">
            By continuing, I agree to Furrl's T&C and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
