import Card from "../Card";
import "./index.css";

const TopRatedList = ({ cardData, nCards }) => {
  return (
    <div className="topRatedListSection">
      <h2>Top Rated</h2>
      <div className="topRatedList">
        {cardData.slice(0, nCards).map((cardData, i) => (
          <Card cardData={cardData} cardClass="topRated" key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedList;
