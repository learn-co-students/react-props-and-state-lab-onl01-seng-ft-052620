import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.displayPets()
  }

  displayPets() {
    let newPetsArray = this.props.pets.map( pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
  
    return <div className="ui cards">{newPetsArray}</div>
  }
}

export default PetBrowser
