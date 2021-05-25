import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header/index'; 
import Footer from './Components/Footer/index';
import Category from './Components/Category/index';
import api from './api/api';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
      <Router>
        <Header categories={categories} />
        <Container maxWidth="md" component="main">
            <Switch>
              <Route path="/c/:slug" component={Category} />
            </Switch>
        </Container>
      </Router>
      <Footer />
    </React.Fragment>
  );
}