import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header/index'; 
import Footer from './components/Footer/index';


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" component="main">
        <div></div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}