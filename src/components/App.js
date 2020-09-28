import React from 'react'

import Filters from './Filters'
import Pet from './Pet'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = (id) => {

    const petsArray = this.state.pets.map(pet => {
      if(pet.id === id){ 
        return pet = {
        ...pet, 
        isAdopted : true}
      } else {
        return pet = pet
      }
  })

  this.setState({
    pets: petsArray
  })
}

  onFindPetsClick = () => {
    let type = this.state.filters.type
    
    if (type === 'all') {

      fetch('/api/pets')
        .then(resp => resp.json())
        .then(json => this.renderPets(json))
        .catch(error => console.log(error))

    } else {
      
      fetch(`/api/pets?type=${type}`)
        .then(resp => resp.json())
        .then(json => this.renderPets(json))
        .catch(error => console.log(error))

    }

  }

  onChangeType = (selection) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: selection
      }
    })
  }

  renderPets = (pets) => {
    let petArray = this.state.pets.concat(pets)
    this.setState({
      pets: petArray
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={ this.onChangeType } onFindPetsClick={ this.onFindPetsClick } />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={ this.onAdoptPet } pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appm