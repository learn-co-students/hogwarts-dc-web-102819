import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogsContainer extends Component {
	render(){
		return (
			<div 
				className="ui three stackable cards">{
					this.props.hogs.map((hog, index) => 
						<HogCard 
							hog={hog} 
							key={index}
						/>)}
			</div>

		)
	}
}	