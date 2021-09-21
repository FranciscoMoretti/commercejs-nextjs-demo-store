import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import Head from 'next/head';
import Image from 'next/image'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router';
import Root from '../../components/common/Root';
import TemplatePage from '../../components/common/TemplatePage';
import CarouselImages from '../../components/productAssets/CarouselImages';
import ProductDetail from '../../components/productAssets/ProductDetail';
import SuggestedProducts from '../../components/productAssets/SuggestedProducts';
import ExploreBanner from '../../components/productAssets/ExploreBanner';
import Footer from '../../components/common/Footer';
import SocialMedia from '../../components/common/SocialMedia';
import CategoryList from '../../components/products/CategoryList';
import reduceProductImages from '../../lib/reduceProductImages';
import ProductCard from '../../components/products/ProductCard';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const importedImages = importAll(require.context('../../public/images/product', false, /\.(png|jpe?g|svg)$/));

export default function Product({product}) {
  const router = useRouter();
  const { permalink } = router.query;
  const [showShipping, setShowShipping] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);

  const toggleShipping = () => {
    setShowShipping(!showShipping);
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }
  // permalink = product.permalink
  // setProduct(product_data);
  // setLoading(false);

  // if (loading) {
  //   return <TemplatePage page={ {message: 'Loading...'} } />
  // }

  if (product === null) {
    return <ErrorPage statusCode={404} />
  }

  const images = product.media.assets;

  // const images = reduceProductImages(product);

  return (
    <Root>
      <Head>
        <title>{ product.name } | commerce</title>
      </Head>

      <div className="py-5 my-5">
      <div className="main-product-content">
        {/* Sidebar */}
        <div className="product-sidebar">
          <CategoryList
            className="product-left-aside__category-list"
            current={ product.categories_ids && product.categories_ids[0] }
          />
          <CarouselImages images={images} />
        </div>

        <div className="product-images">
          <div className="flex-grow-1 align-items-stretch">
            {Array.isArray(images) ? (images.map((image, i) => (
              <div key={i} className="w-100 mb-3 carousel-main-images d-item">
                <div className="some-class w-100">
                  <Image
                    key={i}
                    src={importedImages[image.split("/").pop()]}
                    layout="responsive"
                    sizes={'500px'}
                  />
                </div>
              </div>
            ))) : (
              ''
            )}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="product-detail">
          <ProductDetail product={product} />

          <div
            onClick={toggleShipping}
            className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
          >
            Donde comprar
            <img src="/icon/plus.svg" />
          </div>
          <Collapse isOpened={showShipping}>
            <div className="pb-4 font-color-medium">
              En nuestro local o comuniquese con nosotros para conocer negocios con los que trabajamos en su ciudad.
            </div>
          </Collapse>
          <div className="h-1 border-bottom border-color-black" />
          <div
            onClick={toggleDetails}
            className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
          >
            Detalles
            <img src="/icon/plus.svg" />
          </div>
          <Collapse isOpened={showDetails}>
            <div className="pb-4 font-color-medium">
              Detalles del producto { product.name }
            </div>
          </Collapse>
          <div className="h-1 borderbottom border-color-black" />
        </div>
      </div>
    </div>

    <SuggestedProducts />
    {/* Disable ExploreBanner until it's customized */}
    {/* <ExploreBanner /> */}
    {/* Disable SocialMedia until it's customized */}
    {/* <SocialMedia /> */}
    <Footer />
  </Root>
  );
}

export async function getStaticPaths(){
  var products = require('./../../seeds/products.json');
  // const { products } = this.props;
  let paths = products.map(p => {
    return `/product/${p.permalink}`
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }){
  var products = require('./../../seeds/products.json');

  let product = products.find(products => products.permalink === params.permalink)

  return {
    props:{
      product,
    }
  }
}
