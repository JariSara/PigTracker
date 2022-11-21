import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';



class App extends Component {
  render() {
  return (
    <div>
    <style>{'body { background-color: #E69696; }'}</style>
    <Header></Header>
    <Body></Body>
    </div>
  );
} 
}

export default App;
