import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './theme';
import Container from '@material-ui/core/Container';
import Header from './components/Header/index'; 
import Footer from './components/Footer/index';


export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" component="main">
      </Container>
      <Footer />
    </React.Fragment>
  );
}