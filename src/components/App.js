import React from 'react'

import Filters from './Filters'
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

  changeType = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  findPetsClick = () => {
    let url = '/api/pets'
    switch (this.state.filters.type) {
      case "all":
        break
      case "cat":
        url += "?type=cat"
        break
      case "dog":
        url += "?type=dog"
        break
      case "micropig":
        url += "?type=micropig"
        break
    }
    fetch(url).then(resp => resp.json())
      .then(petsData => {
        this.setState({
          pets: petsData
        }, ()=>console.log(this.state.pets))
      })
  }

  adoptPet(id){
    this.setState(state => {
      const updatedPets = [...state.pets]
      const petIndex = updatedPets.findIndex(pet => pet.id === id)
      updatedPets[petIndex] = {
        ...updatedPets[petIndex],
        isAdopted: true
      }
      return {pets: updatedPets}
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
              <Filters 
                onChangeType={this.changeType}
                onFindPetsClick={this.findPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={id => this.adoptPet(id)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
