import './index.css';


const Card = ({ cardData, cardClass="",setModalVisibility ,isModalVisibile, setModalData}) => {
  const { title, vote_average, poster_path } = cardData;
 

  

  return (
    <div className={cardClass + "Card"} onClick={() => {setModalVisibility(!isModalVisibile); setModalData(cardData);}}> 
      <img className={cardClass   +"Card--img"} src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ title } />
      <div className={cardClass  +"Card__text"}>
        <h3>{ title }</h3>
        <p>{ vote_average }</p>
      </div>
     
    </div>
  )
}

export default Card;