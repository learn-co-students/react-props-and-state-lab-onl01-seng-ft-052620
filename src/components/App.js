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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    let newPetsArray = [...this.state.pets]
    let pet = this.state.pets.find(pet => pet.id === id)
    let index = this.state.pets.indexOf(pet)
    newPetsArray[index] = {...pet, isAdopted: true}

    // let newPetsArray = this.state.pets.map( pet => {
    //   return pet.id === id ? {...pet, isAdopted: true} : pet
    // })

    this.setState({
      pets: newPetsArray
    })
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
    .then(res => {
      res.json()
    })
    .then( result => {
      this.setState({pets: result})
    },
    error => {
      console.log(error.message)
    })
  }

}

export default App
