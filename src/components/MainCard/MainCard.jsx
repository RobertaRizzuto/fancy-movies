import Card from "../Card";
import "./index.scss";

const MainCard = ({
  cardData,
  setModalVisibility,
  isModalVisibile,
  setModalData,
}) => {
  return (
    <div className="MainCard">
      <Card
        cardData={cardData}
        cardClass="main"
        setModalVisibility={setModalVisibility}
        isModalVisibile={isModalVisibile}
        setModalData={setModalData}
      />
    </div>
  );
};

export default MainCard;
