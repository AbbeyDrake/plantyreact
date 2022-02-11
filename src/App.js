import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import './App.css';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
          <Main />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;

// class component that needs to keep track of state, you have a constructor with state object, bind methods

//Browser Router - big conditional that displays something different depending on what's clicked. Changing what's in the "root" div
