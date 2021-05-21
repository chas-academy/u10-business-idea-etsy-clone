import React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Products from './components/Products/Products';
import './App.scss';

export default function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  });

  //API connection
  const getProducts = async () => {
    const api_call = await fetch(`http://localhost/api/products`);
    const data = await api_call.json();
    console.log(data);
    setProducts(data);
  };

  //Temp
  let categories = [
    'Clothing & Shoes',
    'Home & Living',
    'Wedding & Party',
    'Toys & Entertainment',
    'Art & Collectibles',
    'Craft Supplies & Tools'
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Header categories={categories} />
      <Container maxWidth="md" component="main">
        <>{products ? <Products data={products} /> : <h3>No Products to show</h3>}</>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
