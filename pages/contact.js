import React from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import cjs_illustration from '../../public/cjs-illustration.svg';

const About = () => (
  <Root>
  <Head>
      <title>Contacto | La Güeya</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <div className="about-container">
        {/* Row */}
        <div className="row mt-5 pt-5 about-hero">
          <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
              <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
                <h2 className="font-size-header mb-4">
                  Contacto
                </h2>
                <h4 className="font-size-subheader mb-4">
                  <p>Agropecuaria La Güeya S.A</p>
                  <p>lagueya@hotmail.com</p>
                  <p>03404-421503</p>
                </h4>
              </div>
            </div>

          <div className="col-12 col-lg-6">
            <div className="about-image h-100">
              <div className="d-flex align-items-center justify-content-center h-100">
                <Image src={cjs_illustration} alt="Commerce.js illustration"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </Root>
);

export default About;
