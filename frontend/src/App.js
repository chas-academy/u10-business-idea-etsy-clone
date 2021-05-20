import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        <Route path="/">{<h1>Home</h1>}</Route>
      </Switch>
      </Router>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
