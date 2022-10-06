import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GetProducts } from "./utils/Query";
import {Product} from './models';
import ProductComponent from './components/Product'
import {useEffect, useState} from 'react';
import {ProductListing} from './pages/ProductListing'


function App() {
  return(
    <ProductListing/>
  )
}

export default App;
