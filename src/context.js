import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSitebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSitebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSitebarOpen(false);
  };

  return (
    <AppContext.Provider value={{ openSidebar, isSidebarOpen, closeSidebar }}>
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
