import React from 'react';
import './PromoBar.css';

const PromoBar = () => {
  return (
    <div className="promo-bar">
      <a href="#flores" className="promo-item">
        <span className="icon">❤️</span>
        <div>
          <strong>Sorprende con Flores Premium 🌷</strong>
          <p>Envía flores Hoy</p>
        </div>
      </a>
      <a href="#desayunos" className="promo-item">
        <span className="icon">☕</span>
        <div>
          <strong>Envía hoy un desayuno sorpresa!</strong>
          <p>Llegamos a todo Lima y Callao</p>
        </div>
      </a>
      <a href="#ofertas" className="promo-item">
        <span className="icon">🚚</span>
        <div>
          <strong>Las mejores ofertas aquí!</strong>
          <p>Promociones con envío hoy!</p>
        </div>
      </a>
    </div>
  );
};

export default PromoBar;
