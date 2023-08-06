import React, { useContext, useState } from 'react'
import { CartContext, ProductContext } from './Root'
import Product from './Product'
import { addToDb } from '../utils/fakeDB';
import { toast } from 'react-toastify';

const Shop = () => {
  // Getting the product through Context API
  const products = useContext( ProductContext );
  // Using a state for Cart Calculation
  const [ cart, setCart ] = useContext( CartContext );
  console.log( cart );

  // Add To Cart Event Handler
  const handleAddToCart = product => {
    let newCart = [];

    // finding if product already exist or not. If not then we'll add product quantity to 1
    const existingProduct = cart.find( existingProduct => existingProduct.id === product.id )

    if( !existingProduct ){
      product.quantity = 1;
      newCart = [ ...cart, product ];
    }
    else{
      const restProducts = cart.filter( existingProduct => existingProduct.id !== product.id )

      existingProduct.quantity = existingProduct.quantity + 1;
      newCart = [...cart, existingProduct];
    }
    setCart( newCart );
    addToDb( product.id );
    toast.success( 'Product Added Successfully!🥳', { autoClose: 500 } )
  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map( product => <Product key={ product.id } product={ product } handleAddToCart={ handleAddToCart } /> )
        }
      </div>
    </div>
  )
}

export default Shop
