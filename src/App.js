import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <main>
      <Navbar />
      <section className='product-container'>
        <Gallery />
        <ProductInfo />
      </section>
    </main>
  );
}

export default App;
