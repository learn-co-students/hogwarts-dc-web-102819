import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';
import Filter from './Filter';

class App extends Component {

  constructor(){
    super()
    this.state={
      hogs:hogs,
      filter:"all",
      sort:""
    }
  }

  onChange=(e)=>{
    this.setState({
      filter:e.target.value
    })
  }

  onSort=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  sortedHog=()=>{
    if(this.state.sort === "name"){
      return this.state.hogs.sort((a,b) => a.name > b.name ? 1 : -1)
    }else if(this.state.sort === "weight"){
      return this.state.hogs.sort((a,b) => a.weight > b.weight ? 1: -1)
    }else{
      return this.state.hogs
    }
  }

  filteredHog=()=>{
    if(this.state.filter === "all"){
      return this.state.hogs
    }else if(this.state.filter === "greasy"){
      return this.state.hogs.filter(hog => hog.greased)
    }else{
      return this.state.hogs.filter(hog => !hog.greased)
    }
  }



  render() {
    return (
      <div className="App">
        < Nav />
        <Filter onChange={this.onChange} onSort={this.onSort} /><br />
        <PigContainer filteredHog={this.filteredHog(this.sortedHog())} />
      </div>
    )
  }
}

export default App;
