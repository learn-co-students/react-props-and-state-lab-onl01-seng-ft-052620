import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// import { render } from 'enzyme'

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

  onChangeEvent = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value 
      }
    })
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets'
    if(this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint)
    .then(responce => responce.json())
    .then(pets => {this.setState({pets})
    })
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map (pet => {
      return pet.id === petId ? {
        ...pet,
        isAdopted:true} : pet 
    })
    this.setState({pets})
  }

  render() {
    return (
      <div className="ui container">
        {/* <div className="ui dividing header">React Animal Shelter> */}
          <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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

export default App;
