import React from 'react';
import AOS from 'aos';
import { Route } from 'react-router-dom';

import {  Header, Footer } from './components/index';
import { 
  About, 
  Account, 
  Checkout, 
  Favourite, 
  Home, 
  Product, 
  Products 
} from './pages/index';

import './assets/scss/main.scss';
import 'aos/dist/aos.css';

class App extends React.Component {
  constructor() {
    super();
    AOS.init({ duration : 1000 });
  }

  render() {
    return (
      <>
        <Header />
          <main className="content">
            <Route path="/" exact component={ Home }/>
            <Route path="/about" component={ About } />
            <Route path="/account" component={ Account }/>
            <Route path="/checkout" component={ Checkout }/>
            <Route path="/favourite" component={ Favourite }/>
            <Route path="/product" component={ Product }/>
            <Route path="/products" component={ Products }/>
          </main>
        <Footer/>
      </>
    )
  }
}

export default App
