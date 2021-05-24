import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/index'; 
import Footer from './Components/Footer/index';
import api from './api/api';
import './App.scss';


export default function App() {
  const [categories, setCategories] = useState(() => []);

  useEffect(() => {
      api.getCategories().then((res) => {
        setCategories(res);
      });
  }, []);

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