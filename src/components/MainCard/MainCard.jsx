import Card from '../Card';
import './index.css';

const MainCard = ({ cardData}) => {

  return (
    <div className="MainCard">
      <Card cardData={ cardData } cardClass="main"/>
    </div>
  )
}

export default MainCard;