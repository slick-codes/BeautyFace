import React from 'react';

import ProductData from './api/data'
import products from './api/products'

// Components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Products from './components/Products'

import './App.css';
import './styles/css/main.css';

const App = function(){

    return (
        <ProductData.Provider value={{
          products,
          methods: {

          }
        }}>
        <Navigation />
        <Header />
        <main>
          <Products />
        </main>
      </ProductData.Provider>
    );
}

export default App;
