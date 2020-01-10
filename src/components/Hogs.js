import React, {Component} from 'react'
import augustus from '../hog-imgs/augustus_gloop.jpg'
import baypigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy from '../hog-imgs/galaxy_note.jpg'
import leggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbow from '../hog-imgs/rainbowdash.jpg'
import sober from '../hog-imgs/sobriety.jpg'
import concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffle from '../hog-imgs/truffleshuffle.jpg'

const imgArray = {
    'augustus_gloop': augustus,
    'bay_of_pigs': baypigs,
    'cherub': cherub,
    'galaxy_note': galaxy,
    'leggo_my_eggo': leggo,
    'mudblood': mudblood,
    'piggy_smalls': piggy,
    'porkchop': porkchop,
    'rainbowdash': rainbow,
    'sobriety': sober,
    'the_prosciutto_concern': concern,
    'trouble': trouble,
    'truffleshuffle': truffle
}

class Hogs extends Component {
  constructor(){
    super()
    this.state ={
      toggleDetails: false
    }
  }

  onToogleDetail = ()=> {
    console.log('you click me')
    this.setState(previousState => {
        return {toggleDetails: !previousState.toggleDetails}
      }
    )
  }


  render(){
    //need to add 'highest medal achieved'
    let {name, specialty, greased, weight, 'highest medal achieved':medal} = this.props.hog
    return(
      <div className="four wide column">
        <div onClick={() => this.onToogleDetail()} className="ui card">
          <div className="image">
            <img alt={name} src={imgArray[name.toLowerCase().split(' ').join('_')]} />
          </div>
          <div className="content">
            <a className="header">{name}</a>
          </div>
          {
            this.state.toggleDetails
            ? <div className="extra content">
                <div className="meta">
                  <span className="date">Specialty: {specialty}</span>
                </div>
                <div className="description">
                  Weight: {weight}
                </div>
                <p>Medal: {medal}</p>
                <p>Greased?: {greased.toString()}</p>
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default Hogs
