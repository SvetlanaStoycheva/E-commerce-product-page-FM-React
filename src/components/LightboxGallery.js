import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { productImages } from '../helpers';
import { useGlobalContext } from '../context';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const LightboxGallery = () => {
  const [mainImg, setMainImg] = useState(productImages[0]);
  const { setIsLightboxGalleryOpen } = useGlobalContext();

  const prevImage = () => {
    //find the index of mainImg in the productImages array, so we can rotate trough the array with the arrows
    const indexInProductImages = productImages.indexOf(mainImg);
    setMainImg(
      mainImg === productImages[0]
        ? productImages[productImages.length - 1]
        : productImages[indexInProductImages - 1]
    );
  };
  const nextImage = () => {
    const indexInProductImages = productImages.indexOf(mainImg);
    setMainImg(
      mainImg === productImages[productImages.length - 1]
        ? productImages[0]
        : productImages[indexInProductImages + 1]
    );
  };
  return (
    <>
      {/* only visible when the main image in the gallery on big screen is clicked */}
      <section className='lightbox-gallery-container'>
        <div className='inner-lightbox-gallery-container'>
          <div className='lightbox-inner-container'>
            <span
              className='lightbox-gallery-close-btn'
              onClick={() => setIsLightboxGalleryOpen(false)}
            >
              <FaTimes />
            </span>
            {/* the gallery part from GalleryBigScreen with added left/right arrow from Gallery */}
            <article className='gallery-big-screen-images-container lightbox-gallery-image-container'>
              {/* arrow */}
              <div
                className='slider-arrow-left lightbox-arrow-left'
                onClick={prevImage}
              >
                <IoIosArrowBack />
              </div>
              <img
                src={mainImg}
                alt='product'
                className='big-screen-main-img lightbox-main-img'
              />
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
                        alt='small-product'
                        className='small-image'
                      />
                    </div>
                  );
                })}
              </div>
              {/* arrow */}
              <div
                className='slider-arrow-right lightbox-arrow-right'
                onClick={nextImage}
              >
                <IoIosArrowForward />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default LightboxGallery;
