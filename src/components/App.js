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
  updateFilters = (event) => {
    const newfilter = event.target.value;
    this.setState({
      filters: {
        type: newfilter
      }
    })
    
  }
  getPets=(event)=>{
    let petUrl = ""
    if ((this.state.filters.type=='all')){
      petUrl = "/api/pets";
    }
    else{
      petUrl = "/api/pets?type=" + this.state.filters.type
    }
    fetch(petUrl)
    .then(resp => resp.json())
    .then(object=> {
        this.setState({
          pets: object
        })
      })
  }
  changeAdoptionStatus = (event) =>{
    
    const currentPet = this.state.pets.find(pet => pet.id === event);
    const petIndex = this.state.pets.findIndex(pet => pet.id === event);
    console.log("Event: " + event)
    console.log("Current Pet: " + currentPet)
    currentPet.isAdopted = true;
    const tempArray = this.state.pets;
    tempArray[petIndex] = currentPet;
    this.setState({
      pets: tempArray
    });
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
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.changeAdoptionStatus} pets={this.state.pets}/>
            </div>
          </div>
        </div>
       </div>
    )
  }
}

export default App
