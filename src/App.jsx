import './App.css';
import React from 'react';

// Components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Products from './components/Products'

class App extends React.Component{

  // eslint-disable-next-line no-useless-constructor
  constructor( props ){
    super(props);
    // this.state = {}
  }

  render(){
    return (
      <>
        <Navigation />
        <Header />
        <main>
          <Products />
        </main>
      </>
    );
  }
}

export default App;
