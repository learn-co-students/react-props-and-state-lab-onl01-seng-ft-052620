import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
 
 
  render() {
  //   console.log(" i am here",this.props.pets)
  //  const petsArray = this.props.pets.map(p => (<Pet pet ={p}/>))
    return <div className="ui cards"><Pet /></div>
  }
}

export default PetBrowser
