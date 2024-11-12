import React from 'react';
import Header from './components/Header/Header';
import ImageCarousel from './components/Body/ImageCarousel';
import PromoBar from './components/Body/PromoBar';
import ProductSection from './components/Body/ProductSection';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <PromoBar />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default App;


