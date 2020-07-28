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
        url="https://www.youtube.com/watch?v=-oYMo8k22Vw"
        videoDescription='É uma música no estilo de RAP, criado pelo pessoal do 7 minutoz, para o público Otaku, que conta um pouco dos membros da Akatsuki, uma "gang" de vilões, que planejam a dominação mundial, coletando as 9 bijuus (demônios de cauda)'
        videoTitle="CONTÉM SPOILER - Rap Akatsuki"
      />
      {bancoDeDados.categorias.map((categoria, index) => (
        <Carousel key={index} ignoreFirstVideo category={categoria} />
      ))}
      <Footer />
    </>
  );
}

export default App;
