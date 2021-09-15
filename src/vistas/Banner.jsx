import React from "react";

const Banner = () => (
  <div className="main-banner img-container second-color" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://www.bwelltrip.com/wp-content/uploads/2020/10/yoga-ibiza-3.jpg"
          alt="imagen"
        />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Ven con nosotros y cambia tu estilo de vida</p><br/>
          <p className="t3">¡No lo pienses más!</p>
          <a href="uaemex.mx" className="button text-color smaller">
            Conoce nuestras membresías
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
