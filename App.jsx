import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

import StoreContextProvider from './context/StoreContext';   // ✅ IMPORT CONTEXT PROVIDER

const App = () => {
  return (
    <StoreContextProvider> {/* ✅ WRAP THE ENTIRE APP */}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
    </StoreContextProvider>
  );
};

export default App;
