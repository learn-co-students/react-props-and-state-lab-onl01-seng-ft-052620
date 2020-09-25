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

  handleChangeType = newType => {
    this.setState({
      filters: {
        ...this.state.filters, type: newType
      }
    })
  }

  handleFindPets = () => {
    let url = ""
    if (this.state.filters.type === 'all'){
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(resp=>resp.json())
      .then(data=> this.setState({ pets: data},()=>console.log(this.state.pets)))
  }

  handleAdpotPet = id => {
    this.setState( previousState => {
      let pets = previousState.pets

      for(let pet of pets) {
        if (pet.id === id){
          pet.isAdopted = true
          break
        }
      }

      return {pets: pets}
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdpotPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
