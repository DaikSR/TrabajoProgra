import React from 'react';
import Header from './components/Header/Header';
import ImageCarousel from './components/body/ImageCarousel';
import PromoBar from './components/body/PromoBar';
import ProductSection from './components/body/ProductSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <PromoBar />
      <ProductSection />
    </div>
  );
};

export default App;


