import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import bancoDeDados from './data/database.json';

function App() {
  return (
    <>
      <Menu />
      <BannerMain
        url="https://youtu.be/ObQMysW58NA"
        videoDescription="É uma música no estilo de RAP, criado pelo pessoal do 7 minutoz para o público Otaku, conta um pouco sobre Naruto, protagonista do anime que cresceu sem pai e mãe, sob olhares de pessoas que o julgavam por ter um demônio selado, que atacou aldeia onde morava, mas isso não o impediu de seguir seus sonhos."
        videoTitle="Naruto - O Sétimo Hokage"
      />
      {bancoDeDados.categorias.map((categoria, index) => (
        <Carousel key={index} ignoreFirstVideo category={categoria} />
      ))}
      <Footer />
    </>
  );
}

export default App;
