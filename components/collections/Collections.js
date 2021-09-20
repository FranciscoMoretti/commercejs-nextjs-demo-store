import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import ProductCard from '../products/ProductCard';
import CategoryList from '../../components/products/CategoryList';

class Collections extends Component {
  constructor(props) {
    super(props);

    this.sidebar = React.createRef();
    this.page = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const animate = () => {
      if (!this.page.current) {
        return;
      }

      const distance = this.page.current.getBoundingClientRect().bottom - window.innerHeight;

      if (distance < 0) {
        this.sidebar.current.style.transform = `translateY(${distance}px)`;
      } else {
        this.sidebar.current.style.transform = "translateY(0px)";
      }
    };

    window.requestAnimationFrame(animate);
  }

  /**
   * Filter products by category
   */
  filterProductsByCat(catSlug) {
    const { categories, products } = this.props;

    const cat = categories.find((category) => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    return products.filter((product) =>
      product.categories_ids.find((categoryId) => categoryId === cat.id)
    );
  }

  /**
   * Render collections based on categories available in data
   */
  renderCollection() {
    const { categories } = this.props;
    const reg = /(<([^>]+)>)/gi;

    return (
      <div className="collection">
        {categories.map((category) => (
          <div key={category.id}>
            <p className="font-size-title font-weight-medium mb-4" id={category.slug}>
              {category.name}
            </p>
            <div className="row mb-5 collection-1 card-deck card-deck-style">
              {this.filterProductsByCat(category.slug).map((product) => (
                  <ProductCard
                    key={product.id}
                    permalink={product.permalink}
                    image={product.media.source}
                    name={product.name}
                    description={product.description && product.description.replace(reg, "")}
                    soldOut={false}
                    // soldOut={product.is.sold_out}
                  />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="py-5 my-5">
        <Head>
          <title>Collections</title>
        </Head>
        <div className="py-4">

          <div ref={this.page} className="custom-container">
            <div className="d-flex">
          {/* Sidebar */}
          <div
            ref={this.sidebar}
            className="w-100 mr-8"
            style={{ }}
            >
            <CategoryList className="product-left-aside__category-list" />
          </div>
            {/* Main Content */}
              <div className="col-10 offset-2">{this.renderCollection()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Collections);

