import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  genPets = () => {
    return this.props.pets.map( (pet,i) => {
      return <Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })
  }


  render() {
    return <div className="ui cards">{this.genPets()}</div>
  }
}

export default PetBrowser
