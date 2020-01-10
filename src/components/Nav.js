import piggy from '../porco.png'
import React, {Component} from 'react'

class Nav extends Component {
	render(){
		console.log(this.props.handleSort)
			return (
				<div className="navWrapper">
					<span className="headerText">Hogwarts</span>
					<div className="TwirlyPig">
						<img src={piggy} className="App-logo" alt="piggy" />
					</div>
					<span className="normalText">A React App for County Fair Hog Fans</span>
					<div className='ui divider'></div>
					<div>
							<select name='filter' onChange={this.props.handleChange}>
								<option value="all">All</option>
								<option value={true}>Greased</option>
								<option value={false}>Not Greased</option>
							</select>
					</div>
					<div>
						<label>Sort by </label>
						<label> Name: </label>
						<input type='radio' name='sort' value='name' onChange={this.props.handleSort}></input>
						<label> Weight: </label>
						<input type='radio' name='sort' value='weight' onChange={this.props.handleSort}></input>
					</div>
					<div className='ui divider'></div>
				</div>
			)
		}
}

export default Nav
