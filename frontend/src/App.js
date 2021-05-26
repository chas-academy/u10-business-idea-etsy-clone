import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProductForm from './Components/AddProduct/AddProductForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';

import './App.scss';

export default function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

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

        <Router>
          <Switch>
            {/* <Route path='/add-product' component={AddProductForm} /> */}
            {/* <Route path="/add-product"><AddProductForm /></Route> */}
          </Switch>
          <Route path="/">{<h1>Home</h1>}</Route>
          <Route path="/add-product">
            <AddProductForm />
          </Route>
          {/* <Route path="/add-product" render={() => (<> <AddProductForm /> </> )}/> */}
        </Router>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
