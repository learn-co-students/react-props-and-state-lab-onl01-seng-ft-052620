import React from 'react'

class Pet extends React.Component {
  render() {
    let data = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { data.gender === 'female' ? '♀' : '♂'}
            { data.name }
          </a>
          <div className="meta">
            <span className="date">{ data.type }</span>
          </div>
          <div className="description">
            <p>Age: { data.age }</p>
            <p>Weight: { data.weight }</p>
          </div>
        </div>
        <div className="extra content">
          { data.isAdopted 
            ? <button className="ui disabled button">Already adopted</button>
            : <button className="ui primary button" onClick={e => this.props.onAdoptPet(data.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
