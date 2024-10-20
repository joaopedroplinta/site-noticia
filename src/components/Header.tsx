import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-bold">Site de Notícias</h1>
        <div>
          <Link className="px-4" to="/">Início</Link>
          <Link className="px-4" to="/article">Artigo</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
