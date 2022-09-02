import Card from "../Card";
import "./index.css";
import { memo } from "react";

const TopRatedFilteredList = ({ cardData, children, setModalVisibility, isModalVisibile,setModalData}) => {
  return (
    <div className="topRatedFilteredListSection">
      <h2>Filter Top rated films by average rating:</h2>
      {children}
      <div className="topRatedFilteredList">
        {cardData.reverse().map((el, i) => (
          <Card cardData={el} cardClass="topRatedFilteredList" key={i} setModalVisibility={setModalVisibility} isModalVisibile={isModalVisibile} setModalData={setModalData}/>
        ))}
      </div>
    </div>
  );
};

export default memo(TopRatedFilteredList) ;
