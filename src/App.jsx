import React from "react";

import ProductData from "./context/ProductsData";
import products from "./api/products";
import catigories from './api/catigories'

// Components
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Products from "./components/Products";
import Catigories from './components/Catigories'


import "./App.css";
import "./styles/css/main.css";
import './styles/css/config.css'

const App = function () {
  return (
    <ProductData.Provider
      value={{
        products,
        catigories,
        methods: {},
      }}
    >
      <Navigation />
      <Header />
      <main>
        <Catigories />
        <Products />
      </main>
    </ProductData.Provider>
  );
};

export default App;
