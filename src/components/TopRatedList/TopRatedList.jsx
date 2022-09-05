import Card from "../Card";
import "./index.scss";
import { memo } from "react";

const TopRatedList = ({
  cardData,
  nCards,
  setModalVisibility,
  isModalVisibile,
  setModalData,
}) => {
  return (
    <div className="topRatedListSection">
      <h2>Top Rated</h2>
      <div className="topRatedList">
        {cardData.slice(0, nCards).map((cardData, i) => (
          <Card
            cardData={cardData}
            cardClass="topRated"
            key={i}
            setModalVisibility={setModalVisibility}
            isModalVisibile={isModalVisibile}
            setModalData={setModalData}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TopRatedList);
