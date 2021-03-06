import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import SuggestedProducts from '../components/productAssets/SuggestedProducts';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | commerce</title>
    </Head>

    <HeroSection />
    {/* Disable HomeBanner until it's customized */}
    {/* <HomeBanner /> */}
    <CategoryBanner />
    {/* <ProductsBanner /> */}
    <SuggestedProducts />
    {/* Disable SocialMedia until it's customized */}
    {/* <SocialMedia /> */}
    <Footer />
  </Root>
);

export default Home;
