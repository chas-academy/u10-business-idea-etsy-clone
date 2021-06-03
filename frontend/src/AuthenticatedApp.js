import React, { useEffect, useState, useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import api from './api/api';
//import AddProductForm from './Components/AddProduct/AddProductForm';
import ProductCard from './Components/ProductCard/Card';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProductForm from './Components/AddProduct/AddProductForm';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import UserProfile from './Components/UserProfile/UserProfile';
import { useAuthContext } from './context/AuthContext';

export default function AuthenticatedApp() {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState(() => []);
  const [userProducts, setUserProducts] = useState();
  const authContext = useAuthContext();

  useEffect(() => {
    console.log('AuthenticatedApp authContext', authContext, authContext.user);
    if (authContext.user !== null) {
      console.log('App Component getUserProducts', authContext.user);

      api.getUserProducts(authContext.user.id).then(response => {
        console.log('App Component getUserProduct resoibse', response);
        if (response.status === 200) {
          console.log('App Component getUserProducts', response.data.products);
          setUserProducts(response.data.products);
        }
      });
    }
  }, [authContext]);

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
        <Header categories={categories} user={authContext.user} />
        <Container maxWidth="md" component="main">
          <Switch>
            <Route path="/" exact>
              <>
                {products ? <Products products={products} /> : <h3>No Products to show</h3>}
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
            <Route path="/login" render={() => <Login />}></Route>
            <Route
              path="/profile"
              render={() => (userProducts ? <UserProfile userProducts={userProducts} /> : null)}
            ></Route>
            <Route path="/orders" component={Orders}></Route>
          </Switch>
        </Container>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
