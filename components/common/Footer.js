import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Quesos La Güeya
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="/about/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Nosotros
              </a>
            </div>
            <div>
              <a
                href="/contact"
                className="d-block font-color-medium"
                target="_blank"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Seguinos
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://www.instagram.com/quesoslagueya/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/lagueyaquesos"
                className="d-block font-color-medium"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Visitanos
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <p
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                 Agropecuaria La Güeya S.A.
              </p>
              <p
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                San Martín 41, San Carlos Centro
              </p>
            </div>
            {/* Placeholder for more info */}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="font-color-brand font-size-caption py-4 text-right">
            <a
                href="https://commercejs.com/"
                className="font-color-brand font-size-caption text-uppercase text-center"
                target="_blank"
              >
                &copy; { new Date().getFullYear() } Agropecuaria La Güeya S.A.
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
