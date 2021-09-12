import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";
import Link from 'next/link';
import { connect } from 'react-redux';

class CategoryBanner extends Component {

  render() {
    const { categories } = this.props;

    return (
      <div className="bg-brand300 py-5 collection-banner">
        <div className="custom-container py-5">
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categorías
          </p>

          <div className="row">
            {categories.map((item, index) => (
              <div
                key={`category-item-${index}`}
                className="col-12 col-md-4 collection-item mb-5"
              >
                <Link href={`/products#${item.slug}`} key={item.id}>
                  <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                    <div>
                      { item.meta?.image && (
                        <div className="mb-4 w-100 collection-item-image">
                          <div className="bg-wrap">
                            <Image src={item.meta.image} alt="Picture of the author" layout="fill" objectFit="cover"/>
                          </div>
                        </div>
                      )}
                      <p className="mb-2 font-size-heading text-center">
                        {item.name}
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

CategoryBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryBanner.defaultProps = {
  categories: [],
};

export default connect(state => state)(CategoryBanner);
