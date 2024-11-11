// src/components/ImageCarousel/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Muestra las flechas para avanzar y retroceder
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+1" alt="Imagen 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+2" alt="Imagen 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+3" alt="Imagen 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+4" alt="Imagen 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+5" alt="Imagen 5" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+6" alt="Imagen 6" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+7" alt="Imagen 7" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Imagen+8" alt="Imagen 8" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
