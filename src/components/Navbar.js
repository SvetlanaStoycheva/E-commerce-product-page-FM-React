import React from 'react';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { links } from '../helpers';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import avatarImg from '../images/image-avatar.png';
import { useGlobalContext } from '../context';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
  const {
    openSidebar,
    isSidebarOpen,
    closeSidebar,
    product,
    toggleShoppingCart,
    isCartOpen,
  } = useGlobalContext();

  return (
    <>
      {/* Navbar */}
      <nav className='nav-container'>
        <div className='nav-header'>
          <button className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
          <img src={logo} alt='company-logo' className='company-logo' />
          <ul className='nav-links'>
            {links.map((l) => {
              const { id, text } = l;
              return (
                <li className='nav-link' key={id}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='cart-container'>
          <div className='cart-icon-avatar-container'>
            <button className='cart-btn' onClick={toggleShoppingCart}>
              <AiOutlineShoppingCart />
              <span>{product.productAmount}</span>
            </button>

            <img className='avatar-img' src={avatarImg} alt='avatar' />
          </div>
          {isCartOpen && <ShoppingCart />}
        </div>
      </nav>
      <div className='line'></div>
      {/* Sidebar */}
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='inner-sidebar-container'>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
          <ul className='sidebar-links'>
            {links.map((l) => {
              const { id, text } = l;
              return (
                <li key={id} className='sidebar-link'>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
