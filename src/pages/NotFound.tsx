import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 text-[#FF6060]">
      <h1 className="text-[96px] font-bold">404</h1>
      <p className="text-2xl text-center mb-8">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="underline hover:opacity-80">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}