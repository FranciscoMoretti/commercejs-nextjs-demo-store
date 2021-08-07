import { useMemo } from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {
  STORE_PRODUCTS,
  STORE_CATEGORIES,
} from './actions/actionTypes';

let store
// Declare initial state
const initialState = {
  categories: [],
  products: [],
};

// Create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Dispatch in App SSR
    // Check if action dispatched is STORE_CATEGORIES and act on that
    case STORE_CATEGORIES:
      return { ...state, categories: action.payload };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_PRODUCTS and act on that
    case STORE_PRODUCTS:
      return { ...state, products: action.payload };
    // Dispatch in App client-side
    // Check if action dispatched is SET_CUSTOMER and act on that
    default:
      return state;
  }
};



// Enable Redux dev tools
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__(
    { trace: true, traceLimit: 25 }
  )
  : f => f;

// Create a makeStore function and pass in reducer to create the store
const makeStore = () => {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), devtools)
  );
};


export const initializeStore = (initialState) => {
  let _store = store ?? makeStore(initialState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (initialState && store) {
    _store = makeStore({
      ...store.getState(),
      ...initialState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return _store
  }
  // Create the store once in the client
  if (!store) {
    store = _store
  }

  return _store
}


export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

