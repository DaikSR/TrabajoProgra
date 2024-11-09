// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      
      <div className="contact-bar">
        <span>Llámanos al +51 986 663 114</span>
        <div className="social-icons">
          <a href="https://www.facebook.com/sorprendelima" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/sorprendelima/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCWpivZ1HR4j6iViLsW17fEg" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube-icon.png" alt="YouTube" />
          </a>
          <a href="https://www.tiktok.com/@sorprendelima?lang=es" target="_blank" rel="noopener noreferrer">
            <img src="/icons/tiktok-icon.png" alt="TikTok" />
          </a>
        </div>
      </div>

      {/* Línea verde con el título y barra de navegación */}
      <div className="main-header">
        <h1 className="company-title">SORPRENDE LIMA</h1>
        <nav className="nav-bar">
          <a href="#desayunos">Desayunos Sorpresa</a>
          <a href="#flores">Flores</a>
          <a href="#giftboxes">Gift Boxes</a>
          <a href="#regalos">Regalos</a>
          <a href="#globos">Globos</a>
          <a href="#pasteleria">Pastelería</a>
          <a href="#ocasiones">Ocasiones</a>
          <a href="#corporativos">Regalos Corporativos</a>
          <a href="#suscripciones">Suscripciones</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
