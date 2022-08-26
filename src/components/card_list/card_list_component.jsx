import Card from '../card/card_component.jsx'
import './card-list.css'

const CardList = ({characters, className}) => {
    return(
      <div className={`card-list ${className}`}>
        {characters.map(
            (character) => {
              return (<div key={character.id}>
                <Card className={`card ${className}`} image={character.image} name={character.name} homeworld={character.homeworld}/>
                </div>
              )
            }
          )}
      </div>
    )
}

export default CardList;