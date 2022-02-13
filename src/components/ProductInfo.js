import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function ProductInfo() {
  return (
    <section className='product-info-container'>
      <h3>SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='price-container'>
        <div className='current-price'>
          <h2>$125.00</h2>
          <div className='percentage-container'>
            <h3>50%</h3>
          </div>
        </div>
        <span>$250.00$</span>
      </div>
      <div className='add-to-cart-container'>
        <button className='quantity-btn'>
          <span className='quantity-icon'>-</span>
          <span className='quantity-number'>0</span>
          <span className='quantity-icon'>+</span>
        </button>
        <button className='add-to-cart-btn'>
          <AiOutlineShoppingCart />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
