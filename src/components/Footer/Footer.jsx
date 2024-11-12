import React from 'react';
import './Footer.css';
import Imagen1 from './Imagenes/Imagen1.jpg';
import Imagen2 from './Imagenes/Imagen2.jpg';
import Imagen3 from './Imagenes/Imagen3.jpg';
import Imagen4 from './Imagenes/Imagen4.jpg';
import Imagen5 from './Imagenes/Imagen5.jpg';
import Imagen6 from './Imagenes/Imagen6.jpg';
import Imagen7 from './Imagenes/Imagen7.jpg';
import Imagen8 from './Imagenes/Imagen8.jpg';
import Imagen9 from './Imagenes/Imagen9.jpg';
import Imagen10 from './Imagenes/Imagen10.jpg';
import Imagen11 from './Imagenes/Imagen11.jpg';
import Imagen12 from './Imagenes/Imagen12.jpg';


const Footer = () => {
  return (
    <div className="footer-container"> 
      <div className="images-grid">
        {/* Añade las imágenes en el orden deseado */}
        <img src={Imagen1} alt="Imagen 1" className="grid-item" />
        <img src={Imagen2} alt="Imagen 2" className="grid-item" />
        <img src={Imagen3} alt="Imagen 3" className="grid-item" />
        <img src={Imagen4} alt="Imagen 4" className="grid-item" />
        <img src={Imagen5} alt="Imagen 5" className="grid-item" />
        <img src={Imagen6} alt="Imagen 6" className="grid-item" />
        <img src={Imagen7} alt="Imagen 7" className="grid-item" />
        <img src={Imagen8} alt="Imagen 8" className="grid-item" />
        <img src={Imagen9} alt="Imagen 9" className="grid-item" />
        <img src={Imagen10} alt="Imagen 10" className="grid-item" />
        <img src={Imagen11} alt="Imagen 11" className="grid-item" />
        <img src={Imagen12} alt="Imagen 12" className="grid-item" />
      </div>
      <div className="social-section">
        <button className="instagram-button">@SORPRENDELIMA</button>
        <div className="help-section">
          <span>Hola! 👋 ¿Necesitas ayuda?</span>
          <img src="whatsapp-icon.png" alt="WhatsApp" className="whatsapp-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;