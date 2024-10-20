import React from 'react';
import Carousel from './Carousel';

const Home: React.FC = () => {
  return (
    <main className="p-4">
      <h2 className="text-3xl font-bold mb-4">Últimas Notícias</h2>
      <Carousel />
      <article className="my-6">
        <h3 className="text-2xl font-semibold">Título da Notícia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at efficitur nisi. Integer vel tortor id leo faucibus tempor.</p>
      </article>
      <article>
        <h3 className="text-2xl font-semibold">Outro Título de Notícia</h3>
        <p>Curabitur tincidunt, nunc eget vehicula dignissim, eros magna dapibus sapien, sit amet dapibus nisi lorem non nunc.</p>
      </article>
    </main>
  );
};

export default Home;
