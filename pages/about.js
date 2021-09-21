import Head from 'next/head';
import Image from 'next/image'
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import logo from '../public/logo.svg';


const About = () => {
  return (
    <Root>
    <Head>
      <title>Sobre nosotros</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Sobre nosotros
              </h2>
              <h4 className="font-size-subheader mb-4">
              La Güeya es una empresa agropecuaria que se enfoca en la producción agrícola, ganadera, equina y láctea en la región centro y norte de Santa Fe.

              El nombre la Güeya representa nuestra determinación con el camino que elegimos, más allá de las dificultades siempre mantenemos los valores y forma de trabajo que nos caracterizan. Nos identifican las tradiciones de nuestra gente, las cuales nos inspiran para trabajar la tierra con gran respeto y responsabilidad buscando siempre cuidar los recursos naturales.

              Desde enero del 2015 tomamos la decisión de agregar valor a nuestra producción láctea, por lo tanto, instalamos una pequeña industria la cual se basa en la alta calidad de leche producida de nuestro tambo y en el agregado de insumos para el proceso industrial que son también de máxima calidad. Buscando productos con la mayor excelencia y seguridad alimentaria.              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image src={logo} alt="Logo illustration"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
  )
}


export default About;
