import React from 'react';
import HeroCarousel from './HeroCarousel';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="vh-100 d-flex align-items-center">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col">
            <HeroCarousel />
          </div>
          <div className="col d-flex align-items-center justify-content-center bg-light">
            <div className="text-center p-4">
              <h1>Quiénes Somos</h1>
              <p>
                Informacion importante sobre quienes somos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;