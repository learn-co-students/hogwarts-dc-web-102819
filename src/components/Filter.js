import React, { Component } from 'react';

export default class Filter extends Component{
    render() {
        return (
            <div>
                <select onChange={this.props.onChange}>
                    <option name="all" value="all" >All</option>
                    <option name="greasy" value="greasy" >Greasy</option>
                    <option name="not greasy" value="not greasy" >Not Greasy</option>
                </select>
                
                
                <input type="radio" name="sort" value="name" onChange={this.props.onSort}/> Name
                <input type="radio" name="sort" value="weight" onChange={this.props.onSort}/> Weight
            </div>
        );
    }
}