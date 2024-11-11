import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Línea roja con el contacto y los íconos */}
      <div className="top-bar">
        <span className="contact-text">LLÁMANOS AL +51 986 663 114</span>
        <div className="social-icons">
          <a href="https://www.facebook.com/sorprendelima" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/sorprendelima/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCWpivZ1HR4j6iViLsW17fEg" target="_blank" rel="noopener noreferrer">
            <img src="youtube-icon.png" alt="YouTube" />
          </a>
          <a href="https://www.tiktok.com/@sorprendelima?lang=es" target="_blank" rel="noopener noreferrer">
            <img src="tiktok-icon.png" alt="TikTok" />
          </a>
        </div>
      </div>

      {/* Línea verde con el título y las opciones */}
      <div className="nav-bar">
        <div className="title">
          SORPRENDE LIMA
        </div>
        <nav className="menu-options">
          <a href="#">FLORES MORADAS</a>
          <a href="#">DESAYUNOS SORPRESA ▼</a>
          <a href="#">FLORES ▼</a>
          <a href="#">GIFT BOXES</a>
          <a href="#">REGALOS ▼</a>
          <a href="#">GLOBOS ▼</a>
          <a href="#">PASTELERÍA ▼</a>
          <a href="#">OCASIONES ▼</a>
          <a href="#">REGALOS CORPORATIVOS</a>
          <a href="#">SUSCRIPCIONES</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


