import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-20 py-8">
      <Link to="/" className="flex items-center">
        <Home className="w-8 h-8 text-[#FF6060]" />
        <span className="text-[#FF6060] text-3xl ml-2">Kasa</span>
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="text-[#FF6060] hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[#FF6060] hover:underline">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}