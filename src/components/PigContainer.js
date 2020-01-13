import React, { Component } from 'react';
import PigCard from './PigCard';

export default class PigContainer extends Component{
    render() {
        return (
            <div>{this.props.filteredHog.map(hog => <PigCard key={hog.name} hog={hog}/>)}</div>
        );
    }
}