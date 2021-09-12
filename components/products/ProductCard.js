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
      <a className="mb-5 d-block font-color-black cursor-pointer">
        <div
          className="mb-3"
          style={{
            // paddingBottom: '100%'
          }}
        >
            {/* Get the last part of image name to match the key in images dictionary.*/}
            <Image src={images[image.split("/").pop()]} alt="Picture of the author" layout="responsive"/>
          {soldOut && <div className="product-card--overlay-text">SOLD OUT</div>}
        </div>
        <p className="font-size-subheader mb-2 font-weight-medium">
          {name}
        </p>
        <p className="mb-2 font-color-medium">{description}</p>
      </a>
    </Link>
  );
}
