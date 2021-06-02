import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/index';
import api from './api/api';
//import AddProductForm from './Components/AddProduct/AddProductForm';
import ProductCard from './Components/ProductCard/Card';
import Products from './Components/Products/Products';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProductForm from './Components/AddProduct/AddProductForm';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import UserProfile from './Components/UserProfile/UserProfile';

export default function App() {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState(() => []);
  const [user, setUser] = useState(null);

  function callsetuser() {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      alert('woooo');
    }
  };

  useEffect(() => {
    api.getProducts().then(response => {
      if (response.status === 200) {
        setProducts(response.data);
      }
    });

    api.getCategories().then(response => {
      if (response.status === 200) {
        setCategories(response.data);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Header categories={categories} user={user} />
        <Container maxWidth="md" component="main">
          <Switch>
            <Route path="/" exact>
              <>
                {products ? <Products data={products} /> : <h3>No Products to show</h3>}
                <ProductCard></ProductCard>
              </>
            </Route>
            <Route path="/c/:slug" component={Category} />
            <Route path="/add-product">
              <>
                {categories ? (
                  <AddProductForm categories={categories} />
                ) : (
                  <h3>No Categories to show</h3>
                )}
              </>
            </Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" render={() => <Login callsetuser={callsetuser} />}></Route>
            <Route path="/profile" component={UserProfile}></Route>
          </Switch>
        </Container>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
