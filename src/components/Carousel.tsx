import React, { useState } from 'react';
import imagem1 from '../assets/img1.jpg';
import imagem2 from '../assets/img2.jpg';
import imagem3 from '../assets/img3.jpg';

const imagens = [imagem1, imagem2, imagem3];

const Carousel: React.FC = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [animaClass, setAnimaClass] = useState("opacity-100");

  const proximaImagem = () => {
    setAnimaClass("opacity-0");
    setTimeout(() => {
      setIndiceAtual((prevIndex) => (prevIndex + 1) % imagens.length);
      setAnimaClass("opacity-100");
    }, 500);
  };

  return (
    <div className="relative">
        <img
            src={imagens[indiceAtual]}
            alt="Carrossel"
            className={`w-4/5 h-auto mx-auto transition-opacity duration-500 ${animaClass} mb-12`} // Adicionando mb-12
        />
        
      <button
        onClick={proximaImagem}
        className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Próxima
      </button>
    </div>
  );
};

export default Carousel;
