import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(petSingle => (
      <Pet pet={petSingle} key={petSingle.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
