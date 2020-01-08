import React, {Component} from 'react'

class Controls extends Component {
	render(){
		return (
			<div>
				<div className="ui large buttons">
					<button className="ui button" onClick={this.props.filterHogs} id="showGreased">Greased</button>
					<div className="or"></div>
					<button className="ui button" onClick={this.props.filterHogs} id='showUn-greased'>Un-greased</button>
				</div>
				<div className="ui form">
					<div className="inline fields">
						<label>Sort By: </label>
						<div className="field">
							<div className="ui radio checkbox">
								<input type="radio" name="name" checked={this.props.sort === 'name'} onChange={this.props.sortHogs}/>
								<label>Name</label>
							</div>
						</div>
						<div className="field">
							<div className="ui radio checkbox">
								<input type="radio" name="weight" checked={this.props.sort === 'weight'} onChange={this.props.sortHogs}/>
								<label>Weight</label>
							</div>
						</div>
  					</div>
				</div>
		  	</div>
		)
	}
}

export default Controls