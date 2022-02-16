import React, { useState } from 'react';
import { productImages } from '../helpers';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import GalleryBigScreen from './GalleryBigScreen';

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(
      currentImage === 0 ? productImages.length - 1 : currentImage - 1
    );
  };
  const nextImage = () => {
    setCurrentImage(
      currentImage === productImages.length - 1 ? 0 : currentImage + 1
    );
  };
  return (
    <article className='gallery-container'>
      {/* On small screen there is an Image Slider Carousel */}
      <div className='slider-container'>
        <div className='slider-arrow-left' onClick={prevImage}>
          <IoIosArrowBack />
        </div>

        {productImages.map((image, index) => {
          return (
            <div
              className={
                index === currentImage
                  ? 'slider-img-container slider-img-container-active'
                  : 'slider-img-container'
              }
              key={index}
            >
              {index === currentImage && (
                <img src={image} alt='product' className='slider-img' />
              )}
            </div>
          );
        })}
        <div className='slider-arrow-right' onClick={nextImage}>
          <IoIosArrowForward />
        </div>
      </div>
      <GalleryBigScreen />
    </article>
  );
}

export default Gallery;
