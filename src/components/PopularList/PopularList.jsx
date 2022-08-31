import Card from "../Card";
import "./index.css";


const PopularList = ({ cardData }) => {
  return (
    <div className="popularListSection">
      <h2>Popular</h2>
    <div className="popularList">
      <Card cardData={cardData} cardClass="popularList" />
      {
        cardData.map((el, i) => el && <Card cardData={el} cardClass="popularList"  key={i}/>)
      }
    </div></div>
  );
};

export default PopularList;
