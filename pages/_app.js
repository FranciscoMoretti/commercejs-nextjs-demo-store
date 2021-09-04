/* global process */
import React, {useEffect, useState} from 'react';
import '../style/scss/style.scss';
import { useStore } from '../store';
import { Provider  } from 'react-redux';
// import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/scss/effect-fade';

const MyApp = ({Component, pageProps}) => {

  const store = useStore(pageProps.initialState);

  useEffect(() => {

    var products = require('./../seeds/products.json');

    store.dispatch({
      type: 'STORE_PRODUCTS',
      payload: products
    })

    var categories = require('./../seeds/categories.json');

    store.dispatch({
      type: 'STORE_CATEGORIES',
      payload: categories
    });

  }, [store])

  return (
    <Provider store={store}>
      <Component
        {...pageProps}
      />
    </Provider>
  );

}

export default MyApp;
