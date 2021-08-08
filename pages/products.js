import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import Collections from '../components/collections/Collections';
import SocialMedia from '../components/common/SocialMedia';
import Footer from '../components/common/Footer';

const Home = () => (
  <Root>
    <Head>
      <title>Collection</title>
    </Head>
    <Collections />
    {/* Disable ExploreBanner until it's customized */}
    {/* <ExploreBanner /> */}
    {/* Disable SocialMedia until it's customized */}
    {/* <SocialMedia /> */}
    <Footer />
  </Root>
);

export default Home;
