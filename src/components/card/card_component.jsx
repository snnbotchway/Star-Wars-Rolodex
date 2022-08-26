import './card.css'

const Card = ({name, image, homeworld, className}) => {
  return (
    <div className={`card-container ${className}`}>
          <img src={image} alt={`${name}`} width={220} height={220} />
          <h2>{name}</h2>
          <p>{`Homeworld: ${homeworld}`}</p>
        </div>
  );
}
 
export default Card;
