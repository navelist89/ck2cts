import React, { Component } from 'react';
import './App.css';

import UnitComp from './comp/UnitComp'
import LeaderComp from './comp/LeaderComp'

class App extends Component {
  
  render() {
    return (
      <div className="App">



        
        

        <UnitComp />

        <LeaderComp />
        

        <header className="App-header"> 
        
        </header>
      </div>
    );
  }
}

export default App;
