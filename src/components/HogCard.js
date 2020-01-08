import React from 'react'
import piggy from '../porco.png'

class HogCard extends React.Component {
	constructor() {
		super()
		this.setState({
			showDetails: false
		})
	}


	render() {
		console.log(this.props.hog)
		const {name, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
		console.log(medal)
		return(
			<div className="ui card">
				<div className="card">
			    <div className="image">
			      <img src={piggy} />
			    </div>
			    <div className="content">
			      <div className="header">{name}</div>
			      <button className="ui button primary">
			        Show Details
			      </button>
			    </div>
			  </div>
			</div>
		)
	}
}


export default HogCard