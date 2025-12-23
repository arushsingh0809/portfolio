import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

const Play = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameLoaded, setIsGameLoaded] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const preventArrowScroll = (e: KeyboardEvent) => {
      // If Escape is pressed, deactivate the game
      if (e.key === 'Escape') {
        setIsGameActive(false);
        return;
      }

      // Only prevent scrolling when game is active
      if (isGameActive && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
    };

    // Prevent page scrolling by locking the body when game is active
    if (isGameActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', preventArrowScroll);
    
    return () => {
      window.removeEventListener('keydown', preventArrowScroll);
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isGameActive]);

  const handleGameClick = () => {
    setIsGameActive(true);
    setIsGameLoaded(true);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-sans font-semibold mb-8">HexGL (BKcore)</h1>
            <p className="text-muted-foreground font-mono text-sm mb-8">
              A futuristic racing game. Use arrow keys to control your ship. {isGameActive && <span className="text-primary">Click Escape to exit game controls.</span>}
            </p>
            
            <div 
              className="relative w-full cursor-pointer bg-muted" 
              style={{ paddingBottom: '56.25%' }}
              onClick={handleGameClick}
            >
              {isGameLoaded ? (
                <iframe
                  src="/HexGL/index.html"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-sm"
                  title="HexGL Game"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-muted rounded-sm">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-foreground text-lg font-semibold">Click to Load Game</p>
                    <p className="text-muted-foreground text-sm">HexGL will load when you're ready</p>
                  </div>
                </div>
              )}
              {!isGameActive && isGameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-sm">
                  <p className="text-white text-lg font-semibold">Click to Play</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Play;
