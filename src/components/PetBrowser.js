import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
 
 
  render() {
  //   console.log(" i am here",this.props.pets)
   const petsArray = this.props.pets.map(p => (<Pet onAdoptPet={this.props.onAdoptPet} pet ={p} />))
    return <div className="ui cards"> {petsArray}</div>
  }
}

export default PetBrowser
