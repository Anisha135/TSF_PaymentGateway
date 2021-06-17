import React,{Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main/>
        <Cards/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
