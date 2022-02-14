import React, { useState } from 'react';
import { productImages } from '../helpers';

function GalleryBigScreen() {
  const [mainImg, setMainImg] = useState(productImages[0]);
  return (
    <section className='gallery-big-screen-images-container'>
      <img src={mainImg} alt='product' className='big-screen-main-img' />
      <div className='gallery-small-images'>
        {productImages.map((image, index) => {
          return (
            <div
              className={
                image === mainImg
                  ? 'active-small-img-container small-img-container'
                  : 'small-img-container'
              }
              key={index}
              onClick={() => setMainImg(productImages[index])}
            >
              <img
                src={image}
                alt='small-image-product'
                className='small-image'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GalleryBigScreen;
