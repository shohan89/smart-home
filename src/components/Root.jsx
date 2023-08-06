import React, { createContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';

// creating a Context for accessing Products
export const ProductContext = createContext([]);

// creating a Context for accessing Cart
export const CartContext = createContext([]);
const Root = () => {
  const {products, initialCart} = useLoaderData();
  // create a state for updating the cart
  const [ cart, setCart ] = useState( initialCart );
  return (
    <div>
      <ProductContext.Provider value={ products }>
        <CartContext.Provider value={ [ cart, setCart ] }>
          <Header />
          <Outlet />
          <Footer />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default Root;