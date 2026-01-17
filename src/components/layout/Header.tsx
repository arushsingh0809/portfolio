import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    if (location.pathname === "/play") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="logo-badge font-mono inline-block text-sm sm:text-base" onClick={handleHomeClick}>
            Arush Singh
          </Link>
          
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-1">
              <Link 
                to="/" 
                className={`nav-link text-[10px] sm:text-xs ${isActive("/") && location.pathname === "/" ? "nav-link-active" : ""}`}
                onClick={handleHomeClick}
              >
                WORK
              </Link>
              <a 
                href="https://www.dropbox.com/scl/fi/4n9hv8eycsgoo3ukoa55f/Resume_Arush_2026.pdf?rlkey=5m41wvxz002o1ti0mzijjvv9r&st=2ozpcqh4&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-[10px] sm:text-xs"
              >
                RESUME
              </a>
            </div>
            <div className="h-6 sm:h-8 w-px bg-border" />
            <div className="flex flex-col gap-1">
              <Link 
                to="/about" 
                className={`nav-link text-[10px] sm:text-xs ${isActive("/about") ? "nav-link-active" : ""}`}
              >
                ABOUT
              </Link>
              <Link 
                to="/play" 
                className={`nav-link text-[10px] sm:text-xs ${isActive("/play") ? "nav-link-active" : ""}`}
                onClick={handlePlayClick}
              >
                PLAY
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
