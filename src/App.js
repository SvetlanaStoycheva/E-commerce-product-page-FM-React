import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ProductInfo from './components/ProductInfo';
import { useGlobalContext } from './context';
import LightboxGallery from './components/LightboxGallery';

function App() {
  const { isLightboxGalleryOpen } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <section className='product-container'>
        <Gallery />
        <ProductInfo />
        {isLightboxGalleryOpen && <LightboxGallery />}
      </section>
    </main>
  );
}

export default App;
