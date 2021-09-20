import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import images from the product folder to provide them to the Image component
const images = importAll(require.context('../../public/images/product', false, /\.(png|jpe?g|svg)$/));

export default function ProductCard({ permalink, image, name, description, soldOut, expandImage=false}) {
  let background_style
  //  Temporarily unused, should apply them into the product card to position image and text correctly.
  if (expandImage){
    background_style = `center center/cover`
  } else{
    background_style = `center center/ 100% auto no-repeat`
  }

  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="mb-5 d-block font-color-black cursor-pointer card-style">
        <div className="card-img-container-style">
            <div className="some-class">
              <Image
              src={images[image.split("/").pop()]}
              layout="responsive" className={'image'} />
            </div>
            {soldOut && <div className="product-card--overlay-text">SOLD OUT</div>}
        </div>
        <div className="card-body card-body-style">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
