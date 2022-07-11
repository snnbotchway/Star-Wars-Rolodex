import { Component } from "react";
import './card.css'

class Card extends Component {
  render(){
    const {name,homeworld,image} = this.props
    return(
        <div className={`card-container ${this.props.className}`}>
          <img src={image} alt={`${name}`} width={220} height={220} />
          <h2>{name}</h2>
          <p>{`Homeworld: ${homeworld}`}</p>
        </div>
    )
  }
}

export default Card