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
  
  onChangeType = (event) => {
    this.setState(
      {filters: Object.assign({}, this.state.filters, {
      type: event.target.value
    })})
  }

  onAdoptPet = (id) => {
   let pet = this.state.pets.find(pet => pet.id === id)
   pet.isAdopted = true
  }

  onFindPetsClick = (event) => {
    
    let query = ""
    if (this.state.filters.type === 'cat'){
      query = "?type=cat"
    }else if (this.state.filters.type === 'dog'){
      query = "?type=dog"
    }else if (this.state.filters.type === 'micropig'){
      query = "?type=micropig"
    }
    
    fetch('/api/pets' + query)
      .then(resp => resp.json())
      .then(pets => {
        this.setState({
          pets: pets
        })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
