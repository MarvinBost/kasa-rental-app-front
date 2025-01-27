import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white">
      {/* Logo et Titre */}
      <Link to="/" className="flex items-center group">
        <Home className="w-6 h-6 text-[#FF6060] group-hover:scale-110 transition-transform" />
        <span className="text-[#FF6060] text-xl ml-2">Kasa</span>
      </Link>

      {/* Menu Burger pour Mobile */}
      <button
        className="block sm:hidden text-[#FF6060]"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Desktop */}
      <nav className="hidden sm:block">
        <ul className="flex gap-8">
          <li>
            <Link
              to="/"
              className={`text-[#FF6060] hover:underline transition ${
                location.pathname === '/' ? 'underline' : ''
              }`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-[#FF6060] hover:underline transition ${
                location.pathname === '/about' ? 'underline' : ''
              }`}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navigation Mobile (menu déroulant) */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg sm:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                to="/"
                className={`text-[#FF6060] hover:underline transition ${
                  location.pathname === '/' ? 'underline' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-[#FF6060] hover:underline transition ${
                  location.pathname === '/about' ? 'underline' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
