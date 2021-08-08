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
    console.log(catSlug);

    console.log(categories);
    const cat = categories.find((category) => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    console.log(cat);
    console.log(products);
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
            <div className="row mb-5 collection-1">
              {console.log(categories.slug)}
              {this.filterProductsByCat(category.slug).map((product) => (
                <div key={product.id} className="col-6 col-sm-4 col-md-3">
                  <ProductCard
                    permalink={product.permalink}
                    image={product.media.source}
                    name={product.name}
                    description={product.description && product.description.replace(reg, "")}
                    soldOut={false}
                    // soldOut={product.is.sold_out}
                  />
                </div>
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
        <div className="main-product-content">
          {/* Sidebar */}
          <div ref={this.sidebar} className="product-sidebar">
            <CategoryList className="product-left-aside__category-list" />
          </div>

          {/* Main Content */}
          <div ref={this.page} className="custom-container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-2">{this.renderCollection()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Collections);

