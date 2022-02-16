import React, { useState, useContext, useEffect } from 'react';
import productImg from './images/image-product-1-thumbnail.jpg';

const AppContext = React.createContext();

//get data from LocalStorage
const getLocalStorage = () => {
  let product = localStorage.getItem('product');
  if (product) {
    return JSON.parse(localStorage.getItem('product'));
  } else {
    return {
      name: 'Fall Limited Edition Sneakers',
      price: 125,
      productAmount: 0,
      img: productImg,
      finalePrice: 0,
    };
  }
};

const AppProvider = ({ children }) => {
  const [product, setProduct] = useState(getLocalStorage());
  const [isSidebarOpen, setIsSitebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxGalleryOpen, setIsLightboxGalleryOpen] = useState(false);

  const openSidebar = () => {
    setIsSitebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSitebarOpen(false);
  };

  //when the add-to-cart-btn is clicked
  const handleAddToCart = (amount) => {
    const finalePrice = 125 * amount;
    const newProduct = { ...product, productAmount: amount, finalePrice };
    setProduct(newProduct);
    setIsCartOpen(true);
  };

  //open/close the shopping cart container
  const toggleShoppingCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  //when the delete button in the shopping cart is clicked
  const handleDeleteProduct = () => {
    const newProduct = { ...product, productAmount: 0 };
    setProduct(newProduct);
  };

  //update shopping bag on LocalStorage
  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(product));
  }, [product]);

  //open/close Ligthbox Gallery
  const openLightboxGallery = () => {
    setIsLightboxGalleryOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        isSidebarOpen,
        closeSidebar,
        handleAddToCart,
        product,
        toggleShoppingCart,
        isCartOpen,
        setIsCartOpen,
        handleDeleteProduct,
        openLightboxGallery,
        isLightboxGalleryOpen,
        setIsLightboxGalleryOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
// const { openSidebar, openModal } = useGlobalContext();
