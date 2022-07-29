import React from 'react';
import Homes from './Homes';
import Cart from './Cart'
import { CartProvider } from 'react-use-cart';
export default function Link() {
  return (
    <>
    
        <CartProvider>
        <Homes/>
        <Cart/>
        </CartProvider>
    
    </>
  );
}
