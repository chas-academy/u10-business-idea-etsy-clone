import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import './App.scss';

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
        <div></div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
