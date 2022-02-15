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
  const [isSidebarOpen, setIsSitebarOpen] = useState(false);
  const [product, setProduct] = useState(getLocalStorage());

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

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        isSidebarOpen,
        closeSidebar,
        handleAddToCart,
        product,
        handleDeleteProduct,
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
