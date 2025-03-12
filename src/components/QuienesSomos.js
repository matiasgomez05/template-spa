import React from 'react';
import HeroCarousel from './HeroCarousel';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="vh-100 d-flex align-items-center">

      <div className="container-fluid h-100 m-0 p-0 d-block d-lg-none">
        <div className='row h-100'>
          <div className='col-12 h-25'><HeroCarousel /></div>
          <div className="col-12 h-75 d-flex align-items-center justify-content-center bg-light">
            <div className="text-center">
              <h1>Quiénes Somos</h1>
              <p>
                Informacion importante sobre quienes somos
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid h-100 m-0 p-0 d-none d-lg-block">
        <div className="row h-100">
          <div className="col-8">
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