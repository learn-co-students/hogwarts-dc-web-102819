import React from 'react'
import piggy from '../porco.png'

class HogCard extends React.Component {
	constructor() {
		super()
		this.state = {
			showDetails: false
		}
	}

	toggleDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		})
	}

	hideHog = () => {
		
	}

	render() {
		const {name, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
		return(
			<div className="ui card">
				<div className="card">
			    <div className="image">
			      <img src={piggy} alt={name}/>
			    </div>
			    <div className="content">
			      <div className="header">{name}</div>
				  	  {this.state.showDetails ? 
						<div>
							<p>Specialty: {specialty}</p>
							<p>Greased: {greased.toString()}</p>
							<p>Weight: {weight}</p>
							<p>Highest Medal Achieved: {medal}</p>
							<button 
								className="ui button secondary" 
								onClick={this.toggleDetails}> 
								Hide Details 
							</button> 
						</div>: 
					  <button 
					  	  className="ui button primary"
				  		  onClick={this.toggleDetails}>
			        	  Show Details
			      	  </button>}
					  <button className="ui icon button" onClick={this.hideHog}>
  						<i className="low vision icon"></i>
					  </button>
				</div>
			  </div>
			</div>
		)
	}
}


export default HogCard