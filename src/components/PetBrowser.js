import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(singlePet => (
      <Pet pet={singlePet} key={singlePet.id} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
