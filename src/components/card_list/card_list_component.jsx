import { Component } from "react";
import Card from '../card/card_component.jsx'
import './card-list.css'

class CardList extends Component {
  render(){
    const {characters} = this.props
    return(
      <div className={`card-list ${this.props.className}`}>
        {characters.map(
            (character) => {
              return (<div key={character.id}>
                <Card className={`card ${this.props.className}`} image={character.image} name={character.name} homeworld={character.homeworld}/>
                </div>
              )
            }
          )}
      </div>
    )
  }
}

export default CardList