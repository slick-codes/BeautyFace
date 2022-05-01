import './App.css';
import React from 'react';

// Components
import Navigation from './components/Navigation'

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
      </>
    );
  }
}

export default App;
