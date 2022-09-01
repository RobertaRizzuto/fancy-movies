import Card from "../Card";
import "./index.css";

const TopRatedFilteredList = ({ cardData, children }) => {
  return (
    <div className="topRatedFilteredListSection">
      <h2>Filter Top rated films by average rating:</h2>
      {children}
      <div className="topRatedFilteredList">
        {cardData.reverse().map((el, i) => (
          <Card cardData={el} cardClass="topRatedFilteredList" key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedFilteredList;
