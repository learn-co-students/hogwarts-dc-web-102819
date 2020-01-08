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
			hogs: hogs,
			sort: null
		}
	}

	filterHogs = (event) => {
		let greasedOrUngreased = event.target.id === 'showGreased' ? true : false
		let newHogs= hogs.filter(hog => hog.greased === greasedOrUngreased)
		this.setState({
			hogs: newHogs
		})		
	}

	sortHogs = (event) => {
		event.persist()
		this.setState({
			sort: event.target.name
		})
		console.log(event.target.name)
		if (event.target.name !== null) {
			this.setState(previousState => {
				return previousState.hogs.sort((hog1,hog2) => 
					(hog1[event.target.name] > hog2[event.target.name]) ? 1 : 
					((hog2[event.target.name] > hog1[event.target.name]) ? -1 : 0))
			})
		}
	}

  render() {
    return (
      <div className="App">
          <Nav />
		  <Controls
		  	sort={this.state.sort} 
		  	filterHogs={this.filterHogs}
			sortHogs={this.sortHogs}/>
          <HogsContainer hogs={this.state.hogs}/>

      </div>
    )
  }
}
export default App;
