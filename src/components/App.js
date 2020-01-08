import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Controls from './Controls'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';

class App extends Component {
	constructor(){
		super()
		this.state={
			hogs: hogs
		}
	}

	filterHogs = (event) => {
		console.log('filterHogs')
	}

	sortHogs = (event) => {
		console.log('sortHogs')
	}

  render() {
    return (
      <div className="App">
          <Nav />
          <Controls />
          <HogsContainer hogs={hogs}/>

      </div>
    )
  }
}

export default App;
