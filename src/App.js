import './App.css';
import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Main />
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
