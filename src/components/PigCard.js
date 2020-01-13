import React, { Component } from 'react';

export default class PigCard extends Component{

    constructor(){
        super()
        this.state={
            detail : false
        }
    }

    addDetail=()=>{
        this.setState({
            detail: !this.state.detail
        })
    }

    render() {

        return (
            <div className="ui card">
                <div className="image">
                    <img alt="emptypic" src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g, '_')}.jpg`)} />
                </div>
                <div className="content">
                    <a className="header" onClick={this.addDetail}>{this.props.hog.name}</a>
                </div>

                {
                    this.state.detail ? <div>{this.props.hog.weight}</div> : null
                }

            </div>
        );
    }
}