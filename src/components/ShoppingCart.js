import React from 'react';
import { useGlobalContext } from '../context';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';

function ShoppingCart() {
  const { product, handleDeleteProduct, setIsCartOpen } = useGlobalContext();

  return (
    <section className='shopping-cart-container'>
      <div className='shopping-cart-header'>
        <p>Cart</p>
        <span
          className='shopping-cart-close-btn'
          onClick={() => setIsCartOpen(false)}
        >
          <FaTimes />
        </span>
      </div>

      <div className='cart-line'></div>
      {product.productAmount > 0 ? (
        <div className='shopping-cart-product-container'>
          <div className='shipping-cart-product-info'>
            <img
              className='shopping-cart-img'
              src={product.img}
              alt='product'
            />
            <div className='shopping-cart-name-price-container'>
              <p>{product.name}</p>
              <div className='shopping-cart-price container'>
                <p>
                  {`$${product.price}.00 x ${product.productAmount}`}{' '}
                  <span className='shopping-cart-final-price'>{`$${product.finalePrice}.00`}</span>
                </p>
              </div>
            </div>
            <button className='delete-btn' onClick={handleDeleteProduct}>
              <RiDeleteBin5Line />
            </button>
          </div>
          <button className='add-to-cart-btn shopping-cart-checkout'>
            Checkout
          </button>
        </div>
      ) : (
        <div className='empty-cart-info'>
          <p>Your cart is empty.</p>
        </div>
      )}
    </section>
  );
}

export default ShoppingCart;
