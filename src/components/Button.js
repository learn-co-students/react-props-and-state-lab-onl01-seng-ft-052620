import React, { Component } from 'react'

export class Button extends Component {
    render() {
        if(this.props.pet.isAdopted){
        return (
            <div>
                <button className="ui disabled button">Already adopted</button>
            </div>
        )
        } else {
        return (
            <div>
                <button onClick={event => this.props.onAdoptPet(this.props.pet.id) } className="ui primary button">Adopt pet</button>
            </div>
        )
        }
    }
}

export default Button
