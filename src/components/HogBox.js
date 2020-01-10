import React, {Component} from 'react'
import Hogs from './Hogs'
class HogBox extends Component{
  render(){
    // console.log(this.props.hogs)
    return (
      <div className='ui grid'>
        {this.props.hogs.map(hog => <Hogs key={hog.name} hog={hog}/>)}
      </div>
    )
  }
}
export default HogBox
