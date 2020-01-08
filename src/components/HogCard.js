import React from 'react'
// import piggy from '../porco.png'

class HogCard extends React.Component {
	constructor() {
		super()
		this.state = {
			showDetails: false,
			className: 'ui card',
			imgURL: null
		}
	}

	toggleDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		})
	}

	hideHog = () => {
		console.log('hiding')
		this.setState({
			className: 'no-display'
		})
	}

	fetchHogImage(){
		console.log('fetching')
		var image = ''
		fetch('https://source.unsplash.com/random/200x200/?pig')
			.then(response => response.url)
		// console.log(image)

		// return image
	}

	componentDidMount = () => {
		fetch('https://source.unsplash.com/random/200x200/?pig')
			.then(response => {
				this.setState({
					imgURL: response.url
				}) 
			})
	}

	render() {
		let URL = 'https://source.unsplash.com/random/200x200/?pig'
		const {name, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
		return(
			<div className={this.state.className}>
				<div className="card">
			    <div className="image">
			      <img src='https://source.unsplash.com/random/200x200/?pig' alt={name}/>
			    </div>
			    <div className="content">
			      <div className="header">{name}</div>
				  	  {this.state.showDetails ? 
						<div>
							<button 
								className="ui button secondary" 
								onClick={this.toggleDetails}> 
								Hide Details 
							</button>
							<button className="ui icon button" onClick={this.hideHog}>
		  						<i className="low vision icon"></i>
							</button> 
							<p>Specialty: {specialty}</p>
							<p>Greased: {greased.toString()}</p>
							<p>Weight: {weight}</p>
							<p>Highest Medal Achieved: {medal}</p>
						</div>: 
						<div>
						  	<button 
						  	  className="ui button primary"
					  		  onClick={this.toggleDetails}>
				        	  Show Details
				      	  	</button>
					      	<button className="ui icon button" onClick={this.hideHog}>
		  						<i className="low vision icon"></i>
							</button>
						</div>}
					  
				</div>
			  </div>
			</div>
		)
	}
}


export default HogCard