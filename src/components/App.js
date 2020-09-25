import React from 'react'
import axios from 'axios'

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

  getPets = e => {
    

    // if (this.state.filters.type !== "all") {
    //   url += `?type=${this.state.filters.type}`}
      axios.get('api/pets')
      .then(data => console.log(data))
      .catch(err => console.log(err))
    // fetch(url)
    // .then(resp => resp.json())
    // .then(pets => this.newPetState(pets))
    // .catch(err => console.log(err))

  }

  newPetState = (pets) => {
    this.setState({
      pets: Object.assign({}, this.state.pets, {
        pets: pets
        
       
      })
    
    })
    
  }

  changeType = e => {
    let newType = e.target.value
   this.setState({
     filters: Object.assign({}, this.state.filters,{
       type: newType
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
              <Filters onChangeType={this.changeType}
              onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
