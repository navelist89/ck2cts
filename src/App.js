import React, { Component } from 'react';
import './App.css';

import UnitComp from './comp/UnitComp'
import LeaderComp from './comp/LeaderComp'
import TerrainComp from './comp/TerrainComp'
import TacticsComp from './comp/TacticsComp'

class App extends Component {
  state={
    unitcount:{},
    general:{},
    terrain:"",
  }

  onUnitCountChanged = (data)=>{
    this.setState({
      unitcount:data
    }, ()=>{this.handleAllPost()})
  }


  onGeneralChanged = (data)=>{
    this.setState({
      general:data
    }, ()=>{this.handleAllPost()})
  }

  onTerrainChanged = (data)=>{
    this.setState({
      terrain:data
    }, ()=>{this.handleAllPost()})
  }

  handleAllPost = ()=>{
    //console.log(this.state);
  }
  
  render() {
    return (
      <div className="App">
        <UnitComp action={this.onUnitCountChanged}/>

        <LeaderComp action={this.onGeneralChanged}/>

        <TerrainComp action={this.onTerrainChanged}/>

        <TacticsComp data={this.state}/>
        
        <header className="App-header"> 
        
        </header>
      </div>
    );
  }
}

export default App;
