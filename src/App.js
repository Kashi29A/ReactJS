import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import Kashi from './components/Kashi'
import { BrowserRouter } from 'react-router-dom';
class App extends Component {

 

  render(){
  return (
    <BrowserRouter>
    <div >
      <Main />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
