import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogBox from './HogBox'
import hogs from '../porkers_data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      filter: 'all',
      sort: ''
    }
  }
  handleChange = e => {
    // this.setState({filter: e.target.value})
    // console.log(e.target.name)
    this.setState({[e.target.name]:e.target.value})
  }

  handleFilter = () => {
    // console.log('inside handleFilter ', this.state.filter)
    switch (this.state.filter){
      case 'true':
        return this.state.hogs.filter( hog => this.state.filter === hog.greased.toString())
      case 'false':
        return this.state.hogs.filter( hog => this.state.filter === hog.greased.toString())
      default :
        return this.state.hogs
    }
  }

  handleSort = hogs => {
    console.log(this.state.sort)
    const hogsCopy = [...hogs]
    switch (this.state.sort){
      case 'name':
        return hogsCopy.sort((a, b) => a.name > b.name ? 1 : -1)
      case 'weight':
        return hogsCopy.sort((a, b) => a.weight > b.weight ? 1 : -1)
      default:
        return hogs
    }
  }


  render() {
    // console.log(this.state.filter)
    // console.log('inside app ', this.handleFilter())
    return (
      <div className="App">
          <Nav handleChange={this.handleChange} handleSort={this.handleChange}/>
          {/* <HogBox hogs={this.handleFilter()}/> */}
          <HogBox hogs={this.handleSort(this.handleFilter())}/>
      </div>
    )
  }
}

export default App;
