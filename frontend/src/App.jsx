import { useState, useEffect } from 'react';
import DesktopApp from './components/desktop/DesktopApp';
import MobileApp from './components/mobile/MobileApp';
import './styles/main.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    // Initial check
    checkMobile();

    // Listener
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch or flash

  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App;
