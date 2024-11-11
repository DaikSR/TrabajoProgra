import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Taza Metálica Graduación', price: 'S/. 50.00 PEN', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Taza Meme Graduación con Chocolates', price: 'S/. 70.00 PEN', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Gift Box Graduation School', price: 'S/. 190.00 PEN', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Caja 6 Rosas Graduación', price: 'S/. 105.00 PEN', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Gift Box Graduation Day', price: 'S/. 195.00 PEN', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Caja 12 Rosas Graduación', price: 'S/. 150.00 PEN', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="product-section">
      <h2 className="section-title">SORPRENDE A TU GRADUADO FAVORITO 🎓</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button" onClick={() => window.location.href = '#'}>VER TODO</button>
    </section>
  );
};

export default ProductSection;
