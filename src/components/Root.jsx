import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';

// creating a Context
export const ProductContext = createContext([]);

const Root = () => {
  const products = useLoaderData();
  return (
    <div>
      <ProductContext.Provider value={ products }>
        <Header />
        <Outlet />
        <Footer />
      </ProductContext.Provider>
    </div>
  );
};

export default Root;