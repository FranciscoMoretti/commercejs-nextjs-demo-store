import React from 'react';
import Link from 'next/link';

export default function ProductCard({ permalink, image, name, description, soldOut, expandImage=false}) {
  let background_style
  if (expandImage){
    background_style = `url("${image}") center center/cover`
  } else{
    background_style = `url("${image}") center center/ 100% auto no-repeat`
  }

  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="mb-5 d-block font-color-black cursor-pointer">
        <div
          className="mb-3"
          style={{
            paddingBottom: '125%',
            background: background_style
          }}
        >
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
