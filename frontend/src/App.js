import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProductForm from './Components/Vendor/Addproduct';


//<Link to="/">Home</Link>

export default function App() {
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
        
      <Router>
      <Switch>
        
        
        {/* <Route path='/add-product' component={AddProductForm} /> */}
        {/* <Route path="/add-product"><AddProductForm /></Route> */}
      </Switch>
      <Route path="/">{<h1>Home</h1>}</Route>
      <Route path="/add-product"><AddProductForm /></Route>
      {/* <Route path="/add-product" render={() => (<> <AddProductForm /> </> )}/> */}
      </Router>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

